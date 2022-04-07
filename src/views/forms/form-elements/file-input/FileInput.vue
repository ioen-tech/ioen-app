<template>
  <v-row class="match-height">
    <!-- basic -->
    <v-col
      cols="12"
      sm="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.fileInputBasic"
      >
        <v-card-text>
          The <code>v-file-input</code> component is used to selecting files.
        </v-card-text>
        <v-card-text>
          <demo-file-input-basic></demo-file-input-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- dense -->
    <v-col
      cols="12"
      sm="6"
    >
      <app-card-code
        title="Dense"
        :code="codeSnippets.fileInputDense"
      >
        <v-card-text>
          You can reduces the file input height with <code>dense</code> prop.
        </v-card-text>

        <v-card-text class="mt-5">
          <demo-file-input-dense></demo-file-input-dense>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- variant -->
    <v-col cols="12">
      <app-card-code
        title="Variant"
        :code="codeSnippets.fileInputVariant"
      >
        <v-card-text>
          Use <code>filled</code>, <code>flat</code>, <code>outlined</code>, <code>rounded</code>, <code>shaped</code>, <code>solo</code> and <code>solo-inverted</code> prop to change the look of file input.
        </v-card-text>

        <v-card-text>
          <demo-file-input-variant></demo-file-input-variant>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- accept -->
    <v-col
      cols="12"
      sm="6"
    >
      <app-card-code
        title="Accept"
        :code="codeSnippets.fileInputAccept"
      >
        <v-card-text>
          <code>v-file-input</code> component can accept only specific media formats/file types if you want.
        </v-card-text>

        <v-card-text>
          <demo-file-input-accept></demo-file-input-accept>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- chips -->
    <v-col
      cols="12"
      sm="6"
    >
      <app-card-code
        title="Chips"
        :code="codeSnippets.fileInputChips"
      >
        <v-card-text>
          Use <code>chips</code> and <code>small-chips</code> prop to display the selected file  as a chip.
        </v-card-text>
        <v-card-text>
          <demo-file-input-chips></demo-file-input-chips>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- counter -->
    <v-col
      cols="12"
      sm="6"
    >
      <app-card-code
        title="Counter"
        :code="codeSnippets.fileInputCounter"
      >
        <v-card-text>
          When using the <code>show-size</code> property along with <code>counter</code>, the total number of files and size will be displayed under the input.
        </v-card-text>

        <v-card-text>
          <demo-file-input-counter></demo-file-input-counter>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- multiple -->
    <v-col
      cols="12"
      sm="6"
    >
      <app-card-code
        title="Multiple"
        :code="codeSnippets.fileInputMultiple"
      >
        <v-card-text>
          The <code>v-file-input</code> can contain multiple files at the same time when using the <code>multiple</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-file-input-multiple></demo-file-input-multiple>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- prepend icon -->
    <v-col
      cols="12"
      sm="6"
    >
      <app-card-code
        title="Prepend icon"
        :code="codeSnippets.fileInputPrependIcon"
      >
        <v-card-text>
          The <code>v-file-input</code> has a default <code>prepend-icon</code> that can be set on the component or adjusted globally.
        </v-card-text>

        <v-card-text>
          <demo-file-input-prepend-icon></demo-file-input-prepend-icon>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Hide Input -->
    <v-col
      cols="12"
      sm="6"
    >
      <app-card-code
        title="Hide Input"
        :code="codeSnippets.fileInputHideInput"
      >
        <v-card-text>
          Use <code>hide-input</code> prop to display the icon only without the input (file names).
        </v-card-text>

        <v-card-text>
          <demo-file-input-hide-input></demo-file-input-hide-input>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- show size -->
    <v-col
      cols="12"
      sm="6"
    >
      <app-card-code
        title="Show size"
        :code="codeSnippets.fileInputShowSize"
      >
        <v-card-text>
          The displayed size of the selected file(s) can be configured with the <code>show-size</code> property.
        </v-card-text>

        <v-card-text>
          <demo-file-input-show-size></demo-file-input-show-size>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- validation -->
    <v-col
      cols="12"
      sm="6"
    >
      <app-card-code
        title="Validation"
        :code="codeSnippets.fileInputValidation"
      >
        <v-card-text>
          Similar to other inputs, you can use the <code>rules</code> prop to create your own custom validation parameters.
        </v-card-text>

        <v-card-text>
          <demo-file-input-validation></demo-file-input-validation>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- slot -->
    <v-col
      cols="12"
      sm="6"
    >
      <app-card-code
        title="Selection slot"
        :code="codeSnippets.fileInputSelectionSlot"
      >
        <v-card-text>
          Using the <code>selection</code> slot, you can customize the appearance of your input selections.
        </v-card-text>

        <v-card-text>
          <demo-file-input-selection-slot></demo-file-input-selection-slot>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- loading -->
    <v-col
      cols="12"
      sm="6"
    >
      <app-card-code
        title="Loading"
        :code="codeSnippets.fileInputLoading"
      >
        <v-card-text>
          Use <code>loading</code> prop to displays linear progress bar.
        </v-card-text>

        <v-card-text>
          <demo-file-input-loading></demo-file-input-loading>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoFileInputBasic from './demos/DemoFileInputBasic.vue'
import DemoFileInputDense from './demos/DemoFileInputDense.vue'
import DemoFileInputVariant from './demos/DemoFileInputVariant.vue'
import DemoFileInputAccept from './demos/DemoFileInputAccept.vue'
import DemoFileInputChips from './demos/DemoFileInputChips.vue'
import DemoFileInputCounter from './demos/DemoFileInputCounter.vue'
import DemoFileInputMultiple from './demos/DemoFileInputMultiple.vue'
import DemoFileInputPrependIcon from './demos/DemoFileInputPrependIcon.vue'
import DemoFileInputHideInput from './demos/DemoFileInputHideInput.vue'
import DemoFileInputShowSize from './demos/DemoFileInputShowSize.vue'
import DemoFileInputValidation from './demos/DemoFileInputValidation.vue'
import DemoFileInputSelectionSlot from './demos/DemoFileInputSelectionSlot.vue'
import DemoFileInputLoading from './demos/DemoFileInputLoading.vue'

// code
import {
  fileInputBasic,
  fileInputDense,
  fileInputVariant,
  fileInputAccept,
  fileInputChips,
  fileInputCounter,
  fileInputMultiple,
  fileInputPrependIcon,
  fileInputHideInput,
  fileInputShowSize,
  fileInputValidation,
  fileInputSelectionSlot,
  fileInputLoading,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoFileInputBasic,
    DemoFileInputDense,
    DemoFileInputVariant,
    DemoFileInputAccept,
    DemoFileInputChips,
    DemoFileInputCounter,
    DemoFileInputMultiple,
    DemoFileInputPrependIcon,
    DemoFileInputHideInput,
    DemoFileInputShowSize,
    DemoFileInputValidation,
    DemoFileInputSelectionSlot,
    DemoFileInputLoading,
  },
  setup() {
    return {
      codeSnippets: {
        fileInputBasic,
        fileInputDense,
        fileInputVariant,
        fileInputAccept,
        fileInputChips,
        fileInputCounter,
        fileInputMultiple,
        fileInputPrependIcon,
        fileInputHideInput,
        fileInputShowSize,
        fileInputValidation,
        fileInputSelectionSlot,
        fileInputLoading,
      },
    }
  },
}
</script>
