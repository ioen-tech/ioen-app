<template>
  <v-row class="match-height">
    <!-- basic -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.switchBasic"
      >
        <v-card-text>
          A <code>v-switch</code> in its simplest form provides a toggle between 2 values.
        </v-card-text>

        <v-card-text>
          <demo-switch-basic></demo-switch-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- flat -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Flat"
        :code="codeSnippets.switchFlat"
      >
        <v-card-text>
          You can make switch render without elevation of thumb using <code>flat</code> property.
        </v-card-text>

        <v-card-text>
          <demo-switch-flat></demo-switch-flat>
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
        :code="codeSnippets.switchColor"
      >
        <v-card-text>
          Switches can be colored by using any of the builtin colors and contextual names using the <code>color</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-switch-color></demo-switch-color>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- inset -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Inset"
        :code="codeSnippets.switchInset"
      >
        <v-card-text>
          You can make switch render in inset mode.
        </v-card-text>

        <v-card-text>
          <demo-switch-inset></demo-switch-inset>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Model as array -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Model as array"
        :code="codeSnippets.switchModelAsArray"
      >
        <v-card-text>
          Multiple <code>v-switch</code>'s can share the same <code>v-model</code> by using an array.
        </v-card-text>

        <v-card-text>
          <demo-switch-model-as-array></demo-switch-model-as-array>
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
        :code="codeSnippets.switchStates"
      >
        <v-card-text>
          <code>v-switch</code> can have different states such as <code>default</code>, <code>disabled</code>, and <code>loading</code>.
        </v-card-text>

        <v-card-text>
          <demo-switch-states></demo-switch-states>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- label slot -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Label slot"
        :code="codeSnippets.switchLabelSlot"
      >
        <v-card-text>Switch labels can be defined in <code>label</code> slot - that will allow to use HTML content.</v-card-text>
        <v-card-text>
          <demo-switch-label-slot></demo-switch-label-slot>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- true false value -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="True and False Value"
        :code="codeSnippets.switchTrueAndFalseValue"
      >
        <v-card-text>
          Use <code>false-value</code> and <code>true-value</code> prop to sets value for truthy and falsy state
        </v-card-text>

        <v-card-text>
          <demo-switch-true-and-false-value></demo-switch-true-and-false-value>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoSwitchBasic from './demos/DemoSwitchBasic.vue'
import DemoSwitchFlat from './demos/DemoSwitchFlat.vue'
import DemoSwitchColor from './demos/DemoSwitchColor.vue'
import DemoSwitchInset from './demos/DemoSwitchInset.vue'
import DemoSwitchModelAsArray from './demos/DemoSwitchModelAsArray.vue'
import DemoSwitchStates from './demos/DemoSwitchStates.vue'
import DemoSwitchLabelSlot from './demos/DemoSwitchLabelSlot.vue'
import DemoSwitchTrueAndFalseValue from './demos/DemoSwitchTrueAndFalseValue.vue'

// code
import {
  switchBasic,
  switchFlat,
  switchColor,
  switchInset,
  switchModelAsArray,
  switchStates,
  switchLabelSlot,
  switchTrueAndFalseValue,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoSwitchBasic,
    DemoSwitchFlat,
    DemoSwitchColor,
    DemoSwitchInset,
    DemoSwitchModelAsArray,
    DemoSwitchStates,
    DemoSwitchLabelSlot,
    DemoSwitchTrueAndFalseValue,
  },
  setup() {
    return {
      codeSnippets: {
        switchBasic,
        switchFlat,
        switchColor,
        switchInset,
        switchModelAsArray,
        switchStates,
        switchLabelSlot,
        switchTrueAndFalseValue,
      },
    }
  },
}
</script>
