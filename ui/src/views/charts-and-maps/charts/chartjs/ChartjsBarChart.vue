<template>
  <v-card>
    <v-card-title>
      <span>Latest Statistics</span>
      <v-spacer></v-spacer>
      <v-icon
        size="18"
        class="me-1"
      >
        {{ icons.mdiCalendarBlankOutline }}
      </v-icon>
      <span class="subtitle-2">2019-05-01 to 2019-05-10</span>
    </v-card-title>

    <!-- chart -->
    <v-card-text class="mt-5">
      <chartjs-component-bar-chart
        :height="400"
        :data="chartjsData.latestBarChart.data"
        :options="chartjsData.latestBarChart.options"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiCalendarBlankOutline } from '@mdi/js'
import ChartjsComponentBarChart from './charts-components/ChartjsComponentBarChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    ChartjsComponentBarChart,
  },
  setup() {
    return {
      chartjsData,
      icons: {
        mdiCalendarBlankOutline,
      },
    }
  },
}
</script>
