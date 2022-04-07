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
