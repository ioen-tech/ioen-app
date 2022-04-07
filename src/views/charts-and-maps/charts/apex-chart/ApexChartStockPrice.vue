<template>
  <vue-apex-charts
    type="candlestick"
    height="400"
    :options="apexChatData.candlestickChart.chartOptions"
    :series="apexChatData.candlestickChart.series"
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
