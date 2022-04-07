<template>
  <v-row class="match-height">
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.selectBasic"
      >
        <v-card-text>
          Select fields components are used for collecting user provided information from a list of options.
        </v-card-text>

        <v-card-text>
          <demo-select-basic></demo-select-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Dense"
        :code="codeSnippets.selectDense"
      >
        <v-card-text>
          You can use <code>dense</code> prop to reduce the field height and lower max height of list items.
        </v-card-text>

        <v-card-text>
          <demo-select-dense></demo-select-dense>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- variant -->
    <v-col cols="12">
      <app-card-code
        title="Variant"
        :code="codeSnippets.selectVariant"
      >
        <v-card-text>
          Use <code>filled</code>, <code>flat</code>, <code>outlined</code>, <code>rounded</code>, <code>solo</code>, <code>solo-inverted</code> and <code>shaped</code> prop to change appearance of select.
        </v-card-text>

        <v-card-text>
          <demo-select-variant></demo-select-variant>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- custom text and value -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Custom text and value"
        :code="codeSnippets.selectCustomTextAndValue"
      >
        <v-card-text>
          You can specify the specific properties within your items array correspond to the text and value fields.
        </v-card-text>

        <v-card-text>
          <demo-select-custom-text-and-value></demo-select-custom-text-and-value>
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
        :code="codeSnippets.selectIcons"
      >
        <v-card-text>
          Use a custom prepended or appended icon.
        </v-card-text>

        <v-card-text>
          <demo-select-icons></demo-select-icons>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- chips -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="chips"
        :code="codeSnippets.selectChips"
      >
        <v-card-text>
          Use <code>chips</code> prop to make selected option as chip.
        </v-card-text>

        <v-card-text>
          <demo-select-chips></demo-select-chips>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- menu prop  -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Menu props"
        :code="codeSnippets.selectMenuProps"
      >
        <v-card-text>
          Custom props can be passed directly to <code>v-menu</code> using <code>menuProps</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-select-menu-props></demo-select-menu-props>
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
        :code="codeSnippets.selectMultiple"
      >
        <v-card-text>
          Use <code>multiple</code> prop to select multiple option.
        </v-card-text>

        <v-card-text>
          <demo-select-multiple></demo-select-multiple>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- append and prepend item slot -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Append and Prepend Item"
        :code="codeSnippets.selectAppendAndPrependItem"
      >
        <v-card-text>
          The <code>v-select</code> components can be optionally expanded with prepended and appended items. This is perfect for customized select-all functionality.
        </v-card-text>

        <v-card-text>
          <demo-select-append-and-prepend-item></demo-select-append-and-prepend-item>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- selection slot -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Selection slot"
        :code="codeSnippets.selectSelectionSlot"
      >
        <v-card-text>
          The <code>selection</code> slot can be used to customize the way selected values are shown in the input.
        </v-card-text>

        <v-card-text>
          <demo-select-selection-slot></demo-select-selection-slot>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoSelectBasic from './demos/DemoSelectBasic.vue'
import DemoSelectDense from './demos/DemoSelectDense.vue'
import DemoSelectVariant from './demos/DemoSelectVariant.vue'
import DemoSelectCustomTextAndValue from './demos/DemoSelectCustomTextAndValue.vue'
import DemoSelectIcons from './demos/DemoSelectIcons.vue'
import DemoSelectChips from './demos/DemoSelectChips.vue'
import DemoSelectMenuProps from './demos/DemoSelectMenuProps.vue'
import DemoSelectMultiple from './demos/DemoSelectMultiple.vue'
import DemoSelectAppendAndPrependItem from './demos/DemoSelectAppendAndPrependItem.vue'
import DemoSelectSelectionSlot from './demos/DemoSelectSelectionSlot.vue'

// code
import {
  selectBasic,
  selectDense,
  selectVariant,
  selectCustomTextAndValue,
  selectIcons,
  selectChips,
  selectMenuProps,
  selectMultiple,
  selectAppendAndPrependItem,
  selectSelectionSlot,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoSelectBasic,
    DemoSelectDense,
    DemoSelectVariant,
    DemoSelectCustomTextAndValue,
    DemoSelectIcons,
    DemoSelectChips,
    DemoSelectMenuProps,
    DemoSelectMultiple,
    DemoSelectAppendAndPrependItem,
    DemoSelectSelectionSlot,
  },
  setup() {
    return {
      codeSnippets: {
        selectBasic,
        selectDense,
        selectVariant,
        selectCustomTextAndValue,
        selectIcons,
        selectChips,
        selectMenuProps,
        selectMultiple,
        selectAppendAndPrependItem,
        selectSelectionSlot,
      },
    }
  },
}
</script>
