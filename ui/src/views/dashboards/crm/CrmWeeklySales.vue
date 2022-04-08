<template>
  <v-card>
    <v-card-title class="align-start">
      <div>
        <p class="mb-2">
          Weekly Sales
        </p>
        <small class="text--secondary text-base">Total 85.4k Sales</small>
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
    <v-card-text>
      <!-- Chart -->
      <vue-apex-charts
        height="250"
        :options="chartOptions"
        :series="chartData"
      ></vue-apex-charts>

      <!-- Stats -->
      <div class="d-flex justify-space-around flex-wrap mt-5">
        <div class="d-flex align-center">
          <v-avatar
            class="v-avatar-light-bg primary--text"
            rounded
            size="40"
          >
            <v-icon
              size="30"
              color="primary"
            >
              {{ icons.mdiTrendingUp }}
            </v-icon>
          </v-avatar>
          <div class="ms-4 d-flex flex-column">
            <p class="text--primary font-weight-semibold text-base mb-0">
              21.8k
            </p>
            <span>Sales</span>
          </div>
        </div>

        <div class="d-flex align-center">
          <v-avatar
            class="v-avatar-light-bg success--text"
            rounded
            size="40"
          >
            <v-icon
              size="30"
              color="success"
            >
              {{ icons.mdiCurrencyUsd }}
            </v-icon>
          </v-avatar>
          <div class="ms-4 d-flex flex-column">
            <p class="text--primary font-weight-semibold text-base mb-0">
              21.8k
            </p>
            <span>Sales</span>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiDotsVertical, mdiTrendingUp, mdiCurrencyUsd } from '@mdi/js'

import { getVuetify, addAlpha } from '@core/utils'

export default {
  components: {
    VueApexCharts: () => import('vue-apexcharts'),
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
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        tickPlacement: 'on',
        labels: {
          style: {
            fontSize: '12px',
          },
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
        padding: {
          top: -20,
          left: -10,
          right: -10,
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

      icons: {
        mdiDotsVertical,
        mdiTrendingUp,
        mdiCurrencyUsd,
      },
    }
  },
}
</script>
