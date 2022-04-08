<template>
  <v-card>
    <v-card-title class="align-start">
      <span>Performance</span>
      <v-spacer></v-spacer>
      <v-btn
        icon
        small
        class="me-n3 mt-n2"
      >
        <v-icon size="22">
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <!-- Chart -->
    <vue-apex-charts
      height="300px"
      :options="chartOptions"
      :series="chartData"
    ></vue-apex-charts>
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
      chart: {
        type: 'radar',
        toolbar: {
          show: false,
        },
      },
      colors: [$vuetify.theme.currentTheme.primary, $vuetify.theme.currentTheme.info],
      plotOptions: {
        radar: {
          size: 110,
          polygons: {
            strokeColors: ['#ebe9f1', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
          },
        },
      },

      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: [$vuetify.theme.currentTheme.primary, '#6acdff'],
          shadeIntensity: 1,
          type: 'vertical',
          opacityFrom: 1,
          opacityTo: 0.9,
          stops: [0, 100, 100, 100],
        },
      },
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      markers: {
        size: 0,
      },
      xaxis: {
        labels: {
          style: {
            fontSize: '14px',
          },
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
      },
    }

    const chartData = [
      {
        name: 'Income',
        data: [70, 90, 90, 90, 80, 90],
      },
      {
        name: 'Net Worth',
        data: [120, 80, 100, 80, 100, 80],
      },
    ]

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
