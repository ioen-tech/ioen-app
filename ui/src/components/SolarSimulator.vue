<template>
  <v-card>
    <v-row class="ma-0">
      <v-col cols="12" sm="6" class="total-profit-chart-col">
        <v-card-title class="pt-2">
          Energy {{ simSwitchLabel }}
          <v-spacer></v-spacer>
          <v-switch v-model="simMonitor" hide-details></v-switch>
        </v-card-title>
        <v-row no-gutters>
          <v-col cols="1" sm="2" class="mr-3">
            <v-card width="100">
              <v-toolbar flat dense>
                <v-spacer></v-spacer>
                <v-icon color="info">
                  {{ icons.mdiHomeLightningBoltOutline }}
                </v-icon>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-slider
                  v-model="householdkWh"
                  :readonly="!simMonitor"
                  vertical
                  color="info"
                  track-color="grey"
                  always-dirty
                  min="0"
                  max="14"
                >
                </v-slider>
              </v-card-text>
              <v-card-actions>
                <span class="text-h5 font-weight-light" v-text="householdkWh"></span>
                <span class="subheading font-weight-light mr-1">kWh</span>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="1" sm="2">
            <v-card width="100">
              <v-toolbar flat dense>
                <v-spacer></v-spacer>
                <v-icon color="solar">
                  {{ icons.mdiSolarPower }}
                </v-icon>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-slider
                  v-model="solarkWh"
                  :readonly="!simMonitor"
                  vertical
                  color="solar"
                  track-color="grey"
                  always-dirty
                  min="0"
                  max="12"
                >
                </v-slider>
              </v-card-text>
              <v-card-actions>
                <span class="text-h5 font-weight-light" v-text="solarkWh"></span>
                <span class="subheading font-weight-light mr-1">kWh</span>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="1" sm="2">
            <v-card>
              <v-toolbar flat dense>
                <v-spacer></v-spacer>
                <v-icon color="battery">
                  {{ icons.mdiBatteryChargingMedium }}
                </v-icon>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-slider
                  v-model="batterykWh"
                  vertical
                  :readonly="!simMonitor"
                  :color="batteryColor"
                  track-color="grey"
                  always-dirty
                  min="-5"
                  max="5"
                >
                </v-slider>
              </v-card-text>
              <v-card-actions>
                <span class="text-h5 font-weight-light" v-text="batterykWh"></span>
                <span class="subheading font-weight-light mr-1">kWh</span>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="1" sm="2">
            <v-card class="mr-3" width="100">
              <v-toolbar flat dense>
                <v-spacer></v-spacer>
                <v-avatar>
                  <v-img height="20" contain :src="require('@/assets/images/svg/logo.svg')" />
                </v-avatar>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-slider
                  vertical
                  readonly
                  :value="ioenkWh"
                  color="ioen"
                  track-color="grey"
                  always-dirty
                  min="-5"
                  max="12"
                >
                </v-slider>
              </v-card-text>
              <v-card-actions>
                <span class="text-h5 font-weight-light" v-text="ioenkWh"></span>
                <span class="subheading font-weight-light mr-1">kWh</span>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="1" sm="2">
            <v-card width="100">
              <v-toolbar flat dense>
                <v-spacer></v-spacer>
                <v-icon color="grid">
                  {{ icons.mdiPowerPlugOutline }}
                </v-icon>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-slider
                  vertical
                  readonly
                  :value="gridkWh"
                  color="error"
                  track-color="grey"
                  always-dirty
                  min="-12"
                  max="0"
                >
                </v-slider>
              </v-card-text>
              <v-card-actions>
                <span class="text-h5 font-weight-light" v-text="gridkWh"></span>
                <span class="subheading font-weight-light mr-1">kWh</span><br />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-card-actions class="mt-2">
          <v-time-picker
            v-model="simulatorTime"
            ampm-in-title
            flat
            format="24hr"
            no-title
            readonly
            use-seconds
          ></v-time-picker>
          <v-btn @click="startSimulation"> Start </v-btn>
          <v-btn @click="stopSimulation"> Stop </v-btn>
        </v-card-actions>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card elevation="0">
          <!-- Title/Header -->
          <v-card-title class="align-start pt-0 flex-nowrap">
            <div>
              <p class="mb-0 font-weight-bold text-2xl">420 kWh</p>
              <small class="text--secondary text-xs text-no-wrap">Last week's usage 390 kWh</small>
            </div>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="pb-3 pt-5">
            <vue-apex-charts
              id="total-profit-chart"
              height="320"
              :options="chartOptions"
              :series="logData"
            ></vue-apex-charts>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { computed, ref } from '@vue/composition-api'
import { getVuetify } from '@core/utils'
import { kFormatter } from '@core/utils/filter'
import VueApexCharts from 'vue-apexcharts'
import {
  mdiMinus,
  mdiPlus,
  mdiSolarPower,
  mdiBatteryChargingMedium,
  mdiPowerPlugOutline,
  mdiHomeLightningBoltOutline,
} from '@mdi/js'

import store from '../store'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const solarkWh = ref(5)
    const batterykWh = ref(0)
    const householdkWh = ref(5)
    const simMonitor = ref(true)
    const simulatorTime = ref(new Date().toLocaleTimeString())
    const $vuetify = getVuetify()

    const ioenkWh = computed(() => {
      const ioen = solarkWh.value - batterykWh.value - householdkWh.value
      if (ioen > -5) return ioen

      return -5
    })
    const gridkWh = computed(() => {
      const ioen = solarkWh.value - batterykWh.value - householdkWh.value
      if (ioen < -5) {
        return ioen + 5
      }

      return 0
    })

    const chartOptions = {
      colors: [
        $vuetify.theme.currentTheme.solar,
        $vuetify.theme.currentTheme.battery,
        $vuetify.theme.currentTheme.ioen,
        $vuetify.theme.currentTheme.ioen,
        $vuetify.theme.currentTheme.grid,
      ],
      chart: {
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '35%',
          startingShape: 'rounded',
          endingShape: 'rounded',
        },
      },
      xaxis: {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          formatter: value => kFormatter(value, 0),
        },
      },
      grid: {
        strokeDashArray: 7,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        curve: 'smooth',
        width: 6,
        lineCap: 'round',
        colors: ['#fff'],
      },
      responsive: [
        {
          breakpoint: 1400,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '45%',
              },
            },
          },
        },
      ],
    }

    const logData = computed(() => {
      const mondayLogs = store.state.ioen.energyLogs.filter(log => log.dayOfWeek === 'Monday')
      const solarMonday = mondayLogs.map(item => item.solarkWh).reduce((prev, curr) => prev + curr, 0)
      const batteryMonday =
        mondayLogs
          .filter(log => log.batterykWh < 0)
          .map(item => item.batterykWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const ioenMonday =
        mondayLogs
          .filter(log => log.ioenkWh < 0)
          .map(item => item.ioenkWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const ioenSupplyMonday =
        mondayLogs
          .filter(log => log.ioenkWh > 0)
          .map(item => item.ioenkWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const gridMonday = mondayLogs.map(item => item.gridkWh).reduce((prev, curr) => prev + curr, 0)

      const tuesdayLogs = store.state.ioen.energyLogs.filter(log => log.dayOfWeek === 'Tuesday')
      const solarTuesday = tuesdayLogs.map(item => item.solarkWh).reduce((prev, curr) => prev + curr, 0)
      const batteryTuesday =
        tuesdayLogs
          .filter(log => log.batterykWh < 0)
          .map(item => item.batterykWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const ioenTuesday =
        tuesdayLogs
          .filter(log => log.ioenkWh < 0)
          .map(item => item.ioenkWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const ioenSupplyTuesday =
        tuesdayLogs
          .filter(log => log.ioenkWh > 0)
          .map(item => item.ioenkWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const gridTuesday = tuesdayLogs.map(item => item.gridkWh).reduce((prev, curr) => prev + curr, 0)

      const wednesdayLogs = store.state.ioen.energyLogs.filter(log => log.dayOfWeek === 'Wednesday')
      const solarWednesday = wednesdayLogs.map(item => item.solarkWh).reduce((prev, curr) => prev + curr, 0)
      const batteryWednesday =
        wednesdayLogs
          .filter(log => log.batterykWh < 0)
          .map(item => item.batterykWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const ioenWednesday =
        wednesdayLogs
          .filter(log => log.ioenkWh < 0)
          .map(item => item.ioenkWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const ioenSupplyWednesday =
        wednesdayLogs
          .filter(log => log.ioenkWh > 0)
          .map(item => item.ioenkWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const gridWednesday = wednesdayLogs.map(item => item.gridkWh).reduce((prev, curr) => prev + curr, 0)

      const thursdayLogs = store.state.ioen.energyLogs.filter(log => log.dayOfWeek === 'Thursday')
      const solarThursday = thursdayLogs.map(item => item.solarkWh).reduce((prev, curr) => prev + curr, 0)
      const batteryThursday =
        thursdayLogs
          .filter(log => log.batterykWh < 0)
          .map(item => item.batterykWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const ioenThursday =
        thursdayLogs
          .filter(log => log.ioenkWh < 0)
          .map(item => item.ioenkWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const ioenSupplyThursday =
        thursdayLogs
          .filter(log => log.ioenkWh > 0)
          .map(item => item.ioenkWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const gridThursday = thursdayLogs.map(item => item.gridkWh).reduce((prev, curr) => prev + curr, 0)

      const fridayLogs = store.state.ioen.energyLogs.filter(log => log.dayOfWeek === 'Friday')
      const solarFriday = fridayLogs.map(item => item.solarkWh).reduce((prev, curr) => prev + curr, 0)
      const batteryFriday =
        fridayLogs
          .filter(log => log.batterykWh < 0)
          .map(item => item.batterykWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const ioenFriday =
        fridayLogs
          .filter(log => log.ioenkWh < 0)
          .map(item => item.ioenkWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const ioenSupplyFriday =
        fridayLogs
          .filter(log => log.ioenkWh > 0)
          .map(item => item.ioenkWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const gridFriday = fridayLogs.map(item => item.gridkWh).reduce((prev, curr) => prev + curr, 0)

      const saturdayLogs = store.state.ioen.energyLogs.filter(log => log.dayOfWeek === 'Saturday')
      const solarSaturday = saturdayLogs.map(item => item.solarkWh).reduce((prev, curr) => prev + curr, 0)
      const batterySaturday =
        saturdayLogs
          .filter(log => log.batterykWh < 0)
          .map(item => item.batterykWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const ioenSaturday =
        saturdayLogs
          .filter(log => log.ioenkWh < 0)
          .map(item => item.ioenkWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const ioenSupplySaturday =
        saturdayLogs
          .filter(log => log.ioenkWh > 0)
          .map(item => item.ioenkWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const gridSaturday = saturdayLogs.map(item => item.gridkWh).reduce((prev, curr) => prev + curr, 0)

      const sundayLogs = store.state.ioen.energyLogs.filter(log => log.dayOfWeek === 'Sunday')
      const solarSunday = sundayLogs.map(item => item.solarkWh).reduce((prev, curr) => prev + curr, 0)
      const batterySunday =
        sundayLogs
          .filter(log => log.batterykWh < 0)
          .map(item => item.batterykWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const ioenSunday =
        sundayLogs
          .filter(log => log.ioenkWh < 0)
          .map(item => item.ioenkWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const ioenSupplySunday =
        sundayLogs
          .filter(log => log.ioenkWh > 0)
          .map(item => item.ioenkWh)
          .reduce((prev, curr) => prev + curr, 0) * -1
      const gridSunday = sundayLogs.map(item => item.gridkWh).reduce((prev, curr) => prev + curr, 0)

      const data = [
        {
          name: 'Solar',
          data: [solarSunday, solarMonday, solarTuesday, solarWednesday, solarThursday, solarFriday, solarSaturday],
        },
        {
          name: 'Battery',
          data: [
            batterySunday,
            batteryMonday,
            batteryTuesday,
            batteryWednesday,
            batteryThursday,
            batteryFriday,
            batterySaturday,
          ],
        },
        {
          name: 'IOEN Consume',
          data: [ioenSunday, ioenMonday, ioenTuesday, ioenWednesday, ioenThursday, ioenFriday, ioenSaturday],
        },
        {
          name: 'IOEN Supply',
          data: [
            ioenSupplySunday,
            ioenSupplyMonday,
            ioenSupplyTuesday,
            ioenSupplyWednesday,
            ioenSupplyThursday,
            ioenSupplyFriday,
            ioenSupplySaturday,
          ],
        },
        {
          name: 'Grid',
          data: [gridSunday, gridMonday, gridTuesday, gridWednesday, gridThursday, gridFriday, gridSaturday],
        },
      ]

      return data
    })

    let nIntervId
    let simStart = 0
    let simHours = 0
    const options = { weekday: 'long' }
    function logEnergyUsage() {
      simHours += 1
      const simTime = new Date(simStart + simHours * 60 * 60 * 1000)
      simulatorTime.value = new Date(simTime).toLocaleTimeString()
      const energyLog = {
        simTime: simTime.getTime(),
        dayOfWeek: new Intl.DateTimeFormat('en-US', options).format(simTime),
        block: 5,
        householdkWh: householdkWh.value,
        solarkWh: solarkWh.value,
        batterykWh: batterykWh.value,
        ioenkWh: ioenkWh.value,
        gridkWh: gridkWh.value,
      }
      console.log(energyLog)
      store.dispatch('ioen/storeLog', energyLog)
    }
    function startSimulation() {
      simStart = new Date().getTime()
      if (!nIntervId) {
        nIntervId = setInterval(logEnergyUsage, 5000)
      }
    }

    function stopSimulation() {
      clearInterval(nIntervId)
      nIntervId = null
    }

    return {
      simMonitor,
      simulatorTime,
      startSimulation,
      stopSimulation,
      chartOptions,
      solarkWh,
      batterykWh,
      householdkWh,
      ioenkWh,
      gridkWh,
      logData,
      simSwitchLabel: computed(() => {
        if (simMonitor.value) return 'Simulator'

        return 'Monitor'
      }),
      batteryColor: computed(() => {
        if (batterykWh.value < 0) return 'battery'
        if (batterykWh.value >= 0) return 'solar'

        return 'battery'
      }),
      icons: {
        mdiMinus,
        mdiPlus,
        mdiSolarPower,
        mdiBatteryChargingMedium,
        mdiPowerPlugOutline,
        mdiHomeLightningBoltOutline,
      },
    }
  },
}
</script>
