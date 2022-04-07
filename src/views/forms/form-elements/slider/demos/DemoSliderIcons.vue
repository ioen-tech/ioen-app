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
