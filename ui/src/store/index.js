import appConfigStoreModule from '@core/@app-config/appConfigStoreModule'
import { AppWebsocket } from '@holochain/client'
import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hcClient: {},
    cellId: [],
    agentProfile: null,
    userAbility: [
      {
        action: 'manage',
        subject: 'all',
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
      console.log(agentProfile)
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
        state.isLoggedIn = true
      }
    },
  },
  actions: {
    async initialise({ state, commit }) {
      AppWebsocket.connect(`ws://localhost:${process.env.VUE_APP_HC_PORT}`, 12000).then(socket => {
        commit('SET_HCCLIENT', socket)
        socket
          .appInfo({
            installed_app_id: 'ioen-profiles',
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
                // const agentProfile = {
                //   id: 1,
                //   fullName: 'John Doe',
                //   username: 'johndoe',
                //   password: 'admin',
                //   avatar: require('@/assets/images/avatars/1.png'),
                //   email: 'admin@materio.com',
                //   role: 'admin',
                //   ability: [
                //     {
                //       action: 'manage',
                //       subject: 'all',
                //     },
                //   ],
                // }
                commit('SET_AGENT_PROFILE', agentProfile)
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
        })
    },
  },
  modules: {
    appConfig: appConfigStoreModule,
    app,
  },
})
