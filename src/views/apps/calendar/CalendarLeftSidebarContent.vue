<template>
  <div class="ma-5">
    <v-btn
      block
      color="primary"
      @click="$emit('open-evnt-handler-drawer')"
    >
      Add Event
    </v-btn>

    <!-- Calendars -->
    <p class="text-xs text--disabled mt-8 mb-1">
      CALENDARS
    </p>

    <!-- Calendar Options -->
    <v-checkbox
      v-model="checkAll"
      label="View All"
      hide-details
    ></v-checkbox>
    <v-checkbox
      v-for="item in calendarOptions"
      :key="item.label"
      v-model="selectedCalendars"
      :value="item.label"
      :color="item.color"
      :label="item.label"
      class="mt-2"
      hide-details
    >
    </v-checkbox>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import store from '@/store'

export default {
  setup() {
    // ------------------------------------------------
    // calendarOptions
    // ------------------------------------------------
    const calendarOptions = computed(() => store.state['app-calendar'].calendarOptions)

    // ------------------------------------------------
    // selectedCalendars
    // ------------------------------------------------
    const selectedCalendars = computed({
      get: () => store.state['app-calendar'].selectedCalendars,
      set: val => {
        store.commit('app-calendar/SET_SELECTED_CALENDARS', val)
      },
    })

    // ------------------------------------------------
    // checkAll
    // ------------------------------------------------
    const checkAll = computed({
      /*
      GET: Return boolean `true` => if length of options matches length of selected filters => Length matches when all events are selected
      SET: If value is `true` => then add all available options in selected filters => Select All
           Else if => all filters are selected (by checking length of both array) => Empty Selected array  => Deselect All
    */
      get: () => selectedCalendars.value.length === calendarOptions.value.length,
      set: val => {
        if (val) {
          selectedCalendars.value = calendarOptions.value.map(i => i.label)
        } else if (selectedCalendars.value.length === calendarOptions.value.length) {
          selectedCalendars.value = []
        }
      },
    })

    return {
      calendarOptions,
      selectedCalendars,
      checkAll,
    }
  },
}
</script>

<style>
</style>
