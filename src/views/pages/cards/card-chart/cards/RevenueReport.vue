<template>
  <v-card>
    <v-card-title>
      <span class="text-sm font-weight-semibold mb-1">Revenue Report</span>
      <v-spacer></v-spacer>
      <v-chip
        class="v-chip-light-bg secondary--text font-weight-semibold"
        small
      >
        This Year
      </v-chip>
    </v-card-title>

    <!-- Chart -->
    <vue-apex-charts
      height="250px"
      :options="chartOptions"
      :series="chartData"
    ></vue-apex-charts>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

import { getVuetify } from '@core/utils'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const $vuetify = getVuetify()

    const chartOptions = {
      chart: {
        stacked: true,
        type: 'bar',
        toolbar: { show: false },
      },
      grid: {
        yaxis: {
          lines: { show: false },
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
      legend: {
        markers: {
          radius: 15,
        },
        offsetY: 8,
      },
      stroke: {
        width: 2,
        colors: ['#fff'],
      },
      dataLabels: {
        enabled: false,
      },
      colors: [$vuetify.theme.currentTheme.success, $vuetify.theme.currentTheme.secondary],
      plotOptions: {
        bar: {
          columnWidth: '50%',
          borderRadius: 8,
          startingShape: 'rounded',
          endingShape: 'rounded',
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    }

    const chartData = [
      {
        name: 'Earning',
        data: [95, 177, 284, 256, 105, 63, 168, 218, 72],
      },
      {
        name: 'Expense',
        data: [-145, -80, -60, -180, -100, -60, -85, -75, -100],
      },
    ]

    return {
      chartOptions,
      chartData,
    }
  },
}
</script>
