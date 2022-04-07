/* eslint-disable no-useless-escape */

export const monthPickerIcons = `
<template>
  <v-date-picker
    v-model="picker"
    type="month"
    :year-icon="icons.mdiCalendarBlank"
    :prev-icon="icons.mdiSkipPrevious"
    :next-icon="icons.mdiSkipNext"
    color="primary"
  ></v-date-picker>
</template>

<script>
import { mdiCalendarBlank, mdiSkipPrevious, mdiSkipNext } from '@mdi/js'

export default {
  setup() {
    const picker = new Date().toISOString().substr(0, 7)

    return {
      picker,
      icons: {
        mdiCalendarBlank,
        mdiSkipPrevious,
        mdiSkipNext,
      },
    }
  },
}
</script>
`

export const monthPickerMultiple = `
<template>
  <v-date-picker
    v-model="months"
    type="month"
    multiple
    color="primary"
  ></v-date-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const months = ref(['2018-09', '2018-10'])

    return {
      months,
    }
  },
}
</script>
`

export const monthPickerReadonlyAndDisabled = `
<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-date-picker
        v-model="date"
        type="month"
        readonly
        color="primary"
      ></v-date-picker>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <v-date-picker
        v-model="date"
        type="month"
        color="primary"
        disabled
      ></v-date-picker>
    </v-col>
  </v-row>
</template>

<script>
export default {
  setup() {
    const date = new Date().toISOString().substr(0, 7)

    return {
      date,
    }
  },
}
</script>
`

export const monthPickerWidth = `
<template>
  <v-date-picker
    v-model="date"
    full-width
    color="primary"
    type="month"
    class="mt-4"
  ></v-date-picker>
</template>

<script>
export default {
  setup() {
    const date = new Date().toISOString().substr(0, 7)

    return {
      date,
    }
  },
}
</script>
`

export const monthPickerAllowedMonths = `
<template>
  <v-date-picker
    v-model="date"
    :allowed-dates="allowedMonths"
    type="month"
    class="mt-4"
    min="2017-06"
    max="2019-10"
    color="primary"
  ></v-date-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const date = ref('2017-12')

    const allowedMonths = val => parseInt(val.split('-')[1], 10) % 2 === 0

    return {
      date,
      allowedMonths,
    }
  },
}
</script>
`

export const monthPickerInternationalization = `
<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-date-picker
        v-model="picker"
        type="month"
        locale="th"
        color="primary"
      ></v-date-picker>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <v-date-picker
        v-model="picker"
        type="month"
        color="primary"
        locale="sv-se"
      ></v-date-picker>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const picker = ref(new Date().toISOString().substr(0, 7))

    return {
      picker,
    }
  },
}
</script>
`

export const monthPickerDialogAndMenu = `
<template>
  <v-row>
    <v-col cols="12">
      <v-menu
        ref="menuref"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in menu"
            :prepend-icon="icons.mdiCalendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          type="month"
          no-title
          scrollable
          color="primary"
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menuref.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>

    <v-col cols="12">
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in dialog"
            :prepend-icon="icons.mdiCalendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          type="month"
          color="primary"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="modal = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiCalendar } from '@mdi/js'

export default {
  setup() {
    const date = ref(new Date().toISOString().substr(0, 7))
    const menu = ref(false)
    const modal = ref(false)

    return {
      date,
      menu,
      modal,

      // icons
      icons: {
        mdiCalendar,
      },
    }
  },
}
</script>
`

export const monthPickerBasic = `
<template>
  <v-date-picker
    v-model="picker"
    type="month"
    color="primary"
  ></v-date-picker>
</template>

<script>
export default {
  setup() {
    const picker = new Date().toISOString().substr(0, 10)

    return {
      picker,
    }
  },
}
</script>
`
