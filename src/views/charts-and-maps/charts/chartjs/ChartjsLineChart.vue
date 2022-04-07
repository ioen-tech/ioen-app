<template>
  <v-card>
    <v-card-title>
      Statistics
    </v-card-title>
    <v-card-subtitle>Commercial networks and enterprises</v-card-subtitle>

    <!-- chart -->
    <v-card-text>
      <chartjs-component-line-chart
        :height="400"
        :data="chartjsData.lineChart.data"
        :options="chartjsData.lineChart.options"
        :plugins="plugins"
      />
    </v-card-text>
  </v-card>
</template>

<script>
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
            this.height += 20
          }
          /* eslint-enable */
        },
      },
    ]

    return {
      plugins,
      chartjsData,
    }
  },
}
</script>
