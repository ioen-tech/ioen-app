<template>
  <v-row>
    <v-col
      cols="12"
      lg="6"
    >
      <v-menu
        ref="menuref"
        v-model="menu1"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dateFormatted"
            label="Date"
            hint="MM/DD/YYYY format"
            persistent-hint
            :prepend-icon="icons.mdiCalendar"
            v-bind="attrs"
            @blur="date = parseDate(dateFormatted)"
            v-on="on"
          ></v-text-field>
        </template>

        <v-date-picker
          v-model="date"
          no-title
          color="primary"
          @input="menu1 = false"
        ></v-date-picker>
      </v-menu>
      <p class="mb-0 mt-4">
        Date in ISO format: <strong>{{ date }}</strong>
      </p>
    </v-col>

    <v-col
      cols="12"
      lg="6"
    >
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="computedDateFormatted"
            label="Date (read only text field)"
            hint="MM/DD/YYYY format"
            persistent-hint
            :prepend-icon="icons.mdiCalendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>

        <v-date-picker
          v-model="date"
          no-title
          color="primary"
          @input="menu2 = false"
        ></v-date-picker>
      </v-menu>
      <p class="mb-0 mt-4">
        Date in ISO format: <strong>{{ date }}</strong>
      </p>
    </v-col>
  </v-row>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { computed, ref, watch } from '@vue/composition-api'
import { mdiCalendar } from '@mdi/js'

export default {
  setup() {
    // const vm = getCurrentInstance().proxy
    const date = ref(new Date().toISOString().substr(0, 10))
    const menu1 = ref(false)
    const menu2 = ref(false)

    const formatDate = dates => {
      if (!dates) return null
      const [year, month, day] = dates.split('-')

      return `${month}/${day}/${year}`
    }

    let dateFormatted = formatDate(new Date().toISOString().substr(0, 10))

    const parseDate = dates => {
      if (!dates) return null
      const [month, day, year] = dates.split('/')

      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }

    const computedDateFormatted = computed(() => formatDate(date.value))

    watch(date, () => {
      dateFormatted = formatDate(date.value)
    })

    return {
      date,
      dateFormatted,
      menu1,
      menu2,
      computedDateFormatted,
      parseDate,
      formatDate,

      // icons
      icons: {
        mdiCalendar,
      },
    }
  },
}
</script>
