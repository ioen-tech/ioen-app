import appConfigStoreModule from '@core/@app-config/appConfigStoreModule'
import { AppWebsocket } from '@holochain/client'
import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import ioen from './ioen'

Vue.use(Vuex)

const signalCb = signal => {
  console.log('signal')
  console.log(signal)
}

export default new Vuex.Store({
  state: {
    hcClient: {},
    profileCellId: [],
    energyMonitorCellId: [],
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
    SET_PROFILE_CELLID(state, payload) {
      state.profileCellId = payload
    },
    SET_ENERGY_MONITOR_CELLID(state, payload) {
      state.energyMonitorCellId = payload
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
      AppWebsocket.connect(`ws://localhost:${process.env.VUE_APP_HC_PORT}`, 12000).then(appWs => {
        commit('SET_HCCLIENT', appWs)
        state.hcClient
          .appInfo({
            installed_app_id: 'ioen-app',
          })
          .then(appInfo => {
            const profileCellId = appInfo.cell_data.find(data => data.role_id === 'ioen_profiles').cell_id
            const energyMonitorCellId = appInfo.cell_data.find(data => data.role_id === 'ioen_energy_monitor').cell_id

            commit('SET_PROFILE_CELLID', profileCellId)
            commit('SET_ENERGY_MONITOR_CELLID', energyMonitorCellId)
            state.hcClient
              .callZome({
                cap: null,
                cell_id: state.profileCellId,
                zome_name: 'profiles',
                fn_name: 'get_my_profile',
                provenance: state.profileCellId[1],
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
          cell_id: state.energyMonitorCellId,
          zome_name: 'usage_logger',
          fn_name: 'subscribe',
          provenance: state.energyMonitorCellId[1],
          payload: null,
        })
        .then(hash => console.log('hash', hash))
        .catch(e => console.log('error', e))
      state.hcClient
        .callZome({
          cap: null,
          cell_id: state.profileCellId,
          zome_name: 'profiles',
          fn_name: 'create_profile',
          provenance: state.profileCellId[1],
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
