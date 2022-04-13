<template>
  <div class="auth-wrapper auth-v2">
    <div class="auth-inner">
      <!-- brand logo -->
      <router-link to="/" class="brand-logo d-flex align-center">
        <v-img :src="appLogo" max-height="30px" max-width="30px" alt="logo" contain class="me-3"></v-img>

        <h2 class="text--primary">
          {{ appName }}
        </h2>
      </router-link>
      <!--/ brand logo -->

      <v-row class="auth-row ma-0">
        <v-col lg="8" class="d-none d-lg-block position-relative overflow-hidden pa-0">
          <div class="auth-illustrator-wrapper">
            <!-- triangle bg -->
            <img
              height="362"
              class="auth-mask-bg"
              :src="require(`@/assets/images/misc/mask-v2-${$vuetify.theme.dark ? 'dark' : 'light'}.png`)"
            />

            <!-- tree -->
            <v-img height="226" width="300" class="auth-tree" src="@/assets/images/misc/tree-2.png"></v-img>

            <!-- 3d character -->
            <div class="d-flex align-center h-full pa-16 pe-0">
              <v-img
                contain
                max-width="100%"
                height="710"
                class="auth-3d-group"
                :src="require(`@/assets/images/misc/ioen-architecture.png`)"
              ></v-img>
            </div>
          </div>
        </v-col>

        <v-col lg="4" class="d-flex align-center auth-bg pa-10 pb-0">
          <v-row>
            <v-col cols="12" sm="8" md="6" lg="12" class="mx-auto">
              <v-card flat>
                <v-card-text>
                  <p class="text-2xl font-weight-semibold text--primary my-2">Join The Internet Of Energy Network</p>
                  <p class="mb-2">
                    The Internet of Energy Network (IOEN) is a community-driven network that enables connection and
                    value exchange between any energy device, user, or market.
                  </p>
                </v-card-text>

                <!-- login form -->
                <v-card-text>
                  <v-form ref="registerForm" @submit.prevent="handleFormSubmit">
                    <v-text-field
                      v-model="username"
                      outlined
                      dense
                      label="Your handle"
                      :error-messages="errorMessages.username"
                      :rules="[validators.required]"
                      placeholder="Your name"
                      hide-details="auto"
                      class="mb-6"
                    ></v-text-field>
                    <v-text-field
                      v-model="fullName"
                      outlined
                      dense
                      label="Your name"
                      :error-messages="errorMessages.username"
                      :rules="[validators.required]"
                      placeholder="Your name"
                      hide-details="auto"
                      class="mb-6"
                    ></v-text-field>
                    <v-file-input v-model="uploadedFile" accept="image/*" label="Upload new avatar" outlined dense>
                    </v-file-input>
                    <v-img :src="avatar" width="100" class="mx-auto mb-2" />
                    <v-text-field
                      v-model="email"
                      outlined
                      dense
                      :error-messages="errorMessages.email"
                      :rules="[validators.required, validators.emailValidator]"
                      label="Email"
                      placeholder="Email"
                      hide-details="auto"
                      class="mb-6"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      outlined
                      dense
                      :type="isPasswordVisible ? 'text' : 'password'"
                      label="Password"
                      :error-messages="errorMessages.password"
                      placeholder="Password"
                      :rules="[validators.required, validators.passwordValidator]"
                      :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                      hide-details="auto"
                      class="mb-2"
                      @click:append="isPasswordVisible = !isPasswordVisible"
                    ></v-text-field>
                    <v-checkbox v-model="isPrivacyPolicyAgreed" hide-details class="mt-0">
                      <template #label>
                        <div class="d-flex align-center flex-wrap">
                          <span class="me-2">I agree to</span
                          ><a href="javascript:void(0)">privacy policy &amp; terms</a>
                        </div>
                      </template>
                    </v-checkbox>

                    <v-btn :disabled="!isPrivacyPolicyAgreed" block color="primary" type="submit" class="mt-6">
                      Join IOEN!
                    </v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiFacebook,
  mdiTwitter,
  mdiGithub,
  mdiGoogle,
  mdiEyeOutline,
  mdiEyeOffOutline,
  mdiFileImageOutline,
} from '@mdi/js'
// eslint-disable-next-line object-curly-newline
import { required, emailValidator, passwordValidator, alphaValidator } from '@core/utils/validation'
import { ref, watch, getCurrentInstance } from '@vue/composition-api'
import axios from '@axios'
import { useRouter } from '@core/utils'
import themeConfig from '@themeConfig'

export default {
  setup() {
    // Template Refs
    const registerForm = ref(null)

    const vm = getCurrentInstance().proxy
    const { router } = useRouter()
    const isPrivacyPolicyAgreed = ref(false)
    const isPasswordVisible = ref(false)
    const username = ref('@philt3r')
    const fullName = ref('Phil')
    const avatar = ref('')
    const uploadedFile = ref([])
    const email = ref('philt3r@ioen.tech')
    const password = ref('32SolarPanels!')
    const errorMessages = ref([])
    const socialLink = [
      {
        icon: mdiFacebook,
        color: '#4267b2',
        colorInDark: '#4267b2',
      },
      {
        icon: mdiTwitter,
        color: '#1da1f2',
        colorInDark: '#1da1f2',
      },
      {
        icon: mdiGithub,
        color: '#272727',
        colorInDark: '#fff',
      },
      {
        icon: mdiGoogle,
        color: '#db4437',
        colorInDark: '#db4437',
      },
    ]

    watch(uploadedFile, fileToUpload => {
      const reader = new FileReader()
      if (fileToUpload === null) {
        avatar.value = ''

        return
      }
      reader.onload = e => {
        avatar.value = e.target.result
      }
      reader.readAsDataURL(fileToUpload)
    })

    const handleFormSubmit = () => {
      const isFormValid = registerForm.value.validate()

      if (!isFormValid) return

      /*
        1. Make HTTP request to get accessToken (Register the user & login) (User will be added to the database and new generated access token will be sent for loggin in)
        2. Store received token in localStorage for future use
        3. Make another HTTP request for getting user information
        4. On successful response of user information redirect to home page

        ? We have use promise chaining to get user data from access token
        ? Promise Chaining: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining
      */

      axios
        .post('/auth/register', { username: username.value, email: email.value, password: password.value })
        .then(response => {
          const { accessToken } = response.data

          // ? Set access token in localStorage so axios interceptor can use it
          // Axios Interceptors: https://github.com/axios/axios#interceptors
          localStorage.setItem('accessToken', accessToken)

          return response
        })
        .then(() => {
          axios.get('/auth/me').then(response => {
            const { user } = response.data
            const { ability: userAbility } = user

            // Set user ability
            // ? https://casl.js.org/v5/en/guide/intro#update-rules
            vm.$ability.update(userAbility)

            // ? Set user's ability in localStorage for Access Control
            localStorage.setItem('userAbility', JSON.stringify(userAbility))

            // ? We will store `userAbility` in localStorage separate from userData
            // ? Hence, we are just removing it from user object
            delete user.ability

            // ? Set user's data in localStorage for UI/Other purpose
            localStorage.setItem('userData', JSON.stringify(user))

            // ? On success redirect to home
            router.push('/')
          })
        })
        .catch(error => {
          // TODO: Next Update - Show notification
          console.error('Oops, Unable to Register!')
          console.log('error :>> ', error.response)
          errorMessages.value = error.response.data.error
        })
    }

    return {
      isPasswordVisible,
      isPrivacyPolicyAgreed,
      username,
      fullName,
      avatar,
      uploadedFile,
      email,
      password,
      errorMessages,
      handleFormSubmit,
      socialLink,
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
        mdiFileImageOutline,
      },
      validators: {
        required,
        emailValidator,
        passwordValidator,
        alphaValidator,
      },

      // themeConfig
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,

      // Template Refs
      registerForm,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@core/preset/preset/pages/auth.scss';
</style>
