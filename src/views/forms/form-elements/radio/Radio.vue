<template>
  <v-row class="match-height">
    <!-- basic -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.radioBasic"
      >
        <v-card-text>
          The <code>v-radio</code> component is a simple radio button.
        </v-card-text>

        <v-card-text>
          <demo-radio-basic></demo-radio-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- color -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Colors"
        :code="codeSnippets.radioColor"
      >
        <v-card-text>
          Radios can be colored by using any of the builtin colors and contextual names using the <code>color</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-radio-color></demo-radio-color>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Direction -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Direction"
        :code="codeSnippets.radioDirection"
      >
        <v-card-text>
          Radio-groups can be presented either as a row or a column, using their respective props. The default is as a column.
        </v-card-text>

        <v-card-text>
          <demo-radio-direction></demo-radio-direction>
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
        :code="codeSnippets.radioDense"
      >
        <v-card-text>
          Use <code>dense</code> prop to reduces the input height.
        </v-card-text>

        <v-card-text>
          <demo-radio-dense></demo-radio-dense>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Mandatory -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Mandatory"
        :code="codeSnippets.radioMandatory"
      >
        <v-card-text>
          Radio-groups are by default not mandatory. This can be changed with the <code>mandatory</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-radio-mandatory></demo-radio-mandatory>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- slot label -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Label Slot"
        :code="codeSnippets.radioLabelSlot"
      >
        <v-card-text>
          Radio Group labels can be defined in <code>label</code> slot - that will allow to use HTML content.
        </v-card-text>

        <v-card-text>
          <demo-radio-label-slot></demo-radio-label-slot>
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
        :code="codeSnippets.radioIcon"
      >
        <v-card-text>
          Use <code>off-icon</code> and <code>on-icon</code> prop to set icon on inactive and active state.
        </v-card-text>

        <v-card-text>
          <demo-radio-icon></demo-radio-icon>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- validation -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Validation"
        :code="codeSnippets.radioValidation"
      >
        <v-card-text>
          Accepts a mixed array of types <code>function</code>, <code>boolean</code> and <code>string</code>. Functions pass an input value as an argument and must return either <code>true</code> / <code>false</code> or a <code>string</code> containing an error message.
        </v-card-text>

        <v-card-text>
          <demo-radio-validation></demo-radio-validation>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoRadioBasic from './demos/DemoRadioBasic.vue'
import DemoRadioColor from './demos/DemoRadioColor.vue'
import DemoRadioDirection from './demos/DemoRadioDirection.vue'
import DemoRadioDense from './demos/DemoRadioDense.vue'
import DemoRadioMandatory from './demos/DemoRadioMandatory.vue'
import DemoRadioLabelSlot from './demos/DemoRadioLabelSlot.vue'
import DemoRadioIcon from './demos/DemoRadioIcon.vue'
import DemoRadioValidation from './demos/DemoRadioValidation.vue'

// code
import {
  radioBasic,
  radioColor,
  radioDirection,
  radioDense,
  radioMandatory,
  radioLabelSlot,
  radioIcon,
  radioValidation,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoRadioBasic,
    DemoRadioColor,
    DemoRadioDirection,
    DemoRadioDense,
    DemoRadioMandatory,
    DemoRadioLabelSlot,
    DemoRadioIcon,
    DemoRadioValidation,
  },
  setup() {
    return {
      codeSnippets: {
        radioBasic,
        radioColor,
        radioDirection,
        radioDense,
        radioMandatory,
        radioLabelSlot,
        radioIcon,
        radioValidation,
      },
    }
  },
}
</script>
