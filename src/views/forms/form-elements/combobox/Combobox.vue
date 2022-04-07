<template>
  <v-row class="match-height">
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.comboboxBasic"
      >
        <v-card-text>With Combobox, you can allow a user to create new values that may not be present in a provided items list.</v-card-text>

        <v-card-text>
          <demo-combobox-basic></demo-combobox-basic>
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
        :code="codeSnippets.comboboxDense"
      >
        <v-card-text>
          You can use <code>dense</code> prop to reduce combobox height and lower max height of list items.
        </v-card-text>
        <v-card-text>
          <demo-combobox-dense></demo-combobox-dense>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- variant -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Variant"
        :code="codeSnippets.comboboxVariant"
      >
        <v-card-text>Use <code>filled, outlined, solo</code> prop to change the appearance of combobox.</v-card-text>

        <v-card-text>
          <demo-combobox-variant></demo-combobox-variant>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- multiple -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Multiple"
        :code="codeSnippets.comboboxMultiple"
      >
        <v-card-text>Previously known as tags - user is allowed to enter more than 1 value</v-card-text>

        <v-card-text>
          <demo-combobox-multiple></demo-combobox-multiple>
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
        :code="codeSnippets.comboboxClearable"
      >
        <v-card-text>
          Use <code>clearable</code> prop to clear combobox.
        </v-card-text>
        <v-card-text>
          <demo-combobox-clearable></demo-combobox-clearable>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- no data with chips -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="No data with chips"
        :code="codeSnippets.comboboxNoDataWithChips"
      >
        <v-card-text>
          In this example we utilize a custom <code>no-data</code> slot to provide context to the user when searching / creating items.
        </v-card-text>

        <v-card-text>
          <demo-combobox-no-data-with-chips></demo-combobox-no-data-with-chips>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Advanced custom options"
        :code="codeSnippets.comboboxAdvanceCustomOptions"
      >
        <v-card-text>
          The <code>v-combobox</code> improves upon the added functionality from <code>v-select</code> and <code>v-autocomplete</code>. This provides you with an expansive interface to create truly customized implementations.
        </v-card-text>

        <v-card-text>
          <demo-combobox-advance-custom-options></demo-combobox-advance-custom-options>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoComboboxBasic from './demos/DemoComboboxBasic.vue'
import DemoComboboxDense from './demos/DemoComboboxDense.vue'
import DemoComboboxVariant from './demos/DemoComboboxVariant.vue'
import DemoComboboxMultiple from './demos/DemoComboboxMultiple.vue'
import DemoComboboxClearable from './demos/DemoComboboxClearable.vue'
import DemoComboboxNoDataWithChips from './demos/DemoComboboxNoDataWithChips.vue'
import DemoComboboxAdvanceCustomOptions from './demos/DemoComboboxAdvanceCustomOptions.vue'

// code
import {
  comboboxBasic,
  comboboxDense,
  comboboxVariant,
  comboboxMultiple,
  comboboxClearable,
  comboboxNoDataWithChips,
  comboboxAdvanceCustomOptions,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoComboboxBasic,
    DemoComboboxDense,
    DemoComboboxVariant,
    DemoComboboxMultiple,
    DemoComboboxClearable,
    DemoComboboxNoDataWithChips,
    DemoComboboxAdvanceCustomOptions,
  },
  setup() {
    return {
      codeSnippets: {
        comboboxBasic,
        comboboxDense,
        comboboxVariant,
        comboboxMultiple,
        comboboxClearable,
        comboboxNoDataWithChips,
        comboboxAdvanceCustomOptions,
      },
    }
  },
}
</script>
