<template>
  <v-card class="mx-auto">
    <v-toolbar flat dense>
      <v-toolbar-title>
        <span class="subheading">IOEN Power Monitor</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text>
      <v-row class="mb-4" justify="space-between">
        <v-col class="text-left">
          <span class="text-h2 font-weight-light" v-text="kWh"></span>
          <span class="subheading font-weight-light mr-1">kWh</span>
        </v-col>
        <v-col class="text-right">
          <v-btn :color="color" dark depressed fab>
            <v-icon large>
              {{ icons.mdiSolarPower }}
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-slider
        v-model="kWh"
        thumb-label="always"
        label="Solar Generating"
        inverse-label
        :color="color"
        track-color="grey"
        always-dirty
        min="0"
        max="12"
      >
      </v-slider>
      <v-slider
        v-model="batterykWh"
        thumb-label="always"
        label="Battery Charging"
        inverse-label
        :color="color"
        track-color="grey"
        always-dirty
        min="0"
        max="5"
      >
      </v-slider>
      <v-slider
        v-model="householdkWh"
        thumb-label="always"
        label="Household Using"
        inverse-label
        color="info"
        track-color="grey"
        always-dirty
        min="0"
        max="12"
      >
      </v-slider>
      <v-slider
        readonly
        :value="ioenkWh"
        thumb-label="always"
        label="Selling to IOEN"
        inverse-label
        color="solarMax"
        track-color="grey"
        always-dirty
        min="0"
        max="12"
      >
      </v-slider>
      <v-slider
        readonly
        :value="gridkWh"
        thumb-label="always"
        label="Fossil Fuel"
        inverse-label
        color="error"
        track-color="grey"
        always-dirty
        min="0"
        max="12"
      >
      </v-slider>
    </v-card-text>
  </v-card>
</template>

<script>
import { computed, ref } from '@vue/composition-api'
import { mdiMinus, mdiPlus, mdiSolarPower } from '@mdi/js'

// import store from '../store'

export default {
  setup() {
    const kWh = ref(8)
    const batterykWh = ref(0)
    const householdkWh = ref(2)
    const interval = ref(null)
    const isPlaying = ref(false)

    return {
      kWh,
      batterykWh,
      householdkWh,
      interval,
      isPlaying,
      ioenkWh: computed(() => kWh.value - batterykWh.value - householdkWh.value),
      gridkWh: computed(() => {
        const grid = kWh.value - batterykWh.value - householdkWh.value
        if (grid < 0) return grid * -1

        return 0
      }),
      color: computed(() => {
        if (kWh.value < 1) return 'solarLow'
        if (kWh.value < 5) return 'solarMed'
        if (kWh.value < 13) return 'solarHigh'

        return 'solarLow'
      }),
      icons: {
        mdiMinus,
        mdiPlus,
        mdiSolarPower,
      },
    }
  },
}
</script>
