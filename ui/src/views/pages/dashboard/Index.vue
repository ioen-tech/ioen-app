<template>
  <v-row>
    <v-col v-if="$can('read', 'Community')" cols="12" class="align-self-end">
      <welcome></welcome>
    </v-col>
    <v-col v-if="$can('read', 'Community')" cols="12" class="align-self-end">
      <solar-simulator></solar-simulator>
    </v-col>
    <v-col v-if="$can('read', 'Community')" md="6" cols="12" class="align-self-end">
      <connect-to-the-ioen></connect-to-the-ioen>
    </v-col>
    <v-col v-if="$can('read', 'Supplier')" cols="12" md="6" class="align-self-end">
      <congratulations></congratulations>
    </v-col>
    <v-col v-if="$can('read', 'Supplier')" cols="12" md="6" class="align-self-end">
      <trading-statistics></trading-statistics>
    </v-col>
  </v-row>
</template>

<script>
import TradingStatistics from './TradingStatistics.vue'
import Welcome from './Welcome.vue'
import ConnectToTheIoen from './ConnectToTheIOEN.vue'
import SolarSimulator from '@/components/SolarSimulator.vue'
import Congratulations from './Congratulations.vue'

// import PowerMonitoring from './PowerMonitoring.vue'

export default {
  components: {
    TradingStatistics,

    // PowerMonitoring,
    Congratulations,
    Welcome,
    ConnectToTheIoen,
    SolarSimulator,
  },
  setup() {},
}
</script>
