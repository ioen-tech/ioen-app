<template>
  <v-card>
    <v-card-title>
      <div class="flex">
        <div class="subtitle-2">
          Balance
        </div>
        <div>
          $74,123
        </div>
      </div>

      <v-icon
        size="18"
        class="me-1"
      >
        {{ icons.mdiCalendarBlankOutline }}
      </v-icon>
      <span class="subtitle-2">2019-05-01 to 2019-05-10</span>
    </v-card-title>

    <!-- chart -->
    <v-card-text>
      <chartjs-component-horizontal-bar-chart
        :height="400"
        :data="chartjsData.horizontalBarChart.data"
        :options="chartjsData.horizontalBarChart.options"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiCalendarBlankOutline } from '@mdi/js'
import ChartjsComponentHorizontalBarChart from './charts-components/ChartjsComponentHorizontalBarChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    ChartjsComponentHorizontalBarChart,
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
