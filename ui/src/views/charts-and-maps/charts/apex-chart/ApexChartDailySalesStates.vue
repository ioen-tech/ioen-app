<template>
  <vue-apex-charts
    type="heatmap"
    height="350"
    :options="apexChatData.heatMapChart.chartOptions"
    :series="apexChatData.heatMapChart.series"
  />
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData'

export default {
  components: { VueApexCharts },
  setup() {
    return {
      apexChatData,
    }
  },
}
</script>
