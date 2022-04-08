<template>
  <div class="demo-space-x d-flex flex-wrap">
    <!-- bottom -->
    <div class="me-6">
      <v-badge
        bottom
        overlap
        content="1"
      >
        <v-avatar>
          <v-img src="@/assets/images/avatars/3.png"></v-img>
        </v-avatar>
      </v-badge>
    </div>

    <!-- left -->
    <div class="me-6">
      <v-badge
        left
        overlap
        :icon="icons.mdiBellOutline"
      >
        <v-avatar>
          <v-img src="@/assets/images/avatars/5.png"></v-img>
        </v-avatar>
      </v-badge>
    </div>

    <!-- overlap -->
    <div class="me-6">
      <v-badge
        overlap
        content="3"
      >
        <v-avatar>
          <v-img src="@/assets/images/avatars/8.png"></v-img>
        </v-avatar>
      </v-badge>
    </div>

    <!-- inline -->
    <div>
      <v-badge
        inline
        content="5"
      >
        <v-avatar>
          <v-img src="@/assets/images/avatars/4.png"></v-img>
        </v-avatar>
      </v-badge>
    </div>
  </div>
</template>

<script>
import { mdiBellOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: { mdiBellOutline },
    }
  },
}
</script>
