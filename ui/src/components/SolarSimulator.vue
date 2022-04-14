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
                <v-slider v-model="householdkWh" vertical color="info" track-color="grey" always-dirty min="0" max="14">
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
                <v-slider v-model="solarkWh" vertical color="solar" track-color="grey" always-dirty min="0" max="12">
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
              :series="chartData"
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

// import store from '../store'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const solarkWh = ref(5)
    const batterykWh = ref(0)
    const householdkWh = ref(5)
    const simMonitor = ref(false)
    const $vuetify = getVuetify()

    const chartOptions = {
      colors: [
        $vuetify.theme.currentTheme.solar,
        $vuetify.theme.currentTheme.battery,
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

    const chartData = [
      {
        name: 'Solar',
        data: [29000, 22000, 25000, 19000, 30000, 21000, 35000],
      },
      {
        name: 'Battery',
        data: [0, 16000, 11000, 15000, 0, 12000, 9000],
      },
      {
        name: 'IOEN',
        data: [0, 0, 0, 14000, 0, 11000, 12000],
      },
      {
        name: 'Grid',
        data: [0, 0, 0, 14000, 0, 11000, 12000],
      },
    ]

    return {
      simMonitor,
      chartOptions,
      chartData,
      solarkWh,
      batterykWh,
      householdkWh,
      simSwitchLabel: computed(() => {
        if (simMonitor.value) return 'Simulator'

        return 'Monitor'
      }),
      ioenkWh: computed(() => {
        const ioen = solarkWh.value - batterykWh.value - householdkWh.value
        if (ioen > -5) return ioen

        return -5
      }),
      gridkWh: computed(() => {
        const ioen = solarkWh.value - batterykWh.value - householdkWh.value
        if (ioen < -5) {
          return ioen + 5
        }

        return 0
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
