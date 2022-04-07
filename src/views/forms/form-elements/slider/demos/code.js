/* eslint-disable no-useless-escape */

export const sliderIcons = `
<template>
  <div>
    <v-slider
      v-model="media"
      :prepend-icon="icons.mdiVolumeHigh"
    ></v-slider>

    <v-slider
      v-model="alarm"
      :append-icon="icons.mdiAlarm"
    ></v-slider>

    <v-slider
      v-model="zoom"
      :append-icon="icons.mdiMagnifyPlusOutline"
      :prepend-icon="icons.mdiMagnifyMinusOutline"
      hide-details
      @click:append="zoomIn"
      @click:prepend="zoomOut"
    ></v-slider>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
// eslint-disable-next-line object-curly-newline
import { mdiVolumeHigh, mdiAlarm, mdiMagnifyPlusOutline, mdiMagnifyMinusOutline } from '@mdi/js'

export default {
  setup() {
    const media = ref(0)
    const alarm = ref(0)
    const zoom = ref(0)

    const zoomOut = () => {
      zoom.value = zoom.value - 10 || 0
    }

    const zoomIn = () => {
      zoom.value = zoom.value + 10 || 100
    }

    return {
      media,
      alarm,
      zoom,
      zoomOut,
      zoomIn,

      // icon
      icons: {
        mdiVolumeHigh,
        mdiAlarm,
        mdiMagnifyPlusOutline,
        mdiMagnifyMinusOutline,
      },
    }
  },
}
</script>
`

export const sliderTicks = `
<template>
  <div>
    <v-slider
      v-model="value"
      step="10"
      ticks
      hint="Show ticks when using slider"
      persistent-hint
    ></v-slider>

    <v-slider
      v-model="value"
      step="10"
      ticks="always"
      hint="Always show ticks"
      persistent-hint
    ></v-slider>

    <v-slider
      v-model="value"
      step="10"
      ticks="always"
      tick-size="4"
      hint="Tick size"
      persistent-hint
    ></v-slider>

    <v-slider
      v-model="fruits"
      :tick-labels="ticksLabels"
      :max="3"
      step="1"
      ticks="always"
      tick-size="4"
    ></v-slider>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const value = ref(0)
    const fruits = ref(0)
    const ticksLabels = ['Figs', 'Lemon', 'Pear', 'Apple']

    return { value, fruits, ticksLabels }
  },
}
</script>
`

export const sliderDiscrete = `
<template>
  <v-slider
    v-model="value"
    step="10"
    thumb-label
    ticks
    hide-details
  ></v-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const value = ref(0)

    return { value }
  },
}
</script>
`

export const sliderDisabledAndReadonly = `
<template>
  <div>
    <v-slider
      disabled
      label="Disabled"
      value="30"
    ></v-slider>

    <v-slider
      readonly
      label="Readonly"
      value="30"
      hide-details
    ></v-slider>
  </div>
</template>
`

export const sliderThumb = `
<template>
  <div>
    <v-slider
      v-model="slider"
      thumb-label
      class="mb-10"
      hide-details
    ></v-slider>

    <v-slider
      v-model="slider"
      thumb-label="always"
      class="mb-10"
      hide-details
    ></v-slider>

    <v-slider
      v-model="slider"
      :thumb-size="24"
      thumb-label="always"
      class="mb-10"
      hide-details
    ></v-slider>

    <v-slider
      v-model="slider"
      :thumb-size="24"
      thumb-label="always"
      hide-details
    >
      <template #thumb-label="{ value }">
        {{ satisfactionEmojis[Math.min(Math.floor(value / 10), 9)] }}
      </template>
    </v-slider>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const satisfactionEmojis = ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
    const slider = ref(45)

    return { satisfactionEmojis, slider }
  },
}
</script>
`

export const sliderBasic = `
<template>
  <div>
    <v-slider label="Label"></v-slider>

    <v-slider
      inverse-label
      label="Inverse label"
      value="30"
      hide-details
    ></v-slider>
  </div>
</template>
`

export const sliderVertical = `
<template>
  <v-slider
    v-model="value"
    vertical
  ></v-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const value = ref(10)

    return { value }
  },
}
</script>
`

export const sliderValidation = `
<template>
  <v-slider
    v-model="value"
    :rules="rules"
    label="How many?"
    step="10"
    thumb-label="always"
    ticks
  ></v-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const value = ref(30)
    const rules = [v => v <= 40 || 'Only 40 in stock']

    return { value, rules }
  },
}
</script>
`

export const sliderMinAndMax = `
<template>
  <v-slider
    v-model="slider"
    class="align-center"
    :max="max"
    :min="min"
    hide-details
  >
    <template #append>
      <v-text-field
        v-model="slider"
        class="mt-0 pt-0"
        hide-details
        single-line
        type="number"
        style="width: 60px"
      ></v-text-field>
    </template>
  </v-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const min = ref(-50)
    const max = ref(90)
    const slider = ref(40)

    return { min, max, slider }
  },
}
</script>
`

export const sliderColors = `
<template>
  <div>
    <v-slider
      v-model="slider1.val"
      :color="slider1.color"
      :label="slider1.label"
    ></v-slider>

    <v-slider
      v-model="slider2.val"
      :label="slider2.label"
      :track-color="slider2.color"
      class="my-6"
    ></v-slider>

    <v-slider
      v-model="slider3.val"
      :label="slider3.label"
      :thumb-color="slider3.color"
      thumb-label="always"
      hide-details
    ></v-slider>
  </div>
</template>

<script>
export default {
  setup() {
    const slider1 = { label: 'color', val: 25, color: 'error' }
    const slider2 = { label: 'track-color', val: 75, color: 'error' }
    const slider3 = { label: 'thumb-color', val: 50, color: 'error' }

    return { slider1, slider2, slider3 }
  },
}
</script>
`

export const sliderStep = `
<template>
  <v-slider
    v-model="value"
    step="10"
    hide-details
  ></v-slider>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const value = ref(10)

    return { value }
  },
}
</script>
`

export const sliderAppendTextField = `
<template>
  <div>
    <v-responsive
      :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
      height="300px"
    ></v-responsive>

    <div class="mt-5">
      <v-slider
        v-model="redColorValue"
        :max="255"
        label="R"
        hide-details
        class="align-center"
      >
        <template #append>
          <v-text-field
            v-model="redColorValue"
            class="mt-0 pt-0"
            type="number"
            style="width: 60px"
          ></v-text-field>
        </template>
      </v-slider>

      <v-slider
        v-model="greenColorValue"
        :max="255"
        label="G"
        hide-details
        class="align-center"
      >
        <template #append>
          <v-text-field
            v-model="greenColorValue"
            class="mt-0 pt-0"
            type="number"
            style="width: 60px"
          ></v-text-field>
        </template>
      </v-slider>

      <v-slider
        v-model="blueColorValue"
        :max="255"
        label="B"
        hide-details
        class="align-center"
      >
        <template #append>
          <v-text-field
            v-model="blueColorValue"
            class="mt-0 pt-0"
            type="number"
            style="width: 60px"
          ></v-text-field>
        </template>
      </v-slider>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const redColorValue = ref(115)
    const greenColorValue = ref(103)
    const blueColorValue = ref(240)

    return { redColorValue, greenColorValue, blueColorValue }
  },
}
</script>
`

export const sliderAppendAndPrepend = `
<template>
  <div>
    <v-row
      class="mb-4"
      justify="space-between"
    >
      <v-col class="text-left">
        <span
          class="display-3 font-weight-light"
          v-text="bpm"
        ></span>
        <span class="subheading font-weight-light me-1">BPM</span>
        <v-fade-transition>
          <v-avatar
            v-if="isPlaying"
            :color="color"
            size="12"
          ></v-avatar>
        </v-fade-transition>
      </v-col>

      <v-col class="text-right">
        <v-btn
          :color="color"
          dark
          depressed
          fab
          @click="toggle"
        >
          <v-icon large>
            {{ isPlaying ? icons.mdiPause : icons.mdiPlay }}
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-slider
      v-model="bpm"
      :color="color"
      track-color="grey"
      always-dirty
      min="40"
      max="218"
      hide-details
    >
      <template #prepend>
        <v-icon
          :color="color"
          @click="decrement"
        >
          {{ icons.mdiMinus }}
        </v-icon>
      </template>

      <template #append>
        <v-icon
          :color="color"
          @click="increment"
        >
          {{ icons.mdiPlus }}
        </v-icon>
      </template>
    </v-slider>
  </div>
</template>

<script>
import { computed, ref } from '@vue/composition-api'
// eslint-disable-next-line object-curly-newline
import { mdiMinus, mdiPlus, mdiPause, mdiPlay } from '@mdi/js'

export default {
  setup() {
    const bpm = ref(40)
    const interval = ref(null)
    const isPlaying = ref(false)

    const color = computed(() => {
      if (bpm.value < 100) return 'primary'
      if (bpm.value < 125) return 'success'
      if (bpm.value < 140) return 'info'
      if (bpm.value < 175) return 'warning'

      return 'error'
    })

    const decrement = () => {
      bpm.value -= 1
    }

    const increment = () => {
      bpm.value += 1
    }

    const toggle = () => {
      isPlaying.value = !isPlaying.value
    }

    return {
      bpm,
      interval,
      isPlaying,
      color,
      decrement,
      increment,
      toggle,

      // icon
      icons: {
        mdiMinus,
        mdiPlus,
        mdiPause,
        mdiPlay,
      },
    }
  },
}
</script>
`
