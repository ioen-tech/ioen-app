<template>
  <div>
    <v-pagination
      v-model="pageSuccess"
      :length="7"
      color="success"
      class="mb-5"
    ></v-pagination>

    <v-pagination
      v-model="pageError"
      :length="7"
      color="error"
      class="mb-5"
    ></v-pagination>

    <v-pagination
      v-model="pageInfo"
      :length="7"
      color="info"
    ></v-pagination>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const pageSuccess = ref(1)
    const pageError = ref(2)
    const pageInfo = ref(3)

    return { pageSuccess, pageError, pageInfo }
  },
}
</script>
