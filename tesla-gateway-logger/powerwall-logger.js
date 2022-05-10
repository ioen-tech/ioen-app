const { AppWebsocket } = require('@holochain/client')
const fs = require('fs')

const avatar = fs.readFileSync('./avatar.txt')
const url = 'https://192.168.0.185/api/meters/aggregates'
let hcClient = {}
let profileCellId = []
let energyMonitorCellId = []
const port = process.argv[2]
const email = process.argv[3]
const password = process.argv[4]
const profile = {
  nickname: 'Powerwall',
  fields: {
    avatar,
    email: '',
    fullName: 'Tesla Gateway'
  }
}

const axios = require('axios')
const https = require('https')
let token = ''
axios
  .post('https://192.168.0.185/api/login/Basic', {
    email,
    password,
    username: 'customer'
  },
  {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    }),
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    token = res.data.token
    console.log(token)
  })
  .catch(error => {
    console.error(error)
  })

function aggregateMeters() {
  axios
  .get('https://192.168.0.185/api/meters/aggregates', 
  {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    }),
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(res => {
    const currentTime = new Date()
    const hour = currentTime.getHours() + 1
    const day = currentTime.getDate()
    const month = currentTime.getMonth() + 1
    const year = currentTime.getFullYear()

    const log = res.data
    const usage_block = {
      t: `${year}.${month}.${day}.${hour}`,
      l: log.load.instant_power,
      s: log.solar.instant_power,
      b: log.battery.instant_power,
      i: log.site.instant_power,
      g: 0
    }

    hcClient
        .callZome({
          cap: null,
          cell_id: energyMonitorCellId,
          zome_name: 'usage_logger',
          fn_name: 'create_usage_block',
          provenance: energyMonitorCellId[1],
          payload: usage_block,
        })
        .then(hash => console.log(hash))
        .catch(e => console.log(e))
  })
  .catch(error => {
    console.error(error)
  })
}

function start () {
  AppWebsocket.connect(`ws://localhost:${port}`, 12000)
  .then(socket => {
    console.log(socket)
    hcClient = socket
    socket
      .appInfo({
        installed_app_id: 'ioen-app',
      })
      .then(appInfo => {
        console.log(appInfo)
        profileCellId = appInfo.cell_data.find(data => data.role_id === 'ioen_profiles').cell_id
        energyMonitorCellId = appInfo.cell_data.find(data => data.role_id === 'ioen_energy_monitor').cell_id
        setInterval(aggregateMeters, 1000)
        hcClient
          .callZome({
            cap: null,
            cell_id: profileCellId,
            zome_name: 'profiles',
            fn_name: 'get_my_profile',
            provenance: profileCellId[1],
            payload: null,
          })
          .then(agentProfile => {
            if (agentProfile === null) {
              hcClient
                .callZome({
                  cap: null,
                  cell_id: profileCellId,
                  zome_name: 'profiles',
                  fn_name: 'create_profile',
                  provenance: profileCellId[1],
                  payload: profile,
                })
            }
          })
      })
    .catch(e => console.log(e))
  })
}
setTimeout(start, 5000)