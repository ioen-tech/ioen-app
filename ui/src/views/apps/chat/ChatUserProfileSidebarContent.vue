<template>
  <div class="user-profile-sidebar-content h-full">
    <!-- Close Button -->
    <div class="pt-2 me-2 text-right">
      <v-btn
        icon
        small
        @click="$emit('close-user-profile-sidebar')"
      >
        <v-icon>
          {{ icons.mdiClose }}
        </v-icon>
      </v-btn>
    </div>

    <!-- User Avatar + Name + Role -->
    <div class="text-center px-6 pt-4">
      <v-badge
        bottom
        overlap
        bordered
        :color="resolveAvatarBadgeVariant(profileUserData.status)"
        offset-x="24"
        offset-y="18"
        class="user-status-badge-lg mb-5"
      >
        <v-avatar
          size="80"
          :class="`v-avatar-light-bg ${resolveAvatarBadgeVariant(profileUserData.status)}--text`"
        >
          <v-img
            v-if="profileUserData.avatar"
            :src="profileUserData.avatar"
          ></v-img>
          <span
            v-else
            class="text-3xl"
          >{{ avatarText(profileUserData.fullName) }}</span>
        </v-avatar>
      </v-badge>
      <h2 class="mb-1 font-weight-medium text-base">
        {{ profileUserData.fullName }}
      </h2>
      <p class="text-capitalize">
        {{ profileUserData.role }}
      </p>
    </div>

    <!-- User Data -->
    <perfect-scrollbar
      class="ps-chat-user-profile-sidebar-content pb-6 px-6"
      :options="perfectScrollbarOptions"
    >
      <!-- About -->
      <div class="my-5">
        <span
          for="textarea-user-about"
          class="text-xs text--disabled"
          :class="rootThemeClasses"
        >ABOUT</span>
        <v-textarea
          id="textarea-user-about"
          v-model="profileUserData.about"
          outlined
          auto-grow
          class="mt-2"
          rows="4"
        ></v-textarea>
      </div>

      <!-- Status -->
      <div class="mb-5">
        <span
          class="text-xs text--disabled"
          :class="rootThemeClasses"
        >STATUS</span>
        <v-radio-group
          v-model="profileUserData.status"
          class="mt-2"
        >
          <v-radio
            v-for="radioOption in userStatusRadioOptions"
            :key="radioOption.title"
            :label="radioOption.title"
            :value="radioOption.value"
            :color="radioOption.color"
          ></v-radio>
        </v-radio-group>
      </div>

      <!-- Settings -->
      <div>
        <span
          class="text-xs text--disabled"
          :class="rootThemeClasses"
        >SETTINGS</span>
        <div class="d-flex align-center my-3">
          <v-icon class="me-2">
            {{ icons.mdiCheckCircleOutline }}
          </v-icon>
          <span>Two-step Vertification</span>
        </div>
        <div class="d-flex align-center mb-3">
          <v-icon class="me-2">
            {{ icons.mdiBellOutline }}
          </v-icon>
          <span>Notification</span>
        </div>
        <div class="d-flex align-center mb-3">
          <v-icon class="me-2">
            {{ icons.mdiAccountOutline }}
          </v-icon>
          <span>Invite Friends</span>
        </div>
        <div class="d-flex align-center">
          <v-icon class="me-2">
            {{ icons.mdiTrashCanOutline }}
          </v-icon>
          <span>Delete Account</span>
        </div>
      </div>

      <!-- Logout Button -->
      <v-btn
        color="primary"
        class="mt-11"
      >
        Logout
      </v-btn>
    </perfect-scrollbar>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiClose, mdiCheckCircleOutline, mdiBellOutline, mdiAccountOutline, mdiTrashCanOutline } from '@mdi/js'
import useVuetify from '@core/utils/vuetify'
import { avatarText } from '@core/utils/filter'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import useChat from './useChat'

export default {
  components: {
    PerfectScrollbar,
  },
  props: {
    profileUserData: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { resolveAvatarBadgeVariant } = useChat()
    const { rootThemeClasses } = useVuetify()

    const userStatusRadioOptions = [
      { title: 'Online', value: 'online', color: 'success' },
      { title: 'Away', value: 'away', color: 'warning' },
      { title: 'Do not disturb', value: 'busy', color: 'error' },
      { title: 'Offline', value: 'offline', color: 'secondary' },
    ]

    // Perfect scrollbar options
    const perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    return {
      // useChat
      resolveAvatarBadgeVariant,

      userStatusRadioOptions,

      // Perfect Scrollbar
      perfectScrollbarOptions,

      // Vuetify
      rootThemeClasses,

      // Filter
      avatarText,

      // Icons
      icons: {
        mdiClose,
        mdiCheckCircleOutline,
        mdiBellOutline,
        mdiAccountOutline,
        mdiTrashCanOutline,
      },
    }
  },
}
</script>

<style>
</style>
