<template>
  <div class="chat-log pa-5">
    <div
      v-for="(msgGrp, index) in formattedChatData.formattedChatLog"
      :key="msgGrp.senderId+String(index)"
      class="chat-group d-flex align-start"
      :class="[{'flex-row-reverse': msgGrp.senderId !== formattedChatData.contact.id}, { 'mb-8': formattedChatData.formattedChatLog.length-1 !== index }]"
    >
      <div
        class="chat-avatar"
        :class="msgGrp.senderId !== formattedChatData.contact.id ? 'ms-4' : 'me-4'"
      >
        <!-- <b-avatar
          size="36"
          class="avatar-border-2 box-shadow-1"
          variant="transparent"
          :src="msgGrp.senderId === formattedChatData.contact.id ? formattedChatData.contact.avatar : profileUserAvatar"
        /> -->
        <v-avatar size="38">
          <v-img :src="msgGrp.senderId === formattedChatData.contact.id ? formattedChatData.contact.avatar : profileUserAvatar"></v-img>
        </v-avatar>
      </div>
      <div
        class="chat-body d-inline-flex flex-column"
        :class="msgGrp.senderId !== formattedChatData.contact.id ? 'align-end' : 'align-start'"
      >
        <p
          v-for="(msgData, msgIndex) in msgGrp.messages"
          :key="msgData.time"
          class="chat-content py-3 px-4 elevation-1"
          :class="[
            msgGrp.senderId === formattedChatData.contact.id ? 'bg-card chat-left' : 'primary white--text chat-right',
            msgGrp.messages.length-1 !== msgIndex ? 'mb-2' : 'mb-1'
          ]"
        >
          {{ msgData.msg }}
        </p>
        <div :class="{'text-right': msgGrp.senderId !== formattedChatData.contact.id}">
          <span class="text-xs me-1 text--disabled">{{ formatDate(msgGrp.messages[msgGrp.messages.length-1].time, { hour: 'numeric', minute: 'numeric' }) }}</span>
          <v-icon
            v-if="msgGrp.senderId !== formattedChatData.contact.id"
            size="16"
            :color="resolveFeedbackIcon(msgGrp.messages[msgGrp.messages.length-1].feedback).color"
          >
            {{ resolveFeedbackIcon(msgGrp.messages[msgGrp.messages.length-1].feedback).icon }}
          </v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import { formatDate } from '@core/utils/filter'

import { mdiCheck, mdiCheckAll } from '@mdi/js'

export default {
  props: {
    chatData: {
      type: Object,
      required: true,
    },
    profileUserAvatar: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const formattedChatData = computed(() => {
      const contact = {
        id: props.chatData.contact.id,
        avatar: props.chatData.contact.avatar,
      }

      let chatLog = []
      if (props.chatData.chat) {
        chatLog = props.chatData.chat.chat
      }

      const formattedChatLog = []
      let chatMessageSenderId = chatLog[0] ? chatLog[0].senderId : undefined
      let msgGroup = {
        sender: chatMessageSenderId,
        messages: [],
      }

      chatLog.forEach((msg, index) => {
        if (chatMessageSenderId === msg.senderId) {
          msgGroup.messages.push({
            msg: msg.message,
            time: msg.time,
            feedback: msg.feedback,
          })
        } else {
          chatMessageSenderId = msg.senderId
          formattedChatLog.push(msgGroup)
          msgGroup = {
            senderId: msg.senderId,
            messages: [
              {
                msg: msg.message,
                time: msg.time,
                feedback: msg.feedback,
              },
            ],
          }
        }
        if (index === chatLog.length - 1) formattedChatLog.push(msgGroup)
      })

      return {
        formattedChatLog,
        contact,
        profileUserAvatar: props.profileUserAvatar,
      }
    })

    // Feedback icon
    const resolveFeedbackIcon = feedback => {
      if (feedback.isSeen) return { icon: mdiCheckAll, color: 'success' }
      if (feedback.isDelivered) return { icon: mdiCheckAll, color: null }

      return { icon: mdiCheck, color: null }
    }

    return {
      formattedChatData,

      // Filter
      formatDate,

      // Feedback Icon
      resolveFeedbackIcon,

      // Icons
      icons: {
        mdiCheck,
        mdiCheckAll,
      },
    }
  },
}
</script>
