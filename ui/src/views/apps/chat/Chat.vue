<template>
  <v-card class="max-h-content-container app-chat position-relative overflow-hidden text-sm">
    <!-- Navigation Drawer: Left Sidebar -->
    <v-navigation-drawer
      v-model="isLeftSidebarOpen"
      width="374"
      touchless
      :right="$vuetify.rtl"
      mobile-breakpoint="sm"
      :temporary="$vuetify.breakpoint.xsOnly"
      absolute
    >
      <chat-left-sidebar-content
        :chats-contacts="chatsContacts"
        :contacts="contacts"
        :active-chat-contact-id="activeChat.contact ? activeChat.contact.id : null"
        :profile-user-minimal-data="profileUserDataMinimal"
        @close-left-sidebar="isLeftSidebarOpen = false"
        @open-chat="openChatOfContact"
        @open-chat-user-profile-sidebar-content="isUserProfileSidebarOpen = true"
      ></chat-left-sidebar-content>
    </v-navigation-drawer>

    <!-- Navigation Drawer: User Profile -->
    <v-navigation-drawer
      v-model="isUserProfileSidebarOpen"
      width="374"
      absolute
      :right="$vuetify.rtl"
      touchless
      temporary
    >
      <chat-user-profile-sidebar-content
        :profile-user-data="profileUserData"
        @close-user-profile-sidebar="isUserProfileSidebarOpen = false"
      ></chat-user-profile-sidebar-content>
    </v-navigation-drawer>

    <!-- Navigation Drawer: Active Chat -->
    <v-navigation-drawer
      v-model="isActiveChatUserProfileSidebarOpen"
      width="374"
      absolute
      temporary
      :right="!$vuetify.rtl"
      touchless
    >
      <chat-active-chat-user-profile-sidebar-content
        v-if="activeChat.contact"
        :profile-user-data="activeChat.contact"
        @close-active-chat-user-profile-sidebar="isActiveChatUserProfileSidebarOpen = false"
      ></chat-active-chat-user-profile-sidebar-content>
    </v-navigation-drawer>
    <div
      class="chat-content-area h-full d-flex flex-column"
      :style="contentStyles"
    >
      <!-- Active Chat -->
      <div
        v-if="activeChat.contact"
        class="h-full"
      >
        <!-- Navbar -->
        <div
          class="d-flex align-center justify-space-between px-5 py-4"
          style="height:72px"
        >
          <!-- Sidebar Toggler, Avatar & Name -->
          <div class="d-flex align-center">
            <v-btn
              icon
              class="me-2 d-inline-block d-md-none"
            >
              <v-icon
                v-show="!isLeftSidebarOpen"
                @click="isLeftSidebarOpen = true"
              >
                {{ icons.mdiMenu }}
              </v-icon>
            </v-btn>
            <v-badge
              bottom
              overlap
              dot
              bordered
              :color="resolveAvatarBadgeVariant(activeChat.contact.status)"
              offset-x="11"
              offset-y="11"
              class="me-3 user-status-badge"
            >
              <v-avatar
                size="38"
                class="cursor-pointer"
                :class="`v-avatar-light-bg ${resolveAvatarBadgeVariant(activeChat.contact.status)}--text`"
                @click="isActiveChatUserProfileSidebarOpen = true"
              >
                <v-img
                  v-if="activeChat.contact.avatar"
                  :src="activeChat.contact.avatar"
                ></v-img>
                <span v-else>{{ avatarText(activeChat.contact.fullName) }}</span>
              </v-avatar>
            </v-badge>
            <div class="d-flex flex-column">
              <p class="mb-0 text--primary font-weight-medium">
                {{ activeChat.contact.fullName }}
              </p>
              <span class="text--disabled text-xs">{{ activeChat.contact.role }}</span>
            </div>
          </div>

          <!-- Active Chat Actions -->
          <div class="d-flex align-baseline">
            <v-icon class="me-3 cursor-pointer d-none d-sm-inline-flex">
              {{ icons.mdiPhone }}
            </v-icon>
            <v-icon class="me-3 cursor-pointer d-none d-sm-inline-flex">
              {{ icons.mdiVideoOutline }}
            </v-icon>
            <v-icon class="me-3 cursor-pointer d-none d-sm-inline-flex">
              {{ icons.mdiMagnify }}
            </v-icon>
            <v-icon class="cursor-pointer">
              {{ icons.mdiDotsVertical }}
            </v-icon>
          </div>
        </div>

        <v-divider></v-divider>

        <perfect-scrollbar
          ref="refChatLogPS"
          :options="perfectScrollbarOptions"
          class="ps-chat-log h-full"
        >
          <chat-log
            :chat-data="activeChat"
            :profile-user-avatar="profileUserDataMinimal.avatar"
          ></chat-log>
        </perfect-scrollbar>

        <v-form
          autocomplete="off"
          @submit.prevent="sendMessage"
        >
          <v-text-field
            :key="activeChat.contact.id"
            v-model="chatInputMessage"
            placeholder="Type your message"
            solo
            class="pb-5 px-5 flex-grow-0 msg-input"
            hide-details
            height="50"
            autofocus
          >
            <template #append>
              <v-btn icon>
                <v-icon>{{ icons.mdiMicrophone }}</v-icon>
              </v-btn>
              <v-btn
                icon
                class="me-3"
              >
                <v-icon>
                  {{ icons.mdiAttachment }}
                </v-icon>
              </v-btn>
              <v-btn
                color="primary"
                elevation="0"
                type="submit"
                :icon="$vuetify.breakpoint.xsOnly"
              >
                <template v-if="$vuetify.breakpoint.smAndUp">
                  Send
                </template>
                <template v-else>
                  <v-icon>{{ icons.mdiSendOutline }}</v-icon>
                </template>
              </v-btn>
            </template>
          </v-text-field>
        </v-form>
      </div>

      <!-- Start Conversation -->
      <div
        v-else
        class="d-flex align-center justify-center flex-grow-1 flex-column"
      >
        <v-avatar
          size="109"
          class="elevation-3 mb-6 bg-card"
        >
          <v-icon
            size="50"
            class="rounded-0 text--primary"
          >
            {{ icons.mdiMessageTextOutline }}
          </v-icon>
        </v-avatar>
        <p
          class="mb-0 px-6 py-1 font-weight-medium text-lg elevation-3 rounded-xl text--primary bg-card"
          :class="[{ 'cursor-pointer': $vuetify.breakpoint.smAndDown }]"
          @click="startConversation"
        >
          Start Conversation
        </p>
      </div>
    </div>
  </v-card>
</template>

<script>
import { useResponsiveLeftSidebar } from '@core/comp-functions/ui'
// eslint-disable-next-line object-curly-newline
import {
  mdiMenu,
  mdiMessageTextOutline,
  mdiPhone,
  mdiVideoOutline,
  mdiMagnify,
  mdiDotsVertical,
  mdiAttachment,
  mdiMicrophone,
  mdiSendOutline,
} from '@mdi/js'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

import { ref, onUnmounted, nextTick } from '@vue/composition-api'
import { until, invoke } from '@vueuse/core'
import { getVuetify } from '@core/utils'
import { avatarText } from '@core/utils/filter'
import store from '@/store'
import chatStoreModule from './chatStoreModule'
import useChat from './useChat'

// Local Components
import ChatLeftSidebarContent from './ChatLeftSidebarContent.vue'
import ChatUserProfileSidebarContent from './ChatUserProfileSidebarContent.vue'
import ChatActiveChatUserProfileSidebarContent from './ChatActiveChatUserProfileSidebarContent.vue'
import ChatLog from './ChatLog.vue'

export default {
  components: {
    PerfectScrollbar,
    ChatLog,

    // Local Components
    ChatLeftSidebarContent,
    ChatUserProfileSidebarContent,
    ChatActiveChatUserProfileSidebarContent,
  },
  setup() {
    const { resolveAvatarBadgeVariant } = useChat()
    const $vuetify = getVuetify()

    const { isLeftSidebarOpen, contentStyles } = useResponsiveLeftSidebar({ sidebarWidth: 374 })

    // * Store module Registration
    const CHAT_APP_STORE_MODULE_NAME = 'app-chat'

    // Register module
    if (!store.hasModule(CHAT_APP_STORE_MODULE_NAME)) store.registerModule(CHAT_APP_STORE_MODULE_NAME, chatStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CHAT_APP_STORE_MODULE_NAME)) store.unregisterModule(CHAT_APP_STORE_MODULE_NAME)
    })

    // Scroll to Bottom ChatLog
    const refChatLogPS = ref(null)
    const scrollToBottomInChatLog = () => {
      const scrollEl = refChatLogPS.value.$el || refChatLogPS.value
      scrollEl.scrollTop = scrollEl.scrollHeight
    }

    // ————————————————————————————————————
    //* ——— User Profile Sidebar
    // ————————————————————————————————————
    // ? Will contain all details of profile user (e.g. settings, about etc.)
    const profileUserData = ref({})

    // ? Will contain id, name and avatar & status
    const profileUserDataMinimal = ref({})

    const isUserProfileSidebarOpen = ref(false)

    // * One time watch for fetching user profile sidebar data
    invoke(async () => {
      await until(isUserProfileSidebarOpen).toBe(true)

      store.dispatch('app-chat/getProfileUser').then(response => {
        profileUserData.value = response.data
      })
    })

    // ————————————————————————————————————
    //* ——— Chats & Contacts
    // ————————————————————————————————————
    const chatsContacts = ref([])
    const contacts = ref([])

    const fetchChatAndContacts = () => {
      store.dispatch('app-chat/fetchChatsAndContacts').then(response => {
        chatsContacts.value = response.data.chatsContacts
        contacts.value = response.data.contacts
        profileUserDataMinimal.value = response.data.profileUser
      })
    }

    fetchChatAndContacts()

    // ————————————————————————————————————
    //* ——— Single Chat
    // ————————————————————————————————————

    const activeChat = ref({})
    const chatInputMessage = ref('')
    const openChatOfContact = userId => {
      // Reset send message input value
      chatInputMessage.value = ''

      store.dispatch('app-chat/getChat', { userId }).then(response => {
        activeChat.value = response.data

        // Set unseenMsgs to 0
        const contact = chatsContacts.value.find(c => c.id === userId)
        if (contact) contact.chat.unseenMsgs = 0

        // Scroll to bottom
        nextTick(() => {
          scrollToBottomInChatLog()
        })
      })

      // if smAndDown =>  Close Chat & Contacts left sidebar
      if ($vuetify.breakpoint.smAndDown) isLeftSidebarOpen.value = false
    }

    const sendMessage = () => {
      if (!chatInputMessage.value) return
      const payload = {
        contactId: activeChat.value.contact.id,
        // eslint-disable-next-line no-use-before-define
        senderId: profileUserDataMinimal.value.id,
        message: chatInputMessage.value,
      }
      store.dispatch('app-chat/sendMessage', payload).then(response => {
        const { newMessageData, chat } = response.data

        // ? If it's not undefined => New chat is created (Contact is not in list of chats)
        if (chat !== undefined) {
          activeChat.value = { chat, contact: activeChat.value.contact }
          chatsContacts.value.push({
            ...activeChat.value.contact,
            chat: {
              id: chat.id,
              lastMessage: newMessageData,
              unseenMsgs: 0,
            },
          })
        } else {
          // Add message to log
          activeChat.value.chat.chat.push(newMessageData)
        }

        // Reset send message input value
        chatInputMessage.value = ''

        // Set Last Message for active contact
        const contact = chatsContacts.value.find(c => c.id === activeChat.value.contact.id)
        contact.chat.lastMessage = newMessageData

        // Scroll to bottom
        nextTick(() => {
          scrollToBottomInChatLog()
        })
      })
    }

    // ————————————————————————————————————
    //* ——— Active Chat
    // ————————————————————————————————————

    const isActiveChatUserProfileSidebarOpen = ref(false)

    // Open Sidebar in smAndDown when "start conversation" is clicked
    const startConversation = () => {
      if ($vuetify.breakpoint.mdAndUp) return
      isLeftSidebarOpen.value = true
    }

    // Perfect scrollbar options
    const perfectScrollbarOptions = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    return {
      // useChat
      resolveAvatarBadgeVariant,

      // Layout
      isLeftSidebarOpen,
      contentStyles,

      // Templare ref
      refChatLogPS,

      // User Profile Sidebar
      profileUserDataMinimal,
      profileUserData,
      isUserProfileSidebarOpen,

      // Chat & Contacts
      chatsContacts,
      contacts,

      // Single Chat
      activeChat,
      chatInputMessage,
      openChatOfContact,
      sendMessage,

      // Active Chat
      isActiveChatUserProfileSidebarOpen,

      // startConversation
      startConversation,

      // Perfect Scrollbar
      perfectScrollbarOptions,

      // Filter
      avatarText,

      icons: {
        mdiMenu,
        mdiMessageTextOutline,
        mdiPhone,
        mdiVideoOutline,
        mdiMagnify,
        mdiDotsVertical,
        mdiAttachment,
        mdiMicrophone,
        mdiSendOutline,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/apps/chat.scss';
</style>
