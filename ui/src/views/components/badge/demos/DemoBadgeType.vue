<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <v-badge
      avatar
      overlap
    >
      <template #badge>
        <v-avatar size="15">
          <v-icon>
            {{ icons.mdiInformationVariant }}
          </v-icon>
        </v-avatar>
      </template>

      <v-avatar>
        <v-img src="@/assets/images/avatars/1.png"></v-img>
      </v-avatar>
    </v-badge>

    <!-- icon -->
    <v-badge
      :icon="icons.mdiLockOpenOutline"
      overlap
    >
      <v-avatar>
        <v-img src="@/assets/images/avatars/2.png"></v-img>
      </v-avatar>
    </v-badge>

    <!-- tile -->
    <v-badge
      tile
      content="5"
      overlap
    >
      <v-avatar>
        <v-img src="@/assets/images/avatars/3.png"></v-img>
      </v-avatar>
    </v-badge>
  </div>
</template>

<script>
import { mdiLockOpenOutline, mdiInformationVariant } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiLockOpenOutline,
        mdiInformationVariant,
      },
    }
  },
}
</script>
