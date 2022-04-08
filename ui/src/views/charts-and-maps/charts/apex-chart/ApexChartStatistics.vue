<template>
  <vue-apex-charts
    type="radialBar"
    height="400"
    :options="apexChatData.radialBarChart.chartOptions"
    :series="apexChatData.radialBarChart.series"
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
