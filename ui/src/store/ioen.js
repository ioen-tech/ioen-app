export default {
  namespaced: true,
  state: {
    energyLogs: [],
  },
  getters: {},
  mutations: {
    ADD_LOG(state, log) {
      state.energyLogs.push(log)
    },
  },
  actions: {
    storeLog({ commit }, log) {
      commit('ADD_LOG', log)
    },
  },
}
