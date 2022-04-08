<template>
  <div>
    <!-- alignment -->
    <app-card-code
      title="Alignment"
      :code="codeSnippets.tooltipAlignment"
      class="mb-6"
    >
      <v-card-text>
        A tooltip can be aligned to any of the four sides of the activator element using <code>left</code>, <code>right</code>, <code>top</code>, <code>bottom</code> prop.
      </v-card-text>

      <v-card-text>
        <demo-tooltip-alignment></demo-tooltip-alignment>
      </v-card-text>
    </app-card-code>

    <!-- color -->
    <app-card-code
      title="Colors"
      :code="codeSnippets.tooltipColor"
      class="mb-6"
    >
      <v-card-text>
        Use <code>color</code> to create a different color background tooltip.
      </v-card-text>

      <v-card-text>
        <demo-tooltip-color></demo-tooltip-color>
      </v-card-text>
    </app-card-code>

    <!-- events -->
    <app-card-code
      title="Events"
      :code="codeSnippets.tooltipEvent"
      class="mb-6"
    >
      <v-card-text>
        <demo-tooltip-event></demo-tooltip-event>
      </v-card-text>
    </app-card-code>

    <!-- Delay -->
    <app-card-code
      title="Delay On Hover"
      :code="codeSnippets.tooltipDelay"
      class="mb-6"
    >
      <v-card-text>
        Delay (in ms) after which tooltip opens (when open-on-hover prop is set to true)
      </v-card-text>

      <v-card-text>
        <demo-tooltip-delay></demo-tooltip-delay>
      </v-card-text>
    </app-card-code>

    <!-- v-model -->
    <app-card-code
      title="V-Model Support"
      :code="codeSnippets.tooltipVModal"
      class="mb-6"
    >
      <v-card-text>
        Tooltip visibility can be programmatically changed using <code>v-model</code>.
      </v-card-text>

      <v-card-text>
        <demo-tooltip-v-modal></demo-tooltip-v-modal>
      </v-card-text>
    </app-card-code>

    <!-- transition -->
    <app-card-code
      title="Transition"
      :code="codeSnippets.tooltipTransition"
      class="mb-6"
    >
      <v-card-text>
        Use <code>transition</code> prop to sets the component transition.
      </v-card-text>

      <v-card-text>
        <demo-tooltip-transition></demo-tooltip-transition>
      </v-card-text>
    </app-card-code>

    <!-- tooltip on various elements -->
    <app-card-code
      title="Tooltip on Various Elements"
      :code="codeSnippets.tooltipVariousElements"
    >
      <v-card-text>
        Tooltips can wrap any element.
      </v-card-text>

      <v-card-text>
        <demo-tooltip-various-elements></demo-tooltip-various-elements>
      </v-card-text>
    </app-card-code>
  </div>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoTooltipAlignment from './demos/DemoTooltipAlignment.vue'
import DemoTooltipColor from './demos/DemoTooltipColor.vue'
import DemoTooltipEvent from './demos/DemoTooltipEvent.vue'
import DemoTooltipVModal from './demos/DemoTooltipVModal.vue'
import DemoTooltipTransition from './demos/DemoTooltipTransition.vue'
import DemoTooltipVariousElements from './demos/DemoTooltipVariousElements.vue'
import DemoTooltipDelay from './demos/DemoTooltipDelay.vue'

// code
import {
  tooltipAlignment,
  tooltipColor,
  tooltipEvent,
  tooltipVModal,
  tooltipTransition,
  tooltipVariousElements,
  tooltipDelay,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoTooltipAlignment,
    DemoTooltipColor,
    DemoTooltipEvent,
    DemoTooltipVModal,
    DemoTooltipTransition,
    DemoTooltipVariousElements,
    DemoTooltipDelay,
  },
  setup() {
    return {
      codeSnippets: {
        tooltipAlignment,
        tooltipColor,
        tooltipEvent,
        tooltipVModal,
        tooltipTransition,
        tooltipVariousElements,
        tooltipDelay,
      },
    }
  },
}
</script>
