/* eslint-disable no-useless-escape */

export const fileInputAccept = `
<template>
  <v-file-input
    accept="image/*"
    label="File input"
    hide-details
  ></v-file-input>
</template>
`

export const fileInputDense = `
<template>
  <v-file-input
    label="File input"
    dense
    hide-details
  ></v-file-input>
</template>
`

export const fileInputValidation = `
<template>
  <v-file-input
    :rules="rules"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    :prepend-icon="icons.mdiCameraOutline"
    label="Avatar"
  ></v-file-input>
</template>

<script>
import { mdiCameraOutline } from '@mdi/js'

export default {
  setup() {
    const rules = [
      value =>
        // eslint-disable-next-line implicit-arrow-linebreak
        !value || value.size < 1000000 || 'Avatar size should be less than 1 MB!',
    ]

    return { rules, icons: { mdiCameraOutline } }
  },
}
</script>
`

export const fileInputPrependIcon = `
<template>
  <v-file-input
    label="File input"
    filled
    :prepend-icon="icons.mdiCameraOutline"
    hide-details
  ></v-file-input>
</template>

<script>
import { mdiCameraOutline } from '@mdi/js'

export default {
  setup() {
    return { icons: { mdiCameraOutline } }
  },
}
</script>
`

export const fileInputMultiple = `
<template>
  <v-file-input
    multiple
    label="File input"
    hide-details
  ></v-file-input>
</template>
`

export const fileInputShowSize = `
<template>
  <v-file-input
    show-size
    label="File input"
    hide-details
  ></v-file-input>
</template>
`

export const fileInputLoading = `
<template>
  <v-file-input
    label="File input"
    loading
    hide-details
  ></v-file-input>
</template>
`

export const fileInputHideInput = `
<template>
  <v-file-input
    label="File input"
    hide-details
    hide-input
  ></v-file-input>
</template>
`

export const fileInputBasic = `
<template>
  <v-file-input
    label="File input"
    hide-details
  ></v-file-input>
</template>
`

export const fileInputSelectionSlot = `
<template>
  <v-file-input
    v-model="files"
    placeholder="Upload your documents"
    label="File input"
    multiple
    hide-details
  >
    <template #selection="{ text }">
      <v-chip
        small
        label
        outlined
        color="primary"
      >
        {{ text }}
      </v-chip>
    </template>
  </v-file-input>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const files = ref([])

    return { files }
  },
}
</script>
`

export const fileInputCounter = `
<template>
  <v-file-input
    show-size
    counter
    multiple
    label="File input"
  ></v-file-input>
</template>
`

export const fileInputChips = `
<template>
  <div>
    <v-file-input
      chips
      label="File input w/ chips"
    ></v-file-input>

    <v-file-input
      small-chips
      hide-details
      label="File input w/ small chips"
    ></v-file-input>
  </div>
</template>
`

export const fileInputVariant = `
<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-file-input
        label="Default"
      ></v-file-input>

      <v-file-input
        label="Outlined"
        outlined
      ></v-file-input>

      <v-file-input
        label="Shaped"
        shaped
        outlined
      ></v-file-input>

      <v-file-input
        label="Solo"
        solo
        hide-details
      ></v-file-input>
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-file-input
        label="Filled"
        filled
      ></v-file-input>

      <v-file-input
        label="Solo Inverted"
        solo-inverted
      ></v-file-input>

      <v-file-input
        label="flat"
        solo-inverted
        flat
      ></v-file-input>

      <v-file-input
        label="Rounded"
        rounded
        filled
        hide-details
      ></v-file-input>
    </v-col>
  </v-row>
</template>
`
