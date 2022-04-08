<template>
  <v-card>
    <v-card-title>
      <span class="text-sm font-weight-semibold">Revenue Report</span>
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
import { getVuetify } from '@core/utils'

export default {
  components: {
    VueApexCharts: () => import('vue-apexcharts'),
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
      },
      stroke: {
        width: 5,
        colors: ['#fff'],
      },
      dataLabels: {
        enabled: false,
      },
      colors: [$vuetify.theme.currentTheme.success, $vuetify.theme.currentTheme.secondary],
      plotOptions: {
        bar: {
          columnWidth: '70%',
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
      responsive: [
        {
          breakpoint: 3000,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '50%',
              },
            },
          },
        },
        {
          breakpoint: 1580,
          options: {
            stroke: {
              width: 3,
            },
          },
        },
        {
          breakpoint: 1300,
          options: {
            stroke: {
              width: 1,
            },
          },
        },
        {
          breakpoint: 958,
          options: {
            stroke: {
              width: 5,
            },
          },
        },
        {
          breakpoint: 750,
          options: {
            stroke: {
              width: 4,
            },
          },
        },
        {
          breakpoint: 600,
          options: {
            stroke: {
              width: 3,
            },
          },
        },
      ],
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
