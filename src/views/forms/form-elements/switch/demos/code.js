/* eslint-disable no-useless-escape */

export const switchFlat = `
<template>
  <div class="d-flex demo-space-x flex-wrap">
    <v-switch
      v-model="switch1"
      flat
      :label="\`Switch 1: \${switch1.toString()}\`"
      hide-details
    ></v-switch>
    <v-switch
      v-model="switch2"
      flat
      :label="\`Switch 2: \${switch2.toString()}\`"
      hide-details
    ></v-switch>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const switch1 = ref(true)
    const switch2 = ref(false)

    return { switch1, switch2 }
  },
}
</script>
`

export const switchModelAsArray = `
<template>
  <div class="demo-space-x">
    <v-switch
      v-model="people"
      color="primary"
      label="John"
      value="John"
    ></v-switch>

    <v-switch
      v-model="people"
      color="primary"
      label="Jacob"
      value="Jacob"
    ></v-switch>
    <p class="mb-0">
      {{ people }}
    </p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const people = ref(['John'])

    return { people }
  },
}
</script>
`

export const switchBasic = `
<template>
  <div class="demo-space-x">
    <v-switch
      v-model="switch1"
      :label="\`\${switch1.toString()}\`"
      hide-details
    ></v-switch>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const switch1 = ref(true)

    return { switch1 }
  },
}
</script>
`

export const switchTrueAndFalseValue = `
<template>
  <div class="d-flex flex-wrap demo-space-x">
    <v-switch
      v-model="switch1"
      :label="\`\${switch1.toString()}\`"
      :true-value="1"
      :false-value="0"
      hide-details
    ></v-switch>

    <v-switch
      v-model="switch2"
      :label="\`\${switch2.toString()}\`"
      true-value="show"
      false-value="hide"
      hide-details
    ></v-switch>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const switch1 = ref(1)
    const switch2 = ref('show')

    return { switch1, switch2 }
  },
}
</script>
`

export const switchStates = `
<template>
  <div class="d-flex flex-wrap demo-space-x">
    <v-switch
      color="primary"
      input-value="true"
      label="on"
      value
    ></v-switch>

    <v-switch
      color="primary"
      label="off"
    ></v-switch>

    <v-switch
      color="primary"
      input-value="true"
      disabled
      label="on disabled"
      value
    ></v-switch>

    <v-switch
      disabled
      label="off disabled"
    ></v-switch>

    <v-switch
      loading="warning"
      input-value="true"
      label="on loading"
      value
    ></v-switch>

    <v-switch
      loading="warning"
      label="off loading"
    ></v-switch>
  </div>
</template>
`

export const switchLabelSlot = `
<template>
  <v-switch
    v-model="switchMe"
    hide-details
  >
    <template #label>
      Turn on the progress: <v-progress-circular
        :indeterminate="switchMe"
        :value="0"
        size="24"
        class="ms-2"
      ></v-progress-circular>
    </template>
  </v-switch>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const switchMe = ref(false)

    return { switchMe }
  },
}
</script>
`

export const switchInset = `
<template>
  <div>
    <v-switch
      v-model="switch1"
      inset
      :label="\`Switch 1: \${switch1.toString()}\`"
    ></v-switch>
    <v-switch
      v-model="switch2"
      inset
      :label="\`Switch 2: \${switch2.toString()}\`"
      hide-details
    ></v-switch>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const switch1 = ref(true)
    const switch2 = ref(false)

    return { switch1, switch2 }
  },
}
</script>
`

export const switchColor = `
<template>
  <div class="d-flex flex-wrap demo-space-x">
    <v-switch
      v-model="toggleSwiteches"
      label="primary"
      color="primary"
      value="primary"
      hide-details
    ></v-switch>

    <v-switch
      v-model="toggleSwiteches"
      label="secondary"
      color="secondary"
      value="secondary"
      hide-details
    ></v-switch>

    <v-switch
      v-model="toggleSwiteches"
      label="success"
      color="success"
      value="success"
      hide-details
    ></v-switch>

    <v-switch
      v-model="toggleSwiteches"
      label="info"
      color="info"
      value="info"
      hide-details
    ></v-switch>

    <v-switch
      v-model="toggleSwiteches"
      label="warning"
      color="warning"
      value="warning"
      hide-details
    ></v-switch>

    <v-switch
      v-model="toggleSwiteches"
      label="error"
      color="error"
      value="error"
      hide-details
    ></v-switch>
  </div>
</template>

<script>
export default {
  setup() {
    const toggleSwiteches = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

    return { toggleSwiteches }
  },
}
</script>
`
