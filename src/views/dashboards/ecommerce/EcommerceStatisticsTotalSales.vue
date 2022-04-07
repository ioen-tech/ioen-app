<template>
  <v-card>
    <div class="d-flex justify-space-between">
      <div>
        <v-card-title>
          Total Sales
        </v-card-title>
        <v-card-text class="text-no-wrap mt-4">
          <p class="text-xs mb-0">
            Calculated in last 7 days
          </p>
          <span class="text-xl font-weight-semibold text--primary me-1">$25,980</span>
          <v-icon
            size="20"
            color="success"
          >
            {{ icons.mdiChevronUp }}
          </v-icon>
          <span class="success--text text-xs font-weight-semibold">15.6%</span>
        </v-card-text>
      </div>

      <vue-apex-charts
        id="chart-stats-total-sales"
        height="140"
        :options="chartOptions"
        :series="chartSeries"
      />
    </div>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

import { mdiChevronUp } from '@mdi/js'
import { getVuetify } from '@core/utils'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const $vuetify = getVuetify()

    const chartSeries = [85, 20, 30, 50]
    const chartOptions = {
      chart: {
        offsetY: 7,
        type: 'donut',
        sparkline: {
          enabled: true,
        },
        animations: {
          enabled: false,
        },
      },
      stroke: {
        colors: ['#fff'],
        width: 8,
      },
      grid: {
        padding: {
          bottom: 10,
        },
      },
      colors: [
        $vuetify.theme.currentTheme.primary,
        '#E9EAEC',
        $vuetify.theme.currentTheme.warning,
        $vuetify.theme.currentTheme.error,
      ],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '14px',
                offsetY: 25,
              },
              value: {
                offsetY: -13,
                formatter(value) {
                  return `${value}k`
                },
              },
              total: {
                show: true,
                label: '1 Quater',
                formatter() {
                  return '18%'
                },
              },
            },
          },
        },
      },
    }

    return {
      chartSeries,
      chartOptions,

      // icons
      icons: {
        mdiChevronUp,
      },
    }
  },
}
</script>

<style lang="scss">
#chart-stats-total-sales {
  max-width: 150px;
  height: auto;
  .apexcharts-pie {
    .apexcharts-pie-series .apexcharts-pie-area {
      stroke-width: 10;
    }
  }
  .apexcharts-canvas {
    .apexcharts-text {
      &.apexcharts-datalabel-value {
        font-weight: 600;
        font-size: 1.25rem;
      }
      &.apexcharts-datalabel-label {
        font-size: 0.75rem;
        margin-bottom: 2rem;
        transform: translateY(-7px);
      }
    }
  }
}

.v-application {
  &.theme--dark {
    #chart-stats-total-sales {
      path {
        stroke: #312d4b;
      }
    }
  }
}
</style>
