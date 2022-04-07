/* eslint-disable no-useless-escape */

export const radioLabelSlot = `
<template>
  <v-radio-group
    v-model="radios"
    class="mt-0"
    hide-details
  >
    <template #label>
      <div>Your favourite <strong>search engine</strong></div>
    </template>
    <v-radio value="Google">
      <template #label>
        <div>Of course it's <strong class="success--text">Google</strong></div>
      </template>
    </v-radio>
    <v-radio value="Duckduckgo">
      <template #label>
        <div>Definitely <strong class="primary--text">Duckduckgo</strong></div>
      </template>
    </v-radio>
  </v-radio-group>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const radios = ref('Duckduckgo')

    return { radios }
  },
}
</script>
`

export const radioMandatory = `
<template>
  <v-radio-group
    v-model="radios"
    mandatory
    hide-details
    class="mt-0"
  >
    <v-radio
      label="Radio 1"
      value="radio-1"
    ></v-radio>
    <v-radio
      label="Radio 2"
      value="radio-2"
    ></v-radio>
  </v-radio-group>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const radios = ref(null)

    return { radios }
  },
}
</script>
`

export const radioColor = `
<template>
  <v-radio-group
    v-model="selectedRadio"
    class="mt-0"
    hide-details
  >
    <div class="d-flex flex-wrap demo-space-x">
      <v-radio
        label="primary"
        color="primary"
        value="primary"
      ></v-radio>
      <v-radio
        label="secondary"
        color="secondary"
        value="secondary"
      ></v-radio>
      <v-radio
        label="success"
        color="success"
        value="success"
      ></v-radio>
      <v-radio
        label="info"
        color="info"
        value="info"
      ></v-radio>
      <v-radio
        label="warning"
        color="warning"
        value="warning"
      ></v-radio>
      <v-radio
        label="error"
        color="error"
        value="error"
      ></v-radio>
    </div>
  </v-radio-group>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const selectedRadio = ref('primary')

    return { selectedRadio }
  },
}
</script>
`

export const radioDirection = `
<template>
  <div>
    <v-radio-group
      v-model="columnRadio"
      column
      class="mt-0"
    >
      <v-radio
        label="Option 1"
        value="radio-1"
      ></v-radio>
      <v-radio
        label="Option 2"
        value="radio-2"
      ></v-radio>
    </v-radio-group>

    <v-divider></v-divider>

    <v-radio-group
      v-model="rowRadio"
      row
      hide-details
    >
      <v-radio
        label="Option 1"
        value="radio-1"
      ></v-radio>
      <v-radio
        label="Option 2"
        value="radio-2"
      ></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const columnRadio = ref('radio-1')
    const rowRadio = ref(null)

    return { columnRadio, rowRadio }
  },
}
</script>
`

export const radioDense = `
<template>
  <div>
    <v-radio-group
      v-model="columnRadio"
      column
      dense
      class="mt-0"
    >
      <v-radio
        label="Option 1"
        value="radio-1"
      ></v-radio>
      <v-radio
        label="Option 2"
        value="radio-2"
      ></v-radio>
    </v-radio-group>

    <v-divider></v-divider>

    <v-radio-group
      v-model="rowRadio"
      row
      dense
      hide-details
    >
      <v-radio
        label="Option 1"
        value="radio-1"
      ></v-radio>
      <v-radio
        label="Option 2"
        value="radio-2"
      ></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const columnRadio = ref('radio-1')
    const rowRadio = ref(null)

    return { columnRadio, rowRadio }
  },
}
</script>
`

export const radioIcon = `
<template>
  <v-radio-group
    v-model="radioGroup"
    class="mt-0"
    hide-details
  >
    <v-radio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
      :off-icon="icons.mdiBellOffOutline"
      :on-icon="icons.mdiBellOutline"
    ></v-radio>
  </v-radio-group>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiBellOffOutline, mdiBellOutline } from '@mdi/js'

export default {
  setup() {
    const radioGroup = ref(1)

    return {
      radioGroup,
      icons: {
        mdiBellOffOutline,
        mdiBellOutline,
      },
    }
  },
}
</script>
`

export const radioValidation = `
<template>
  <v-radio-group
    v-model="radioGroup"
    class="mt-0"
    row
    :rules="rules"
  >
    <v-radio
      v-for="n in 3"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    ></v-radio>
  </v-radio-group>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const radioGroup = ref(1)
    const rules = [value => (value !== 3 ? true : 'Do not select the third one!')]

    return { radioGroup, rules }
  },
}
</script>
`

export const radioBasic = `
<template>
  <v-radio-group
    v-model="radioGroup"
    class="mt-0"
    hide-details
  >
    <v-radio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    ></v-radio>
  </v-radio-group>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const radioGroup = ref(1)

    return { radioGroup }
  },
}
</script>
`
