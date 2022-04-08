/* eslint-disable no-useless-escape */

export const ratingBasic = `
<template>
  <v-rating
    background-color="warning"
    color="warning"
  ></v-rating>
</template>
`

export const ratingHover = `
<template>
  <v-rating
    hover
    background-color="warning"
    color="warning"
  ></v-rating>
</template>
`

export const ratingDense = `
<template>
  <v-rating
    dense
    background-color="warning"
    color="warning"
  ></v-rating>
</template>
`

export const ratingIncremented = `
<template>
  <v-rating
    v-model="rating"
    color="warning"
    background-color="warning"
    half-increments
    hover
  ></v-rating>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const rating = ref(4.5)

    return {
      rating,
    }
  },
}
</script>
`

export const ratingItemSlot = `
<template>
  <v-rating v-model="rating">
    <template v-slot:item="props">
      <v-icon
        :color="props.isFilled ? 'success' : 'secondary'"
        @click="props.click"
      >
        {{ props.isFilled ? icons.mdiEmoticonExcitedOutline : icons.mdiEmoticonSadOutline }}
      </v-icon>
    </template>
  </v-rating>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiEmoticonSadOutline, mdiEmoticonExcitedOutline } from '@mdi/js'

export default {
  setup() {
    const rating = ref(4.5)

    return {
      rating,

      // icons
      icons: {
        mdiEmoticonSadOutline,
        mdiEmoticonExcitedOutline,
      },
    }
  },
}
</script>
`

export const ratingSize = `
<template>
  <div>
    <v-rating
      v-model="rating"
      background-color="primary"
      color="primary"
      small
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="secondary"
      color="secondary"
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="success"
      color="success"
      medium
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="info"
      color="info"
      large
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="warning"
      color="warning"
      x-large
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="error"
      color="error"
      size="64"
    ></v-rating>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const rating = ref(4)

    return {
      rating,
    }
  },
}
</script>
`

export const ratingClearable = `
<template>
  <v-rating
    background-color="warning"
    color="warning"
    clearable
  ></v-rating>
</template>
`

export const ratingLength = `
<template>
  <div>
    <v-slider
      v-model="length"
      min="1"
      max="7"
      label="Custom length"
    ></v-slider>

    <v-rating
      v-model="rating"
      :length="length"
      color="error"
      background-color="secondary"
    ></v-rating>

    <div>
      <span class="caption text-uppercase">model:</span>
      <span class="font-weight-bold">
        {{ rating }}
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const length = ref(5)
    const rating = ref(2)

    return {
      length,
      rating,
    }
  },
}
</script>
`

export const ratingReadonly = `
<template>
  <v-rating
    background-color="primary"
    readonly
    :value="4"
  ></v-rating>
</template>
`

export const ratingColors = `
<template>
  <div>
    <v-rating
      v-model="rating"
      background-color="primary"
      color="primary"
      large
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="secondary"
      color="secondary"
      large
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="success"
      color="success"
      large
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="info"
      color="info"
      large
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="warning"
      color="warning"
      large
    ></v-rating>
    <v-rating
      v-model="rating"
      background-color="error"
      color="error"
      large
    ></v-rating>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const rating = ref(4)

    return {
      rating,
    }
  },
}
</script>
`
