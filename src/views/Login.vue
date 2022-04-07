<template>
  <div class="auth-wrapper auth-v2">
    <div class="auth-inner">
      <!-- brand logo -->
      <router-link
        to="/"
        class="brand-logo d-flex align-center"
      >
        <v-img
          :src="appLogo"
          max-height="30px"
          max-width="30px"
          alt="logo"
          contain
          class="me-3"
        ></v-img>

        <h2 class="text--primary">
          {{ appName }}
        </h2>
      </router-link>
      <!--/ brand logo -->

      <v-row class="auth-row ma-0">
        <v-col
          lg="8"
          class="d-none d-lg-block position-relative overflow-hidden pa-0"
        >
          <div class="auth-illustrator-wrapper">
            <!-- triangle bg -->
            <img
              height="362"
              class="auth-mask-bg"
              :src="require(`@/assets/images/misc/mask-v2-${$vuetify.theme.dark ? 'dark' : 'light'}.png`)"
            />

            <!-- tree -->
            <v-img
              height="226"
              width="300"
              class="auth-tree"
              src="@/assets/images/misc/tree-4.png"
            ></v-img>

            <!-- 3d character -->
            <div class="d-flex align-center h-full pa-16 pe-0">
              <v-img
                contain
                max-width="100%"
                height="692"
                class="auth-3d-group"
                :src="require(`@/assets/images/3d-characters/group-${$vuetify.theme.dark ? 'dark' : 'light'}.png`)"
              ></v-img>
            </div>
          </div>
        </v-col>

        <v-col
          lg="4"
          class="d-flex align-center auth-bg pa-10 pb-0"
        >
          <v-row>
            <v-col
              cols="12"
              sm="8"
              md="6"
              lg="12"
              class="mx-auto"
            >
              <v-card flat>
                <v-card-text>
                  <p class="text-2xl font-weight-semibold text--primary mb-2">
                    Welcome to IOEN! 👋🏻
                  </p>
                  <router-link :to="{ name: 'auth-register' }">
                    <p class="mb-2">
                      Join The Internet Of Energy Network
                    </p>
                  </router-link>
                </v-card-text>

                <!-- divider -->
                <v-card-text class="d-flex align-center mt-2">
                  <v-divider></v-divider>
                  <span class="mx-5">or log in here 😎</span>
                  <v-divider></v-divider>
                </v-card-text>

                <!-- login form -->
                <v-card-text>
                  <v-form
                    ref="loginForm"
                    @submit.prevent="handleFormSubmit"
                  >
                    <v-text-field
                      v-model="email"
                      outlined
                      label="Email"
                      placeholder="email"
                      :error-messages="errorMessages.email"
                      :rules="[validators.required, validators.emailValidator]"
                      hide-details="auto"
                      class="mb-6"
                    ></v-text-field>

                    <v-text-field
                      v-model="password"
                      outlined
                      :type="isPasswordVisible ? 'text' : 'password'"
                      label="Password"
                      :error-messages="errorMessages.password"
                      placeholder="Password"
                      :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                      :rules="[validators.required]"
                      hide-details="auto"
                      class="mb-2"
                      @click:append="isPasswordVisible = !isPasswordVisible"
                    ></v-text-field>

                    <div class="d-flex align-center justify-space-between flex-wrap">
                      <v-checkbox
                        hide-details
                        label="Remember Me"
                        class="mt-0"
                      >
                      </v-checkbox>

                      <!-- forget link -->
                      <router-link
                        :to="{ name: 'auth-forgot-password' }"
                        class="ms-3"
                      >
                        Forgot Password?
                      </router-link>
                    </div>

                    <v-btn
                      block
                      color="primary"
                      type="submit"
                      class="mt-6"
                    >
                      Login
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
import { mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'
import { ref, getCurrentInstance } from '@vue/composition-api'
import { required, emailValidator } from '@core/utils/validation'
import axios from '@axios'
import { useRouter } from '@core/utils'
import themeConfig from '@themeConfig'

export default {
  setup() {
    // Template Ref
    const loginForm = ref(null)

    const vm = getCurrentInstance().proxy
    const { router } = useRouter()

    const isPasswordVisible = ref(false)

    const email = ref('admin@materio.com')
    const password = ref('admin')
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

    const handleFormSubmit = () => {
      const isFormValid = loginForm.value.validate()

      if (!isFormValid) return

      /*
        1. Make HTTP request to get accessToken
        2. Store received token in localStorage for future use
        3. Make another HTTP request for getting user information
        4. On successful response of user information redirect to home page

        ? We have use promise chaining to get user data from access token
        ? Promise Chaining: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining
      */

      axios
        .post('/auth/login', { email: email.value, password: password.value })
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

            // Set user's ability in localStorage for Access Control
            localStorage.setItem('userAbility', JSON.stringify(userAbility))

            // We will store `userAbility` in localStorage separate from userData
            // Hence, we are just removing it from user object
            delete user.ability

            // Set user's data in localStorage for UI/Other purpose
            localStorage.setItem('userData', JSON.stringify(user))

            // On success redirect to home
            router.push('/')
          })
        })
        .catch(error => {
          // TODO: Next Update - Show notification
          console.error('Oops, Unable to login!')
          console.log('error :>> ', error.response)
          errorMessages.value = error.response.data.error
        })
    }

    return {
      handleFormSubmit,

      isPasswordVisible,
      email,
      password,
      errorMessages,
      socialLink,
      icons: {
        mdiEyeOutline,
        mdiEyeOffOutline,
      },
      validators: {
        required,
        emailValidator,
      },

      // themeConfig
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,

      // Template Refs
      loginForm,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@core/preset/preset/pages/auth.scss';
</style>
