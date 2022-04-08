<template>
  <v-card>
    <v-card-title>
      <span class="text-sm font-weight-semibold">Total Visits</span>
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

    <v-card-text class="text-center">
      <!-- Chart -->
      <vue-apex-charts
        id="total-visit-chart"
        height="320"
        :options="chartOptions"
        :series="chartData"
      ></vue-apex-charts>

      <p class="mb-3 text-xs">
        45.2k new visits
      </p>
      <v-chip
        class="v-chip-light-bg info--text font-weight-semibold"
        small
      >
        Last Week
      </v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// eslint-disable-next-line object-curly-newline
import { mdiDotsVertical } from '@mdi/js'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const chartOptions = {
      chart: {
        height: 350,
        type: 'radialBar',
        sparkline: {
          enabled: true,
        },
      },
      grid: {
        padding: {
          left: 60,
          right: 60,
        },
      },
      stroke: {
        lineCap: 'round',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 90],
          colorStops: [],
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -180,
          endAngle: 180,
          inverseOrder: true,
          hollow: {
            size: '62%',
          },
          dataLabels: {
            name: {
              offsetY: 26,
            },
            value: {
              fontSize: '2.125rem',

              // ! This isn't working???
              fontWeight: 600,
              offsetY: -14,
              formatter(value) {
                return `${value}k`
              },
            },
            total: {
              show: true,
              label: 'Growth',
              fontSize: '14px',
            },
          },
        },
      },
      labels: ['Cricket'],
    }

    const chartData = [78]

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
#total-visit-chart {
  .apexcharts-canvas {
    .apexcharts-text {
      &.apexcharts-datalabel-value {
        font-weight: 600;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
