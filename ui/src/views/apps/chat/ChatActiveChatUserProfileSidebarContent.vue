<template>
  <div class="user-profile-sidebar-content h-full">
    <!-- Close Button -->
    <div
      class="pt-2 me-2"
      :class="$vuetify.rtl ? 'text-left' : 'text-right'"
    >
      <v-btn
        icon
        small
        @click="$emit('close-active-chat-user-profile-sidebar')"
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
        <p class="mt-3">
          {{ profileUserData.about }}
        </p>
      </div>

      <!-- Personal Information -->
      <div class="mb-5">
        <span
          class="text-xs text--disabled"
          :class="rootThemeClasses"
        >PERSONAL INFORMATION</span>
        <div class="d-flex align-center my-3">
          <v-icon class="me-2">
            {{ icons.mdiEmailOutline }}
          </v-icon>
          <span>lucifer@email.com</span>
        </div>
        <div class="d-flex align-center mb-3">
          <v-icon class="me-2">
            {{ icons.mdiPhoneOutline }}
          </v-icon>
          <span>+1(123) 456 - 7890</span>
        </div>
        <div class="d-flex align-center">
          <v-icon class="me-2">
            {{ icons.mdiClockOutline }}
          </v-icon>
          <span>Mon - Fri 10AM - 8PM</span>
        </div>
      </div>

      <!-- Options -->
      <div>
        <span
          class="text-xs text--disabled"
          :class="rootThemeClasses"
        >OPTIONS</span>
        <div class="d-flex align-center my-3">
          <v-icon class="me-2">
            {{ icons.mdiBookmarkOutline }}
          </v-icon>
          <span>Add Tag</span>
        </div>
        <div class="d-flex align-center mb-3">
          <v-icon class="me-2">
            {{ icons.mdiStarOutline }}
          </v-icon>
          <span>Important Contact</span>
        </div>
        <div class="d-flex align-center mb-3">
          <v-icon class="me-2">
            {{ icons.mdiImageOutline }}
          </v-icon>
          <span>Shared Media</span>
        </div>
        <div class="d-flex align-center mb-3">
          <v-icon class="me-2">
            {{ icons.mdiTrashCanOutline }}
          </v-icon>
          <span>Delete Contact</span>
        </div>
        <div class="d-flex align-center">
          <v-icon
            class="me-3 ms-1"
            size="18"
          >
            {{ icons.mdiBlockHelper }}
          </v-icon>
          <span>Block Contact</span>
        </div>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiClose,
  mdiEmailOutline,
  mdiBookmarkOutline,
  mdiPhoneOutline,
  mdiClockOutline,
  mdiStarOutline,
  mdiImageOutline,
  mdiTrashCanOutline,
  mdiBlockHelper,
} from '@mdi/js'
import useVuetify from '@core/utils/vuetify'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import { avatarText } from '@core/utils/filter'
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
        mdiEmailOutline,
        mdiBookmarkOutline,
        mdiPhoneOutline,
        mdiClockOutline,
        mdiStarOutline,
        mdiImageOutline,
        mdiTrashCanOutline,
        mdiBlockHelper,
      },
    }
  },
}
</script>

<style>
</style>
