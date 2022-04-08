<template>
  <v-card>
    <v-card-title>
      <span>Bubble Chart</span>
      <v-spacer></v-spacer>
      <span class="subtitle-2">
        $ 100,000
      </span>
    </v-card-title>

    <!-- chart -->
    <v-card-text>
      <chartjs-component-bubble-chart
        :height="500"
        :data="chartjsData.bubbleChart.data"
        :options="chartjsData.bubbleChart.options"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import ChartjsComponentBubbleChart from './charts-components/ChartjsComponentBubbleChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    ChartjsComponentBubbleChart,
  },
  setup() {
    return {
      chartjsData,
    }
  },
}
</script>
