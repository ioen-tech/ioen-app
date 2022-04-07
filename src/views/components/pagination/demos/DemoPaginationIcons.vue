<template>
  <v-pagination
    v-model="currentPage"
    :length="5"
    :prev-icon="icons.mdiMenuLeft"
    :next-icon="icons.mdiMenuRight"
  ></v-pagination>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMenuLeft, mdiMenuRight } from '@mdi/js'

export default {
  setup() {
    const currentPage = ref(1)

    return {
      currentPage,

      // Icons
      icons: {
        mdiMenuLeft,
        mdiMenuRight,
      },
    }
  },
}
</script>
