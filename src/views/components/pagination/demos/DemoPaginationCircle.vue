<template>
  <v-pagination
    v-model="currentPage"
    :length="5"
    circle
  ></v-pagination>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const currentPage = ref(1)

    return { currentPage }
  },
}
</script>
