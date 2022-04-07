<template>
  <v-card>
    <v-card-title>Radar Chart</v-card-title>
    <v-card-text>
      <chartjs-component-radar-chart
        :height="355"
        :data="chartjsData.radarChart.data"
        :options="chartjsData.radarChart.options"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import ChartjsComponentRadarChart from './charts-components/ChartjsComponentRadarChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    ChartjsComponentRadarChart,
  },
  setup() {
    return {
      chartjsData,
    }
  },
}
</script>
