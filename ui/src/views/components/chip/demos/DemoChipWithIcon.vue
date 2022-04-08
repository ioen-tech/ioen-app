<template>
  <div class="demo-space-x">
    <v-chip>
      <v-icon
        class="me-1"
        size="18"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
      Account
    </v-chip>

    <v-chip color="primary">
      <v-icon
        class="me-1"
        size="18"
      >
        {{ icons.mdiStarOutline }}
      </v-icon>
      Premium
    </v-chip>

    <v-chip color="secondary">
      <v-icon
        size="18"
        class="me-1"
      >
        {{ icons.mdiCake }}
      </v-icon>
      1 Year
    </v-chip>

    <v-chip color="success">
      <v-icon
        class="me-1"
        size="18"
      >
        {{ icons.mdiBellOutline }}
      </v-icon>
      Notification
    </v-chip>

    <v-chip color="info">
      <v-icon
        class="me-1"
        size="18"
      >
        {{ icons.mdiForumOutline }}
      </v-icon>
      Message
    </v-chip>

    <v-chip color="warning">
      <v-icon
        class="me-1"
        size="18"
      >
        {{ icons.mdiAlertOutline }}
      </v-icon>
      Warning
    </v-chip>

    <v-chip color="error">
      <v-icon
        class="me-1"
        size="18"
      >
        {{ icons.mdiAlertCircleOutline }}
      </v-icon>
      Error
    </v-chip>
  </div>
</template>

<script>
import {
  mdiAccountOutline,
  mdiStarOutline,
  mdiCake,
  mdiBellOutline,
  mdiAlertCircleOutline,
  mdiAlertOutline,
  mdiForumOutline,
} from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiAccountOutline,
        mdiStarOutline,
        mdiCake,
        mdiBellOutline,
        mdiAlertCircleOutline,
        mdiAlertOutline,
        mdiForumOutline,
      },
    }
  },
}
</script>
