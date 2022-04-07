<template>
  <v-card
    outlined
    class="email-message-card"
  >
    <div
      v-if="message.from"
      class="pa-5 d-flex flex-wrap align-center"
    >
      <v-avatar
        size="38"
        class="me-3"
      >
        <v-img :src="message.from.avatar"></v-img>
      </v-avatar>
      <div class="d-flex justify-center flex-column">
        <span class="text--primary font-weight-medium text-base">{{ message.from.name }}</span>
        <span>{{ message.from.email }}</span>
      </div>

      <v-spacer></v-spacer>

      <div class="my-1">
        <span class="text--disabled text-xs me-2 text-no-wrap">{{ formatDate(message.time, { dateStyle: 'long', timeStyle: 'short' }) }}</span>
        <v-btn
          icon
          small
          class="me-1"
        >
          <v-icon size="22">
            {{ icons.mdiAttachment }}
          </v-icon>
        </v-btn>
        <v-btn
          icon
          small
          class="me-1"
        >
          <v-icon size="22">
            {{ icons.mdiStarOutline }}
          </v-icon>
        </v-btn>
        <v-menu
          offset-y
          min-width="140"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              icon
              small
              v-bind="attrs"
              v-on="on"
            >
              <v-icon size="22">
                {{ icons.mdiDotsVertical }}
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="action in singleMessageActions"
              :key="action.title"
              link
            >
              <v-list-item-icon>
                <v-icon
                  class="me-2"
                  size="20"
                >
                  {{ action.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ action.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>

    <v-divider></v-divider>

    <!-- eslint-disable vue/no-v-html -->
    <div
      class="message-content ma-5"
      v-html="message.message"
    ></div>

    <template v-if="message.attachments && message.attachments.length">
      <v-divider></v-divider>

      <div class="mx-5 my-3">
        <p class="mb-2">
          Attachments
        </p>
        <v-chip
          v-for="(attachment, index) in message.attachments"
          :key="index"
          :href="attachment.url"
          target="_blank"
          class="me-2"
          tag="a"
          outlined
          download
        >
          <v-img
            :src="attachment.thumbnail"
            width="16px"
            class="me-2"
          />
          <span class="text-xs align-text-top">{{ attachment.fileName }}</span>
        </v-chip>
      </div>
    </template>
  </v-card>
</template>

<script>
import { formatDate } from '@core/utils/filter'
// eslint-disable-next-line object-curly-newline
import {
  mdiAttachment,
  mdiStarOutline,
  mdiStar,
  mdiDotsVertical,
  mdiReplyOutline,
  mdiReplyAllOutline,
  mdiForward,
} from '@mdi/js'

export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  setup() {
    // Single Message Actions
    const singleMessageActions = [
      { title: 'Reply', icon: mdiReplyOutline },
      { title: 'Reply All', icon: mdiReplyAllOutline },
      { title: 'Forward', icon: mdiForward },
    ]

    return {
      // Single Message Actions
      singleMessageActions,

      // UI Filters
      formatDate,

      // Icons
      icons: {
        mdiAttachment,
        mdiStarOutline,
        mdiStar,
        mdiDotsVertical,
      },
    }
  },
}
</script>

<style lang="scss">
.email-message-card {
  transition: 0.1s all ease-in-out;
  will-change: top, position, position, transform-origin, height, overflow, top, z-index, opacity, transform;
}
</style>
