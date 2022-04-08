<template>
  <v-stepper
    v-model="activeStep"
    class="custom-header"
  >
    <!-- Header -->
    <v-stepper-header>
      <!-- Header: Step 1 -->
      <v-stepper-step
        :complete="activeStep > 1"
        step="1"
        :rules="[() => stepValidationResult[1]]"
      >
        <div class="d-flex align-center">
          <span
            class="text-4xl font-weight-bold me-3"
            :class="stepValidationResult[1] ? 'text--primary' : 'error--text'"
          >01</span>
          <div class="d-flex flex-column">
            <span
              class="text-sm font-weight-semibold"
              :class="stepValidationResult[1] ? 'text--primary' : 'error--text'"
            >Account Details</span>
            <span
              class="text-xs"
              :class="stepValidationResult[1] ? 'text--secondary' : 'error--text'"
            >Setup your account details</span>
          </div>
        </div>
      </v-stepper-step>

      <v-divider></v-divider>

      <!-- Header: Step 2 -->
      <v-stepper-step
        :complete="activeStep > 2"
        step="2"
        :rules="[() => stepValidationResult[2]]"
      >
        <div class="d-flex align-center">
          <span
            class="text-4xl font-weight-bold me-3"
            :class="stepValidationResult[2] ? 'text--primary' : 'error--text'"
          >02</span>
          <div class="d-flex flex-column">
            <span
              class="text-sm font-weight-semibold"
              :class="stepValidationResult[2] ? 'text--primary' : 'error--text'"
            >Personal Info</span>
            <span
              class="text-xs"
              :class="stepValidationResult[2] ? 'text--secondary' : 'error--text'"
            >Setup Information</span>
          </div>
        </div>
      </v-stepper-step>

      <v-divider></v-divider>

      <!-- Header: Step 3 -->
      <v-stepper-step
        step="3"
        :rules="[() => stepValidationResult[3]]"
      >
        <div class="d-flex align-center">
          <span
            class="text-4xl font-weight-bold me-3"
            :class="stepValidationResult[3] ? 'text--primary' : 'error--text'"
          >03</span>
          <div class="d-flex flex-column">
            <span
              class="text-sm font-weight-semibold"
              :class="stepValidationResult[3] ? 'text--primary' : 'error--text'"
            >Review &nbsp; Submit</span>
            <span
              class="text-xs"
              :class="stepValidationResult[3] ? 'text--secondary' : 'error--text'"
            >Write a Review</span>
          </div>
        </div>
      </v-stepper-step>
    </v-stepper-header>

    <!-- Stepper Items -->
    <v-stepper-items>
      <!-- Stepper Content: Step 1 -->
      <v-stepper-content step="1">
        <v-form
          ref="step1Form"
          class="pb-6 pt-2"
        >
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="userData.username"
                label="Username"
                outlined
                dense
                hide-details="auto"
                :rules="[validators.required, validators.alphaDashValidator]"
                placeholder="Username"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="userData.email"
                label="Email"
                outlined
                dense
                hide-details="auto"
                :rules="[validators.required, validators.emailValidator]"
                placeholder="Email"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="userData.password"
                label="Password"
                outlined
                dense
                hide-details="auto"
                type="password"
                :rules="[validators.required, validators.passwordValidator]"
                placeholder="Password"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="userData.confirmPassword"
                label="Confirm Password"
                outlined
                dense
                hide-details="auto"
                type="password"
                :rules="[validators.required, validators.confirmedValidator(userData.confirmPassword,userData.password)]"
                placeholder="Confirm Password"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>

        <div class="d-flex justify-end">
          <v-btn
            color="primary"
            class="me-2"
            @click="handleStepValidation(1)"
          >
            Next
          </v-btn>
        </div>
      </v-stepper-content>

      <!-- Stepper Content: Step 2 -->
      <v-stepper-content step="2">
        <v-form
          ref="step2Form"
          class="pb-6 pt-2 multi-col-validation"
        >
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="userData.firstName"
                label="First Name"
                outlined
                dense
                hide-details="auto"
                :rules="[validators.required, validators.alphaValidator]"
                placeholder="First Name"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="userData.lastName"
                label="Last Name"
                outlined
                dense
                hide-details="auto"
                :rules="[validators.required, validators.alphaValidator]"
                placeholder="Last Name"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-select
                v-model="userData.country"
                :items="['United States', 'United Kingdom', 'France', 'Germany']"
                :menu-props="['offset-y']"
                :rules="[validators.required]"
                label="Country"
                dense
                hide-details="auto"
                required
                outlined
              ></v-select>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-select
                v-model="userData.language"
                :items="['Sanskrit', 'English', 'French', 'Arabic']"
                :menu-props="['offset-y']"
                :rules="[validators.required]"
                label="Language"
                required
                dense
                hide-details="auto"
                outlined
              ></v-select>
            </v-col>
          </v-row>
        </v-form>

        <div class="d-flex justify-space-between">
          <v-btn
            outlined
            @click="handleStepValidation(2, false)"
          >
            Previous
          </v-btn>
          <v-btn
            color="primary"
            @click="handleStepValidation(2)"
          >
            Next
          </v-btn>
        </div>
      </v-stepper-content>

      <!-- Stepper Content: Step 3 -->
      <v-stepper-content step="3">
        <v-form
          ref="step3Form"
          class="pb-6 pt-2 multi-col-validation"
        >
          <v-row>
            <!-- Twitter -->
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="userData.social.twitter"
                label="Twitter"
                outlined
                dense
                hide-details="auto"
                :rules="[validators.required]"
                placeholder="Twitter"
              ></v-text-field>
            </v-col>

            <!-- Facebook -->
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="userData.social.facebook"
                label="Facebook"
                outlined
                dense
                hide-details="auto"
                :rules="[validators.required]"
                placeholder="Facebook"
              ></v-text-field>
            </v-col>

            <!-- Google -->
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="userData.social.google"
                label="Google"
                outlined
                dense
                hide-details="auto"
                :rules="[validators.required]"
                placeholder="Google"
              ></v-text-field>
            </v-col>

            <!-- LinkedIn -->
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="userData.social.linkedIn"
                label="LinkedIn"
                outlined
                dense
                hide-details="auto"
                :rules="[validators.required]"
                placeholder="LinkedIn"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>

        <!-- Action Buttons -->
        <div class="d-flex justify-space-between">
          <v-btn
            outlined
            @click="handleStepValidation(3, false)"
          >
            Previous
          </v-btn>
          <v-btn
            color="primary"
            @click="handleStepValidation(3, true, true)"
          >
            Complete
          </v-btn>
        </div>

        <v-snackbar v-model="isFormSubmittedSnackbarVisible">
          Form Submitted Successfully.
        </v-snackbar>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import { ref } from '@vue/composition-api'
import {
  required,
  alphaDashValidator,
  emailValidator,
  passwordValidator,
  confirmedValidator,
  alphaValidator,
} from '@core/utils/validation'

export default {
  setup() {
    // Stepper's active step
    const activeStep = ref(1)

    // Data
    const userData = ref({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      country: null,
      language: null,
      social: {
        twitter: '',
        facebook: '',
        google: '',
        linkedIn: '',
      },
    })

    // Form Submitted Snackbar
    const isFormSubmittedSnackbarVisible = ref(false)

    // Template refs
    const step1Form = ref(null)
    const step2Form = ref(null)
    const step3Form = ref(null)

    // Step Validation (for `rules` prop of `v-stepper-step`)
    // It will be updated when step is validated
    const stepValidationResult = ref({
      1: true,
      2: true,
      3: true,
    })

    // Step Validation
    const handleStepValidation = (step, navigateNext = true, isFinalStep = false) => {
      // Get Form templateRef of Step from argument
      const templateRef = (() => {
        if (step === 1) return step1Form
        if (step === 2) return step2Form
        if (step === 3) return step3Form

        return null
      })()

      // If no validate step templateRef is found just return
      if (!templateRef) return

      // If step is valid proceed to the next step
      const isStepValid = templateRef.value.validate()

      // Assign to stepValidationResult
      stepValidationResult.value[step] = isStepValid

      if (isStepValid) {
        if (navigateNext && !isFinalStep) activeStep.value += 1
        else if (!navigateNext) activeStep.value -= 1

        // Show Snackbar
        if (isFinalStep) {
          // ? Some Ajax request which saves form data in database
          isFormSubmittedSnackbarVisible.value = true
        }
      }
    }

    return {
      activeStep,
      userData,

      // Field Validators
      validators: {
        required,
        alphaDashValidator,
        emailValidator,
        passwordValidator,
        confirmedValidator,
        alphaValidator,
      },

      // Step Validations
      stepValidationResult,
      handleStepValidation,

      // Template Refs
      step1Form,
      step2Form,
      step3Form,

      // Snackbar
      isFormSubmittedSnackbarVisible,
    }
  },
}
</script>
