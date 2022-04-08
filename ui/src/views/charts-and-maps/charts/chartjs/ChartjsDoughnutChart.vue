<template>
  <v-card>
    <v-card-title>Sessions By Device</v-card-title>
    <!-- chart -->
    <v-card-text>
      <chartjs-component-doughnut-chart
        :height="275"
        :data="chartjsData.doughnutChart.data"
        :options="chartjsData.doughnutChart.options"
        class="mb-3"
      />
    </v-card-text>
    <!--/ chart -->

    <!-- stocks -->
    <v-card-text>
      <div
        v-for="(stock,index) in stockData"
        :key="stock.device"
        :class="index < stockData.length-1 ? 'mb-4':''"
        class="d-flex justify-space-between"
      >
        <div class="d-flex align-center">
          <v-icon
            size="16"
            :color="stock.color"
          >
            {{ stock.symbol }}
          </v-icon>
          <span class="font-weight-bold ms-2 me-2">{{ stock.device }}</span>
          <span>- {{ stock.percentage }}%</span>
        </div>
        <div>
          <span>{{ stock.upDown }}%</span>
          <v-icon
            size="14"
            :color="stock.upDown > 0 ? 'success':'error'"
          >
            {{ stock.upDown > 0 ? mdiArrowUp:mdiArrowDown }}
          </v-icon>
        </div>
      </div>
    </v-card-text>
    <!--/ stocks -->
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiMonitor, mdiTabletAndroid, mdiArrowUp, mdiArrowDown } from '@mdi/js'
import ChartjsComponentDoughnutChart from './charts-components/ChartjsComponentDoughnutChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    ChartjsComponentDoughnutChart,
  },
  setup() {
    const stockData = [
      {
        device: 'Desktop',
        symbol: mdiMonitor,
        color: 'primary',
        percentage: 80,
        upDown: 2,
      },
      {
        device: 'Mobile',
        symbol: mdiTabletAndroid,
        color: 'warning',
        percentage: 10,
        upDown: 8,
      },
      {
        device: 'Tablet',
        symbol: mdiTabletAndroid,
        color: 'success',
        percentage: 10,
        upDown: -5,
      },
    ]

    return {
      chartjsData,
      mdiArrowUp,
      mdiArrowDown,
      stockData,
    }
  },
}
</script>
