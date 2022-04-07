<template>
  <v-card>
    <v-card-title class="align-start">
      <span class="text-sm font-weight-semibold">Total Profit</span>
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

    <!-- Chart -->
    <vue-apex-charts
      id="total-revenue-chart"
      height="250"
      :options="chartOptions"
      :series="chartData"
    ></vue-apex-charts>
    <v-card-text class="text-center mt-12">
      <p class="mb-3 text-xs">
        18k new sales
      </p>
      <v-chip
        class="v-chip-light-bg primary--text font-weight-semibold"
        small
      >
        This Year
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// eslint-disable-next-line object-curly-newline
import { mdiDotsVertical } from '@mdi/js'

import { getVuetify } from '@core/utils'
import { kFormatter } from '@core/utils/filter'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const $vuetify = getVuetify()

    const chartOptions = {
      colors: [$vuetify.theme.currentTheme.primary],
      chart: {
        type: 'radialBar',
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: {
            size: '55%',
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -5,
              fontSize: '24px',
              fontWeight: 600,
              formatter(val) {
                return `${kFormatter((val * 35250) / 100, 1)}`
              },
            },
          },
        },
      },
      stroke: {
        dashArray: 5,
      },
    }

    const chartData = [80]

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
