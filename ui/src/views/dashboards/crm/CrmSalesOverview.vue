<template>
  <v-card>
    <v-card-title class="align-start">
      <span>Sales Overview</span>
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
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <vue-apex-charts
            id="chart-sales-overview"
            :options="chartOptions"
            :series="chartData"
            class="h-full d-flex align-center"
          ></vue-apex-charts>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          class="d-flex flex-column justify-center"
        >
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
                {{ icons.mdiCurrencyUsd }}
              </v-icon>
            </v-avatar>
            <div class="ms-4 d-flex flex-column">
              <p class="text--primary mb-0 text-base">
                Number of Sales
              </p>
              <span class="text--primary font-weight-semibold text-xl">$86,400</span>
            </div>
          </div>

          <v-divider class="my-6"></v-divider>

          <table class="sales-overview-stats-table">
            <tr>
              <td>
                <div class="mb-0">
                  <div class="stats-dot primary d-inline-block rounded-circle me-2"></div>
                  <span>Apparel</span>
                </div>
                <span class="text-base text--primary font-weight-semibold ms-4">$1,840</span>
              </td>
              <td>
                <div class="mb-0">
                  <div class="stats-dot primary d-inline-block rounded-circle me-2"></div>
                  <span>Electronic</span>
                </div>
                <span class="text-base text--primary font-weight-semibold ms-4">$11,420</span>
              </td>
            </tr>
            <tr>
              <td>
                <div class="mb-0">
                  <div class="stats-dot primary d-inline-block rounded-circle me-2"></div>
                  <span>FMCG</span>
                </div>
                <span class="text-base text--primary font-weight-semibold ms-4">$30,234</span>
              </td>
              <td>
                <div class="mb-0">
                  <div class="stats-dot secondary d-inline-block rounded-circle me-2"></div>
                  <span>Other Sales</span>
                </div>
                <span class="text-base text--primary font-weight-semibold ms-4">$46,054</span>
              </td>
            </tr>
          </table>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiDotsVertical, mdiCurrencyUsd } from '@mdi/js'
import { getVuetify, addAlpha } from '@core/utils'

export default {
  components: {
    VueApexCharts: () => import('vue-apexcharts'),
  },
  setup() {
    const $vuetify = getVuetify()

    const chartOptions = {
      labels: ['Apparel', 'Electronics', 'FMCG', 'Other Sales', 'Alt'],
      colors: [
        $vuetify.theme.currentTheme.primary,
        addAlpha($vuetify.theme.currentTheme.primary, 0.7),
        addAlpha($vuetify.theme.currentTheme.primary, 0.3),
        addAlpha($vuetify.theme.currentTheme.secondary, 0.1),
      ],
      chart: {
        type: 'donut',
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
            labels: {
              show: true,
              name: {
                fontSize: '14px',
                offsetY: 25,
              },
              value: {
                fontSize: '2.125rem',
                fontWeight: 600,

                offsetY: -15,
                formatter(value) {
                  return `${value}k`
                },
              },
              total: {
                show: true,
                label: 'Weekly Visits',
                color: 'rgba(94, 86, 105, 0.68)',
                formatter(value) {
                  return `${value.globals.seriesTotals.reduce((total, num) => total + num)}k`
                },
              },
            },
          },
        },
      },
    }

    const chartData = [12, 24.5, 15, 50, 3]

    return {
      chartOptions,
      chartData,
      icons: {
        mdiDotsVertical,
        mdiCurrencyUsd,
      },
    }
  },
}
</script>

<style lang="scss">
#chart-sales-overview {
  .apexcharts-canvas {
    .apexcharts-text {
      &.apexcharts-datalabel-value {
        font-weight: 600;
      }
      &.apexcharts-datalabel-label {
        font-size: 1rem;
      }
    }
  }
}

.sales-overview-stats-table {
  width: 100%;
  td {
    padding-bottom: 1rem;
  }

  .stats-dot {
    padding: 0.33rem;
  }

  // Set opacity of dots
  tr {
    &:nth-of-type(1) {
      td:nth-of-type(2) {
        .stats-dot {
          opacity: 0.7;
        }
      }
    }
    &:nth-of-type(2) {
      td:nth-of-type(1) {
        .stats-dot {
          opacity: 0.5;
        }
      }
      td:nth-of-type(2) {
        .stats-dot {
          opacity: 0.15;
        }
      }
    }
  }
}
</style>
