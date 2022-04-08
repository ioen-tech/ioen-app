<template>
  <v-card>
    <v-card-title>
      <span>Average Skills</span>

      <v-spacer></v-spacer>
      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon size="18">
              {{ icons.mdiDotsVertical }}
            </v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-title>

    <!-- chart -->
    <v-card-text>
      <chartjs-component-polar-area-chart
        :height="350"
        :data="chartjsData.polarChart.data"
        :options="chartjsData.polarChart.options"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiDotsVertical } from '@mdi/js'
import ChartjsComponentPolarAreaChart from './charts-components/ChartjsComponentPolarAreaChart.vue'
import chartjsData from './chartjsData'

export default {
  components: {
    ChartjsComponentPolarAreaChart,
  },
  setup() {
    const items = [{ title: 'Last 28 Days' }, { title: 'Last Month' }, { title: 'Last Year' }]

    return {
      items,
      chartjsData,
      icons: {
        mdiDotsVertical,
      },
    }
  },
}
</script>
