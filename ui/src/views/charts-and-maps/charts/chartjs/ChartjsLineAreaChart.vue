<template>
  <v-card>
    <v-card-title>
      <span>Data Science</span>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-icon size="18">
          {{ mdiCalendarBlankOutline }}
        </v-icon>
        <span class="subtitle-2 ms-2">2019-05-01 to 2019-05-10</span>
      </div>
    </v-card-title>

    <!-- chart -->
    <v-card-text>
      <chartjs-component-line-chart
        :height="450"
        :data="chartjsData.lineAreaChart.data"
        :options="chartjsData.lineAreaChart.options"
        :plugins="plugins"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiCalendarBlankOutline } from '@mdi/js'
import ChartjsComponentLineChart from './charts-components/ChartjsComponentLineChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    ChartjsComponentLineChart,
  },
  setup() {
    const plugins = [
      // to add spacing between legends and chart
      {
        beforeInit(chart) {
          /* eslint-disable func-names, no-param-reassign */
          chart.legend.afterFit = function () {
            this.height += 25
          }
          /* eslint-enable */
        },
      },
    ]

    return {
      plugins,
      chartjsData,
      mdiCalendarBlankOutline,
    }
  },
}
</script>
