<template>
  <v-menu
    ref="menuref"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        label="Birthday date"
        :prepend-icon="icons.mdiCalendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>

    <v-date-picker
      ref="picker"
      v-model="date"
      :max="new Date().toISOString().substr(0, 10)"
      min="1950-01-01"
      color="primary"
      @change="save"
    ></v-date-picker>
  </v-menu>
</template>

<script>
/* eslint-disable no-unused-expressions */
import { ref, watch } from '@vue/composition-api'
import { mdiCalendar } from '@mdi/js'

export default {
  setup() {
    const date = ref(null)
    const menu = ref(false)
    const picker = ref(null)
    const menuref = ref(null)
    watch(menu, val => {
      // eslint-disable-next-line no-return-assign
      val && setTimeout(() => (picker.value.activePicker = 'YEAR'))
    })

    const save = d => {
      menuref.value.save(d)
    }

    return {
      date,
      menu,
      picker,
      menuref,
      save,

      // icons
      icons: {
        mdiCalendar,
      },
    }
  },
}
</script>
