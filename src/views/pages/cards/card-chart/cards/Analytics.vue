<template>
  <v-card>
    <v-card-title class="align-start">
      <span>Analytics</span>
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
        :options="chartOptions"
        :series="chartData"
        class="mb-2"
      ></vue-apex-charts>
      <!-- Revenue -->
      <div class="d-flex">
        <span class="text--primary font-weight-semibold">Revenue</span>
        <v-spacer></v-spacer>
        <span>$845k</span>
        <span class="text--primary font-weight-semibold mx-6">82%</span>
        <v-icon color="success">
          {{ icons.mdiChevronUp }}
        </v-icon>
      </div>

      <!-- Transactions -->
      <div class="d-flex my-1">
        <span class="text--primary font-weight-semibold">Transactions</span>
        <v-spacer></v-spacer>
        <span>$12.5k</span>
        <span class="text--primary font-weight-semibold mx-6">52%</span>
        <v-icon color="error">
          {{ icons.mdiChevronDown }}
        </v-icon>
      </div>

      <!-- Total Profile -->
      <div class="d-flex">
        <span class="text--primary font-weight-semibold">Total Profile</span>
        <v-spacer></v-spacer>
        <span>$12.8k</span>
        <span class="text--primary font-weight-semibold mx-6">28%</span>
        <v-icon color="success">
          {{ icons.mdiChevronUp }}
        </v-icon>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// eslint-disable-next-line object-curly-newline
import { mdiDotsVertical, mdiChevronUp, mdiChevronDown } from '@mdi/js'
import { getVuetify } from '@core/utils'

// import { kFormatter } from '@core/utils/filter'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const $vuetify = getVuetify()

    const chartOptions = {
      colors: [
        $vuetify.theme.currentTheme.success,
        $vuetify.theme.currentTheme.secondary,
        $vuetify.theme.currentTheme.warning,
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '41%',
          startingShape: 'rounded',
          endingShape: 'rounded',
        },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      grid: {
        strokeDashArray: 10,
        padding: {
          left: -10,
          top: -10,
        },
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
          breakpoint: 1650,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '50%',
              },
            },
          },
        },
      ],
    }

    const chartData = [
      {
        name: 'PRODUCT A',
        data: [16000, 12000, 16000, 18000, 15000, 35000, 16000],
      },
      {
        name: 'PRODUCT B',
        data: [10000, 12000, 10000, 0, 10000, 10000, 10000],
      },
      {
        name: 'PRODUCT C',
        data: [0, 15000, 0, 0, 12000, 0, 10000],
      },
    ]

    return {
      chartOptions,
      chartData,

      icons: {
        mdiDotsVertical,
        mdiChevronUp,
        mdiChevronDown,
      },
    }
  },
}
</script>
