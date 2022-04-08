<template>
  <v-row class="match-height">
    <!-- basic -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.checkboxBasic"
      >
        <v-card-text>A <code>v-checkbox</code> in its simplest form provides a toggle between 2 values.</v-card-text>

        <v-card-text>
          <demo-checkbox-basic></demo-checkbox-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- dense -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Dense"
        :code="codeSnippets.checkboxDense"
      >
        <v-card-text>Use <code>dense</code> prop to reduces the input height.</v-card-text>

        <v-card-text>
          <demo-checkbox-dense></demo-checkbox-dense>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- colors -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Colors"
        :code="codeSnippets.checkboxColors"
      >
        <v-card-text>
          Checkboxes can be colored by using any of the builtin colors and contextual names using the <code>color</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-checkbox-colors></demo-checkbox-colors>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- model as array -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Model as array"
        :code="codeSnippets.checkboxModelAsArray"
      >
        <v-card-text>
          Multiple <code>v-checkbox</code>'s can share the same <code>v-model</code> by using an array.
        </v-card-text>

        <v-card-text>
          <demo-checkbox-model-as-array></demo-checkbox-model-as-array>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- icons -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Icon"
        :code="codeSnippets.checkboxIcon"
      >
        <v-card-text>
          Use <code>off-icon</code> and <code>on-icon</code> prop to change the icon on the checkbox.
        </v-card-text>

        <v-card-text>
          <demo-checkbox-icon></demo-checkbox-icon>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- checkbox value -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Checkbox Value"
        :code="codeSnippets.checkboxValue"
      >
        <v-card-text>
          Use <code>false-value</code> and <code>true-value</code> prop to sets value for truthy and falsy state
        </v-card-text>

        <v-card-text>
          <demo-checkbox-value></demo-checkbox-value>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- states -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="States"
        :code="codeSnippets.checkboxStates"
      >
        <v-card-text>
          <code>v-checkbox</code> can have different states such as <code>default</code>, <code>disabled</code>, and <code>indeterminate</code>.
        </v-card-text>

        <v-card-text>
          <demo-checkbox-states></demo-checkbox-states>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- label slot -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Label Slot"
        :code="codeSnippets.checkboxLabelSlot"
      >
        <v-card-text>Checkbox labels can be defined in <code>label</code> slot - that will allow to use HTML content.</v-card-text>

        <v-card-text>
          <demo-checkbox-label-slot></demo-checkbox-label-slot>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Inline text-field -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Inline text-field"
        :code="codeSnippets.checkboxInlineTextField"
      >
        <v-card-text>
          You can place <code>v-checkbox</code> in line with other components such as <code>v-text-field</code>.
        </v-card-text>

        <v-card-text>
          <demo-checkbox-inline-text-field></demo-checkbox-inline-text-field>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoCheckboxBasic from './demos/DemoCheckboxBasic.vue'
import DemoCheckboxDense from './demos/DemoCheckboxDense.vue'
import DemoCheckboxColors from './demos/DemoCheckboxColors.vue'
import DemoCheckboxModelAsArray from './demos/DemoCheckboxModelAsArray.vue'
import DemoCheckboxIcon from './demos/DemoCheckboxIcon.vue'
import DemoCheckboxValue from './demos/DemoCheckboxValue.vue'
import DemoCheckboxStates from './demos/DemoCheckboxStates.vue'
import DemoCheckboxLabelSlot from './demos/DemoCheckboxLabelSlot.vue'
import DemoCheckboxInlineTextField from './demos/DemoCheckboxInlineTextField.vue'

// code
import {
  checkboxBasic,
  checkboxDense,
  checkboxColors,
  checkboxModelAsArray,
  checkboxIcon,
  checkboxValue,
  checkboxStates,
  checkboxLabelSlot,
  checkboxInlineTextField,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoCheckboxBasic,
    DemoCheckboxDense,
    DemoCheckboxColors,
    DemoCheckboxModelAsArray,
    DemoCheckboxIcon,
    DemoCheckboxValue,
    DemoCheckboxStates,
    DemoCheckboxLabelSlot,
    DemoCheckboxInlineTextField,
  },
  setup() {
    return {
      codeSnippets: {
        checkboxBasic,
        checkboxDense,
        checkboxColors,
        checkboxModelAsArray,
        checkboxIcon,
        checkboxValue,
        checkboxStates,
        checkboxLabelSlot,
        checkboxInlineTextField,
      },
    }
  },
}
</script>
