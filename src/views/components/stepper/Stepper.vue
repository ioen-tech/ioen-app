<template>
  <div>
    <p class="text-2xl">
      Stepper With Custom Header
    </p>
    <demo-stepper-custom-header></demo-stepper-custom-header>
    <p class="text-2xl mt-16">
      Stepper With Transparent Header
    </p>
    <demo-stepper-transparent-header></demo-stepper-transparent-header>
    <p class="text-2xl mt-16">
      Vertical Stepper
    </p>
    <demo-stepper-vertical></demo-stepper-vertical>
    <p class="text-2xl mt-16">
      Stepper With Form
    </p>
    <demo-stepper-with-form></demo-stepper-with-form>
  </div>
</template>

<script>
import DemoStepperCustomHeader from './demos/DemoStepperCustomHeader.vue'
import DemoStepperTransparentHeader from './demos/DemoStepperTransparentHeader.vue'
import DemoStepperVertical from './demos/DemoStepperVertical.vue'
import DemoStepperWithForm from './demos/DemoStepperWithForm.vue'

export default {
  components: {
    DemoStepperCustomHeader,
    DemoStepperTransparentHeader,
    DemoStepperVertical,
    DemoStepperWithForm,
  },
}
</script>

<style>
</style>
