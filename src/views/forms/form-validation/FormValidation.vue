<template>
  <div class="demo-space-y">
    <app-card-code
      title="Simple Form Validation"
      :code="codeSnippet.formValidationSimple"
    >
      <v-card-text>
        To add validation to any input filed just used <code>rules</code> prop.
      </v-card-text>

      <v-card-text>
        <demo-form-validation-simple></demo-form-validation-simple>
      </v-card-text>
    </app-card-code>

    <!-- Validating Multiple Rules -->
    <app-card-code
      title="Validating Multiple Rules"
      :code="codeSnippet.formValidationMultipleRules"
    >
      <v-card-text>
        <demo-form-validation-multiple-rules></demo-form-validation-multiple-rules>
      </v-card-text>
    </app-card-code>

    <!-- Validation types -->
    <app-card-code
      title="Validation types"
      :code="codeSnippet.formValidationTypes"
    >
      <v-card-text>
        <demo-form-validation-types></demo-form-validation-types>
      </v-card-text>
    </app-card-code>
  </div>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoFormValidationSimple from './demos/DemoFormValidationSimple.vue'
import DemoFormValidationMultipleRules from './demos/DemoFormValidationMultipleRules.vue'
import DemoFormValidationTypes from './demos/DemoFormValidationTypes.vue'

// code
import { formValidationSimple, formValidationMultipleRules, formValidationTypes } from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoFormValidationSimple,
    DemoFormValidationMultipleRules,
    DemoFormValidationTypes,
  },
  setup() {
    return {
      codeSnippet: {
        formValidationSimple,
        formValidationMultipleRules,
        formValidationTypes,
      },
    }
  },
}
</script>
