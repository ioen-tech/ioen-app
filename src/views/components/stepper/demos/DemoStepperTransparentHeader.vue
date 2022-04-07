<template>
  <v-stepper
    v-model="activeStep"
    flat
    class="transparent custom-header"
    alt-labels
  >
    <!-- Header -->
    <v-stepper-header>
      <!-- Header: Step 1 -->
      <v-stepper-step
        :complete="activeStep > 1"
        step="1"
      >
        <div class="d-flex flex-column text-center text-no-wrap">
          <span class="text--primary text-sm font-weight-semibold">Account Details</span>
          <span class="text--secondary text-xs">Setup your account details</span>
        </div>
      </v-stepper-step>

      <v-divider></v-divider>

      <!-- Header: Step 2 -->
      <v-stepper-step
        :complete="activeStep > 2"
        step="2"
      >
        <div class="d-flex flex-column text-center text-no-wrap">
          <span class="text--primary text-sm font-weight-semibold">Personal Info</span>
          <span class="text--secondary text-xs">Setup Information</span>
        </div>
      </v-stepper-step>

      <v-divider></v-divider>

      <!-- Header: Step 3 -->
      <v-stepper-step step="3">
        <div class="d-flex flex-column text-center text-no-wrap">
          <span class="text--primary text-sm font-weight-semibold">Review &nbsp; Submit</span>
          <span class="text--secondary text-xs">Write a Review</span>
        </div>
      </v-stepper-step>
    </v-stepper-header>

    <!-- Stepper Items -->
    <v-card>
      <v-stepper-items>
        <!-- Stepper Content: Step 1 -->
        <v-stepper-content step="1">
          <v-card
            class="mb-8"
            color="secondary"
            height="200px"
          ></v-card>
          <div class="d-flex justify-end">
            <v-btn
              color="primary"
              @click="activeStep = 2"
            >
              Next
            </v-btn>
          </div>
        </v-stepper-content>
        <!-- Stepper Content: Step 2 -->
        <v-stepper-content step="2">
          <v-card
            class="mb-8"
            color="secondary"
            height="200px"
          ></v-card>
          <div class="d-flex justify-space-between">
            <v-btn
              outlined
              @click="activeStep = 1"
            >
              Previous
            </v-btn>
            <v-btn
              color="primary"
              class="me-2"
              @click="activeStep = 3"
            >
              Next
            </v-btn>
          </div>
        </v-stepper-content>
        <!-- Stepper Content: Step 3 -->
        <v-stepper-content step="3">
          <v-card
            class="mb-8"
            color="secondary"
            height="200px"
          ></v-card>
          <div class="d-flex justify-space-between">
            <v-btn
              outlined
              @click="activeStep = 2"
            >
              Previous
            </v-btn>
            <v-btn
              color="primary"
              class="me-2"
            >
              Complete
            </v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-card>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      activeStep: 1,
    }
  },
}
</script>
