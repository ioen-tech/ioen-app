<template>
  <v-row class="match-height">
    <!-- basic -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.sliderBasic"
      >
        <v-card-text>
          The <code>v-slider</code> component is a better visualization of the number input.
        </v-card-text>

        <v-card-text>
          <demo-slider-basic></demo-slider-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- disabled and readonly -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Disabled and Readonly"
        :code="codeSnippets.sliderDisabledAndReadonly"
      >
        <v-card-text>
          You cannot interact with disabled and readonly sliders.
        </v-card-text>

        <v-card-text>
          <demo-slider-disabled-and-readonly></demo-slider-disabled-and-readonly>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- colors -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Colors"
        :code="codeSnippets.sliderColors"
      >
        <v-card-text>
          You can set the colors of the slider using the props <code>color</code>, <code>track-color</code> and <code>thumb-color</code>.
        </v-card-text>

        <v-card-text>
          <demo-slider-colors></demo-slider-colors>
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
        :code="codeSnippets.sliderIcons"
      >
        <v-card-text>
          You can add icons to the slider with the <code>append-icon</code> and <code>prepend-icon</code> props.
        </v-card-text>
        <v-card-text>
          <demo-slider-icons></demo-slider-icons>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Discrete -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Discrete"
        :code="codeSnippets.sliderDiscrete"
      >
        <v-card-text>
          Discrete sliders offer a thumb label that displays the exact current amount. Using the <code>step</code> prop you can disallow selecting values outside of steps.
        </v-card-text>

        <v-card-text>
          <demo-slider-discrete></demo-slider-discrete>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- validation -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Validation"
        :code="codeSnippets.sliderValidation"
      >
        <v-card-text>Vuetify includes simple validation through the <code>rules</code> prop.</v-card-text>

        <v-card-text>
          <demo-slider-validation class="mt-6"></demo-slider-validation>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- mix max  -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Min and Max"
        :code="codeSnippets.sliderMinAndMax"
      >
        <v-card-text>
          You can set <code>min</code> and <code>max</code> values of sliders.
        </v-card-text>

        <v-card-text>
          <demo-slider-min-and-max></demo-slider-min-and-max>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- step -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Step"
        :code="codeSnippets.sliderStep"
      >
        <v-card-text>
          <code>v-slider</code> can have steps other than 1. Use <code>step</code> prop to set steps to slider.
        </v-card-text>

        <v-card-text>
          <demo-slider-step></demo-slider-step>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- thumb -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Thumb"
        :code="codeSnippets.sliderThumb"
      >
        <v-card-text>
          You can display a thumb label while sliding or always with the <code>thumb-label</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-slider-thumb></demo-slider-thumb>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Ticks -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Ticks"
        :code="codeSnippets.sliderTicks"
      >
        <v-card-text>
          Tick marks represent predetermined values to which the user can move the slider.
        </v-card-text>

        <v-card-text>
          <demo-slider-ticks></demo-slider-ticks>
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
        :code="codeSnippets.sliderVertical"
      >
        <v-card-text>
          You can use the <code>vertical</code> prop to switch sliders to a vertical orientation.
        </v-card-text>

        <v-card-text>
          <demo-slider-vertical></demo-slider-vertical>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Append and prepend -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Append and prepend"
        :code="codeSnippets.sliderAppendAndPrepend"
      >
        <v-card-text>
          Use slots such as <code>append</code> and <code>prepend</code> to easily customize the <code>v-slider</code> to fit any situation.
        </v-card-text>

        <v-card-text>
          <demo-slider-append-and-prepend></demo-slider-append-and-prepend>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Append text field -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Append text field"
        :code="codeSnippets.sliderAppendTextField"
      >
        <v-card-text>
          Sliders can be combined with other components in its <code>append</code> slot, such as <code>v-text-field</code>, to add additional functionality to the component.
        </v-card-text>

        <v-card-text>
          <demo-slider-append-text-field></demo-slider-append-text-field>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoSliderBasic from './demos/DemoSliderBasic.vue'
import DemoSliderColors from './demos/DemoSliderColors.vue'
import DemoSliderDisabledAndReadonly from './demos/DemoSliderDisabledAndReadonly.vue'
import DemoSliderIcons from './demos/DemoSliderIcons.vue'
import DemoSliderDiscrete from './demos/DemoSliderDiscrete.vue'
import DemoSliderMinAndMax from './demos/DemoSliderMinAndMax.vue'
import DemoSliderStep from './demos/DemoSliderStep.vue'
import DemoSliderValidation from './demos/DemoSliderValidation.vue'
import DemoSliderThumb from './demos/DemoSliderThumb.vue'
import DemoSliderTicks from './demos/DemoSliderTicks.vue'
import DemoSliderVertical from './demos/DemoSliderVertical.vue'
import DemoSliderAppendAndPrepend from './demos/DemoSliderAppendAndPrepend.vue'
import DemoSliderAppendTextField from './demos/DemoSliderAppendTextField.vue'

// code
import {
  sliderBasic,
  sliderColors,
  sliderDisabledAndReadonly,
  sliderIcons,
  sliderDiscrete,
  sliderMinAndMax,
  sliderStep,
  sliderValidation,
  sliderThumb,
  sliderTicks,
  sliderVertical,
  sliderAppendAndPrepend,
  sliderAppendTextField,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoSliderBasic,
    DemoSliderColors,
    DemoSliderDisabledAndReadonly,
    DemoSliderIcons,
    DemoSliderDiscrete,
    DemoSliderMinAndMax,
    DemoSliderStep,
    DemoSliderValidation,
    DemoSliderThumb,
    DemoSliderTicks,
    DemoSliderVertical,
    DemoSliderAppendAndPrepend,
    DemoSliderAppendTextField,
  },
  setup() {
    return {
      codeSnippets: {
        sliderBasic,
        sliderColors,
        sliderDisabledAndReadonly,
        sliderIcons,
        sliderDiscrete,
        sliderMinAndMax,
        sliderStep,
        sliderValidation,
        sliderThumb,
        sliderTicks,
        sliderVertical,
        sliderAppendAndPrepend,
        sliderAppendTextField,
      },
    }
  },
}
</script>
