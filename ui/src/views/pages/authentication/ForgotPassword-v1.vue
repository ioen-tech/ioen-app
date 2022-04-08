<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card">
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link
            to="/"
            class="d-flex align-center"
          >
            <v-img
              :src="appLogo"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3 "
            ></v-img>

            <h2 class="text-2xl font-weight-semibold">
              {{ appName }}
            </h2>
          </router-link>
        </v-card-title>

        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">
            Forgot Password? 🔒
          </p>
          <p class="mb-2">
            Enter your email and we'll send you instructions to reset your password
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="email"
              outlined
              label="Email"
              placeholder="john@example.com"
              hide-details
              class="mb-4"
            ></v-text-field>

            <v-btn
              block
              color="primary"
            >
              Send reset link
            </v-btn>
          </v-form>
        </v-card-text>

        <v-card-actions class="d-flex justify-center align-center">
          <router-link
            :to="{name:'auth-login-v1'}"
            class="d-flex align-center text-sm"
          >
            <v-icon
              size="24"
              color="primary"
            >
              {{ icons.mdiChevronLeft }}
            </v-icon>
            <span>Back to login</span>
          </router-link>
        </v-card-actions>
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="190"
      :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark':'light'}.png`)"
    />

    <!-- tree -->
    <v-img
      class="auth-tree"
      width="247"
      height="185"
      src="@/assets/images/misc/tree.png"
    ></v-img>

    <!-- tree  -->
    <v-img
      class="auth-tree-3"
      width="377"
      height="289"
      src="@/assets/images/misc/tree-3.png"
    ></v-img>
  </div>
</template>

<script>
import { mdiChevronLeft } from '@mdi/js'
import { ref } from '@vue/composition-api'
import themeConfig from '@themeConfig'

export default {
  setup() {
    const isPasswordVisible = ref(false)
    const email = ref('')

    return {
      isPasswordVisible,
      email,

      // themeConfig
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,

      icons: {
        mdiChevronLeft,
      },
    }
  },
}
</script>

<style lang="scss">
@import '@core/preset/preset/pages/auth.scss';
</style>
