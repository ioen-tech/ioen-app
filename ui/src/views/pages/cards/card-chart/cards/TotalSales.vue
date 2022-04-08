<template>
  <v-card>
    <v-card-title class="align-start flex-nowrap">
      <div>
        <p class="mb-2 text-sm font-weight-semibold">
          Total Sales
        </p>
        <p>
          <span class="text-2xl font-weight-semibold me-1">$21,845</span>
          <small class="success--text text-xs text-no-wrap">
            <v-icon
              color="success"
              size="22"
            >{{ icons.mdiChevronUp }}</v-icon>
            <span>25.8%</span>
          </small>
        </p>
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
    <v-card-text>
      <vue-apex-charts
        height="180"
        :options="chartOptions"
        :series="chartData"
      ></vue-apex-charts>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// eslint-disable-next-line object-curly-newline
import { mdiDotsVertical, mdiChevronUp } from '@mdi/js'

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
          left: 0,
          bottom: -10,
        },
      },
      chart: {
        type: 'line',
        toolbar: {
          show: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.4,
          stops: [0, 100, 100],
          colorStops: [],
        },
      },
      stroke: {
        width: 5,
        curve: 'smooth',
        lineCap: 'round',
      },
      colors: [$vuetify.theme.currentTheme.success],
      legend: {
        show: false,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        labels: {
          // show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        min: 0,
      },
    }

    const chartData = [
      {
        name: 'Total Sales',
        data: [0, 258, 30, 240, 150, 400],
      },
    ]

    return {
      chartOptions,
      chartData,

      icons: {
        mdiDotsVertical,
        mdiChevronUp,
      },
    }
  },
}
</script>
