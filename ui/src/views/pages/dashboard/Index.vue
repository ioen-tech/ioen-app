<template>
  <v-row>
    <v-col cols="12" md="8" class="align-self-end">
      <congratulations></congratulations>
    </v-col>
    <v-col cols="12" md="8" class="align-self-end">
      <power-monitoring></power-monitoring>
    </v-col>
    <v-col cols="12" md="8" class="align-self-end">
      <trading-statistics></trading-statistics>
    </v-col>
    <v-col cols="12" md="8" class="align-self-end">
      <trading-statistics></trading-statistics>
    </v-col>
  </v-row>
</template>

<script>
import TradingStatistics from './TradingStatistics.vue'
import Congratulations from './Congratulations.vue'
import PowerMonitoring from './PowerMonitoring.vue'

export default {
  components: {
    TradingStatistics,
    PowerMonitoring,
    Congratulations,
  },
  setup() {},
}
</script>
