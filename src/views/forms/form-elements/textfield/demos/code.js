/* eslint-disable no-useless-escape */

export const textfieldCounter = `
<template>
  <div>
    <v-text-field
      v-model="title"
      :rules="rules"
      counter="25"
      hint="This field uses counter prop"
      label="Regular"
    ></v-text-field>

    <v-text-field
      v-model="description"
      :rules="rules"
      counter
      maxlength="25"
      hint="This field uses maxlength attribute"
      label="Limit exceeded"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  setup() {
    const title = 'Preliminary report'
    const description = 'California is a state in the western United States'
    const rules = [v => v.length <= 25 || 'Max 25 characters']

    return {
      title,
      description,
      rules,
    }
  },
}
</script>
`

export const textfieldSingleLine = `
<template>
  <v-text-field
    label="Regular"
    single-line
    hide-details
  ></v-text-field>
</template>
`

export const textfieldIcons = `
<template>
  <div>
    <v-text-field
      label="Prepend"
      :prepend-icon="icons.mdiMapMarkerOutline"
    ></v-text-field>

    <v-text-field
      label="Prepend inner"
      :prepend-inner-icon="icons.mdiMapMarkerOutline"
    ></v-text-field>

    <v-text-field
      label="Append"
      :append-icon="icons.mdiMapMarkerOutline"
    ></v-text-field>

    <v-text-field
      label="Append outer"
      :append-outer-icon="icons.mdiMapMarkerOutline"
      hide-details
    ></v-text-field>
  </div>
</template>

<script>
import { mdiMapMarkerOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiMapMarkerOutline,
      },
    }
  },
}
</script>
`

export const textfieldDense = `
<template>
  <v-text-field
    label="Outlined"
    outlined
    dense
    hide-details
  ></v-text-field>
</template>
`

export const textfieldValidationOnBlur = `
<template>
  <v-form>
    <v-text-field
      v-model="email"
      :rules="[rules.required, rules.email]"
      label="E-mail"
      validate-on-blur
    ></v-text-field>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const email = ref('')
    const rules = {
      required: value => !!value || 'Required.',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return pattern.test(value) || 'Invalid e-mail.'
      },
    }

    return {
      email,
      rules,
    }
  },
}
</script>
`

export const textfieldIconSlots = `
<template>
  <v-text-field
    v-model="message"
    outlined
    clearable
    label="Message"
    type="text"
    hide-details
  >
    <template v-slot:prepend>
      <v-tooltip
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">
            {{ icons.mdiHelpCircleOutline }}
          </v-icon>
        </template>
        I'm a tooltip
      </v-tooltip>
    </template>
    <template v-slot:append>
      <v-fade-transition leave-absolute>
        <v-progress-circular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        ></v-progress-circular>
        <v-img
          v-else
          :src="appLogo"
          max-height="30px"
          max-width="30px"
          alt="logo"
          contain
        ></v-img>
      </v-fade-transition>
    </template>
    <template v-slot:append-outer>
      <v-btn
        color="primary"
        @click="clickMe"
      >
        <v-icon left>
          {{ icons.mdiTarget }}
        </v-icon>Click me
      </v-btn>
    </template>
  </v-text-field>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiHelpCircleOutline, mdiMenu, mdiTarget } from '@mdi/js'
import themeConfig from '@themeConfig'

export default {
  setup() {
    const message = ref('Hey!')
    const loading = ref(false)

    const clickMe = () => {
      loading.value = ref(true)
      message.value = 'Wait for it...'

      setTimeout(() => {
        loading.value = false
        message.value = "You've clicked me!"
      }, 2000)
    }

    return {
      message,
      loading,
      clickMe,

      // themeConfig
      appLogo: themeConfig.app.logo,

      icons: {
        mdiHelpCircleOutline,
        mdiMenu,
        mdiTarget,
      },
    }
  },
}
</script>
`

export const textfieldPasswordInput = `
<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-text-field
        v-model="password"
        :append-icon="show1 ? icons.mdiEyeOutline : icons.mdiEyeOffOutline"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-text-field
        :append-icon="show2 ? icons.mdiEyeOutline : icons.mdiEyeOffOutline"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        value="wqfasds"
        class="input-group--focused"
        @click:append="show2 = !show2"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'

export default {
  setup() {
    const show1 = ref(false)
    const show2 = ref(true)
    const password = ref('Password')

    const rules = {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
    }

    return {
      show1,
      show2,
      password,
      rules,

      // icons
      icons: {
        mdiEyeOffOutline,
        mdiEyeOutline,
      },
    }
  },
}
</script>
`

export const textfieldValidation = `
<template>
  <v-form>
    <v-text-field
      v-model="email"
      :rules="[rules.required, rules.email]"
      label="E-mail"
    ></v-text-field>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const email = ref('')
    const rules = {
      required: value => !!value || 'Required.',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return pattern.test(value) || 'Invalid e-mail.'
      },
    }

    return {
      email,
      rules,
    }
  },
}
</script>
`

export const textfieldVariant = `
<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-text-field
        label="Default"
      ></v-text-field>

      <v-text-field
        label="Outlined"
        outlined
      ></v-text-field>

      <v-text-field
        label="Shaped"
        outlined
        shaped
      ></v-text-field>

      <v-text-field
        label="Solo"
        solo
        hide-details
      ></v-text-field>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <v-text-field
        label="Filled"
        filled
      ></v-text-field>

      <v-text-field
        label="Solo Inverted"
        solo-inverted
      ></v-text-field>

      <v-text-field
        label="Flat"
        solo-inverted
        flat
      ></v-text-field>

      <v-text-field
        label="Rounded"
        filled
        rounded
        hide-details
      ></v-text-field>
    </v-col>
  </v-row>
</template>
`

export const textfieldLabelSlot = `
<template>
  <v-text-field hide-details>
    <template v-slot:label>
      What about <strong>icon</strong> here? <v-icon style="vertical-align: middle">
        {{ icons.mdiFileFindOutline }}
      </v-icon>
    </template>
  </v-text-field>
</template>

<script>
import { mdiFileFindOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiFileFindOutline,
      },
    }
  },
}
</script>
`

export const textfieldCustomColors = `
<template>
  <v-text-field
    color="success"
    label="First name"
    hide-details
  ></v-text-field>
</template>
`

export const textfieldClearable = `
<template>
  <v-text-field
    label="Regular"
    clearable
    hide-details
  ></v-text-field>
</template>
`

export const textfieldBasic = `
<template>
  <v-text-field
    label="Regular"
    hide-details
  ></v-text-field>
</template>
`

export const textfieldPrefixesAndSuffixes = `
<template>
  <div>
    <v-text-field
      label="Amount"
      value="10.00"
      prefix="$"
    ></v-text-field>

    <v-text-field
      label="Weight"
      value="28.00"
      suffix="lbs"
    ></v-text-field>

    <v-text-field
      label="Email address"
      value="example"
      suffix="@gmail.com"
    ></v-text-field>

    <v-text-field
      label="Label Text"
      value="12:30:00"
      type="time"
      suffix="PST"
      hide-details
    ></v-text-field>
  </div>
</template>
`

export const textfieldIconEvents = `
<template>
  <v-text-field
    v-model="message"
    :append-icon="marker ? mdiMapMarkerOutline : mdiMapMarkerOffOutline"
    :append-outer-icon="message ? mdiSendOutline : mdiMicrophone"
    filled
    :clear-icon="mdiCloseCircleOutline"
    clearable
    label="Message"
    type="text"
    hide-details
    @click:append="toggleMarker"
    @click:append-outer="sendMessage"
    @click:clear="clearMessage"
  ></v-text-field>
</template>

<script>
import { ref } from '@vue/composition-api'
import {
  mdiMapMarkerOutline,
  mdiSendOutline,
  mdiCloseCircleOutline,
  mdiMicrophone,
  mdiMapMarkerOffOutline,
} from '@mdi/js'

export default {
  setup() {
    const password = ref('Password')
    const show = ref(false)
    const message = ref('Hey!')
    const marker = ref(true)
    const iconIndex = ref(0)

    const toggleMarker = () => {
      marker.value = !marker.value
    }

    const clearMessage = () => {
      message.value = ''
    }
    const resetIcon = () => {
      iconIndex.value = 0
    }

    const sendMessage = () => {
      resetIcon()
      clearMessage()
    }

    return {
      password,
      show,
      message,
      marker,
      iconIndex,
      sendMessage,
      toggleMarker,
      clearMessage,
      mdiMapMarkerOutline,
      mdiSendOutline,
      mdiCloseCircleOutline,
      mdiMicrophone,
      mdiMapMarkerOffOutline,
    }
  },
}
</script>
`

export const textfieldState = `
<template>
  <div>
    <v-text-field
      value="John Doe"
      label="Disabled"
      disabled
    ></v-text-field>

    <v-text-field
      value="John Doe"
      label="Readonly"
      readonly
    ></v-text-field>
  </div>
</template>
`

export const textfieldProgress = `
<template>
  <v-text-field
    v-model="textfieldValue"
    color="cyan darken"
    label="Text field"
    placeholder="Start typing..."
    loading
  >
    <template v-slot:progress>
      <v-progress-linear
        :value="progress"
        :color="color"
        absolute
        height="7"
      ></v-progress-linear>
    </template>
  </v-text-field>
</template>

<script>
import { computed, ref } from '@vue/composition-api'

export default {
  setup() {
    const textfieldValue = ref('')

    const progress = computed(() => Math.min(100, textfieldValue.value.length * 10))

    const color = computed(() => ['error', 'warning', 'success'][Math.floor(progress.value / 40)])

    return {
      textfieldValue,
      progress,
      color,
    }
  },
}
</script>
`
