<template>
  <v-card flat>
    <v-card-text>
      <p class="text-2xl font-weight-semibold text--primary my-2">Become a Consumer of IOEN power!</p>
      <p class="mb-2">More info here</p>
    </v-card-text>

    <!-- login form -->
    <v-card-text>
      <v-form ref="registerForm" @submit.prevent="handleFormSubmit">
        <v-text-field
          v-model="address"
          outlined
          dense
          label="Your micro grid controller ID"
          :error-messages="errorMessages.address"
          :rules="[validators.required]"
          placeholder="Your micro grid controller ID"
          hide-details="auto"
          class="mb-6"
        ></v-text-field>
        <v-checkbox v-model="isPrivacyPolicyAgreed" hide-details class="mt-0">
          <template #label>
            <div class="d-flex align-center flex-wrap">
              <span class="me-2">I agree to</span><a href="javascript:void(0)">privacy policy &amp; terms</a>
            </div>
          </template>
        </v-checkbox>

        <v-btn :disabled="!isPrivacyPolicyAgreed" block color="primary" type="submit" class="mt-6">
          Get IOEN power!
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { computed, ref } from '@vue/composition-api'
import { mdiEmailOutline, mdiSolarPower } from '@mdi/js'
import { required } from '@core/utils/validation'
import store from '../../../store'

export default {
  setup() {
    const address = ref('')
    const errorMessages = ref([])
    const isPrivacyPolicyAgreed = ref(false)
    const handleFormSubmit = () => {
      // const isFormValid = registerForm.value.validate()
      // if (!isFormValid) return
    }

    return {
      address,
      errorMessages,
      handleFormSubmit,
      isPrivacyPolicyAgreed,
      userData: computed(() => store.state.agentProfile),
      icons: {
        mdiEmailOutline,
        mdiSolarPower,
      },
      validators: {
        required,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.gamification-tree-4,
.gamification-john-pose-2,
.gamification-tree {
  position: absolute;
}
.gamification-tree {
  top: 10%;
  right: 0;
}
.gamification-john-pose-2 {
  bottom: 0;
  right: 15%;
}
.gamification-tree-4 {
  bottom: 0;
  right: 30%;
}

@media (max-width: 600px) {
  .gamification-tree,
  .gamification-tree-4 {
    display: none;
  }
  .gamification-john-pose-2 {
    right: 5%;
  }
}

@media (max-width: 500px) {
  .gamification-john-pose-2 {
    max-width: 70px;
  }
}

@media (max-width: 400px) {
  .greeting-title {
    font-size: 1.2rem !important;
  }
}

// rtl
.v-application {
  &.v-application--is-rtl {
    .gamification-john-pose-2 {
      right: initial;
      left: 15%;
    }
    .gamification-tree {
      right: initial;
      left: 0;
    }
    .gamification-tree-4 {
      left: 30%;
      right: initial;
    }
  }
}
</style>
