<template>
  <v-row class="match-height">
    <!-- basic -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.textareaBasic"
      >
        <v-card-text>
          <code>v-textarea</code> in its simplest form is a multi-line text-field, useful for larger amounts of text.
        </v-card-text>
        <v-card-text>
          <demo-textarea-basic></demo-textarea-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- auto grow -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Auto Grow"
        :code="codeSnippets.textareaAutoGrow"
      >
        <v-card-text>
          When using the <code>auto-grow</code> prop, textarea’s will automatically increase in size when the contained text exceeds its size.
        </v-card-text>

        <v-card-text>
          <demo-textarea-auto-grow></demo-textarea-auto-grow>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- variant -->
    <v-col cols="12">
      <app-card-code
        title="Variant"
        :code="codeSnippets.textareaVariant"
      >
        <v-card-text>
          Use <code>filled</code>, <code>flat</code>, <code>outlined</code>, <code>rounded</code>, <code>shaped</code>, <code>solo</code> and <code>solo-inverted</code> prop to change the look of file input.
        </v-card-text>

        <v-card-text>
          <demo-textarea-variant></demo-textarea-variant>
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
        :code="codeSnippets.textareaStates"
      >
        <v-card-text>
          Use <code>disabled</code> and <code>readonly</code> prop to change the state of textarea.
        </v-card-text>

        <v-card-text>
          <demo-textarea-states></demo-textarea-states>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Browser autocomplete -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Browser autocomplete"
        :code="codeSnippets.textareaBrowserAutocomplete"
      >
        <v-card-text>
          The <code>autocomplete</code> prop gives you the option to enable the browser to predict user input.
        </v-card-text>

        <v-card-text>
          <demo-textarea-browser-autocomplete></demo-textarea-browser-autocomplete>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- clearable -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Clearable"
        :code="codeSnippets.textareaClearable"
      >
        <v-card-text>
          You can clear the text from a <code>v-textarea</code> by using the <code>clearable</code> prop, and customize the icon used with the <code>clearable-icon</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-textarea-clearable></demo-textarea-clearable>
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
        :code="codeSnippets.textareaCounter"
      >
        <v-card-text>
          The <code>counter</code> prop informs the user of a character limit for the <code>v-textarea</code>.
        </v-card-text>
        <v-card-text>
          <demo-textarea-counter></demo-textarea-counter>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Icons -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Icons"
        :code="codeSnippets.textareaIcons"
      >
        <v-card-text>
          The <code>append-icon</code> and <code>prepend-icon</code> props help add context to <code>v-textarea</code>.
        </v-card-text>

        <v-card-text>
          <demo-textarea-icons></demo-textarea-icons>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- rows -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Rows"
        :code="codeSnippets.textareaRows"
      >
        <v-card-text>
          The <code>rows</code> prop allows you to define how many rows the textarea has, when combined with the <code>row-height</code> prop you can further customize your rows by defining their height.
        </v-card-text>

        <v-card-text>
          <demo-textarea-rows></demo-textarea-rows>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- No resize -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="No resize"
        :code="codeSnippets.textareaNoResize"
      >
        <v-card-text>
          <code>v-textarea</code>'s have the option to remain the same size regardless of their content’s size, using the <code>no-resize</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-textarea-no-resize></demo-textarea-no-resize>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!--validation  -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Validation"
        :code="codeSnippets.textareaValidation"
      >
        <v-card-text>
          Use <code>rules</code> prop to validate the textarea.
        </v-card-text>

        <v-card-text>
          <demo-textarea-validation></demo-textarea-validation>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- validation on blur -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Validation On Blur"
        :code="codeSnippets.textareaValidationOnBlur"
      >
        <v-card-text>
          Delays validation until blur event
        </v-card-text>

        <v-card-text>
          <demo-textarea-validation-on-blur></demo-textarea-validation-on-blur>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoTextareaBasic from './demos/DemoTextareaBasic.vue'
import DemoTextareaAutoGrow from './demos/DemoTextareaAutoGrow.vue'
import DemoTextareaVariant from './demos/DemoTextareaVariant.vue'
import DemoTextareaStates from './demos/DemoTextareaStates.vue'
import DemoTextareaBrowserAutocomplete from './demos/DemoTextareaBrowserAutocomplete.vue'
import DemoTextareaClearable from './demos/DemoTextareaClearable.vue'
import DemoTextareaCounter from './demos/DemoTextareaCounter.vue'
import DemoTextareaIcons from './demos/DemoTextareaIcons.vue'
import DemoTextareaRows from './demos/DemoTextareaRows.vue'
import DemoTextareaNoResize from './demos/DemoTextareaNoResize.vue'
import DemoTextareaValidation from './demos/DemoTextareaValidation.vue'
import DemoTextareaValidationOnBlur from './demos/DemoTextareaValidationOnBlur.vue'

// code
import {
  textareaBasic,
  textareaAutoGrow,
  textareaVariant,
  textareaStates,
  textareaBrowserAutocomplete,
  textareaClearable,
  textareaCounter,
  textareaIcons,
  textareaRows,
  textareaNoResize,
  textareaValidation,
  textareaValidationOnBlur,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoTextareaBasic,
    DemoTextareaAutoGrow,
    DemoTextareaVariant,
    DemoTextareaStates,
    DemoTextareaBrowserAutocomplete,
    DemoTextareaClearable,
    DemoTextareaCounter,
    DemoTextareaIcons,
    DemoTextareaRows,
    DemoTextareaNoResize,
    DemoTextareaValidation,
    DemoTextareaValidationOnBlur,
  },
  setup() {
    return {
      codeSnippets: {
        textareaBasic,
        textareaAutoGrow,
        textareaVariant,
        textareaStates,
        textareaBrowserAutocomplete,
        textareaClearable,
        textareaCounter,
        textareaIcons,
        textareaRows,
        textareaNoResize,
        textareaValidation,
        textareaValidationOnBlur,
      },
    }
  },
}
</script>
