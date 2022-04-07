<template>
  <v-row class="match-height">
    <!-- default -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Default"
        :code="codeSnippets.snackbarDefault"
      >
        <v-card-text>
          The <code>v-snackbar</code> component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.
        </v-card-text>

        <v-card-text>
          <demo-snackbar-default></demo-snackbar-default>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- with action -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="With Action"
        :code="codeSnippets.snackbarWithAction"
      >
        <v-card-text>
          a <code>v-snackbar</code> in its simplest form displays a temporary and closable notification to the user.
        </v-card-text>

        <v-card-text>
          <demo-snackbar-with-action></demo-snackbar-with-action>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- multi line -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Multi line"
        :code="codeSnippets.snackbarMultiline"
      >
        <v-card-text>
          The <code>multi-line</code> property extends the height of the <code>v-snackbar</code> to give you a little more room for content.
        </v-card-text>

        <v-card-text>
          <demo-snackbar-multiline></demo-snackbar-multiline>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- timeout -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Timeout"
        :code="codeSnippets.snackbarTimeout"
      >
        <v-card-text>
          The <code>timeout</code> property lets you customize the delay before the <code>v-snackbar</code> is hidden.
        </v-card-text>

        <v-card-text>
          <demo-snackbar-timeout></demo-snackbar-timeout>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- vertical -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Vertical"
        :code="codeSnippets.snackbarVertical"
      >
        <v-card-text>
          The <code>vertical</code> property allows you to stack the content of your <code>v-snackbar</code>.
        </v-card-text>

        <v-card-text>
          <demo-snackbar-vertical></demo-snackbar-vertical>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- position -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Position"
        :code="codeSnippets.snackbarPosition"
      >
        <v-card-text>
          Use <code>top</code>, <code>right</code>, <code>left</code> and <code>bottom</code> prop to change the position of snackbar.
        </v-card-text>

        <v-card-text>
          <demo-snackbar-position></demo-snackbar-position>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- variants -->
    <v-col cols="12">
      <app-card-code
        title="Variants"
        :code="codeSnippets.snackbarVariants"
      >
        <v-card-text>
          Apply different styles to the snackbar using props such as <code>shaped</code>, <code>rounded</code>, <code>color</code>, <code>text</code>, <code>outlined</code>, <code>tile</code> and more.
        </v-card-text>

        <v-card-text>
          <demo-snackbar-variants></demo-snackbar-variants>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- transition -->
    <v-col cols="12">
      <app-card-code
        title="Transition"
        :code="codeSnippets.snackbarTransition"
      >
        <v-card-text>
          Use <code>transition</code> prop to sets the component transition.
        </v-card-text>

        <v-card-text>
          <demo-snackbar-transition></demo-snackbar-transition>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoSnackbarDefault from './demos/DemoSnackbarDefault.vue'
import DemoSnackbarWithAction from './demos/DemoSnackbarWithAction.vue'
import DemoSnackbarMultiline from './demos/DemoSnackbarMultiline.vue'
import DemoSnackbarTimeout from './demos/DemoSnackbarTimeout.vue'
import DemoSnackbarVariants from './demos/DemoSnackbarVariants.vue'
import DemoSnackbarVertical from './demos/DemoSnackbarVertical.vue'
import DemoSnackbarPosition from './demos/DemoSnackbarPosition.vue'
import DemoSnackbarTransition from './demos/DemoSnackbarTransition.vue'

// code
import {
  snackbarDefault,
  snackbarWithAction,
  snackbarMultiline,
  snackbarTimeout,
  snackbarVariants,
  snackbarVertical,
  snackbarPosition,
  snackbarTransition,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoSnackbarDefault,
    DemoSnackbarWithAction,
    DemoSnackbarMultiline,
    DemoSnackbarTimeout,
    DemoSnackbarVariants,
    DemoSnackbarVertical,
    DemoSnackbarPosition,
    DemoSnackbarTransition,
  },
  setup() {
    return {
      codeSnippets: {
        snackbarDefault,
        snackbarWithAction,
        snackbarMultiline,
        snackbarTimeout,
        snackbarVariants,
        snackbarVertical,
        snackbarPosition,
        snackbarTransition,
      },
    }
  },
}
</script>
