<template>
  <v-row class="match-height">
    <!-- horizontal -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Horizontal Form"
        :code="codeSnippets.formLayoutHorizontal"
      >
        <v-card-text>
          <demo-form-layout-horizontal></demo-form-layout-horizontal>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- horizontal form with icons -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Horizontal Form with Icons"
        :code="codeSnippets.formLayoutHorizontalIcon"
      >
        <v-card-text>
          <demo-form-layout-horizontal-icon></demo-form-layout-horizontal-icon>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Vertical Form -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Vertical Form"
        :code="codeSnippets.formLayoutVerticalForm"
      >
        <v-card-text>
          <demo-form-layout-vertical-form></demo-form-layout-vertical-form>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- vertical form icons -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Vertical Form with Icons"
        :code="codeSnippets.formLayoutVerticalFormWithIcons"
      >
        <v-card-text>
          <demo-form-layout-vertical-form-with-icons></demo-form-layout-vertical-form-with-icons>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Multiple Column -->
    <v-col cols="12">
      <app-card-code
        title="Multiple Column"
        :code="codeSnippets.formLayoutMultipleColumn"
      >
        <v-card-text>
          <demo-form-layout-multiple-column></demo-form-layout-multiple-column>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- form hint -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Form Hint"
        :code="codeSnippets.formLayoutHint"
      >
        <v-card-text>
          <demo-form-layout-hint></demo-form-layout-hint>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- form validation -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Form Validation"
        :code="codeSnippets.formLayoutValidation"
      >
        <v-card-text>
          <demo-form-layout-validation></demo-form-layout-validation>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- form with tabs -->
    <v-col cols="12">
      <app-card-code
        title="Form with Tabs"
        :code="codeSnippets.formLayoutTabs"
      >
        <demo-form-layout-tabs></demo-form-layout-tabs>
      </app-card-code>
    </v-col>

    <!-- collapsible -->
    <v-col cols="12">
      <h4 class="text-xl font-weight-medium mb-5">
        Collapsible Section
      </h4>
      <demo-form-layout-collapsible></demo-form-layout-collapsible>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoFormLayoutHorizontal from './demos/DemoFormLayoutHorizontal.vue'
import DemoFormLayoutHorizontalIcon from './demos/DemoFormLayoutHorizontalIcon.vue'
import DemoFormLayoutVerticalForm from './demos/DemoFormLayoutVerticalForm.vue'
import DemoFormLayoutVerticalFormWithIcons from './demos/DemoFormLayoutVerticalFormWithIcons.vue'
import DemoFormLayoutMultipleColumn from './demos/DemoFormLayoutMultipleColumn.vue'
import DemoFormLayoutHint from './demos/DemoFormLayoutHint.vue'
import DemoFormLayoutValidation from './demos/DemoFormLayoutValidation.vue'
import DemoFormLayoutTabs from './demos/DemoFormLayoutTabs.vue'
import DemoFormLayoutCollapsible from './demos/DemoFormLayoutCollapsible.vue'

// code
import {
  formLayoutHorizontal,
  formLayoutHorizontalIcon,
  formLayoutVerticalForm,
  formLayoutVerticalFormWithIcons,
  formLayoutMultipleColumn,
  formLayoutHint,
  formLayoutValidation,
  formLayoutTabs,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoFormLayoutHorizontal,
    DemoFormLayoutHorizontalIcon,
    DemoFormLayoutVerticalForm,
    DemoFormLayoutVerticalFormWithIcons,
    DemoFormLayoutMultipleColumn,
    DemoFormLayoutHint,
    DemoFormLayoutValidation,
    DemoFormLayoutTabs,
    DemoFormLayoutCollapsible,
  },
  setup() {
    return {
      codeSnippets: {
        formLayoutHorizontal,
        formLayoutHorizontalIcon,
        formLayoutVerticalForm,
        formLayoutVerticalFormWithIcons,
        formLayoutMultipleColumn,
        formLayoutHint,
        formLayoutValidation,
        formLayoutTabs,
      },
    }
  },
}
</script>
