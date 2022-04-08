<template>
  <vue-apex-charts
    type="line"
    height="400"
    :options="apexChatData.lineChartSimple.chartOptions"
    :series="apexChatData.lineChartSimple.series"
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
