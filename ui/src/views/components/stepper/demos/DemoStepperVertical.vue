<template>
  <v-stepper
    v-model="activeStep"
    vertical
    class="custom-header"
  >
    <!-- Step 1 -->
    <v-stepper-step
      :complete="activeStep > 1"
      step="1"
    >
      <div class="d-flex align-center">
        <span class="text--primary text-4xl font-weight-bold me-3">01</span>
        <div class="d-flex flex-column">
          <span class="text--primary text-sm font-weight-semibold">Account Details</span>
          <span class="text--secondary text-xs">Setup your account details</span>
        </div>
      </div>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card
        color="secondary"
        class="mb-6"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        class="me-2"
        @click="activeStep = 2"
      >
        Next
      </v-btn>
    </v-stepper-content>

    <!-- Step 2 -->
    <v-stepper-step
      :complete="activeStep > 2"
      step="2"
    >
      <div class="d-flex align-center">
        <span class="text--primary text-4xl font-weight-bold me-3">02</span>
        <div class="d-flex flex-column">
          <span class="text--primary text-sm font-weight-semibold">Personal Info</span>
          <span class="text--secondary text-xs">Setup Information</span>
        </div>
      </div>
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card
        color="secondary"
        class="mb-6"
        height="200px"
      ></v-card>
      <v-btn
        outlined
        @click="activeStep = 1"
      >
        Previous
      </v-btn>
      <v-btn
        color="primary"
        class="ms-2"
        @click="activeStep = 3"
      >
        Next
      </v-btn>
    </v-stepper-content>

    <!-- Step 3 -->
    <v-stepper-step
      :complete="activeStep > 3"
      step="3"
    >
      <div class="d-flex align-center">
        <span class="text--primary text-4xl font-weight-bold me-3">03</span>
        <div class="d-flex flex-column">
          <span class="text--primary text-sm font-weight-semibold">Review &nbsp; Submit</span>
          <span class="text--secondary text-xs">Write a Review</span>
        </div>
      </div>
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card
        color="secondary"
        class="mb-6"
        height="200px"
      ></v-card>
      <v-btn
        outlined
        @click="activeStep = 2"
      >
        Previous
      </v-btn>
      <v-btn
        color="primary"
        class="ms-2"
      >
        Complete
      </v-btn>
    </v-stepper-content>
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
