<template>
  <v-row class="match-height">
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.rangeSliderBasic"
      >
        <v-card-text>
          The <code>v-slider</code> component is a better visualization of the number input.
        </v-card-text>

        <v-card-text>
          <demo-range-slider-basic></demo-range-slider-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- states -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="States"
        :code="codeSnippets.rangeSliderStates"
      >
        <v-card-text>
          Range slider has two different states <code>disabled</code> and <code>readonly</code>.
        </v-card-text>

        <v-card-text>
          <demo-range-slider-states></demo-range-slider-states>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- color -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Color"
        :code="codeSnippets.rangeSliderColor"
      >
        <v-card-text>
          Use <code>color</code> prop to the sets the track’s fill color and <code>track-color</code> prop to sets track color.
        </v-card-text>
        <v-card-text>
          <demo-range-slider-color></demo-range-slider-color>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- min max -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Min and Max"
        :code="codeSnippets.rangeSliderMinAndMax"
      >
        <v-card-text>
          You can set <code>min</code> and <code>max</code> values of sliders.
        </v-card-text>

        <v-card-text>
          <demo-range-slider-min-and-max></demo-range-slider-min-and-max>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- steps -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Step"
        :code="codeSnippets.rangeSliderStep"
      >
        <v-card-text>
          <code>v-range-slider</code> can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.
        </v-card-text>

        <v-card-text>
          <demo-range-slider-step></demo-range-slider-step>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Thumb label"
        :code="codeSnippets.rangeSliderThumbLabel"
      >
        <v-card-text>
          Using the <code>tick-labels</code> prop along with the <code>thumb-label</code> slot, you can create a very customized solution.
        </v-card-text>

        <v-card-text>
          <demo-range-slider-thumb-label></demo-range-slider-thumb-label>
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
        :code="codeSnippets.rangeSliderVertical"
      >
        <v-card-text>
          You can use the <code>vertical</code> prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.
        </v-card-text>

        <v-card-text>
          <demo-range-slider-vertical></demo-range-slider-vertical>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoRangeSliderBasic from './demos/DemoRangeSliderBasic.vue'
import DemoRangeSliderStates from './demos/DemoRangeSliderStates.vue'
import DemoRangeSliderColor from './demos/DemoRangeSliderColor.vue'
import DemoRangeSliderMinAndMax from './demos/DemoRangeSliderMinAndMax.vue'
import DemoRangeSliderStep from './demos/DemoRangeSliderStep.vue'
import DemoRangeSliderVertical from './demos/DemoRangeSliderVertical.vue'
import DemoRangeSliderThumbLabel from './demos/DemoRangeSliderThumbLabel.vue'

// code
import {
  rangeSliderBasic,
  rangeSliderStates,
  rangeSliderColor,
  rangeSliderMinAndMax,
  rangeSliderStep,
  rangeSliderVertical,
  rangeSliderThumbLabel,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoRangeSliderBasic,
    DemoRangeSliderStates,
    DemoRangeSliderColor,
    DemoRangeSliderMinAndMax,
    DemoRangeSliderStep,
    DemoRangeSliderVertical,
    DemoRangeSliderThumbLabel,
  },
  setup() {
    return {
      codeSnippets: {
        rangeSliderBasic,
        rangeSliderStates,
        rangeSliderColor,
        rangeSliderMinAndMax,
        rangeSliderStep,
        rangeSliderVertical,
        rangeSliderThumbLabel,
      },
    }
  },
}
</script>
