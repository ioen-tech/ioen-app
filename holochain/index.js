const { Server } = require('socket.io')
const { AppWebsocket } = require('@holochain/client')
const io = new Server({ /* options */ })
const fs = require('fs')

const avatar = fs.readFileSync('./avatar.txt')

let hcClient = {}
let profileCellId = []
let energyMonitorCellId = []
const port = 60000
console.log('port', port)
const profile = {
  nickname: 'picogrid',
  fields: {
    avatar,
    email: '',
    fullName: 'IOEN Pico Grid'
  }
}

io.on("connection", (socket) => {
  AppWebsocket.connect(`ws://localhost:${port}`, 12000)
  .then(appWs => {
    console.log(appWs)
    hcClient = appWs
    hcClient
      .appInfo({
        installed_app_id: 'ioen-app',
      })
      .then(appInfo => {
        profileCellId = appInfo.cell_data.find(data => data.role_id === 'ioen_profiles').cell_id
        energyMonitorCellId = appInfo.cell_data.find(data => data.role_id === 'ioen_energy_monitor').cell_id
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
  socket.on('callZome', (zome_name, fn_name) => {
    hcClient.callZome({
        cap: null,
        cell_id: energyMonitorCellId,
        zome_name,
        fn_name,
        provenance: energyMonitorCellId[1],
        payload: usage_block,
      })
      .then(hash => console.log(hash))
      .catch(e => console.log(e))
  })
})

io.listen(3000)