<template>
  <div class="d-flex align-center">
    <v-badge
      :content="messages"
      :value="messages"
      color="success"
      overlap
      class="me-10"
    >
      <v-icon large>
        {{ icons.mdiVuetify }}
      </v-icon>
    </v-badge>

    <div class="demo-space-x">
      <v-btn
        color="primary"
        @click="messages++"
      >
        Send Message
      </v-btn>

      <v-btn
        color="error"
        @click="messages = 0"
      >
        Clear Notifications
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mdiVuetify } from '@mdi/js'

export default {
  setup() {
    const messages = 0

    return {
      messages,
      icons: { mdiVuetify },
    }
  },
}
</script>
