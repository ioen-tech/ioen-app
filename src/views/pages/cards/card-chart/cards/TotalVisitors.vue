<template>
  <v-card class="chart-card-total-visitors d-flex flex-column">
    <v-card-title class="align-start">
      <span>Total Visitors</span>
      <v-spacer></v-spacer>
      <v-btn
        icon
        small
        class="me-n3 mt-n2"
      >
        <v-icon size="22">
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <vue-apex-charts
      id="chart-total-visitors"
      :options="chartOptions"
      :series="chartData"
      class="d-flex flex-grow-1 align-center mb-4"
    ></vue-apex-charts>
  </v-card>
</template>

<script>
import { mdiDotsVertical } from '@mdi/js'
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
        $vuetify.theme.currentTheme.primary,
        addAlpha($vuetify.theme.currentTheme.primary, 0.7),
        addAlpha($vuetify.theme.currentTheme.primary, 0.3),
        addAlpha($vuetify.theme.currentTheme.secondary, 0.1),
      ],
      chart: {
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: 'bottom',
        offsetY: 10,
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
                formatter(value) {
                  return `${value.globals.seriesTotals.reduce((total, num) => total + num)}k`
                },
              },
            },
          },
        },
      },
      labels: ['FR', 'UK', 'ESP', 'USA'],
    }

    const chartData = [12, 26, 12, 50]

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
@import '~@core/preset/preset/mixins.scss';

#chart-total-visitors {
  .apexcharts-legend {
    padding: 0;
  }
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
</style>
