<template>
  <div class="user-tab-connection">
    <!-- connected accounts -->
    <v-card class="mb-7">
      <v-card-title>
        Connected Accounts
      </v-card-title>
      <v-card-subtitle>
        Display content from your connected accounts on your site
      </v-card-subtitle>

      <v-card-text class="pb-2">
        <v-list
          dense
          class="py-0"
        >
          <v-list-item
            v-for="account in connectedAccounts"
            :key="account.title"
            class="px-0"
          >
            <v-img
              max-width="35"
              contain
              class="me-3"
              :src="require(`@/assets/images/logos/${account.img}`)"
            ></v-img>

            <div class="d-flex align-center flex-grow-1 flex-wrap">
              <div class="me-2">
                <v-list-item-title class="text-sm">
                  {{ account.title }}
                </v-list-item-title>
                <v-list-item-subtitle class="mb-0">
                  {{ account.text }}
                </v-list-item-subtitle>
              </div>

              <v-spacer></v-spacer>

              <v-switch v-model="account.connected"></v-switch>
            </div>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- social accounts -->
    <v-card>
      <v-card-title>
        Social Accounts
      </v-card-title>
      <v-card-subtitle>
        Display content from social accounts on your site
      </v-card-subtitle>
      <v-card-text>
        <v-list
          dense
          class="py-0"
        >
          <v-list-item
            v-for="(account,index) in socialAccounts"
            :key="account.title"
            :class="`px-0 ${index > 0 ?'mt-6':'mt-3'}`"
          >
            <v-img
              max-width="35"
              height="35"
              contain
              class="me-3"
              :src="require(`@/assets/images/logos/${account.img}`)"
            ></v-img>

            <div>
              <v-list-item-title class="text-sm">
                {{ account.title }}
              </v-list-item-title>
              <v-list-item-subtitle v-if="account.connected">
                <a
                  :href="account.link"
                  target="_blank"
                  rel="nofollow"
                  class="text-decoration-none text-truncate"
                >
                  {{ account.username }}
                </a>
              </v-list-item-subtitle>
              <v-list-item-subtitle v-else>
                Not connected
              </v-list-item-subtitle>
            </div>

            <v-spacer></v-spacer>

            <v-btn
              color="secondary"
              outlined
              min-width="38"
              class="px-0"
            >
              <v-icon size="20">
                {{ account.connected ? icons.mdiClose:icons.mdiLinkVariant }}
              </v-icon>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mdiClose, mdiLinkVariant } from '@mdi/js'

export default {
  setup() {
    const connectedAccounts = [
      {
        img: 'google.png',
        title: 'Google',
        text: 'Calendar and contacts',
        connected: true,
      },
      {
        img: 'slack.png',
        title: 'Slack',
        text: 'Communication',
        connected: false,
      },
      {
        img: 'github.png',
        title: 'Github',
        text: 'Manage your Git repositories',
        connected: true,
      },
      {
        img: 'mail-chimp.png',
        title: 'Mailchimp',
        text: 'Email marketing service',
        connected: false,
      },
      {
        img: 'asana.png',
        title: 'Asana',
        text: 'Communication',
        connected: false,
      },
    ]

    const socialAccounts = [
      {
        img: 'facebook.png',
        title: 'Facebook',
        connected: false,
      },
      {
        img: 'twitter.png',
        title: 'Twitter',
        link: 'https://twitter.com/theme_selection',
        username: '@Theme_Selection',
        connected: true,
      },
      {
        img: 'linkedin.png',
        title: 'Linkedin',
        link: 'https://www.linkedin.com/company/themeselection',
        username: '@ThemeSelection',
        connected: true,
      },
      {
        img: 'dribbble.png',
        title: 'Dribbble',
        connected: false,
      },
      {
        img: 'behance.png',
        title: 'Behance',
        connected: false,
      },
    ]

    return {
      connectedAccounts,
      socialAccounts,
      icons: {
        mdiClose,
        mdiLinkVariant,
      },
    }
  },
}
</script>
