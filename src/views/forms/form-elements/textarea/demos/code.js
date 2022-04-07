/* eslint-disable no-useless-escape */

export const textareaVariant = `
<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-textarea
        label="Default"
        rows="2"
      ></v-textarea>

      <v-textarea
        label="Outlined"
        rows="2"
        outlined
      ></v-textarea>

      <v-textarea
        label="Shaped"
        rows="2"
        outlined
        shaped
      ></v-textarea>

      <v-textarea
        label="Solo"
        rows="2"
        solo
        hide-details
      ></v-textarea>
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-textarea
        label="Filled"
        rows="2"
        filled
      ></v-textarea>

      <v-textarea
        label="Solo Inverted"
        rows="2"
        solo-inverted
      ></v-textarea>

      <v-textarea
        label="Flat"
        rows="2"
        solo-inverted
        flat
      ></v-textarea>

      <v-textarea
        label="Solo Inverted"
        rows="1"
        filled
        rounded
        hide-details
      ></v-textarea>
    </v-col>
  </v-row>
</template>
`

export const textareaClearable = `
<template>
  <v-textarea
    clearable
    :clear-icon="icons.mdiCloseCircleOutline"
    label="Text"
    value="This is clearable text."
    hide-details
  ></v-textarea>
</template>

<script>
import { mdiCloseCircleOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiCloseCircleOutline,
      },
    }
  },
}
</script>
`

export const textareaBasic = `
<template>
  <v-textarea
    label="Default"
    hide-details
  ></v-textarea>
</template>
`

export const textareaAutoGrow = `
<template>
  <v-textarea
    label="Label"
    auto-grow
    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    hide-details
  ></v-textarea>
</template>
`

export const textareaStates = `
<template>
  <div>
    <v-textarea
      disabled
      label="Disabled"
      hint="Hint text"
      rows="2"
    ></v-textarea>

    <v-textarea
      readonly
      rows="2"
      label="Readonly"
      hint="Hint text"
    ></v-textarea>
  </div>
</template>
`

export const textareaValidationOnBlur = `
<template>
  <v-textarea
    label="Validation"
    :rules="rules"
    :value="value"
    rows="2"
    validate-on-blur
  ></v-textarea>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const rules = [v => v.length <= 25 || 'Max 25 characters']
    const value = ref('Hello!')

    return { rules, value }
  },
}
</script>
`

export const textareaRows = `
<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-textarea
        label="One row"
        auto-grow
        outlined
        rows="1"
        row-height="15"
      ></v-textarea>
    </v-col>
    <v-col
      cols="12"
      sm="6"
    >
      <v-textarea
        outlined
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      ></v-textarea>
    </v-col>
    <v-col
      cols="12"
      sm="6"
    >
      <v-textarea
        label="Three rows"
        auto-grow
        outlined
        rows="3"
        row-height="25"
      ></v-textarea>
    </v-col>
    <v-col
      cols="12"
      sm="6"
    >
      <v-textarea
        outlined
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
        hide-details
      ></v-textarea>
    </v-col>
  </v-row>
</template>
`

export const textareaIcons = `
<template>
  <div>
    <v-textarea
      label="prepend-icon"
      rows="1"
      :prepend-icon="icons.mdiCommentOutline"
    ></v-textarea>

    <v-textarea
      :append-icon="icons.mdiCommentOutline"
      label="append-icon"
      rows="1"
    ></v-textarea>

    <v-textarea
      :prepend-inner-icon="icons.mdiCommentOutline"
      class="mx-2"
      label="prepend-inner-icon"
      rows="1"
    ></v-textarea>

    <v-textarea
      :append-outer-icon="icons.mdiCommentOutline"
      class="mx-2"
      label="append-outer-icon"
      rows="1"
    ></v-textarea>
  </div>
</template>

<script>
import { mdiCommentOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiCommentOutline,
      },
    }
  },
}
</script>
`

export const textareaValidation = `
<template>
  <v-textarea
    label="Validation"
    :rules="rules"
    :value="value"
    rows="2"
  ></v-textarea>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const rules = [v => v.length <= 25 || 'Max 25 characters']
    const value = ref('Hello!')

    return { rules, value }
  },
}
</script>
`

export const textareaNoResize = `
<template>
  <v-textarea
    label="Text"
    no-resize
    rows="2"
    :value="value"
    hide-details
  ></v-textarea>
</template>

<script>
export default {
  setup() {
    const value = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      \`

    return { value }
  },
}
</script>
`

export const textareaBrowserAutocomplete = `
<template>
  <v-textarea
    autocomplete="email"
    label="Email"
  ></v-textarea>
</template>
`

export const textareaCounter = `
<template>
  <v-textarea
    counter
    label="Text"
    :value="value"
  ></v-textarea>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const value = ref('Hello!')

    return { value }
  },
}
</script>
`
