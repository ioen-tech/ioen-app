<template>
  <v-card>
    <v-row>
      <v-col cols="6">
        <v-card-title class="text-base font-weight-semibold mb-2 pt-2">
          New Visitors
        </v-card-title>
        <v-card-text class="text-xs">
          New <span class="font-weight-semibold">48%</span> more visitors this week.
        </v-card-text>

        <v-card-text class="d-flex align-center font-weight-semibold pb-0">
          <span class="text-xl text--primary me-1">12,480</span>
          <span class="text-xs success--text">+28%</span>
        </v-card-text>
      </v-col>
      <v-col
        cols="6"
        class="d-flex align-end"
      >
        <vue-apex-charts
          :options="chartOptions"
          :series="chartData"
          height="130"
        ></vue-apex-charts>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

import { getVuetify, addAlpha } from '@core/utils'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const $vuetify = getVuetify()

    const chartOptions = {
      colors: [
        addAlpha($vuetify.theme.currentTheme.primary, 0.1),
        addAlpha($vuetify.theme.currentTheme.primary, 0.1),
        addAlpha($vuetify.theme.currentTheme.primary, 0.1),
        addAlpha($vuetify.theme.currentTheme.primary, 0.1),
        $vuetify.theme.currentTheme.primary,
        addAlpha($vuetify.theme.currentTheme.primary, 0.1),
        addAlpha($vuetify.theme.currentTheme.primary, 0.1),
      ],
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '60%',
          distributed: true,
          borderRadius: 4,
          startingShape: 'rounded',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        show: false,
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        labels: {
          show: false,
        },

        axisBorder: {
          show: false,
        },

        axisTicks: {
          show: false,
        },
        tickPlacement: 'on',
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
        padding: {
          top: -20,
          right: 10,
          left: -10,
          bottom: -15,
        },
      },
    }

    const chartData = [
      {
        data: [40, 60, 50, 60, 90, 40, 50],
      },
    ]

    return {
      chartOptions,
      chartData,
    }
  },
}
</script>
