/* eslint-disable no-useless-escape */

export const checkboxValue = `
<template>
  <div class="d-flex demo-space-x">
    <v-checkbox
      v-model="checkbox"
      :true-value="1"
      :false-value="0"
      :label="\`\${checkbox.toString()}\`"
      hide-details
    ></v-checkbox>

    <v-checkbox
      v-model="checkboxString"
      true-value="show"
      false-value="hide"
      color="success"
      :label="\`\${checkboxString.toString()}\`"
      hide-details
    ></v-checkbox>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const checkbox = ref(1)
    const checkboxString = ref('show')

    return { checkbox, checkboxString }
  },
}
</script>
`

export const checkboxModelAsArray = `
<template>
  <div>
    <div class="d-flex demo-space-x flex-wrap">
      <v-checkbox
        v-model="selected"
        label="John"
        value="John"
      ></v-checkbox>

      <v-checkbox
        v-model="selected"
        label="Jacob"
        color="success"
        value="Jacob"
      ></v-checkbox>

      <v-checkbox
        v-model="selected"
        label="Jonhson"
        color="info"
        value="Jonhson"
      ></v-checkbox>
    </div>
    <p>{{ selected }}</p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const selected = ref(['John'])

    return { selected }
  },
}
</script>
`

export const checkboxBasic = `
<template>
  <div class="d-flex demo-space-x flex-wrap">
    <v-checkbox
      v-model="checkboxOne"
      hide-details
      :label="\`\${checkboxOne.toString()}\`"
    ></v-checkbox>

    <v-checkbox
      v-model="checkboxTwo"
      hide-details
      :label="\`\${checkboxTwo.toString()}\`"
    ></v-checkbox>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const checkboxOne = ref(true)
    const checkboxTwo = ref(false)

    return { checkboxOne, checkboxTwo }
  },
}
</script>
`

export const checkboxDense = `
<template>
  <div class="d-flex demo-space-x flex-wrap">
    <v-checkbox
      v-model="checkboxOne"
      dense
      hide-details
      :label="\`\${checkboxOne.toString()}\`"
    ></v-checkbox>

    <v-checkbox
      v-model="checkboxTwo"
      dense
      hide-details
      :label="\`\${checkboxTwo.toString()}\`"
    ></v-checkbox>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const checkboxOne = ref(true)
    const checkboxTwo = ref(false)

    return { checkboxOne, checkboxTwo }
  },
}
</script>
`

export const checkboxInlineTextField = `
<template>
  <div>
    <v-row align="center">
      <v-checkbox
        v-model="includeFiles"
        hide-details
        class="shrink me-2 mt-0"
      ></v-checkbox>
      <v-text-field label="Include files"></v-text-field>
    </v-row>
    <v-row align="center">
      <v-checkbox
        v-model="isInputEnabled"
        hide-details
        class="shrink me-2 mt-0"
      ></v-checkbox>
      <v-text-field
        :disabled="!isInputEnabled"
        label="I only work if you check the box"
      ></v-text-field>
    </v-row>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const includeFiles = ref(true)
    const isInputEnabled = ref(false)

    return { includeFiles, isInputEnabled }
  },
}
</script>
`

export const checkboxIcon = `
<template>
  <div class="d-flex demo-space-x flex-wrap">
    <v-checkbox
      v-model="toggleCheckboxOne"
      :label="\`\${toggleCheckboxOne.toString()}\`"
      :on-icon="icons.mdiCheck"
      :off-icon="icons.mdiClose"
      hide-details
    ></v-checkbox>

    <v-checkbox
      v-model="toggleCheckboxTwo"
      :label="\`\${toggleCheckboxTwo.toString()}\`"
      :on-icon="icons.mdiAlarmCheck"
      :off-icon="icons.mdiAlarm"
      color="success"
      hide-details
    ></v-checkbox>

    <v-checkbox
      v-model="toggleCheckboxThree"
      :label="\`\${toggleCheckboxThree.toString()}\`"
      :on-icon="icons.mdiCheckCircle"
      :off-icon="icons.mdiCloseCircle"
      color="error"
      hide-details
    ></v-checkbox>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
// eslint-disable-next-line object-curly-newline
import { mdiCheck, mdiClose, mdiAlarm, mdiAlarmCheck, mdiCheckCircle, mdiCloseCircle } from '@mdi/js'

export default {
  setup() {
    const toggleCheckboxOne = ref(true)
    const toggleCheckboxTwo = ref(true)
    const toggleCheckboxThree = ref(true)

    return {
      toggleCheckboxOne,
      toggleCheckboxTwo,
      toggleCheckboxThree,

      // icons
      icons: {
        mdiCheck,
        mdiClose,
        mdiAlarm,
        mdiAlarmCheck,
        mdiCheckCircle,
        mdiCloseCircle,
      },
    }
  },
}
</script>
`

export const checkboxLabelSlot = `
<template>
  <v-checkbox
    v-model="checkbox"
    hide-details
  >
    <template #label>
      <div>
        I agree that
        <v-tooltip bottom>
          <template #activator="{ on }">
            <a
              href="javascript:void(0)"
              @click.stop
              v-on="on"
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </v-tooltip>
        is awesome
      </div>
    </template>
  </v-checkbox>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const checkbox = ref(false)

    return { checkbox }
  },
}
</script>
`

export const checkboxStates = `
<template>
  <div class="d-flex demo-space-x flex-wrap">
    <v-checkbox
      input-value="true"
      value
      label="On"
      hide-details
    ></v-checkbox>

    <v-checkbox
      value
      label="Off"
      hide-details
    ></v-checkbox>

    <v-checkbox
      value
      indeterminate
      label="Indeterminate"
      hide-details
    ></v-checkbox>

    <v-checkbox
      input-value="true"
      value
      disabled
      label="On disabled"
      hide-details
    ></v-checkbox>

    <v-checkbox
      value
      disabled
      label="Off disabled"
      hide-details
    ></v-checkbox>
  </div>
</template>
`

export const checkboxColors = `
<template>
  <div class="demo-space-x d-flex flex-wrap">
    <v-checkbox
      v-model="colorCheckbox"
      label="primary"
      color="primary"
      value="primary"
      hide-details
    ></v-checkbox>
    <v-checkbox
      v-model="colorCheckbox"
      label="secondary"
      color="secondary"
      value="secondary"
      hide-details
    ></v-checkbox>

    <v-checkbox
      v-model="colorCheckbox"
      label="success"
      color="success"
      value="success"
      hide-details
    ></v-checkbox>
    <v-checkbox
      v-model="colorCheckbox"
      label="info"
      color="info"
      value="info"
      hide-details
    ></v-checkbox>

    <v-checkbox
      v-model="colorCheckbox"
      label="warning"
      color="warning"
      value="warning"
      hide-details
    ></v-checkbox>
    <v-checkbox
      v-model="colorCheckbox"
      label="error"
      color="error"
      value="error"
      hide-details
    ></v-checkbox>
  </div>
</template>

<script>
export default {
  setup() {
    const colorCheckbox = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

    return { colorCheckbox }
  },
}
</script>
`
