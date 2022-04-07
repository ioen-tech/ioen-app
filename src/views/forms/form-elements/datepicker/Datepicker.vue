<template>
  <v-row class="match-height">
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.datepickerBasic"
      >
        <v-card-text>
          <code>v-date-picker</code> is a fully featured date selection component that lets users select a date, or range of dates.
        </v-card-text>

        <v-card-text>
          <demo-datepicker-basic></demo-datepicker-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Colors -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Colors"
        :code="codeSnippets.datepickerColors"
      >
        <v-card-text>
          Date picker colors can be set using the <code>color</code> and <code>header-color</code> props. If <code>header-color</code> prop is not provided header will use the <code>color</code> prop value.
        </v-card-text>

        <v-card-text>
          <demo-datepicker-colors></demo-datepicker-colors>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Readonly and disabled-->
    <v-col cols="12">
      <app-card-code
        title="Readonly And Disabled"
        :code="codeSnippets.datepickerReadonlyAndDisabled"
      >
        <v-card-text>
          Selecting new date could be disabled by adding <code>readonly</code> or <code>disabled</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-datepicker-readonly-and-disabled></demo-datepicker-readonly-and-disabled>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- allowed dates -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Allowed Dates"
        :code="codeSnippets.datepickerAllowedDates"
      >
        <v-card-text>
          You can specify allowed dates using arrays, objects, and functions.
        </v-card-text>

        <v-card-text>
          <demo-datepicker-allowed-dates></demo-datepicker-allowed-dates>
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
        :code="codeSnippets.datepickerIcons"
      >
        <v-card-text>
          You can override the default icons used in the picker.
        </v-card-text>

        <v-card-text>
          <demo-datepicker-icons></demo-datepicker-icons>
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
        :code="codeSnippets.datepickerMultiple"
      >
        <v-card-text>
          Date picker can now select multiple dates with the <code>multiple</code> prop. If using <code>multiple</code> then date picker expects its model to be an array.
        </v-card-text>

        <v-card-text>
          <demo-datepicker-multiple></demo-datepicker-multiple>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- range -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Range"
        :code="codeSnippets.datepickerRange"
      >
        <v-card-text>
          Date picker can select date range with the <code>range</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-datepicker-range></demo-datepicker-range>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Show sibling months -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Show sibling months"
        :code="codeSnippets.datepickerShowSiblingMonths"
      >
        <v-card-text>
          By default days from previous and next months are not visible. They can be displayed using the <code>show-adjacent-months</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-datepicker-show-sibling-months></demo-datepicker-show-sibling-months>
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
        :code="codeSnippets.datepickerWidth"
      >
        <v-card-text>
          You can specify the picker’s width or make it full width.
        </v-card-text>

        <v-card-text>
          <demo-datepicker-width></demo-datepicker-width>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- sync -->
    <v-col cols="12">
      <app-card-code
        title="Sync"
        :code="codeSnippets.datepickerSync"
      >
        <v-card-text>
          You can watch the <code>picker-date</code> which is the displayed month/year (depending on the picker type and active view) to perform some action when it changes. This uses the <code>.sync</code> modifier.
        </v-card-text>

        <v-card-text>
          <demo-datepicker-sync></demo-datepicker-sync>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Date buttons -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Date buttons"
        :code="codeSnippets.datepickerDateButton"
      >
        <v-card-text>
          Handle events such as <code>@click</code>, <code>@dblclick</code>, <code>@mouseenter</code>, and more when interacting with date, month, and year buttons.
        </v-card-text>

        <v-card-text>
          <demo-datepicker-date-button></demo-datepicker-date-button>
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
        :code="codeSnippets.datepickerDialogAndMenu"
      >
        <v-card-text>
          When integrating a picker into a <code>v-text-field</code>, it is recommended to use the <code>readonly</code> prop. This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.
        </v-card-text>
        <v-card-text>
          Pickers expose a slot that allow you to hook into save and cancel functionality. This will maintain an old value which can be replaced if the user cancels.
        </v-card-text>
        <v-card-text>
          <demo-datepicker-dialog-and-menu></demo-datepicker-dialog-and-menu>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Formatting -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Formatting"
        :code="codeSnippets.datepickerFormatting"
      >
        <v-card-text>
          If you need to display date in the custom format (different than YYYY-MM-DD) you need to use the formatting function.
        </v-card-text>

        <v-card-text>
          <demo-datepicker-formatting></demo-datepicker-formatting>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- birthday picker -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Birthday picker"
        :code="codeSnippets.datepickerBirthdayPicker"
      >
        <v-card-text>
          Starting with year picker by default, restricting dates range and closing the picker menu after selecting the day make the perfect birthday picker.
        </v-card-text>
        <v-card-text>
          <demo-datepicker-birthday-picker></demo-datepicker-birthday-picker>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Internationalization -->
    <v-col cols="12">
      <app-card-code
        title="Internationalization"
        :code="codeSnippets.datepickerInternationalization"
      >
        <v-card-text>
          The date picker supports internationalization through the JavaScript Date object. Specify a BCP 47 language tag using the <code>locale</code> prop, and then set the first day of the week with the <code>first-day-of-week</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-datepicker-internationalization></demo-datepicker-internationalization>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoDatepickerBasic from './demos/DemoDatepickerBasic.vue'
import DemoDatepickerColors from './demos/DemoDatepickerColors.vue'
import DemoDatepickerReadonlyAndDisabled from './demos/DemoDatepickerReadonlyAndDisabled.vue'
import DemoDatepickerAllowedDates from './demos/DemoDatepickerAllowedDates.vue'
import DemoDatepickerIcons from './demos/DemoDatepickerIcons.vue'
import DemoDatepickerMultiple from './demos/DemoDatepickerMultiple.vue'
import DemoDatepickerSync from './demos/DemoDatepickerSync.vue'
import DemoDatepickerRange from './demos/DemoDatepickerRange.vue'
import DemoDatepickerShowSiblingMonths from './demos/DemoDatepickerShowSiblingMonths.vue'
import DemoDatepickerWidth from './demos/DemoDatepickerWidth.vue'
import DemoDatepickerDateButton from './demos/DemoDatepickerDateButton.vue'
import DemoDatepickerBirthdayPicker from './demos/DemoDatepickerBirthdayPicker.vue'
import DemoDatepickerDialogAndMenu from './demos/DemoDatepickerDialogAndMenu.vue'
import DemoDatepickerFormatting from './demos/DemoDatepickerFormatting.vue'
import DemoDatepickerInternationalization from './demos/DemoDatepickerInternationalization.vue'

// code
import {
  datepickerBasic,
  datepickerColors,
  datepickerReadonlyAndDisabled,
  datepickerAllowedDates,
  datepickerIcons,
  datepickerMultiple,
  datepickerSync,
  datepickerRange,
  datepickerShowSiblingMonths,
  datepickerWidth,
  datepickerDateButton,
  datepickerBirthdayPicker,
  datepickerDialogAndMenu,
  datepickerFormatting,
  datepickerInternationalization,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoDatepickerBasic,
    DemoDatepickerColors,
    DemoDatepickerReadonlyAndDisabled,
    DemoDatepickerAllowedDates,
    DemoDatepickerIcons,
    DemoDatepickerMultiple,
    DemoDatepickerSync,
    DemoDatepickerRange,
    DemoDatepickerShowSiblingMonths,
    DemoDatepickerWidth,
    DemoDatepickerDateButton,
    DemoDatepickerBirthdayPicker,
    DemoDatepickerDialogAndMenu,
    DemoDatepickerFormatting,
    DemoDatepickerInternationalization,
  },
  setup() {
    return {
      codeSnippets: {
        datepickerBasic,
        datepickerColors,
        datepickerReadonlyAndDisabled,
        datepickerAllowedDates,
        datepickerIcons,
        datepickerMultiple,
        datepickerSync,
        datepickerRange,
        datepickerShowSiblingMonths,
        datepickerWidth,
        datepickerDateButton,
        datepickerBirthdayPicker,
        datepickerDialogAndMenu,
        datepickerFormatting,
        datepickerInternationalization,
      },
    }
  },
}
</script>
