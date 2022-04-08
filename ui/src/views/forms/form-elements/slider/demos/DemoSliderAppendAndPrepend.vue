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
