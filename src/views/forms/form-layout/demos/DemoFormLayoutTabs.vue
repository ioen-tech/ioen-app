<template>
  <div>
    <v-tabs v-model="tab">
      <v-tab>Personal Info</v-tab>
      <v-tab>Account Details</v-tab>
      <v-tab>Social Links</v-tab>
    </v-tabs>

    <v-card flat>
      <v-card-text>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-form class="multi-col-validation mt-1">
              <v-row>
                <v-col
                  md="6"
                  cols="12"
                >
                  <v-text-field
                    v-model="firstName"
                    outlined
                    dense
                    hide-details
                    label="First name"
                  ></v-text-field>
                </v-col>

                <v-col
                  md="6"
                  cols="12"
                >
                  <v-text-field
                    v-model="lastName"
                    outlined
                    dense
                    hide-details
                    label="Last name"
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-select
                    v-model="country"
                    :items="countryList"
                    label="Country"
                    outlined
                    dense
                    hide-details
                  ></v-select>
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-select
                    v-model="language"
                    :items="languageList"
                    label="Language"
                    outlined
                    multiple
                    chips
                    clearable
                    dense
                    hide-details
                  ></v-select>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="birthDate"
                    type="number"
                    label="Birth Date"
                    placeholder="YYYY-MM-DD"
                    outlined
                    dense
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="phoneNO"
                    type="number"
                    label="Phone No."
                    outlined
                    dense
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-tab-item>

          <v-tab-item>
            <v-form class="multi-col-validation mt-1">
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="username"
                    label="Username"
                    outlined
                    dense
                    hide-details
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="email"
                    label="Email"
                    outlined
                    dense
                    hide-details
                    suffix="@example.com"
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="password"
                    label="Password"
                    outlined
                    dense
                    hide-details
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
                    v-model="cPassword"
                    label="Confirm Password"
                    outlined
                    dense
                    hide-details
                    :type="isCPasswordVisible ? 'text' : 'password'"
                    :append-icon="isCPasswordVisible ? icons.mdiEyeOutline : icons.mdiEyeOffOutline"
                    @click:append="isCPasswordVisible = !isCPasswordVisible"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-tab-item>
          <v-tab-item>
            <v-form class="multi-col-validation mt-1">
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="twitterLink"
                    label="Twitter"
                    outlined
                    dense
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="facebookLink"
                    label="Facebook"
                    outlined
                    dense
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="googlePlusLink"
                    label="Google+"
                    outlined
                    dense
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="linkedInLink"
                    label="LinkedIn"
                    outlined
                    dense
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="instagramLink"
                    label="Instagram"
                    outlined
                    dense
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="quaraLink"
                    label="Quora"
                    outlined
                    dense
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="primary">
          Submit
        </v-btn>
        <v-btn
          color="secondary"
          outlined
        >
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'

export default {
  setup() {
    const tab = ref('')
    const firstName = ref('')
    const lastName = ref('')
    const country = ref('')
    const language = ref('')
    const birthDate = ref('')
    const phoneNO = ref('')
    const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico']
    const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean']
    const username = ref('')
    const email = ref('')
    const password = ref('')
    const cPassword = ref('')
    const twitterLink = ref('')
    const facebookLink = ref('')
    const googlePlusLink = ref('')
    const linkedInLink = ref('')
    const instagramLink = ref('')
    const quaraLink = ref('')

    const isPasswordVisible = ref(false)
    const isCPasswordVisible = ref(false)

    return {
      tab,
      firstName,
      lastName,
      country,
      language,
      birthDate,
      phoneNO,
      countryList,
      languageList,
      username,
      email,
      password,
      isPasswordVisible,
      cPassword,
      isCPasswordVisible,
      twitterLink,
      facebookLink,
      googlePlusLink,
      linkedInLink,
      instagramLink,
      quaraLink,

      // icons
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
    }
  },
}
</script>
