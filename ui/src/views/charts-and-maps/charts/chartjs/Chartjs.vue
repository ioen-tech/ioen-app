<template>
  <v-row class="match-height">
    <!-- bar chart -->
    <v-col
      cols="12"
      md="6"
    >
      <chartjs-bar-chart></chartjs-bar-chart>
    </v-col>

    <!-- horizontal bar chart -->
    <v-col
      cols="12"
      md="6"
    >
      <chartjs-horizontal-bar-chart></chartjs-horizontal-bar-chart>
    </v-col>

    <!-- line chart -->
    <v-col cols="12">
      <chartjs-line-chart></chartjs-line-chart>
    </v-col>

    <!-- radar chart -->
    <v-col
      cols="12"
      md="6"
    >
      <chartjs-radar-chart></chartjs-radar-chart>
    </v-col>

    <!-- polar chart -->
    <v-col
      cols="12"
      md="6"
    >
      <chartjs-polar-area-chart></chartjs-polar-area-chart>
    </v-col>

    <!-- bubble chart -->
    <v-col cols="12">
      <chartjs-bubble-chart></chartjs-bubble-chart>
    </v-col>

    <!-- doughnut chart -->
    <v-col
      cols="12"
      lg="4"
    >
      <chartjs-doughnut-chart></chartjs-doughnut-chart>
    </v-col>

    <!--scatter chart-->
    <v-col
      cols="12"
      lg="8"
    >
      <chartjs-scatter-chart></chartjs-scatter-chart>
    </v-col>

    <!-- data science -->
    <v-col cols="12">
      <chartjs-line-area-chart></chartjs-line-area-chart>
    </v-col>
  </v-row>
</template>
<script>
import ChartjsBarChart from './ChartjsBarChart.vue'
import ChartjsHorizontalBarChart from './ChartjsHorizontalBarChart.vue'
import ChartjsLineChart from './ChartjsLineChart.vue'
import ChartjsRadarChart from './ChartjsRadarChart.vue'
import ChartjsPolarAreaChart from './ChartjsPolarAreaChart.vue'
import ChartjsBubbleChart from './ChartjsBubbleChart.vue'
import ChartjsDoughnutChart from './ChartjsDoughnutChart.vue'
import ChartjsScatterChart from './ChartjsScatterChart.vue'
import ChartjsLineAreaChart from './ChartjsLineAreaChart.vue'

export default {
  components: {
    ChartjsBarChart,
    ChartjsHorizontalBarChart,
    ChartjsLineChart,
    ChartjsRadarChart,
    ChartjsPolarAreaChart,
    ChartjsBubbleChart,
    ChartjsDoughnutChart,
    ChartjsScatterChart,
    ChartjsLineAreaChart,
  },
}
</script>
