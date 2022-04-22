import appConfigStoreModule from '@core/@app-config/appConfigStoreModule'
import { AppWebsocket } from '@holochain/client'
import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import ioen from './ioen'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hcClient: {},
    cellId: [],
    agentProfile: null,
    agentAbility: [
      {
        action: 'read',
        subject: 'Public',
      },
    ],
    isLoggedIn: false,
    overlay: true,
  },
  mutations: {
    SET_HCCLIENT(state, payload) {
      state.hcClient = payload
    },
    SET_CELLID(state, payload) {
      state.cellId = payload
    },
    SET_AGENT_PROFILE(state, agentProfile) {
      if (agentProfile === null) {
        state.overlay = false
      } else {
        const profile = {
          agentPubKey: agentProfile.agentPubKey,
          username: agentProfile.profile.nickname,
          email: agentProfile.profile.fields.email,
          fullName: agentProfile.profile.fields.fullName,
          avatar: agentProfile.profile.fields.avatar,
        }
        state.agentProfile = profile
      }
    },
    SET_AGENT_ABILITY(state, agentAbility) {
      state.agentAbility = agentAbility
      state.isLoggedIn = true
    },
  },
  actions: {
    async initialise({ state, commit }) {
      AppWebsocket.connect(`ws://localhost:${process.env.VUE_APP_HC_PORT}`, 12000).then(socket => {
        commit('SET_HCCLIENT', socket)
        socket
          .appInfo({
            installed_app_id: 'ioen-app',
          })
          .then(appInfo => {
            const cellId = appInfo.cell_data.find(data => data.role_id === 'ioen_profiles').cell_id
            commit('SET_CELLID', cellId)
            state.hcClient
              .callZome({
                cap: null,
                cell_id: state.cellId,
                zome_name: 'profiles',
                fn_name: 'get_my_profile',
                provenance: state.cellId[1],
                payload: null,
              })
              .then(agentProfile => {
                commit('SET_AGENT_PROFILE', agentProfile)
                if (agentProfile !== null) {
                  console.log(agentProfile.agentAbility)
                  const agentAbility = JSON.parse(agentProfile.profile.fields.agentAbility)
                  commit('SET_AGENT_ABILITY', agentAbility)
                }
              })
          })
      })
    },
    async createProfile({ state, commit }, profile) {
      state.hcClient
        .callZome({
          cap: null,
          cell_id: state.cellId,
          zome_name: 'profiles',
          fn_name: 'create_profile',
          provenance: state.cellId[1],
          payload: profile,
        })
        .then(agentProfile => {
          commit('SET_AGENT_PROFILE', agentProfile)
          const agentAbility = JSON.parse(agentProfile.profile.fields.agentAbility)
          commit('SET_AGENT_ABILITY', agentAbility)
        })
    },
  },
  modules: {
    appConfig: appConfigStoreModule,
    app,
    ioen,
  },
})
