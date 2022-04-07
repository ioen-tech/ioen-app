<template>
  <vue-apex-charts
    type="bar"
    height="400"
    :options="apexChatData.columnChart.chartOptions"
    :series="apexChatData.columnChart.series"
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
