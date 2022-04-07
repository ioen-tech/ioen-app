/* eslint-disable no-useless-escape */

export const formLayoutHorizontalIcon = `
<template>
  <v-form>
    <v-row>
      <v-col
        cols="12"
        md="3"
      >
        <label for="firstnameHorizontalIcons">First Name</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="firstnameHorizontalIcons"
          v-model="firstname"
          :prepend-inner-icon="icons.mdiAccountOutline"
          outlined
          dense
          placeholder="First Name"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <label for="emailHorizontalIcons">Email</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="emailHorizontalIcons"
          v-model="email"
          :prepend-inner-icon="icons.mdiEmailOutline"
          outlined
          dense
          placeholder="Email"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <label for="mobileHorizontalIcons">Mobile</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="mobileHorizontalIcons"
          v-model="mobile"
          type="number"
          outlined
          :prepend-inner-icon="icons.mdiCellphone"
          dense
          placeholder="Number"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <label for="passwordHorizontalIcons">Password</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="passwordHorizontalIcons"
          v-model="password"
          :prepend-inner-icon="icons.mdiLockOutline"
          type="password"
          outlined
          dense
          placeholder="Password"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        offset-md="3"
        cols="12"
      >
        <v-checkbox
          v-model="checkbox"
          label="Remember me"
          class="mt-0"
          hide-details
        ></v-checkbox>
      </v-col>

      <v-col
        offset-md="3"
        cols="12"
      >
        <v-btn color="primary">
          Submit
        </v-btn>
        <v-btn
          type="reset"
          outlined
          class="mx-2"
        >
          Reset
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiAccountOutline, mdiEmailOutline, mdiCellphone, mdiLockOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const firstname = ref('')
    const email = ref('')
    const mobile = ref()
    const password = ref()
    const checkbox = ref(false)

    return {
      firstname,
      email,
      mobile,
      password,
      checkbox,

      // icons
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCellphone,
        mdiLockOutline,
      },
    }
  },
}
</script>
`

export const formLayoutMultipleColumn = `
<template>
  <v-form class="multi-col-validation">
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="firstName"
          label="First Name"
          outlined
          dense
          placeholder="First Name"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="lastName"
          label="Last Name"
          outlined
          dense
          placeholder="Last Name"
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
          placeholder="Email"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="city"
          label="City"
          outlined
          dense
          placeholder="City"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="country"
          label="Country"
          outlined
          dense
          placeholder="Country"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="company"
          label="Company"
          outlined
          dense
          placeholder="Company"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-checkbox
          v-model="checkbox"
          label="Remember me"
          class="mt-0"
          hide-details
        ></v-checkbox>
      </v-col>

      <v-col cols="12">
        <v-btn color="primary">
          Submit
        </v-btn>
        <v-btn
          type="reset"
          outlined
          class="mx-2"
        >
          Reset
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const city = ref('')
    const country = ref('')
    const company = ref('')
    const email = ref('')
    const checkbox = ref(false)

    return {
      firstName,
      lastName,
      city,
      country,
      company,
      email,
      checkbox,
    }
  },
}
</script>
`

export const formLayoutHorizontal = `
<template>
  <v-form>
    <v-row>
      <v-col
        cols="12"
        md="3"
      >
        <label for="firstname">First Name</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="firstname"
          v-model="firstname"
          outlined
          dense
          placeholder="First Name"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <label for="email">Email</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="email"
          v-model="email"
          outlined
          dense
          placeholder="Email"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <label for="mobile">Mobile</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="mobile"
          v-model="mobile"
          type="number"
          outlined
          dense
          placeholder="Number"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <label for="password">Password</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="password"
          v-model="password"
          type="password"
          outlined
          dense
          placeholder="Password"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        offset-md="3"
        cols="12"
      >
        <v-checkbox
          v-model="checkbox"
          label="Remember me"
          class="mt-0"
          hide-details
        ></v-checkbox>
      </v-col>

      <v-col
        offset-md="3"
        cols="12"
      >
        <v-btn color="primary">
          Submit
        </v-btn>
        <v-btn
          type="reset"
          class="mx-2"
          outlined
        >
          Reset
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const firstname = ref('')
    const email = ref('')
    const mobile = ref()
    const password = ref()
    const checkbox = ref(false)

    return {
      firstname,
      email,
      mobile,
      password,
      checkbox,
    }
  },
}
</script>
`

export const formLayoutVerticalForm = `
<template>
  <v-form>
    <v-text-field
      v-model="firstname"
      label="First Name"
      outlined
      dense
      placeholder="First Name"
    ></v-text-field>

    <v-text-field
      v-model="email"
      label="Email"
      type="email"
      outlined
      dense
      placeholder="Email"
    ></v-text-field>

    <v-text-field
      v-model="mobile"
      label="Mobile"
      outlined
      dense
      type="number"
      placeholder="Number"
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Password"
      outlined
      dense
      type="password"
      placeholder="password"
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      label="Remember me"
      class="mt-0"
    ></v-checkbox>

    <v-btn color="primary">
      Submit
    </v-btn>

    <v-btn
      type="reset"
      outlined
      class="mx-2"
    >
      Reset
    </v-btn>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const firstname = ref('')
    const email = ref('')
    const mobile = ref()
    const password = ref()
    const checkbox = ref(false)

    return {
      firstname,
      email,
      mobile,
      password,
      checkbox,
    }
  },
}
</script>
`

export const formLayoutHint = `
<template>
  <v-form>
    <v-text-field
      v-model="username"
      label="Username"
      outlined
      dense
      placeholder="Username"
    ></v-text-field>

    <v-text-field
      v-model="email"
      label="Email"
      type="email"
      hint="Enter a Valid Email"
      outlined
      dense
      placeholder="Email"
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Password"
      hint="Your password must be 8-20 characters long."
      persistent-hint
      outlined
      dense
      class="mb-2"
      type="password"
      placeholder="password"
    ></v-text-field>

    <v-autocomplete
      v-model="values"
      :items="items"
      outlined
      dense
      chips
      small-chips
      label="Outlined"
      multiple
    ></v-autocomplete>

    <v-checkbox
      v-model="checkbox"
      label="Remember me"
      class="mt-0"
    ></v-checkbox>

    <v-btn color="primary">
      Submit
    </v-btn>

    <v-btn
      type="reset"
      outlined
      class="mx-2"
    >
      Reset
    </v-btn>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const username = ref('')
    const email = ref('')
    const mobile = ref()
    const password = ref()
    const checkbox = ref(false)
    const value = ref(null)
    const items = ['foo', 'bar', 'fizz', 'buzz']
    const values = []

    return {
      username,
      email,
      mobile,
      password,
      checkbox,
      value,
      items,
      values,
    }
  },
}
</script>
`

export const formLayoutVerticalFormWithIcons = `
<template>
  <v-form>
    <v-text-field
      v-model="firstname"
      :prepend-inner-icon="icons.mdiAccountOutline"
      label="First Name"
      outlined
      dense
      placeholder="First Name"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :prepend-inner-icon="icons.mdiEmailOutline"
      label="Email"
      type="email"
      outlined
      dense
      placeholder="Email"
    ></v-text-field>

    <v-text-field
      v-model="mobile"
      :prepend-inner-icon="icons.mdiCellphone"
      label="Mobile"
      outlined
      dense
      type="number"
      placeholder="Number"
    ></v-text-field>

    <v-text-field
      v-model="password"
      :prepend-inner-icon="icons.mdiLockOutline"
      label="Password"
      outlined
      dense
      type="password"
      placeholder="password"
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      label="Remember me"
      class="mt-0"
    ></v-checkbox>

    <v-btn color="primary">
      Submit
    </v-btn>
    <v-btn
      type="reset"
      outlined
      class="mx-2"
    >
      Reset
    </v-btn>
  </v-form>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiAccountOutline, mdiEmailOutline, mdiCellphone, mdiLockOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const firstname = ref('')
    const email = ref('')
    const mobile = ref()
    const password = ref()
    const checkbox = ref(false)

    return {
      firstname,
      email,
      mobile,
      password,
      checkbox,

      // icons
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCellphone,
        mdiLockOutline,
      },
    }
  },
}
</script>
`

export const formLayoutTabs = `
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
`

export const formLayoutCollapsible = `
<template>
  <v-expansion-panels v-model="panel">
    <v-expansion-panel>
      <v-expansion-panel-header>
        <span class="text-base">Delivery Address</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-form class="multi-col-validation">
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Full Name"
                dense
                hide-details
                outlined
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Phone No"
                dense
                hide-details
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                label="Address"
                outlined
                rows="3"
              ></v-textarea>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Pincode"
                dense
                hide-details
                outlined
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Landmark"
                dense
                hide-details
                outlined
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="City"
                dense
                hide-details
                outlined
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-select
                :items="stateList"
                outlined
                dense
                label="State"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <label>Address Type</label>
              <v-radio-group
                v-model="radios"
                mandatory
                row
              >
                <v-radio
                  label="Home (All day delivery)"
                  value="home"
                ></v-radio>
                <v-radio
                  label="Office (Delivery between 10 AM - 5 PM)"
                  value="office"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-form>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header>
        <span class="text-base">Delivery Options</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-radio-group v-model="deliveryOption">
          <div
            class="delivery-options"
            :class="deliveryOption === 'standard' ? 'active':''"
          >
            <div class="d-flex justify-space-between">
              <v-radio value="standard">
                <template #label>
                  <span class="text--primary text-lg font-weight-semibold">Standard 3-5 Days</span>
                </template>
              </v-radio>
              <span class="text-xl font-weight-bold">Free</span>
            </div>
            <span class="ms-8">Friday, 15 Nov - Monday, 18 Nov</span>
          </div>
          <div
            class="delivery-options"
            :class="deliveryOption === 'express' ? 'active':''"
          >
            <div class="d-flex justify-space-between">
              <v-radio value="express">
                <template #label>
                  <span class="text--primary text-lg font-weight-semibold">Express</span>
                </template>
              </v-radio>
              <span class="text-xl font-weight-bold">$5.00</span>
            </div>
            <span class="ms-8">Friday, 15 Nov - Sunday, 17 Nov</span>
          </div>
          <div
            class="delivery-options"
            :class="deliveryOption === 'overnight' ? 'active':''"
          >
            <div class="d-flex justify-space-between">
              <v-radio value="overnight">
                <template #label>
                  <span class="text--primary text-lg font-weight-semibold">Overnight</span>
                </template>
              </v-radio>
              <span class="text-xl font-weight-bold">$10.00</span>
            </div>
            <span class="ms-8">Friday, 15 Nov - Saturday, 16 Nov</span>
          </div>
        </v-radio-group>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header>
        <span class="text-base">Payment Method</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col
            md="6"
            cols="12"
          >
            <v-form>
              <v-row>
                <v-col cols="12">
                  <v-radio-group
                    v-model="paymentMethod"
                    row
                  >
                    <v-radio value="credit-debit-card">
                      <template #label>
                        <span class="text--primary text-base me-1">Credit/Debit/ATM Card</span>
                        <v-icon size="18">
                          {{ icons.mdiCreditCardOutline }}
                        </v-icon>
                      </template>
                    </v-radio>
                    <v-radio value="cash-on-delivery">
                      <template #label>
                        <span class="text--primary text-base me-1">Cash On Delivery</span>
                        <v-icon size="18">
                          {{ icons.mdiHelpCircleOutline }}
                        </v-icon>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Card Number"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Name"
                    outlined
                    dense
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="6"
                  md="3"
                >
                  <v-text-field
                    label="Expiry Date"
                    dense
                    outlined
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="6"
                  md="3"
                >
                  <v-text-field
                    label="CVV Code"
                    outlined
                    dense
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
        <v-divider class="my-5"></v-divider>
        <v-row>
          <v-col cols="12">
            <v-btn
              color="primary"
              class="me-5"
            >
              Place Order
            </v-btn>
            <v-btn
              outlined
              color="secondary"
            >
              Cancel
            </v-btn>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiCreditCardOutline, mdiHelpCircleOutline } from '@mdi/js'

export default {
  setup() {
    const stateList = [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
    ]
    const radios = ref('home')
    const deliveryOption = ref('standard')
    const paymentMethod = ref('credit-debit-card')
    const panel = ref(0)

    return {
      stateList,
      radios,
      deliveryOption,
      paymentMethod,
      panel,
      icons: {
        mdiCreditCardOutline,
        mdiHelpCircleOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/preset/preset/mixins.scss';

@include theme--child(delivery-options) using ($material) {
  border: 1px solid map-deep-get($material, 'dividers');
  padding: 2rem;
  &.active {
    border-color: var(--v-primary-base);
  }
}
</style>
`

export const formLayoutValidation = `
<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
      outlined
      dense
      hide-details="auto"
      class="mb-6"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      outlined
      dense
      hide-details="auto"
      class="mb-6"
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
      hide-details="auto"
      class="mb-6"
      outlined
      dense
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
      class="mt-0"
    ></v-checkbox>

    <div class="mt-4">
      <v-btn
        :disabled="!valid"
        color="success"
        @click="validate"
      >
        Validate
      </v-btn>
      <v-btn
        color="error"
        class="mx-4"
        @click="reset"
      >
        Reset Form
      </v-btn>
      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const valid = ref(true)
    const name = ref('')
    const nameRules = [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ]
    const email = ref('')
    const emailRules = [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid']
    const select = ref(null)
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
    const checkbox = ref(false)
    const form = ref(null)

    const validate = () => {
      form.value.validate()
    }
    const reset = () => {
      form.value.reset()
    }

    const resetValidation = () => {
      form.value.resetValidation()
    }

    return {
      form,
      valid,
      name,
      nameRules,
      email,
      emailRules,
      select,
      items,
      checkbox,
      validate,
      reset,
      resetValidation,
    }
  },
}
</script>
`
