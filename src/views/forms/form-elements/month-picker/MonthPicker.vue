<template>
  <v-row class="match-height">
    <!-- basic -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.monthPickerBasic"
      >
        <v-card-text>
          <code>v-date-picker</code> can be used as a standalone month picker component.
        </v-card-text>

        <v-card-text>
          <demo-month-picker-basic></demo-month-picker-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- allowed months -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Allowed months"
        :code="codeSnippets.monthPickerAllowedMonths"
      >
        <v-card-text>
          You can specify allowed months using arrays, objects or functions.
        </v-card-text>

        <v-card-text>
          <demo-month-picker-allowed-months></demo-month-picker-allowed-months>
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
        :code="codeSnippets.monthPickerIcons"
      >
        <v-card-text>
          You can override the default icons used in the picker.
        </v-card-text>

        <v-card-text>
          <demo-month-picker-icons></demo-month-picker-icons>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Multiple -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Multiple"
        :code="codeSnippets.monthPickerMultiple"
      >
        <v-card-text>
          Month pickers can now select multiple months with the <code>multiple</code> prop. If using <code>multiple</code> then the month picker expects its model to be an array.
        </v-card-text>

        <v-card-text>
          <demo-month-picker-multiple></demo-month-picker-multiple>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Readonly and disabled -->
    <v-col cols="12">
      <app-card-code
        title="Readonly And Disabled"
        :code="codeSnippets.monthPickerReadonlyAndDisabled"
      >
        <v-card-text>
          Selecting new date could be disabled by adding <code>readonly</code> prop. Also, you can not interact with the disabled date picker.
        </v-card-text>

        <v-card-text>
          <demo-month-picker-readonly-and-disabled></demo-month-picker-readonly-and-disabled>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- width -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Width"
        :code="codeSnippets.monthPickerWidth"
      >
        <v-card-text>
          You can specify allowed the picker’s width or make it full width.
        </v-card-text>

        <v-card-text>
          <demo-month-picker-width></demo-month-picker-width>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Dialog and menu -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Dialog and menu"
        :code="codeSnippets.monthPickerDialogAndMenu"
      >
        <v-card-text>
          When integrating a picker into a <code>v-text-field</code>, it is recommended to use the <code>readonly</code> prop. This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.
        </v-card-text>

        <v-card-text>
          Pickers expose a slot that allow you to hook into save and cancel functionality. This will maintain an old value which can be replaced if the user cancels.
        </v-card-text>
        <v-card-text>
          <demo-month-picker-dialog-and-menu></demo-month-picker-dialog-and-menu>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Internationalization -->
    <v-col cols="12">
      <app-card-code
        title="Internationalization"
        :code="codeSnippets.monthPickerInternationalization"
      >
        <v-card-text>
          The month picker supports internationalization through the JavaScript Date object. Specify a BCP 47 language tag using the <code>locale</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-month-picker-internationalization></demo-month-picker-internationalization>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoMonthPickerBasic from './demos/DemoMonthPickerBasic.vue'
import DemoMonthPickerAllowedMonths from './demos/DemoMonthPickerAllowedMonths.vue'
import DemoMonthPickerIcons from './demos/DemoMonthPickerIcons.vue'
import DemoMonthPickerMultiple from './demos/DemoMonthPickerMultiple.vue'
import DemoMonthPickerReadonlyAndDisabled from './demos/DemoMonthPickerReadonlyAndDisabled.vue'
import DemoMonthPickerWidth from './demos/DemoMonthPickerWidth.vue'
import DemoMonthPickerDialogAndMenu from './demos/DemoMonthPickerDialogAndMenu.vue'
import DemoMonthPickerInternationalization from './demos/DemoMonthPickerInternationalization.vue'

// code
import {
  monthPickerBasic,
  monthPickerAllowedMonths,
  monthPickerIcons,
  monthPickerMultiple,
  monthPickerReadonlyAndDisabled,
  monthPickerWidth,
  monthPickerDialogAndMenu,
  monthPickerInternationalization,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoMonthPickerBasic,
    DemoMonthPickerAllowedMonths,
    DemoMonthPickerIcons,
    DemoMonthPickerMultiple,
    DemoMonthPickerReadonlyAndDisabled,
    DemoMonthPickerWidth,
    DemoMonthPickerDialogAndMenu,
    DemoMonthPickerInternationalization,
  },
  setup() {
    return {
      codeSnippets: {
        monthPickerBasic,
        monthPickerAllowedMonths,
        monthPickerIcons,
        monthPickerMultiple,
        monthPickerReadonlyAndDisabled,
        monthPickerWidth,
        monthPickerDialogAndMenu,
        monthPickerInternationalization,
      },
    }
  },
}
</script>
