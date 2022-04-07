<template>
  <v-card>
    <v-card-title class="align-start">
      <span>Total Revenue</span>
      <v-spacer></v-spacer>
      <v-btn
        icon
        small
        class="mt-n2 me-n3"
      >
        <v-icon size="22">
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <!-- Chart -->
      <vue-apex-charts
        id="total-revenue-chart"
        :options="chartOptions"
        :series="chartData"
      ></vue-apex-charts>

      <!-- Stats -->
      <div class="d-flex justify-space-around mt-2">
        <!-- New Users -->
        <div class="text-center">
          <div class="d-flex align-center justify-center">
            <div class="pa-1 success rounded-circle me-2"></div>
            <span class="text--primary font-weight-semibold text-base">856</span>
          </div>
          <span>New Users</span>
        </div>

        <v-divider vertical></v-divider>

        <!-- Returning -->
        <div class="text-center">
          <div class="d-flex align-center justify-center">
            <div class="pa-1 primary rounded-circle me-2"></div>
            <span class="text--primary font-weight-semibold text-base">345</span>
          </div>
          <span>Returning</span>
        </div>

        <v-divider vertical></v-divider>

        <!-- Referrals -->
        <div class="text-center">
          <div class="d-flex align-center justify-center">
            <div class="pa-1 secondary rounded-circle me-2"></div>
            <span class="text--primary font-weight-semibold text-base">258</span>
          </div>
          <span>Referrals</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// eslint-disable-next-line object-curly-newline
import { mdiDotsVertical } from '@mdi/js'

import { getVuetify } from '@core/utils'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const $vuetify = getVuetify()

    const chartOptions = {
      colors: [
        $vuetify.theme.currentTheme.primary,
        $vuetify.theme.currentTheme.success,
        $vuetify.theme.currentTheme.warning,
      ],
      chart: {
        type: 'radialBar',
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '42%',
          },
          track: {
            background: 'transparent',
            margin: 10,
          },
          dataLabels: {
            name: {
              fontSize: '50px',
              offsetY: 35,
            },
            value: {
              fontSize: '2.125rem',
              offsetY: -10,
              formatter(value) {
                return `${value}k`
              },
            },
            total: {
              show: true,
              label: '2021',
              formatter(value) {
                return `${value.globals.seriesTotals.reduce((total, num) => total + num)}k`
              },
            },
          },
        },
      },
      labels: ['Electronics', 'Clothing', 'Computers'],
      grid: {
        padding: {
          top: -10,
          left: -50,
          right: -50,
        },
      },
      stroke: {
        lineCap: 'round',
      },
    }

    const chartData = [71, 78, 86]

    return {
      chartOptions,
      chartData,

      icons: {
        mdiDotsVertical,
      },
    }
  },
}
</script>

<style lang="scss">
#total-revenue-chart {
  .apexcharts-canvas {
    .apexcharts-text {
      &.apexcharts-datalabel-value {
        font-weight: 600;
      }
    }
  }
}
</style>
