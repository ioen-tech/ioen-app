<template>
  <div class="user-tab-security">
    <!-- change password -->
    <v-card class="mb-7">
      <v-card-title>
        Change Password
      </v-card-title>

      <v-card-text>
        <v-alert
          color="warning"
          text
        >
          <p class="font-weight-semibold mb-1">
            Ensure that these requirements are met
          </p>
          <p class="text-sm mb-0">
            Minimum 8 characters long, uppercase &amp; symbol
          </p>
        </v-alert>

        <!-- form -->
        <v-form class="multi-col-validation">
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="newPassword"
                outlined
                dense
                label="New Password"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-icon="isPasswordVisible ? icons.mdiEyeOutline : icons.mdiEyeOffOutline"
                @click:append="isPasswordVisible = !isPasswordVisible"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="confirmPassword"
                outlined
                dense
                label="Confirm New Password"
                :type="isPasswordConfirmVisible ? 'text' : 'password'"
                :append-icon="isPasswordConfirmVisible ? icons.mdiEyeOutline : icons.mdiEyeOffOutline"
                @click:append="isPasswordConfirmVisible = !isPasswordConfirmVisible"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-btn color="primary">
                Change Password
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>

    <!-- two step verification -->
    <v-card class="mb-7">
      <v-card-title>
        Two-step verification
      </v-card-title>
      <v-card-subtitle>
        Keep your account secure with authentication step.
      </v-card-subtitle>

      <v-card-text>
        <div>
          <h4 class="font-weight-medium mb-1">
            SMS
          </h4>
          <div class="d-flex align-center justify-space-between">
            <span class="user-verification-number">{{ smsVerificationNumber }}</span>
            <div>
              <v-btn
                icon
                small
                color="secondary"
                @click="istwoFactorDialogOpen = !istwoFactorDialogOpen"
              >
                <v-icon size="20">
                  {{ icons.mdiSquareEditOutline }}
                </v-icon>
              </v-btn>
              <v-btn
                icon
                small
              >
                <v-icon size="20">
                  {{ icons.mdiDeleteOutline }}
                </v-icon>
              </v-btn>
            </div>
          </div>
        </div>

        <v-divider></v-divider>

        <p class="mb-0 mt-4">
          Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. <a
            href="javascript:void(0)"
            class="text-decoration-none"
          >Learn more</a>.
        </p>
      </v-card-text>
    </v-card>

    <!-- recent divices -->
    <v-card>
      <v-card-title>
        Recent devices
      </v-card-title>

      <v-data-table
        :headers="tableColumnHeaders"
        :items="recenntDevices"
        hide-default-footer
        class="text-no-wrap"
      >
        <template #[`item.browser`]="{item}">
          <div class="d-flex align-center">
            <v-avatar
              size="22"
              class="me-2"
            >
              <v-img :src="require(`@/assets/images/logos/${item.browser}`)"></v-img>
            </v-avatar>
            <span class="text--primary text-no-wrap font-weight-medium">{{ item.name }}</span>
          </div>
        </template>
      </v-data-table>
    </v-card>

    <!-- dialog -->
    <v-dialog
      v-model="istwoFactorDialogOpen"
      max-width="650px"
    >
      <v-card class="two-factor-dialog pa-sm-10">
        <v-card-title class="text-sm-h5 justify-center">
          Enable One Time Password
        </v-card-title>
        <v-card-text>
          <h4 class="text-lg font-weight-medium mb-2">
            Verify Your Mobile Number for SMS
          </h4>
          <p>Enter your mobile phone number with country code and we will send you a verification code.</p>

          <v-form>
            <v-text-field
              v-model="smsVerificationNumber"
              outlined
              dense
              placeholder="Mobile number with country code"
              label="Mobile number with country code"
            ></v-text-field>

            <div class="d-flex align-center">
              <v-btn
                color="secondary"
                outlined
                class="me-3 ms-auto"
                @click="istwoFactorDialogOpen = !istwoFactorDialogOpen"
              >
                Cancel
              </v-btn>
              <v-btn
                color="primary"
                @click="istwoFactorDialogOpen = !istwoFactorDialogOpen"
              >
                send
              </v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiSquareEditOutline, mdiDeleteOutline, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const istwoFactorDialogOpen = ref(false)
    const newPassword = ref('')
    const confirmPassword = ref('')
    const smsVerificationNumber = ref('+1(968) 819-2547')
    const isPasswordVisible = ref(false)
    const isPasswordConfirmVisible = ref(false)

    const tableColumnHeaders = [
      { text: 'BROWSER', value: 'browser', sortable: false },
      { text: 'DEVICE', value: 'device', sortable: false },
      { text: 'LOCATION', value: 'location', sortable: false },
      { text: 'RECENT ACTIVITY', value: 'recentActivity', sortable: false },
    ]

    const recenntDevices = [
      {
        browser: 'chrome.png',
        name: 'Chrome on Windows',
        device: 'Dell XPS 15',
        location: 'United States',
        recentActivity: '10, Jan 2020 20:07',
      },
      {
        browser: 'chrome.png',
        name: 'Chrome on Android',
        device: 'Google Pixel 3a',
        location: 'Ghana',
        recentActivity: '11, Jan 2020 10:16',
      },
      {
        browser: 'chrome.png',
        name: 'Chrome on MacOS',
        device: 'Apple iMac',
        location: 'Mayotte',
        recentActivity: '11, Jan 2020 12:10',
      },
      {
        browser: 'chrome.png',
        name: 'Chrome on IPhone',
        device: 'Apple iPhone XR',
        location: 'Mauritania',
        recentActivity: '12, Jan 2020 8:29',
      },
    ]

    return {
      tableColumnHeaders,
      recenntDevices,
      istwoFactorDialogOpen,
      newPassword,
      confirmPassword,
      smsVerificationNumber,
      isPasswordVisible,
      isPasswordConfirmVisible,
      icons: {
        mdiSquareEditOutline,
        mdiDeleteOutline,
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
}
</script>
