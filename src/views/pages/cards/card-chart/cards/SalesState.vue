<template>
  <v-card>
    <v-card-title class="align-start">
      <div>
        <p class="mb-2">
          Sales State
        </p>
        <small class="text--secondary text-base">Total $42,580 Sales</small>
      </div>
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
      :options="chartOptions"
      :series="chartData"
    ></vue-apex-charts>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// eslint-disable-next-line object-curly-newline
import { mdiDotsVertical, mdiTrendingUp, mdiCurrencyUsd } from '@mdi/js'

import { getVuetify } from '@core/utils'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const $vuetify = getVuetify()

    const chartOptions = {
      grid: {
        show: false,
        padding: {
          right: 0,
          left: 0,
        },
      },
      chart: {
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2.5,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.5,
          opacityTo: 0.08,
          stops: [0, 90, 100],
        },
      },
      xaxis: {
        type: 'numeric',
        lines: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: { show: false },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      tooltip: {
        x: { show: false },
      },
      theme: {
        monochrome: {
          enabled: true,
          color: $vuetify.theme.currentTheme.primary,
          shadeTo: 'light',
          shadeIntensity: 0.65,
        },
      },
      markers: {
        size: 1,
        colors: ['transparent'],
        strokeColors: 'transparent',
        strokeWidth: 4,
        offsetX: -8,
        offsetY: 2,
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: '#fff',
            strokeColor: $vuetify.theme.currentTheme.primary,
            size: 7,
          },
        ],
      },
    }

    const chartData = [
      {
        name: 'Traffic Rate',
        data: [150, 300, 200, 600, 500, 800],
      },
    ]

    return {
      chartOptions,
      chartData,

      icons: {
        mdiDotsVertical,
        mdiTrendingUp,
        mdiCurrencyUsd,
      },
    }
  },
}
</script>
