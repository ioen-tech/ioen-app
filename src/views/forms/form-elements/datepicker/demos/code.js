/* eslint-disable no-useless-escape */

export const datepickerMultiple = `
<template>
  <v-date-picker
    v-model="dates"
    multiple
    color="primary"
  ></v-date-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const dates = ref(['2018-09-15', '2018-09-20'])

    return {
      dates,
    }
  },
}
</script>
`

export const datepickerRange = `
<template>
  <v-date-picker
    v-model="dates"
    range
    color="primary"
  ></v-date-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const dates = ref(['2019-09-10', '2019-09-20'])

    return {
      dates,
    }
  },
}
</script>
`

export const datepickerShowSiblingMonths = `
<template>
  <v-date-picker
    v-model="picker"
    show-adjacent-months
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

export const datepickerDialogAndMenu = `
<template>
  <v-row>
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
          scrollable
          color="primary"
        >
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

    <v-col cols="12">
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker without buttons"
            :prepend-icon="icons.mdiCalendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          color="primary"
          @input="menu2 = false"
        ></v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiCalendar } from '@mdi/js'

export default {
  setup() {
    const date = new Date().toISOString().substr(0, 10)
    const menu = ref(false)
    const modal = ref(false)
    const menu2 = ref(false)
    const menuref = ref(null)

    return {
      date,
      menu,
      modal,
      menu2,
      menuref,

      // icons
      icons: {
        mdiCalendar,
      },
    }
  },
}
</script>
`

export const datepickerBasic = `
<template>
  <v-date-picker
    v-model="picker"
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

export const datepickerSync = `
<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-date-picker
        ref="picker"
        v-model="date"
        color="primary"
        :picker-date.sync="pickerDate"
        full-width
      ></v-date-picker>
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <div class="title">
        Month news ({{ pickerDate || 'change month...' }})
      </div>
      <div class="subheading">
        Change month to see other news
      </div>
      <ul class="ma-4">
        <li
          v-for="note in notes"
          :key="note"
        >
          {{ note }}
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
import { ref, watch } from '@vue/composition-api'

export default {
  setup() {
    const date = new Date().toISOString().substr(0, 10)
    const pickerDate = ref(null)
    const notes = ref([])
    const allNotes = [
      'President met with prime minister',
      'New power plant opened',
      'Rocket launch announced',
      'Global warming discussion cancelled',
      'Company changed its location',
    ]

    watch(pickerDate, () => {
      notes.value = [
        allNotes[Math.floor(Math.random() * 5)],
        allNotes[Math.floor(Math.random() * 5)],
        allNotes[Math.floor(Math.random() * 5)],
      ].filter((value, index, self) => self.indexOf(value) === index)
    })

    return {
      date,
      pickerDate,
      notes,
      allNotes,
    }
  },
}
</script>
`

export const datepickerBirthdayPicker = `
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
`

export const datepickerReadonlyAndDisabled = `
<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-date-picker
        v-model="date"
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
        color="primary"
        disabled
      ></v-date-picker>
    </v-col>
  </v-row>
</template>

<script>
export default {
  setup() {
    const date = new Date().toISOString().substr(0, 10)

    return { date }
  },
}
</script>
`

export const datepickerIcons = `
<template>
  <v-date-picker
    v-model="picker"
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
    const picker = new Date().toISOString().substr(0, 10)

    return {
      picker,

      // icons
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

export const datepickerDateButton = `
<template>
  <v-date-picker
    v-model="date"
    color="primary"
    @contextmenu:year="contextMenu"
    @dblclick:date="dblClick"
  ></v-date-picker>
</template>

<script>
import { ref, set } from '@vue/composition-api'

export default {
  setup() {
    const date = new Date().toISOString().substr(0, 10)
    const done = ref([false, false, false])
    const mouseMonth = ref(null)

    const contextMenu = (year, event) => {
      set(done.value, 2, true)
      event.preventDefault()

      // eslint-disable-next-line no-alert
      alert(\`You have activated context menu for year \${year}\`)
    }

    const dblClick = d => {
      set(done.value, 0, true)

      // eslint-disable-next-line no-alert
      alert(\`You have just double clicked the following date: \${d}\`)
    }

    return {
      date,
      done,
      mouseMonth,
      contextMenu,
      dblClick,
    }
  },
}
</script>
`

export const datepickerFormatting = `
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

      return \`\${month}/\${day}/\${year}\`
    }

    let dateFormatted = formatDate(new Date().toISOString().substr(0, 10))

    const parseDate = dates => {
      if (!dates) return null
      const [month, day, year] = dates.split('/')

      return \`\${year}-\${month.padStart(2, '0')}-\${day.padStart(2, '0')}\`
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
`

export const datepickerColors = `
<template>
  <v-date-picker
    v-model="picker"
    color="success"
  ></v-date-picker>
</template>

<script>
export default {
  setup() {
    const picker = new Date().toISOString().substr(0, 10)
    const picker2 = new Date().toISOString().substr(0, 10)

    return {
      picker,
      picker2,
    }
  },
}
</script>
`

export const datepickerWidth = `
<template>
  <v-date-picker
    v-model="date"
    color="primary"
    full-width
  ></v-date-picker>
</template>

<script>
export default {
  setup() {
    const date = new Date().toISOString().substr(0, 10)

    return { date }
  },
}
</script>
`

export const datepickerInternationalization = `
<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-date-picker
        v-model="picker"
        :first-day-of-week="0"
        locale="zh-cn"
        color="primary"
      ></v-date-picker>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-date-picker
        v-model="picker"
        :first-day-of-week="1"
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
    const picker = ref(new Date().toISOString().substr(0, 10))

    return { picker }
  },
}
</script>
`

export const datepickerAllowedDates = `
<template>
  <v-date-picker
    v-model="date"
    color="primary"
    :allowed-dates="allowedDates"
    class="mt-4"
    min="2016-06-15"
    max="2018-03-20"
  ></v-date-picker>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const date = ref('2018-03-02')

    const allowedDates = val => parseInt(val.split('-')[2], 10) % 2 === 0

    return {
      date,
      allowedDates,
    }
  },
}
</script>
`
