import axios from '@axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchMail(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get('/apps/ioen-mail/mail', { params: payload })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateMail(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('/apps/ioen-mail/update-mail', payload)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateMailLabels(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('/apps/ioen-mail/update-mail-label', payload)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    paginateMail(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get('/apps/ioen-mail/paginate-mail', { params: payload })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
