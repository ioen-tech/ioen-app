<template>
  <div>
    <v-textarea
      label="prepend-icon"
      rows="1"
      :prepend-icon="icons.mdiCommentOutline"
    ></v-textarea>

    <v-textarea
      :append-icon="icons.mdiCommentOutline"
      label="append-icon"
      rows="1"
    ></v-textarea>

    <v-textarea
      :prepend-inner-icon="icons.mdiCommentOutline"
      class="mx-2"
      label="prepend-inner-icon"
      rows="1"
    ></v-textarea>

    <v-textarea
      :append-outer-icon="icons.mdiCommentOutline"
      class="mx-2"
      label="append-outer-icon"
      rows="1"
    ></v-textarea>
  </div>
</template>

<script>
import { mdiCommentOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiCommentOutline,
      },
    }
  },
}
</script>
