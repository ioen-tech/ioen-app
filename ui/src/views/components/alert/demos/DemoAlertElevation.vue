<template>
  <div>
    <v-slider
      v-model="alertShadow"
      :max="24"
      :min="0"
      thumb-label
    ></v-slider>

    <v-alert
      color="primary"
      dark
      class="ma-0"
      :elevation="alertShadow"
    >
      I'm an alert with box shadow.
    </v-alert>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const alertShadow = ref(5)

    return { alertShadow }
  },
}
</script>
