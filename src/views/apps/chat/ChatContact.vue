<template>
  <div
    class="chat-contact d-flex align-center pa-3 cursor-pointer rounded-lg"
    :class="{'bg-gradient-primary active-chat-contact': isActive}"
    v-on="$listeners"
  >
    <v-badge
      bottom
      overlap
      dot
      bordered
      :color="resolveAvatarBadgeVariant(user.status)"
      offset-x="11"
      offset-y="11"
      class="me-3 user-status-badge"
      :value="isChatContact"
    >
      <v-avatar
        size="38"
        class="v-avatar-light-bg"
        :class="[{'bg-static-white': isChatContact && isActive}, `${resolveAvatarBadgeVariant(user.status)}--text`]"
      >
        <v-img
          v-if="user.avatar"
          :src="user.avatar"
        ></v-img>
        <span v-else>{{ avatarText(user.fullName) }}</span>
      </v-avatar>
    </v-badge>
    <div class="flex-grow-1 overflow-hidden">
      <p class="mb-0 font-weight-medium text--primary">
        {{ user.fullName }}
      </p>
      <p class="text--disabled mb-0 text-truncate">
        {{ isChatContact ? user.chat.lastMessage.message : user.about }}
      </p>
    </div>
    <div
      v-if="isChatContact"
      class="chat-meta d-flex flex-column align-self-stretch align-end"
    >
      <p class="text-no-wrap mb-0">
        {{ formatDateToMonthShort(user.chat.lastMessage.time, { hour: 'numeric', minute: 'numeric' }) }}
      </p>
      <v-badge
        v-if="user.chat.unseenMsgs"
        color="error"
        inline
        :content="user.chat.unseenMsgs"
        class="number-badge"
      >
      </v-badge>
    </div>
  </div>
</template>

<script>
import { formatDateToMonthShort, avatarText } from '@core/utils/filter'
import useChat from './useChat'

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    isChatContact: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { resolveAvatarBadgeVariant } = useChat()

    return { formatDateToMonthShort, resolveAvatarBadgeVariant, avatarText }
  },
}
</script>

<style>
</style>
