<template>
  <v-row class="match-height">
    <!-- basic -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippents.timePickerBasic"
      >
        <v-card-text>
          The <code>v-time-picker</code> is stand-alone component that can be utilized in many existing Vuetify components.
        </v-card-text>

        <v-card-text>
          <demo-time-picker-basic></demo-time-picker-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- allowed time -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Allowed times"
        :code="codeSnippents.timePickerAllowedTimes"
      >
        <v-card-text>
          You can specify allowed times using arrays, objects, and functions. You can also specify time step/precision/interval - e.g. 10 minutes.
        </v-card-text>

        <v-card-text>
          <demo-time-picker-allowed-times></demo-time-picker-allowed-times>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- AMPM -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="AMPM"
        :code="codeSnippents.timePickerAmPm"
      >
        <v-card-text>
          You can move AM/PM switch to picker’s title.
        </v-card-text>
        <v-card-text>
          <demo-time-picker-am-pm></demo-time-picker-am-pm>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- format -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Format"
        :code="codeSnippents.timePickerFormat"
      >
        <v-card-text>
          A time picker can be switched to 24hr format
        </v-card-text>

        <v-card-text>
          <demo-time-picker-format></demo-time-picker-format>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Use seconds -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Use seconds"
        :code="codeSnippents.timePickerUseSeconds"
      >
        <v-card-text>
          Time picker can have seconds input.
        </v-card-text>

        <v-card-text>
          <demo-time-picker-use-seconds></demo-time-picker-use-seconds>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- scrollable -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Scrollable"
        :code="codeSnippents.timePickerScrollable"
      >
        <v-card-text>
          You can edit time picker’s value using mouse wheel.
        </v-card-text>

        <v-card-text>
          <demo-time-picker-scrollable></demo-time-picker-scrollable>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- no title -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="No title"
        :code="codeSnippents.timePickerNoTitle"
      >
        <v-card-text>
          Use <code>no-title</code> prop to remove the picker’s title.
        </v-card-text>

        <v-card-text>
          <demo-time-picker-no-title></demo-time-picker-no-title>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- dialog and menu -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Dialog and menu"
        :code="codeSnippents.timePickerDialogAndMenu"
      >
        <v-card-text>
          Due to the flexibility of pickers, you can really dial in the experience exactly how you want it.
        </v-card-text>

        <v-card-text>
          <demo-time-picker-dialog-and-menu></demo-time-picker-dialog-and-menu>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- range -->
    <v-col cols="12">
      <app-card-code
        title="Range"
        :code="codeSnippents.timePickerRange"
      >
        <v-card-text>
          This is an example of joining pickers together using <code>min</code> and <code>max</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-time-picker-range></demo-time-picker-range>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoTimePickerBasic from './demos/DemoTimePickerBasic.vue'
import DemoTimePickerAllowedTimes from './demos/DemoTimePickerAllowedTimes.vue'
import DemoTimePickerAmPm from './demos/DemoTimePickerAmPm.vue'
import DemoTimePickerFormat from './demos/DemoTimePickerFormat.vue'
import DemoTimePickerNoTitle from './demos/DemoTimePickerNoTitle.vue'
import DemoTimePickerUseSeconds from './demos/DemoTimePickerUseSeconds.vue'
import DemoTimePickerScrollable from './demos/DemoTimePickerScrollable.vue'
import DemoTimePickerRange from './demos/DemoTimePickerRange.vue'
import DemoTimePickerDialogAndMenu from './demos/DemoTimePickerDialogAndMenu.vue'

// code
import {
  timePickerBasic,
  timePickerAllowedTimes,
  timePickerAmPm,
  timePickerFormat,
  timePickerNoTitle,
  timePickerUseSeconds,
  timePickerScrollable,
  timePickerRange,
  timePickerDialogAndMenu,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoTimePickerBasic,
    DemoTimePickerAllowedTimes,
    DemoTimePickerAmPm,
    DemoTimePickerFormat,
    DemoTimePickerNoTitle,
    DemoTimePickerUseSeconds,
    DemoTimePickerScrollable,
    DemoTimePickerRange,
    DemoTimePickerDialogAndMenu,
  },
  setup() {
    return {
      codeSnippents: {
        timePickerBasic,
        timePickerAllowedTimes,
        timePickerAmPm,
        timePickerFormat,
        timePickerNoTitle,
        timePickerUseSeconds,
        timePickerScrollable,
        timePickerRange,
        timePickerDialogAndMenu,
      },
    }
  },
}
</script>
