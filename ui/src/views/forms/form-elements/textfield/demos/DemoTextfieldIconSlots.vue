<template>
  <v-text-field
    v-model="message"
    outlined
    clearable
    label="Message"
    type="text"
    hide-details
  >
    <template v-slot:prepend>
      <v-tooltip
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">
            {{ icons.mdiHelpCircleOutline }}
          </v-icon>
        </template>
        I'm a tooltip
      </v-tooltip>
    </template>
    <template v-slot:append>
      <v-fade-transition leave-absolute>
        <v-progress-circular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        ></v-progress-circular>
        <v-img
          v-else
          :src="appLogo"
          max-height="30px"
          max-width="30px"
          alt="logo"
          contain
        ></v-img>
      </v-fade-transition>
    </template>
    <template v-slot:append-outer>
      <v-btn
        color="primary"
        @click="clickMe"
      >
        <v-icon left>
          {{ icons.mdiTarget }}
        </v-icon>Click me
      </v-btn>
    </template>
  </v-text-field>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiHelpCircleOutline, mdiMenu, mdiTarget } from '@mdi/js'
import themeConfig from '@themeConfig'

export default {
  setup() {
    const message = ref('Hey!')
    const loading = ref(false)

    const clickMe = () => {
      loading.value = ref(true)
      message.value = 'Wait for it...'

      setTimeout(() => {
        loading.value = false
        message.value = "You've clicked me!"
      }, 2000)
    }

    return {
      message,
      loading,
      clickMe,

      // themeConfig
      appLogo: themeConfig.app.logo,

      icons: {
        mdiHelpCircleOutline,
        mdiMenu,
        mdiTarget,
      },
    }
  },
}
</script>
