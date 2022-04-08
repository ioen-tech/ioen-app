<template>
  <vue-apex-charts
    type="scatter"
    height="400"
    :options="apexChatData.scatterChart.chartOptions"
    :series="apexChatData.scatterChart.series"
  />
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    return {
      apexChatData,
    }
  },
}
</script>
