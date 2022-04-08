<template>
  <div class="auth-wrapper auth-v2">
    <div class="auth-inner">
      <v-overlay :absolute="true" :value="overlay" :opacity="1">
        <div class="d-flex align-center h-full pa-16 pe-0">
          <v-img
            contain
            max-width="100%"
            height="710"
            class="auth-3d-group"
            :src="require(`@/assets/images/misc/ioen-architecture.png`)"
          ></v-img>
        </div>
      </v-overlay>
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
import { mdiEyeOutline, mdiEyeOffOutline, mdiFileImageOutline } from '@mdi/js'
// eslint-disable-next-line object-curly-newline
import { required, emailValidator, passwordValidator, alphaValidator } from '@core/utils/validation'
import { ref, watch, getCurrentInstance, computed } from '@vue/composition-api'
import axios from '@axios'
import { useRouter } from '@core/utils'
import themeConfig from '@themeConfig'
import store from '../store'

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
    const isLoggedIn = computed(() => store.state.isLoggedIn)

    watch(isLoggedIn, value => {
      if (value === true) {
        vm.$ability.update(store.state.userAbility)
        router.push('/')
      }
    })

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
      const agentProfile = {
        nickname: username.value,
        fields: {
          avatar: avatar.value,
          email: email.value,
          fullName: fullName.value,
        },
      }
      store.dispatch('createProfile', agentProfile)
    }

    return {
      overlay: computed(() => store.state.overlay),
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
