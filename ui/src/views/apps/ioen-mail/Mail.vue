<template>
  <v-card class="max-h-content-container app-email h-full position-relative overflow-hidden text-sm">
    <v-navigation-drawer
      v-model="isLeftSidebarOpen"
      width="260"
      mobile-breakpoint="sm"
      absolute
      :right="$vuetify.rtl"
      touchless
      :temporary="$vuetify.breakpoint.smAndDown"
    >
      <left-sidebar-content
        :is-email-compose-dialog-visible="isEmailComposeDialogVisible"
        :emails-meta="emailsMeta"
      ></left-sidebar-content>
    </v-navigation-drawer>

    <!-- Content Area -->
    <div class="email-content-area h-full position-relative" :style="contentStyles">
      <!-- 1st Row -->
      <div class="d-flex align-center px-4">
        <v-icon v-show="!isLeftSidebarOpen" @click="isLeftSidebarOpen = true">
          {{ icons.mdiMenu }}
        </v-icon>
        <v-text-field
          v-model="searchQuery"
          placeholder="search..."
          outlined
          hide-details
          class="email-search-input"
          :prepend-inner-icon="icons.mdiMagnify"
        ></v-text-field>
      </div>

      <v-divider></v-divider>

      <!-- 2nd Row -->
      <div class="d-flex align-center px-4 py-2">
        <v-checkbox
          class="d-flex mt-0 pt-0"
          hide-details
          :input-value="selectAllEmailCheckbox"
          :indeterminate="isSelectAllEmailCheckboxIndeterminate"
          :disabled="!emails.length"
          @change="selectAllCheckboxUpdate"
        ></v-checkbox>
        <v-btn
          v-show="selectedEmails.length && $route.params.folder !== 'trash'"
          icon
          small
          class="me-3"
          @click="moveSelectedEmailsToFolder('trash')"
        >
          <v-icon size="22">
            {{ icons.mdiTrashCanOutline }}
          </v-icon>
        </v-btn>
        <v-btn
          v-show="selectedEmails.length"
          icon
          small
          class="me-3"
          @click="isAllSelectedMailAreRead ? markSelectedEmailsAsUnread() : markSelectedEmailsAsRead()"
        >
          <v-icon size="22">
            {{ isAllSelectedMailAreRead ? icons.mdiEmailOutline : icons.mdiEmailOpenOutline }}
          </v-icon>
        </v-btn>
        <v-menu offset-y min-width="140">
          <template #activator="{ on, attrs }">
            <v-btn v-show="selectedEmails.length" icon small class="me-3" v-bind="attrs" v-on="on">
              <v-icon size="22">
                {{ icons.mdiFolderOutline }}
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="folder in moveToFolderMenuListItems($route)"
              :key="folder.title"
              link
              @click="moveSelectedEmailsToFolder(folder.value)"
            >
              <v-list-item-icon>
                <v-icon size="20" class="me-2">
                  {{ folder.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ folder.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y min-width="140">
          <template #activator="{ on, attrs }">
            <v-btn v-show="selectedEmails.length" icon small v-bind="attrs" class="me-3" v-on="on">
              <v-icon size="22">
                {{ icons.mdiLabelOutline }}
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="label in updateLabelMenuListItems"
              :key="label.title"
              link
              @click="updateSelectedEmailsLabel(label.value)"
            >
              <v-list-item-icon class="align-self-center">
                <v-badge inline :color="label.color" dot class="mb-1"></v-badge>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ label.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        <v-btn icon small class="me-2" @click="fetchMail">
          <v-icon size="21">
            {{ icons.mdiReload }}
          </v-icon>
        </v-btn>
        <v-btn icon small>
          <v-icon size="22">
            {{ icons.mdiDotsVertical }}
          </v-icon>
        </v-btn>
      </div>

      <v-divider></v-divider>

      <!-- EMails List -->
      <perfect-scrollbar :settings="perfectScrollbarSettings" class="ps-emails-list">
        <v-hover v-for="email in emails" #default="{ hover: isHovered }" :key="email.id">
          <div
            :class="[{ 'hovered elevation-3': isHovered }, { 'email-read': email.isRead }]"
            class="email-item pa-4 d-flex align-center text-no-wrap cursor-pointer"
            @click="updateViewData(email)"
          >
            <v-checkbox
              class="d-flex mt-0 pt-0"
              hide-details
              :input-value="selectedEmails.includes(email.id)"
              @click.stop
              @change="toggleSelectedMail(email.id)"
            ></v-checkbox>
            <v-btn
              v-if="$vuetify.breakpoint.smAndUp"
              icon
              small
              class="me-2"
              :color="email.isStarred ? 'warning' : null"
              @click.stop="toggleStarred(email)"
            >
              <v-icon>
                {{ email.isStarred ? icons.mdiStar : icons.mdiStarOutline }}
              </v-icon>
            </v-btn>
            <v-avatar size="32" class="me-3 me-sm-4">
              <v-img :src="email.from.avatar"></v-img>
            </v-avatar>
            <div class="d-flex flex-column flex-sm-row text-truncate align-sm-center">
              <!-- v-if="$vuetify.breakpoint.smAndUp" -->
              <span class="text--primary text-base font-weight-medium me-3">{{ email.from.name }}</span>
              <template v-if="$vuetify.breakpoint.smAndUp">
                <v-badge
                  v-for="label in email.labels"
                  :key="label"
                  :color="resolveLabelColor(label)"
                  inline
                  :content="label"
                  class="email-label-chip text-capitalize v-badge-light-bg"
                  :class="`${resolveLabelColor(label)}--text`"
                >
                </v-badge>
              </template>
              <span class="text-truncate me-4 ms-sm-2 ms-0">{{ email.subject }}</span>
            </div>
            <v-spacer></v-spacer>

            <!-- Time and Actions On Hover -->
            <div v-show="isHovered">
              <v-btn
                icon
                small
                class="me-2"
                @click.stop="
                  email.isRead ? markSelectedEmailsAsUnread([email.id]) : markSelectedEmailsAsRead([email.id])
                "
              >
                <v-icon size="22">
                  {{ email.isRead ? icons.mdiEmailOutline : icons.mdiEmailOpenOutline }}
                </v-icon>
              </v-btn>
              <v-btn
                v-show="$route.params.folder !== 'trash'"
                icon
                small
                class="me-2"
                @click.stop="moveSelectedEmailsToFolder('trash', [email.id])"
              >
                <v-icon size="22">
                  {{ icons.mdiTrashCanOutline }}
                </v-icon>
              </v-btn>
              <v-btn
                v-show="$route.params.folder !== 'spam'"
                icon
                small
                @click.stop="moveSelectedEmailsToFolder('spam', [email.id])"
              >
                <v-icon size="22">
                  {{ icons.mdiAlertOctagonOutline, }}
                </v-icon>
              </v-btn>
            </div>
            <div v-show="!isHovered">
              <v-icon v-if="email.attachments.length" size="20" class="me-2">
                {{ icons.mdiAttachment }}
              </v-icon>
              <span class="text-xs text--disabled">{{
                formatDateToMonthShort(email.time, { hour: 'numeric', minute: 'numeric' })
              }}</span>
            </div>
          </div>
        </v-hover>
        <div class="d-none text-center text--primary font-weight-medium" :class="{ 'd-block': !emails.length }">
          <p class="my-4">No Items Found</p>
        </div>
      </perfect-scrollbar>

      <!-- Email Details -->
      <v-navigation-drawer
        v-model="isEmailDetailsOpen"
        :right="!$vuetify.rtl"
        absolute
        mobile-breakpoint="sm"
        width="100%"
        class="email-view-navigation-drawer"
      >
        <mail-view
          :view-data="viewData"
          :opended-mail-meta="opendedMailMeta"
          @close-email-view="isEmailDetailsOpen = false"
          @change-opened-email="changeOpenedEmail"
          @move-email-to-folder="moveOpenEmailToFolder"
          @mark-email-unread="markOpenEmailAsUnread"
          @update-email-label="updateOpenEmailLabel"
        ></mail-view>
      </v-navigation-drawer>
    </div>
  </v-card>
</template>

<script>
import { useRouter } from '@core/utils'
import { useResponsiveLeftSidebar } from '@core/comp-functions/ui'
import {
  mdiMenu,
  mdiMagnify,
  mdiChevronRight,
  mdiChevronLeft,
  mdiTrashCanOutline,
  mdiStarOutline,
  mdiStar,
  mdiReload,
  mdiDotsVertical,
  mdiFolderOutline,
  mdiEmailOutline,
  mdiEmailOpenOutline,
  mdiLabelOutline,
  mdiAttachment,
  mdiAlertOctagonOutline,
} from '@mdi/js'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

// Store
// eslint-disable-next-line object-curly-newline
import { ref, onUnmounted, computed, watch } from '@vue/composition-api'
import { formatDateToMonthShort } from '@core/utils/filter'
import store from '@/store'
import useMail from './useMail'
import mailStoreModule from './mail.store'

// Local Componnets
import LeftSidebarContent from './LeftSidebarContent.vue'
import MailView from './View.vue'

export default {
  components: {
    LeftSidebarContent,
    MailView,

    // 3rd Party
    PerfectScrollbar,
  },
  setup() {
    // ————————————————————————————————————
    //* ——— Store Registration
    // ————————————————————————————————————

    const MAIL_APP_STORE_MODULE_NAME = 'app-ioen-mail'
    console.log(mailStoreModule)

    // Register module
    if (!store.hasModule(MAIL_APP_STORE_MODULE_NAME)) {
      store.registerModule(MAIL_APP_STORE_MODULE_NAME, mailStoreModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(MAIL_APP_STORE_MODULE_NAME)) store.unregisterModule(MAIL_APP_STORE_MODULE_NAME)
    })

    // ————————————————————————————————————
    //* ——— Left Sidebar
    // ————————————————————————————————————

    const { isLeftSidebarOpen, contentStyles } = useResponsiveLeftSidebar({ sidebarWidth: 260 })

    // ————————————————————————————————————
    //* ——— Router
    // ————————————————————————————————————

    const { route, router } = useRouter()

    // Search Query & Route Params
    const searchQuery = computed({
      get: () => route.value.query.q,
      set: val => {
        const currentRouteQuery = JSON.parse(JSON.stringify(route.value.query))

        if (val) currentRouteQuery.q = val
        else delete currentRouteQuery.q

        router.replace({ name: route.name, query: currentRouteQuery })
      },
    })
    const routeParams = computed(() => route.value.params)

    // Fetch email again of search query change or route param change
    // eslint-disable-next-line no-use-before-define
    watch([searchQuery, routeParams], () => fetchMail())

    // ————————————————————————————————————
    //* ——— useMail
    // ————————————————————————————————————

    const { resolveLabelColor, moveToFolderMenuListItems, updateLabelMenuListItems } = useMail()

    // ————————————————————————————————————
    //* ——— Emails & Email Meta
    // ————————————————————————————————————

    // Emails & Emails Meta
    const emails = ref([])
    const emailsMeta = ref({})

    const fetchMail = () => {
      store
        .dispatch('app-ioen-mail/fetchMail', {
          q: searchQuery.value,
          folder: router.currentRoute.params.folder || 'inbox',
          label: router.currentRoute.params.label,
        })
        .then(response => {
          emails.value = response.data.emails
          emailsMeta.value = response.data.emailsMeta
        })
    }

    fetchMail()

    // ————————————————————————————————————
    //* ——— Mail Selection
    // ————————————————————————————————————

    const selectedEmails = ref([])
    const toggleSelectedMail = mailId => {
      const mailIndex = selectedEmails.value.indexOf(mailId)

      if (mailIndex === -1) selectedEmails.value.push(mailId)
      else selectedEmails.value.splice(mailIndex, 1)
    }
    const selectAllEmailCheckbox = computed(
      () => emails.value.length && emails.value.length === selectedEmails.value.length,
    )
    const isSelectAllEmailCheckboxIndeterminate = computed(
      () => Boolean(selectedEmails.value.length) && emails.value.length !== selectedEmails.value.length,
    )
    const selectAllCheckboxUpdate = val => {
      selectedEmails.value = val ? emails.value.map(mail => mail.id) : []
    }
    const isAllSelectedMailAreRead = computed(() => {
      // Get array of isRead property value from selected mails array
      const emailsIsRead = selectedEmails.value.map(emailId => emails.value.find(email => email.id === emailId).isRead)

      // Return icon based on selection
      return emailsIsRead.every(emailIsRead => emailIsRead)
    })

    // ? Watcher to reset selectedEmails is somewhere below due to watch dependecy fullfilment

    // ————————————————————————————————————
    //* ——— Mail Actions
    // ————————————————————————————————————

    const toggleStarred = email => {
      store
        .dispatch('app-ioen-mail/updateMail', {
          emailIds: [email.id],
          dataToUpdate: { isStarred: !email.isStarred },
        })
        .then(() => {
          // eslint-disable-next-line no-param-reassign
          email.isStarred = !email.isStarred
        })
    }

    const moveSelectedEmailsToFolder = (folder, emailIds = selectedEmails.value) => {
      store
        .dispatch('app-ioen-mail/updateMail', {
          emailIds,
          dataToUpdate: { folder },
        })
        .then(() => {
          fetchMail()
        })
        .finally(() => {
          selectedEmails.value = []
        })
    }

    const updateSelectedEmailsLabel = label => {
      store
        .dispatch('app-ioen-mail/updateMailLabels', {
          emailIds: selectedEmails.value,
          label,
        })
        .then(() => {
          fetchMail()
        })
        .finally(() => {
          selectedEmails.value = []
        })
    }

    const markSelectedEmailsAsUnread = (emailIds = selectedEmails.value) => {
      store
        .dispatch('app-ioen-mail/updateMail', {
          emailIds,
          dataToUpdate: { isRead: false },
        })
        .then(() => {
          fetchMail()
        })
        .finally(() => {
          selectedEmails.value = []
        })
    }

    const markSelectedEmailsAsRead = (emailIds = selectedEmails.value) => {
      store
        .dispatch('app-ioen-mail/updateMail', {
          emailIds,
          dataToUpdate: { isRead: true },
        })
        .then(() => {
          fetchMail()
        })
        .finally(() => {
          selectedEmails.value = []
        })
    }

    // ————————————————————————————————————
    //* ——— Email View
    // ————————————————————————————————————

    const isEmailDetailsOpen = ref(false)
    const viewData = ref({})
    const opendedMailMeta = computed(() => {
      const openedEmailIndex = emails.value.findIndex(e => e.id === viewData.value.id)

      return {
        hasNextEmail: Boolean(emails.value[openedEmailIndex + 1]),
        hasPreviousEmail: Boolean(emails.value[openedEmailIndex - 1]),
      }
    })
    const updateViewData = email => {
      // Mark email is read
      store
        .dispatch('app-ioen-mail/updateMail', {
          emailIds: [email.id],
          dataToUpdate: { isRead: true },
        })
        .then(() => {
          // If opened email is unread then decrease badge count for email meta based on email folder
          if (!email.isRead && (email.folder === 'inbox' || email.folder === 'spam')) {
            emailsMeta.value[email.folder] -= 1
          }

          // eslint-disable-next-line no-param-reassign
          email.isRead = true
        })
        .finally(() => {
          viewData.value = email
          isEmailDetailsOpen.value = true
        })
    }
    const moveOpenEmailToFolder = folder => {
      selectedEmails.value = [viewData.value.id]
      moveSelectedEmailsToFolder(folder)
      selectedEmails.value = []
      isEmailDetailsOpen.value = false
    }
    const updateOpenEmailLabel = label => {
      selectedEmails.value = [viewData.value.id]
      updateSelectedEmailsLabel(label)

      // Update label in opened email
      const labelIndex = viewData.value.labels.indexOf(label)
      if (labelIndex === -1) viewData.value.labels.push(label)
      else viewData.value.labels.splice(labelIndex, 1)

      selectedEmails.value = []
    }

    const markOpenEmailAsUnread = () => {
      selectedEmails.value = [viewData.value.id]
      markSelectedEmailsAsUnread()

      selectedEmails.value = []
      isEmailDetailsOpen.value = false
    }

    const changeOpenedEmail = dir => {
      const openedEmailIndex = emails.value.findIndex(e => e.id === viewData.value.id)
      const newEmailIndex = dir === 'previous' ? openedEmailIndex - 1 : openedEmailIndex + 1
      viewData.value = emails.value[newEmailIndex]
    }

    // * If someone clicks on filter while viewing detail => Close the email detail view
    watch(routeParams, () => {
      isEmailDetailsOpen.value = false
    })

    // * Watcher to reset selectedEmails
    // ? You can also use isEmailDetailsOpen (instead of `viewData`) but it will trigger execution twice in this case
    // eslint-disable-next-line no-use-before-define
    watch([viewData, routeParams], () => {
      selectedEmails.value = []
    })

    // ————————————————————————————————————
    //* ——— Compose
    // ————————————————————————————————————

    const isEmailComposeDialogVisible = ref(false)

    // ————————————————————————————————————
    //* ——— Perfect Scrollbar
    // ————————————————————————————————————

    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    return {
      isLeftSidebarOpen,
      contentStyles,

      // Search Query
      searchQuery,

      // EMails & EMail Meta
      emails,
      emailsMeta,
      fetchMail,

      // Mail Selection
      selectedEmails,
      toggleSelectedMail,
      selectAllEmailCheckbox,
      isSelectAllEmailCheckboxIndeterminate,
      selectAllCheckboxUpdate,
      isAllSelectedMailAreRead,

      // Mail Actions
      toggleStarred,
      moveSelectedEmailsToFolder,
      updateSelectedEmailsLabel,
      markSelectedEmailsAsUnread,
      markSelectedEmailsAsRead,

      // EMail View
      isEmailDetailsOpen,
      viewData,
      opendedMailMeta,
      updateViewData,
      moveOpenEmailToFolder,
      updateOpenEmailLabel,
      markOpenEmailAsUnread,
      changeOpenedEmail,

      // Compose
      isEmailComposeDialogVisible,

      // useMail
      resolveLabelColor,
      moveToFolderMenuListItems,
      updateLabelMenuListItems,

      // Perfect Scrollbar
      perfectScrollbarSettings,

      // Filter/Formatter
      formatDateToMonthShort,

      // Icons
      icons: {
        mdiMenu,
        mdiMagnify,
        mdiChevronRight,
        mdiChevronLeft,
        mdiTrashCanOutline,
        mdiReload,
        mdiDotsVertical,
        mdiStarOutline,
        mdiStar,
        mdiFolderOutline,
        mdiEmailOutline,
        mdiEmailOpenOutline,
        mdiLabelOutline,
        mdiAttachment,
        mdiAlertOctagonOutline,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~vuetify/src/styles/styles.sass';
@import '~@core/preset/preset/mixins';

.app-email {
  // Style search input
  .email-search-input {
    .v-input__slot {
      fieldset {
        border: none !important;
      }
    }
  }
}

@include theme(email-search-input) using ($material) {
  .v-input__slot {
    input {
      caret-color: map-deep-get($material, 'text', 'secondary') !important;
    }
  }
}

.ps-emails-list {
  height: calc(100% - 96px - 2px);

  .email-item {
    &.hovered {
      transform: translateY(-2px);
      transition: all 0.2s;
      z-index: 1;
    }
  }
}

@include theme--child(ps-emails-list) using ($material) {
  .email-item {
    &:not(:last-child) {
      border-bottom: 1px solid map-deep-get($material, 'dividers');
    }
    &.email-read {
      background-color: rgba(map-deep-get($material, 'primary-shade'), 0.04);
    }
  }
}
</style>
