/* eslint-disable no-useless-escape */

export const timePickerRange = `
<template>
  <v-row class="ma-0">
    <v-col
      cols="12"
      md="6"
    >
      <div>
        <h2>Start:</h2>
        <v-time-picker
          v-model="start"
          color="primary"
          :max="end"
        ></v-time-picker>
      </div>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <div>
        <h2>End:</h2>
        <v-time-picker
          v-model="end"
          :min="start"
          color="primary"
        ></v-time-picker>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const start = ref(null)
    const end = ref(null)

    return { start, end }
  },
}
</script>
`

export const timePickerNoTitle = `
<template>
  <v-time-picker
    v-model="picker"
    no-title
  ></v-time-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const picker = ref(null)

    return {
      picker,
    }
  },
}
</script>
`

export const timePickerScrollable = `
<template>
  <v-time-picker
    v-model="picker"
    scrollable
    color="primary"
  ></v-time-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const picker = ref(null)

    return { picker }
  },
}
</script>
`

export const timePickerUseSeconds = `
<template>
  <v-time-picker
    v-model="picker"
    use-seconds
    color="primary"
  ></v-time-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const picker = ref(null)

    return { picker }
  },
}
</script>
`

export const timePickerBasic = `
<template>
  <v-time-picker
    format="ampm"
    color="primary"
  ></v-time-picker>
</template>
`

export const timePickerAmPm = `
<template>
  <v-time-picker
    v-model="picker"
    ampm-in-title
    color="primary"
  ></v-time-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const picker = ref(null)

    return { picker }
  },
}
</script>
`

export const timePickerAllowedTimes = `
<template>
  <v-time-picker
    v-model="time"
    :allowed-hours="allowedHours"
    :allowed-minutes="allowedMinutes"
    format="24hr"
    scrollable
    min="9:30"
    max="22:15"
    color="primary"
  ></v-time-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const time = ref('11:15')

    const allowedHours = value => value % 2
    const allowedMinutes = value => value >= 10 && value <= 50

    return {
      time,
      allowedHours,
      allowedMinutes,
    }
  },
}
</script>
`

export const timePickerFormat = `
<template>
  <v-time-picker
    v-model="picker"
    format="24hr"
    color="primary"
  ></v-time-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const picker = ref(null)

    return { picker }
  },
}
</script>
`

export const timePickerDialogAndMenu = `
<template>
  <v-row>
    <v-col cols="12">
      <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="time"
            label="Picker in menu"
            :prepend-icon="icons.mdiClockTimeFourOutline"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="menu2"
          v-model="time"
          color="primary"
          full-width
          @click:minute="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-col>

    <v-col cols="12">
      <v-dialog
        ref="dialog"
        v-model="modal2"
        :return-value.sync="time"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="time"
            label="Picker in dialog"
            :prepend-icon="icons.mdiClockTimeFourOutline"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="modal2"
          v-model="time"
          color="primary"
          full-width
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="modal2 = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(time)"
          >
            OK
          </v-btn>
        </v-time-picker>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiClockTimeFourOutline } from '@mdi/js'

export default {
  setup() {
    const time = ref(null)
    const menu2 = ref(false)
    const modal2 = ref(false)

    return {
      time,
      menu2,
      modal2,
      icons: {
        mdiClockTimeFourOutline,
      },
    }
  },
}
</script>
`
