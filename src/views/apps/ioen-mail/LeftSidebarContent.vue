<template>
  <div class="h-full">
    <!-- Compose -->
    <v-dialog
      v-model="isComposeDialogVisible"
      width="700"
      :fullscreen="isEmailComposeDialogFullscreen"
      hide-overlay
      content-class="email-compose-dialog ms-md-auto"
      transition="slide-y-reverse-transition"
    >
      <template #activator="{ on, attrs }">
        <!-- Compose Button -->
        <div class="pa-5">
          <v-btn block color="primary" v-bind="attrs" v-on="on"> Compose </v-btn>
        </div>
      </template>

      <compose-content
        :is-dialog-fullscreen.sync="isEmailComposeDialogFullscreen"
        @close-dialog="isComposeDialogVisible = false"
      ></compose-content>
    </v-dialog>

    <!-- Scrollable Area -->
    <perfect-scrollbar :settings="perfectScrollbarSettings" class="ps-email-left-sidebar">
      <v-list dense flat>
        <v-list-item
          v-for="filter in emailFilters"
          :key="filter.title"
          :to="filter.to"
          class="text--primary"
          exact-active-class="primary--text v-list-item--exact-active"
        >
          <v-list-item-icon class="me-2">
            <v-icon size="20">
              {{ filter.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-base">
              {{ filter.title }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action v-if="emailsMeta[filter.title.toLowerCase()]" class="ma-0">
            <v-badge
              color="error"
              inline
              :content="emailsMeta[filter.title.toLowerCase()]"
              class="number-badge v-badge-light-bg"
              :class="`${resolveFilterBadgeColor(filter.title)}--text`"
            >
            </v-badge>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <p class="text-xs text--disabled mt-8 mx-5 mb-1">LABELS</p>
      <v-list dense flat>
        <v-list-item
          v-for="label in emailLabels"
          :key="label.title"
          :to="label.to"
          exact-active-class="primary--text v-list-item--exact-active"
        >
          <v-list-item-icon class="me-2">
            <v-badge :color="label.color" dot inline class="align-self-center label-dot"></v-badge>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-base">
              {{ label.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </perfect-scrollbar>
  </div>
</template>

<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import {
  mdiEmailOutline,
  mdiSendOutline,
  mdiSquareEditOutline,
  mdiStarOutline,
  mdiAlertOctagonOutline,
  mdiTrashCanOutline,
} from '@mdi/js'
import { ref } from '@vue/composition-api'

// Local Components
import ComposeContent from './ComposeContent.vue'

export default {
  components: {
    // Local Components
    ComposeContent,

    // 3rd Party
    PerfectScrollbar,
  },
  props: {
    isEmailComposeDialogVisible: {
      type: Boolean,
      required: true,
    },
    emailsMeta: {
      type: Object,
      required: true,
    },
  },
  setup() {
    // Compose Dialog
    const isComposeDialogVisible = ref(false)
    const isEmailComposeDialogFullscreen = ref(false)

    const emailFilters = [
      { title: 'Inbox', icon: mdiEmailOutline, to: { name: 'apps-ioen-mail' } },
      { title: 'Sent', icon: mdiSendOutline, to: { name: 'apps-ioen-mail-folder', params: { folder: 'sent' } } },
      {
        title: 'Draft',
        icon: mdiSquareEditOutline,
        to: { name: 'apps-ioen-mail-folder', params: { folder: 'draft' } },
      },
      { title: 'Starred', icon: mdiStarOutline, to: { name: 'apps-ioen-mail-folder', params: { folder: 'starred' } } },
      {
        title: 'Spam',
        icon: mdiAlertOctagonOutline,
        to: { name: 'apps-ioen-mail-folder', params: { folder: 'spam' } },
      },
      { title: 'Trash', icon: mdiTrashCanOutline, to: { name: 'apps-ioen-mail-folder', params: { folder: 'trash' } } },
    ]

    const emailLabels = [
      { title: 'Personal', color: 'success', to: { name: 'apps-ioen-mail-label', params: { label: 'personal' } } },
      { title: 'Company', color: 'primary', to: { name: 'apps-ioen-mail-label', params: { label: 'company' } } },
      { title: 'Important', color: 'warning', to: { name: 'apps-ioen-mail-label', params: { label: 'important' } } },
      { title: 'Private', color: 'error', to: { name: 'apps-ioen-mail-label', params: { label: 'private' } } },
    ]

    const resolveFilterBadgeColor = filter => {
      if (filter === 'Draft') return 'primary'
      if (filter === 'Spam') return 'warning'

      return 'error'
    }

    // Perfect Scrollbar
    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
      wheelSpeed: 0.7,
    }

    return {
      // Compose Dialog
      isComposeDialogVisible,
      isEmailComposeDialogFullscreen,

      // isDynamicRouteActive,
      resolveFilterBadgeColor,

      // Filter & Labels
      emailFilters,
      emailLabels,

      // Perfect Scrollbar
      perfectScrollbarSettings,
    }
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/mixins.scss';

.ps-email-left-sidebar {
  height: calc(100% - 78px);

  .v-list--dense .v-list-item {
    height: 38px;
    min-height: 38px;
    border-left: 2px solid transparent;

    &.v-list-item--exact-active {
      border-color: var(--v-primary-base);
    }

    .v-list-item__icon {
      align-items: end;
    }

    // label dot
    .label-dot {
      .v-badge__badge {
        width: 12px !important;
        height: 12px !important;
        border-radius: 10px;
      }
    }
  }
}

.email-compose-dialog {
  align-self: flex-end !important;
}

@include app-elevation(email-compose-dialog, 16);
</style>
