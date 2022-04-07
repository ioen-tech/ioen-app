<template>
  <div>
    <!-- alert basic -->
    <app-card-code
      title="Basic"
      :code="codeSnippets.alertBasic"
      class="mb-6"
    >
      <v-card-text>
        <demo-alert-basic></demo-alert-basic>
      </v-card-text>
    </app-card-code>

    <!-- alert colors-->
    <app-card-code
      title="Colors"
      :code="codeSnippets.alertColors"
      class="mb-6"
    >
      <v-card-text>
        The <code>color</code> prop is used to change the background color of the alert.
      </v-card-text>

      <v-card-text>
        <demo-alert-colors></demo-alert-colors>
      </v-card-text>
    </app-card-code>

    <!-- alert icons -->
    <app-card-code
      title="Icon"
      :code="codeSnippets.alertIcons"
      class="mb-6"
    >
      <v-card-text>
        The <code>icon</code> prop allows you to add an icon to the beginning of the alert component. If a <code>type</code> is provided, this will override the default type icon.
      </v-card-text>

      <v-card-text>
        <demo-alert-icons></demo-alert-icons>
      </v-card-text>
    </app-card-code>

    <!-- alert border -->
    <app-card-code
      title="Border"
      :code="codeSnippets.alertBorder"
      class="mb-6"
    >
      <v-card-text>The <code>border</code> prop adds a simple border to one of the 4 sides of the alert. This can be combined props like with <code>color</code> , <code>dark</code>, and <code>type</code> to provide unique accents to the alert.</v-card-text>

      <v-card-text>
        <demo-alert-border></demo-alert-border>
      </v-card-text>
    </app-card-code>

    <!-- colored border -->
    <app-card-code
      title="Colored Border"
      :code="codeSnippets.alertColoredBorder"
      class="mb-6"
    >
      <v-card-text>
        The colored-border prop removes the alert background in order to accent the border prop.
      </v-card-text>

      <v-card-text>
        <demo-alert-colored-border></demo-alert-colored-border>
      </v-card-text>
    </app-card-code>

    <!-- alert dense -->
    <app-card-code
      title="Dense"
      :code="codeSnippets.alertDense"
      class="mb-6"
    >
      <v-card-text>
        The <code>dense</code> prop decreases the height of the alert to create a simple and compact style. When combined with the <code>border</code> prop the border thickness will be decreased to stay consistent with the style.
      </v-card-text>

      <v-card-text>
        <demo-alert-dense></demo-alert-dense>
      </v-card-text>
    </app-card-code>

    <!-- alert type -->
    <app-card-code
      title="Type"
      :code="codeSnippets.alertType"
      class="mb-6"
    >
      <v-card-text>
        The <code>type</code> prop provides 4 default v-alert styles: <span class="font-weight-bold">success</span>, <span class="font-weight-bold">info</span>, <span class="font-weight-bold">warning</span>, and <span class="font-weight-bold">error</span>. Each of these styles provide a default icon and color.
      </v-card-text>

      <v-card-text>
        <demo-alert-type></demo-alert-type>
      </v-card-text>
    </app-card-code>

    <!-- dismissible -->
    <app-card-code
      title="Dismissible"
      :code="codeSnippets.alertDismissible"
      class="mb-6"
    >
      <v-card-text>
        The dismissible prop adds a close button to the end of the alert component.
      </v-card-text>

      <v-card-text>
        <demo-alert-dismissible></demo-alert-dismissible>
      </v-card-text>
    </app-card-code>

    <!-- alert v-model support -->
    <app-card-code
      title="v-model support"
      :code="codeSnippets.alertVModel"
      class="mb-6"
    >
      <v-card-text>
        Clicking this button will set its value to false and effectively hide the alert. You can restore the alert by binding v-model and setting it to true.
      </v-card-text>

      <v-card-text>
        <demo-alert-v-model></demo-alert-v-model>
      </v-card-text>
    </app-card-code>

    <!-- alert transition -->
    <app-card-code
      title="Transition"
      :code="codeSnippets.alertTransition"
      class="mb-6"
    >
      <v-card-text>
        The transition prop allows you to apply a transition to the alert which is viewable when the component hides and shows.
      </v-card-text>

      <v-card-text>
        <demo-alert-transition></demo-alert-transition>
      </v-card-text>
    </app-card-code>

    <!-- alert outlined -->
    <app-card-code
      title="Outlined"
      :code="codeSnippets.alertOutlined"
      class="mb-6"
    >
      <v-card-text>The <code>outlined</code> prop inverts the style of an alert, inheriting the currently applied <code>color</code>, applying it to the text and border, and making its background transparent.</v-card-text>

      <v-card-text>
        <demo-alert-outlined></demo-alert-outlined>
      </v-card-text>
    </app-card-code>

    <!-- alert text -->
    <app-card-code
      title="Text"
      :code="codeSnippets.alertText"
      class="mb-6"
    >
      <v-card-text>
        The text prop is a simple alert variant that applies a reduced opacity background of the provided color.
      </v-card-text>

      <v-card-text>
        <demo-alert-text></demo-alert-text>
      </v-card-text>
    </app-card-code>

    <!-- elevation -->
    <app-card-code
      title="Elevation"
      :code="codeSnippets.alertElevation"
    >
      <v-card-text>
        Use <code>elevation</code> prop to set a box-shadow to alert.
      </v-card-text>

      <v-card-text>
        <demo-alert-elevation></demo-alert-elevation>
      </v-card-text>
    </app-card-code>
  </div>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoAlertBasic from './demos/DemoAlertBasic.vue'
import DemoAlertColors from './demos/DemoAlertColors.vue'
import DemoAlertBorder from './demos/DemoAlertBorder.vue'
import DemoAlertColoredBorder from './demos/DemoAlertColoredBorder.vue'
import DemoAlertDense from './demos/DemoAlertDense.vue'
import DemoAlertDismissible from './demos/DemoAlertDismissible.vue'
import DemoAlertIcons from './demos/DemoAlertIcons.vue'
import DemoAlertVModel from './demos/DemoAlertVModel.vue'
import DemoAlertOutlined from './demos/DemoAlertOutlined.vue'
import DemoAlertText from './demos/DemoAlertText.vue'
import DemoAlertTransition from './demos/DemoAlertTransition.vue'
import DemoAlertElevation from './demos/DemoAlertElevation.vue'
import DemoAlertType from './demos/DemoAlertType.vue'

// code
import {
  alertBasic,
  alertColors,
  alertBorder,
  alertColoredBorder,
  alertDense,
  alertDismissible,
  alertIcons,
  alertVModel,
  alertOutlined,
  alertTransition,
  alertText,
  alertElevation,
  alertType,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoAlertBasic,
    DemoAlertColors,
    DemoAlertBorder,
    DemoAlertColoredBorder,
    DemoAlertDense,
    DemoAlertDismissible,
    DemoAlertIcons,
    DemoAlertVModel,
    DemoAlertOutlined,
    DemoAlertText,
    DemoAlertTransition,
    DemoAlertElevation,
    DemoAlertType,
  },

  setup() {
    return {
      codeSnippets: {
        alertBorder,
        alertColoredBorder,
        alertDense,
        alertBasic,
        alertColors,
        alertDismissible,
        alertIcons,
        alertVModel,
        alertOutlined,
        alertTransition,
        alertText,
        alertElevation,
        alertType,
      },
    }
  },
}
</script>
