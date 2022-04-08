/* eslint-disable no-useless-escape */

export const rangeSliderBasic = `
<template>
  <v-range-slider hide-details></v-range-slider>
</template>
`

export const rangeSliderVertical = `
<template>
  <v-range-slider
    v-model="values"
    vertical
  ></v-range-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const values = ref([20, 40])

    return { values }
  },
}
</script>
`

export const rangeSliderColor = `
<template>
  <v-range-slider
    v-model="values"
    color="success"
    track-color="secondary"
    hide-details
  ></v-range-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const values = ref([10, 60])

    return { values }
  },
}
</script>
`

export const rangeSliderStates = `
<template>
  <div>
    <v-range-slider
      v-model="values"
      disabled
      value="30"
      label="Disabled"
    ></v-range-slider>

    <v-range-slider
      v-model="values"
      readonly
      label="Readonly"
      hide-details
    ></v-range-slider>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const values = ref([30, 60])

    return { values }
  },
}
</script>
`

export const rangeSliderStep = `
<template>
  <v-range-slider
    v-model="values"
    step="10"
    hide-details
  ></v-range-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const values = ref([20, 40])

    return { values }
  },
}
</script>
`

export const rangeSliderMinAndMax = `
<template>
  <v-range-slider
    v-model="range"
    :max="max"
    :min="min"
    hide-details
    class="align-center"
  >
    <template #prepend>
      <v-text-field
        :value="range[0]"
        hide-details
        single-line
        type="number"
        style="width: 60px"
        @change="$set(range, 0, $event)"
      ></v-text-field>
    </template>
    <template #append>
      <v-text-field
        :value="range[1]"
        class="mt-0 pt-0"
        hide-details
        single-line
        type="number"
        style="width: 60px"
        @change="$set(range, 1, $event)"
      ></v-text-field>
    </template>
  </v-range-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const min = ref(-50)
    const max = ref(90)
    const range = ref([-20, 70])

    return { min, max, range }
  },
}
</script>
`

export const rangeSliderThumbLabel = `
<template>
  <v-range-slider
    :tick-labels="seasons"
    :value="[0, 1]"
    min="0"
    max="3"
    ticks="always"
    tick-size="4"
  >
    <template #thumb-label="props">
      <v-icon dark>
        {{ season(props.value) }}
      </v-icon>
    </template>
  </v-range-slider>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiSnowflake, mdiLeaf, mdiFire, mdiWater } from '@mdi/js'

export default {
  setup() {
    const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
    const icons = [mdiSnowflake, mdiLeaf, mdiFire, mdiWater]

    const season = value => icons[value]

    return { seasons, icons, season }
  },
}
</script>
`
