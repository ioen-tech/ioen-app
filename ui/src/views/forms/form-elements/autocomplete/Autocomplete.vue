<template>
  <v-row class="match-height">
    <!-- basic -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.autocompleteBasic"
      >
        <v-card-text>
          The autocomplete component extends v-select and adds the ability to filter items.
        </v-card-text>

        <v-card-text>
          <demo-autocomplete-basic></demo-autocomplete-basic>
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
        :code="codeSnippets.autocompleteDense"
      >
        <v-card-text>
          You can use <code>dense</code> prop to reduce autocomplete height and lower max height of list items.
        </v-card-text>

        <v-card-text>
          <demo-autocomplete-dense></demo-autocomplete-dense>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- variant -->
    <v-col cols="12">
      <app-card-code
        title="Variant"
        :code="codeSnippets.autocompleteVariant"
      >
        <v-card-text>
          The autocomplete component has different style variations. Use <code>outlined</code>, <code>solo</code>, <code>filled</code>, <code>solo-inverted</code>, <code>shaped</code> and <code>rounded</code> prop for a different style.
        </v-card-text>
        <v-card-text>
          <demo-autocomplete-variant></demo-autocomplete-variant>
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
        :code="codeSnippets.autocompleteMultiple"
      >
        <v-card-text>Use <code>multiple</code> prop to select multiple. Accepts array for value</v-card-text>
        <v-card-text>
          <demo-autocomplete-multiple></demo-autocomplete-multiple>
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
        :code="codeSnippets.autocompleteClearable"
      >
        <v-card-text>
          Use <code>clearable</code> prop to add input clear functionality.
        </v-card-text>

        <v-card-text>
          <demo-autocomplete-clearable></demo-autocomplete-clearable>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- chips -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Chips"
        :code="codeSnippets.autocompleteChips"
      >
        <v-card-text>Use <code>chip</code> and <code>small-chips</code> prop to use chips in select.</v-card-text>

        <v-card-text>
          <demo-autocomplete-chips></demo-autocomplete-chips>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- auto select first -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Auto Select First"
        :code="codeSnippets.autocompleteAutoSelectFirst"
      >
        <v-card-text>When searching, will always highlight the first option.</v-card-text>

        <v-card-text>
          <demo-autocomplete-auto-select-first></demo-autocomplete-auto-select-first>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Filter -->
    <v-col
      md="6"
      cols="12"
    >
      <app-card-code
        title="Filter"
        :code="codeSnippets.autocompleteFilter"
      >
        <v-card-text>
          The <code>filter</code> prop can be used to filter each individual item with custom logic. In this example we filter items by name.
        </v-card-text>
        <v-card-text>
          <demo-autocomplete-filter></demo-autocomplete-filter>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Item and selection -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Item and selection"
        :code="codeSnippets.autocompleteItemAndSelection"
      >
        <v-card-text>With the power of slots, you can customize the visual output of the select.</v-card-text>

        <v-card-text>
          <demo-autocomplete-item-and-selection></demo-autocomplete-item-and-selection>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Asynchronous items -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Asynchronous items"
        :code="codeSnippets.autocompleteAsynchronousItems"
      >
        <v-card-text>
          Sometimes you need to load data externally based upon a search query. Use the <code>search-input</code> prop with the <code>.sync</code> modifier when using the <code>autocomplete</code> prop. We also make use of the new <code>cache-items</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-autocomplete-asynchronous-items></demo-autocomplete-asynchronous-items>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Validation -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Validation"
        :code="codeSnippets.autocompleteValidation"
      >
        <v-card-text>
          Use <code>rules</code>prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.
        </v-card-text>
        <v-card-text>
          <demo-autocomplete-validation></demo-autocomplete-validation>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- validation on blue -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Validate On Blur"
        :code="codeSnippets.autocompleteValidateOnBlur"
      >
        <v-card-text>Delays validation until blur event</v-card-text>
        <v-card-text>
          <demo-autocomplete-validate-on-blur></demo-autocomplete-validate-on-blur>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- prefix and suffix and placeholder -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Prefix and Suffix"
        :code="codeSnippets.autocompletePrefixAndSuffix"
      >
        <v-card-text>Use <code>prefix</code> and <code>suffix</code> prop to  displays prefix and suffix text.</v-card-text>

        <v-card-text>
          <demo-autocomplete-prefix-and-suffix></demo-autocomplete-prefix-and-suffix>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoAutocompleteBasic from './demos/DemoAutocompleteBasic.vue'
import DemoAutocompleteDense from './demos/DemoAutocompleteDense.vue'
import DemoAutocompleteVariant from './demos/DemoAutocompleteVariant.vue'
import DemoAutocompleteMultiple from './demos/DemoAutocompleteMultiple.vue'
import DemoAutocompleteClearable from './demos/DemoAutocompleteClearable.vue'
import DemoAutocompleteChips from './demos/DemoAutocompleteChips.vue'
import DemoAutocompleteAutoSelectFirst from './demos/DemoAutocompleteAutoSelectFirst.vue'
import DemoAutocompleteFilter from './demos/DemoAutocompleteFilter.vue'
import DemoAutocompleteItemAndSelection from './demos/DemoAutocompleteItemAndSelection.vue'
import DemoAutocompleteAsynchronousItems from './demos/DemoAutocompleteAsynchronousItems.vue'
import DemoAutocompleteValidation from './demos/DemoAutocompleteValidation.vue'
import DemoAutocompleteValidateOnBlur from './demos/DemoAutocompleteValidateOnBlur.vue'
import DemoAutocompletePrefixAndSuffix from './demos/DemoAutocompletePrefixAndSuffix.vue'

// code
import {
  autocompleteBasic,
  autocompleteDense,
  autocompleteVariant,
  autocompleteMultiple,
  autocompleteClearable,
  autocompleteChips,
  autocompleteAutoSelectFirst,
  autocompleteFilter,
  autocompleteItemAndSelection,
  autocompleteAsynchronousItems,
  autocompleteValidation,
  autocompleteValidateOnBlur,
  autocompletePrefixAndSuffix,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoAutocompleteBasic,
    DemoAutocompleteDense,
    DemoAutocompleteVariant,
    DemoAutocompleteMultiple,
    DemoAutocompleteClearable,
    DemoAutocompleteChips,
    DemoAutocompleteAutoSelectFirst,
    DemoAutocompleteFilter,
    DemoAutocompleteItemAndSelection,
    DemoAutocompleteAsynchronousItems,
    DemoAutocompleteValidation,
    DemoAutocompleteValidateOnBlur,
    DemoAutocompletePrefixAndSuffix,
  },
  setup() {
    return {
      codeSnippets: {
        autocompleteBasic,
        autocompleteDense,
        autocompleteVariant,
        autocompleteMultiple,
        autocompleteClearable,
        autocompleteChips,
        autocompleteAutoSelectFirst,
        autocompleteFilter,
        autocompleteItemAndSelection,
        autocompleteAsynchronousItems,
        autocompleteValidation,
        autocompleteValidateOnBlur,
        autocompletePrefixAndSuffix,
      },
    }
  },
}
</script>
