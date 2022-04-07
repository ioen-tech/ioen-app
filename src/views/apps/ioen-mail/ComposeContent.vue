<template>
  <v-card class="email-compose-card">
    <!-- Compose Header -->
    <div class="compose-header px-3 py-2 d-flex align-center">
      <span class="text--primary font-weight-medium text-base">Compose Mail</span>
      <v-spacer></v-spacer>
      <v-btn icon small @click="$emit('close-dialog')">
        <v-icon size="20">
          {{ icons.mdiMinus }}
        </v-icon>
      </v-btn>
      <v-btn icon small @click="$emit('update:isDialogFullscreen', !isDialogFullscreen)">
        <v-icon size="20">
          {{ isDialogFullscreen ? icons.mdiFullscreenExit : icons.mdiFullscreen }}
        </v-icon>
      </v-btn>
      <v-btn icon small @click="discardEmail">
        <v-icon size="20">
          {{ icons.mdiClose }}
        </v-icon>
      </v-btn>
    </div>

    <!-- Form -->
    <v-form>
      <!-- Field: To -->
      <v-combobox
        :key="shallShowCCFIeld.toString() + shallShowBCCFIeld.toString()"
        v-model="composeData.to"
        :items="emailToOptions"
        :filter="filterEmailToOptions"
        multiple
        chips
        small-chips
        deletable-chips
        hide-selected
        hide-details
        item-text="name"
        item-value="email"
        class="pt-0"
        solo
        flat
      >
        <!-- Slot: Option -->
        <template #item="{ item: option }">
          <v-avatar size="22" class="me-2">
            <v-img :src="option.avatar"></v-img>
          </v-avatar>
          <span class="text-sm">{{ option.name }}</span>
        </template>

        <!-- Slot: Prepend Inner -->
        <template #prepend-inner>
          <span class="text--primary">To:</span>
        </template>

        <!-- Slot: Append -->
        <!-- append slot & `&nbsp;` to hide arrow on right -->
        <template #append>
          <span>&nbsp;</span>
        </template>
      </v-combobox>

      <v-divider></v-divider>

      <!-- Field: CC -->
      <v-combobox
        v-show="shallShowCCFIeld"
        v-model="composeData.cc"
        :items="emailToOptions"
        :filter="filterEmailToOptions"
        multiple
        solo
        flat
        chips
        small-chips
        deletable-chips
        hide-selected
        auto-select-first
        hide-details
        item-text="name"
        item-value="email"
        class="pt-0"
      >
        <!-- Slot: Option -->
        <template #item="{ item: option }">
          <v-avatar size="22" class="me-2">
            <v-img :src="option.avatar"></v-img>
          </v-avatar>
          <span class="text-sm">{{ option.name }}</span>
        </template>

        <!-- Slot: Append -->
        <!-- append slot & `&nbsp;` to hide arrow on right -->
        <template #append>
          <span>&nbsp;</span>
        </template>
      </v-combobox>

      <v-divider v-show="shallShowCCFIeld"></v-divider>

      <!-- Field: BCC -->
      <v-combobox
        v-show="shallShowBCCFIeld"
        v-model="composeData.bcc"
        :items="emailToOptions"
        :filter="filterEmailToOptions"
        multiple
        solo
        flat
        chips
        small-chips
        deletable-chips
        hide-selected
        auto-select-first
        hide-details
        item-text="name"
        item-value="email"
        class="pt-0"
      >
        <!-- Slot: Option -->
        <template #item="{ item: option }">
          <v-avatar size="22" class="me-2">
            <v-img :src="option.avatar"></v-img>
          </v-avatar>
          <span class="text-sm">{{ option.name }}</span>
        </template>

        <!-- Slot: Prepend Inner -->
        <template #prepend-inner>
          <span class="text--primary">Bcc:</span>
        </template>

        <!-- Slot: Append -->
        <!-- append slot & `&nbsp;` to hide arrow on right -->
        <template #append>
          <span>&nbsp;</span>
        </template>
      </v-combobox>

      <v-divider v-show="shallShowBCCFIeld"></v-divider>

      <!-- Field: Subject -->
      <v-text-field v-model="composeData.subject" hide-details solo flat class="mb-1 pt-0">
        <!-- Slot: Prepend Inner -->
        <template #prepend-inner>
          <span class="text--primary">Subject:</span>
        </template>
      </v-text-field>

      <v-divider></v-divider>

      <!-- Field: Message -->
      <v-textarea
        v-model="composeData.message"
        solo
        flat
        label="Message"
        hide-details
        auto-grow
        class="email-compose-message"
      >
      </v-textarea>

      <v-divider></v-divider>

      <!-- Footer -->
      <div class="pa-4 d-flex align-center">
        <!-- Send Button -->
        <v-menu offset-y top>
          <template #activator="{ on, attrs }">
            <v-btn-toggle class="send-btn-toggle me-3" color="primary" borderless>
              <v-btn color="primary" @click="sendMail">
                <span>Send</span>
              </v-btn>
              <v-btn v-bind="attrs" color="primary" dark v-on="on">
                <v-icon color="white">
                  {{ icons.mdiChevronDown }}
                </v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>

          <v-list>
            <v-list-item link>
              <v-list-item-title>Schedule Send</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>Save as Draft</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Attachement -->
        <v-btn icon>
          <v-icon>
            {{ icons.mdiAttachment }}
          </v-icon>
        </v-btn>

        <v-spacer></v-spacer>

        <!-- More Button -->
        <v-menu offset-y top min-width="140">
          <template #activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item link>
              <v-list-item-title>Print</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>Check Spelling</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>Plain Text Mode</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn icon @click="discardEmail">
          <v-icon>{{ icons.mdiTrashCanOutline }}</v-icon>
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiMinus,
  mdiFullscreen,
  mdiFullscreenExit,
  mdiClose,
  mdiAttachment,
  mdiChevronDown,
  mdiDotsVertical,
  mdiTrashCanOutline,
} from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  props: {
    isDialogFullscreen: {
      type: Boolean,
      default: true,
    },
  },
  setup(_, { emit }) {
    // Compose Data
    const composeData = ref({})

    // Conditional Field Rendering
    const shallShowCCFIeld = ref(false)
    const shallShowBCCFIeld = ref(false)

    // Email To Option
    const emailToOptions = [
      { avatar: require('@/assets/images/avatars/1.png'), name: 'Jane Foster', email: 'amiibi@he.zw' },
      { avatar: require('@/assets/images/avatars/3.png'), name: 'Donna Frank', email: 'ocuejesov@riwwapop.ye' },
      { avatar: require('@/assets/images/avatars/5.png'), name: 'Gabrielle Robertson', email: 'luutam@ho.gi' },
      { avatar: require('@/assets/images/avatars/7.png'), name: 'Lori Spears', email: 'zicsanroc@erher.mc' },
      { avatar: require('@/assets/images/avatars/2.png'), name: 'Sandy Vega', email: 'ibuam@cimenuze.to' },
      { avatar: require('@/assets/images/avatars/4.png'), name: 'Cheryl May', email: 'kivcuci@kagwabum.tr' },
    ]
    const filterEmailToOptions = (item, queryText) => {
      const q = queryText.toLowerCase()

      return item.email.toLowerCase().includes(q) || item.name.toLowerCase().includes(q)
    }

    // Compose Actions
    const discardEmail = () => {
      emit('close-dialog')

      // Discard the previous actions
      shallShowCCFIeld.value = false
      shallShowBCCFIeld.value = false
      emit('update:isDialogFullscreen', false)

      // Reset Data
      composeData.value = {}
    }

    const sendMail = () => {
      emit('close-dialog')

      // Discard the previous actions
      shallShowCCFIeld.value = false
      shallShowBCCFIeld.value = false
      emit('update:isDialogFullscreen', false)

      // Reset data
      composeData.value = {}

      // ? Send your mail
    }

    return {
      // Compose Data
      composeData,

      // Conditional Field Rendering
      shallShowCCFIeld,
      shallShowBCCFIeld,

      // Email To Options
      emailToOptions,
      filterEmailToOptions,

      // Compose Actions
      discardEmail,
      sendMail,

      // Icons
      icons: {
        mdiMinus,
        mdiFullscreen,
        mdiFullscreenExit,
        mdiClose,
        mdiAttachment,
        mdiChevronDown,
        mdiDotsVertical,
        mdiTrashCanOutline,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/mixins.scss';

@include theme--child(compose-header) using ($material) {
  background-color: rgba(map-deep-get($material, 'primary-shade'), 0.08);
}

.email-compose-card {
  .v-input {
    .v-input__prepend-inner,
    .v-input__append-inner {
      align-self: center;
    }
    .v-input__prepend-inner {
      @include ltr() {
        margin-left: 10px;
      }
      @include rtl() {
        margin-right: 10px;
      }
    }
    .v-input__append-inner {
      @include ltr() {
        margin-right: 10px;
      }
      @include rtl() {
        margin-left: 10px;
      }
    }
  }

  .email-compose-message {
    .v-input__slot {
      @include ltr() {
        padding-left: 23px !important;
      }
      @include rtl() {
        padding-right: 23px !important;
      }
    }
  }

  .send-btn-toggle {
    .v-btn {
      height: 38px !important;
      opacity: 1 !important;

      &:nth-child(1) {
        @include ltr() {
          padding-left: 20px;
        }
        @include rtl() {
          padding-right: 20px;
        }
        @include ltr() {
          padding-right: 8px;
        }
        @include rtl() {
          padding-left: 8px;
        }
      }
      &:nth-child(2) {
        // max-width: 20px;
        min-width: unset !important;
        padding-right: 6px;
        padding-left: 6px;
      }
    }
  }
}
</style>
