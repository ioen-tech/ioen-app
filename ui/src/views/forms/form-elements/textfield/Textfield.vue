<template>
  <v-row class="match-height">
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.textfieldBasic"
      >
        <v-card-text>
          Text fields components are used for collecting user provided information.
        </v-card-text>
        <v-card-text>
          <demo-textfield-basic></demo-textfield-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- dense  -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Dense"
        :code="codeSnippets.textfieldDense"
      >
        <v-card-text>
          You can reduces the text field height with dense prop.
        </v-card-text>

        <v-card-text class="pt-5">
          <demo-textfield-dense></demo-textfield-dense>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- variant -->
    <v-col cols="12">
      <app-card-code
        title="Variant"
        :code="codeSnippets.textfieldVariant"
      >
        <v-card-text>
          Use <code>filled</code>, <code>flat</code>, <code>outlined</code>, <code>rounded</code>, <code>shaped</code>, <code>solo</code> and <code>solo-inverted</code> prop to change the look of input.
        </v-card-text>

        <v-card-text>
          <demo-textfield-variant></demo-textfield-variant>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- State -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="State"
        :code="codeSnippets.textfieldState"
      >
        <v-card-text>
          Text fields can be disabled or readonly.
        </v-card-text>
        <v-card-text>
          <demo-textfield-state></demo-textfield-state>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Counter -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Counter"
        :code="codeSnippets.textfieldCounter"
      >
        <v-card-text>
          Use a counter prop to inform a user of the character limit.
        </v-card-text>

        <v-card-text>
          <demo-textfield-counter></demo-textfield-counter>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Clearable -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Clearable"
        :code="codeSnippets.textfieldClearable"
      >
        <v-card-text>
          When <code>clearable</code>, you can customize the clear icon with <code>clear-icon</code>.
        </v-card-text>

        <v-card-text>
          <demo-textfield-clearable></demo-textfield-clearable>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- custom colors -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Custom Colors"
        :code="codeSnippets.textfieldCustomColors"
      >
        <v-card-text>
          Use <code>color</code> prop to change the input text color.
        </v-card-text>

        <v-card-text>
          <demo-textfield-custom-colors></demo-textfield-custom-colors>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- icons -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Icons"
        :code="codeSnippets.textfieldIcons"
      >
        <v-card-text>
          You can add icons to the text field with <code>prepend-icon</code>, <code>append-icon</code> and <code>append-outer-icon</code> props.
        </v-card-text>

        <v-card-text>
          <demo-textfield-icons></demo-textfield-icons>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Prefixes and suffixes -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Prefixes and suffixes"
        :code="codeSnippets.textfieldPrefixesAndSuffixes"
      >
        <v-card-text>
          The <code>prefix</code> and <code>suffix</code> properties allows you to prepend and append inline non-modifiable text next to the text field.
        </v-card-text>

        <v-card-text>
          <demo-textfield-prefixes-and-suffixes></demo-textfield-prefixes-and-suffixes>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- single line -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Single line"
        :code="codeSnippets.textfieldSingleLine"
      >
        <v-card-text>
          <code>single-line</code> text fields do not float their label on focus or with data.
        </v-card-text>

        <v-card-text>
          <demo-textfield-single-line></demo-textfield-single-line>
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
        :code="codeSnippets.textfieldValidation"
      >
        <v-card-text>
          Vuetify includes simple validation through the <code>rules</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-textfield-validation></demo-textfield-validation>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- validation on blur -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Validation on blur"
        :code="codeSnippets.textfieldValidationOnBlur"
      >
        <v-card-text>
          Delays validation until blur event
        </v-card-text>

        <v-card-text>
          <demo-textfield-validation-on-blur></demo-textfield-validation-on-blur>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- icon events -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Icon events"
        :code="codeSnippets.textfieldIconEvents"
      >
        <v-card-text>
          <code>click:prepend</code>, <code>click:append</code>, <code>click:append-outer</code>, and <code>click:clear</code> will be emitted when you click on the respective icon
        </v-card-text>

        <v-card-text>
          <demo-textfield-icon-events></demo-textfield-icon-events>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- icon slot -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Icon slots"
        :code="codeSnippets.textfieldIconSlots"
      >
        <v-card-text>
          Instead of using <code>prepend</code>/<code>append</code>/ <code>append-outer</code> icons you can use slots to extend input’s functionality.
        </v-card-text>
        <v-card-text>
          <demo-textfield-icon-slots></demo-textfield-icon-slots>
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
        :code="codeSnippets.textfieldLabelSlot"
      >
        <v-card-text>
          Text field label can be defined in <code>label</code> slot - that will allow to use HTML content.
        </v-card-text>
        <v-card-text>
          <demo-textfield-label-slot></demo-textfield-label-slot>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Progress -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Progress"
        :code="codeSnippets.textfieldProgress"
      >
        <v-card-text>
          You can use the default indeterminate progress having same color as the text field or designate a custom one using the <code>progress</code> slot.
        </v-card-text>

        <v-card-text>
          <demo-textfield-progress></demo-textfield-progress>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Password input -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Password input"
        :code="codeSnippets.textfieldPasswordInput"
      >
        <v-card-text>
          Using the HTML input <code>type</code> password can be used with an appended icon and callback to control the visibility.
        </v-card-text>

        <v-card-text>
          <demo-textfield-password-input></demo-textfield-password-input>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoTextfieldBasic from './demos/DemoTextfieldBasic.vue'
import DemoTextfieldDense from './demos/DemoTextfieldDense.vue'
import DemoTextfieldVariant from './demos/DemoTextfieldVariant.vue'
import DemoTextfieldState from './demos/DemoTextfieldState.vue'
import DemoTextfieldCounter from './demos/DemoTextfieldCounter.vue'
import DemoTextfieldClearable from './demos/DemoTextfieldClearable.vue'
import DemoTextfieldCustomColors from './demos/DemoTextfieldCustomColors.vue'
import DemoTextfieldIcons from './demos/DemoTextfieldIcons.vue'
import DemoTextfieldPrefixesAndSuffixes from './demos/DemoTextfieldPrefixesAndSuffixes.vue'
import DemoTextfieldSingleLine from './demos/DemoTextfieldSingleLine.vue'
import DemoTextfieldValidation from './demos/DemoTextfieldValidation.vue'
import DemoTextfieldValidationOnBlur from './demos/DemoTextfieldValidationOnBlur.vue'
import DemoTextfieldIconEvents from './demos/DemoTextfieldIconEvents.vue'
import DemoTextfieldIconSlots from './demos/DemoTextfieldIconSlots.vue'
import DemoTextfieldLabelSlot from './demos/DemoTextfieldLabelSlot.vue'
import DemoTextfieldProgress from './demos/DemoTextfieldProgress.vue'
import DemoTextfieldPasswordInput from './demos/DemoTextfieldPasswordInput.vue'

// code
import {
  textfieldBasic,
  textfieldDense,
  textfieldVariant,
  textfieldState,
  textfieldCounter,
  textfieldClearable,
  textfieldCustomColors,
  textfieldIcons,
  textfieldPrefixesAndSuffixes,
  textfieldSingleLine,
  textfieldValidation,
  textfieldValidationOnBlur,
  textfieldIconEvents,
  textfieldIconSlots,
  textfieldLabelSlot,
  textfieldProgress,
  textfieldPasswordInput,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoTextfieldBasic,
    DemoTextfieldDense,
    DemoTextfieldVariant,
    DemoTextfieldState,
    DemoTextfieldCounter,
    DemoTextfieldClearable,
    DemoTextfieldCustomColors,
    DemoTextfieldIcons,
    DemoTextfieldPrefixesAndSuffixes,
    DemoTextfieldSingleLine,
    DemoTextfieldValidation,
    DemoTextfieldValidationOnBlur,
    DemoTextfieldIconEvents,
    DemoTextfieldIconSlots,
    DemoTextfieldLabelSlot,
    DemoTextfieldProgress,
    DemoTextfieldPasswordInput,
  },
  setup() {
    return {
      codeSnippets: {
        textfieldBasic,
        textfieldDense,
        textfieldVariant,
        textfieldState,
        textfieldCounter,
        textfieldClearable,
        textfieldCustomColors,
        textfieldIcons,
        textfieldPrefixesAndSuffixes,
        textfieldSingleLine,
        textfieldValidation,
        textfieldValidationOnBlur,
        textfieldIconEvents,
        textfieldIconSlots,
        textfieldLabelSlot,
        textfieldProgress,
        textfieldPasswordInput,
      },
    }
  },
}
</script>
