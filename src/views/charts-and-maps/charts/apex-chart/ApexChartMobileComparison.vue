<template>
  <vue-apex-charts
    type="radar"
    height="400"
    :options="apexChatData.radarChart.chartOptions"
    :series="apexChatData.radarChart.series"
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
