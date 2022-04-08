<template>
  <v-row class="match-height">
    <!-- color -->
    <v-col
      md="6"
      cols="12"
    >
      <app-card-code
        title="Color"
        :code="codeSnippets.chipColor"
      >
        <v-card-text>
          Use <code>color</code> prop to change the background color of chips.
        </v-card-text>

        <v-card-text>
          <demo-chip-color></demo-chip-color>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- outlined -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Outlined"
        :code="codeSnippets.chipOutlined"
      >
        <v-card-text>
          Use <code>outlined</code> prop to create outline border chips.
        </v-card-text>

        <v-card-text>
          <demo-chip-outlined></demo-chip-outlined>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- label -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Label"
        :code="codeSnippets.chipLabel"
      >
        <v-card-text>
          Label chips use the v-card border-radius. Use <code>label</code> prop to create label chips.
        </v-card-text>

        <v-card-text>
          <demo-chip-label></demo-chip-label>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- label -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Light"
        :code="codeSnippets.chipLight"
      >
        <v-card-text>
          Use <code>v-chip-light-bg</code> class with relative text color class for creating light chip.
        </v-card-text>

        <v-card-text>
          <demo-chip-light></demo-chip-light>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- closable -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Closable"
        :code="codeSnippets.chipClosable"
      >
        <v-card-text>
          Closable chips can be controlled with a v-model.
        </v-card-text>

        <v-card-text>
          <demo-chip-closable></demo-chip-closable>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- chip with icon -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Chip with Icon"
        :code="codeSnippets.chipWithIcon"
      >
        <v-card-text>
          Chips can use text or any icon available in the Material Icons font library.
        </v-card-text>

        <v-card-text>
          <demo-chip-with-icon></demo-chip-with-icon>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Pill -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Pill"
        :code="codeSnippets.chipPill"
      >
        <v-card-text>
          Use <code>pill</code> prop to remove the <code>v-avatar</code> padding.
        </v-card-text>

        <v-card-text>
          <demo-chip-pill></demo-chip-pill>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- sizes -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Sizes"
        :code="codeSnippets.chipSizes"
      >
        <v-card-text>
          <code>v-chip</code> component can have various sizes from <code>x-small</code> to <code>x-large</code>.
        </v-card-text>

        <v-card-text>
          <demo-chip-sizes></demo-chip-sizes>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- in selects -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="In Selects"
        :code="codeSnippets.chipInSelects"
      >
        <v-card-text>
          Selects can use chips to display the selected data. Try adding your own tags below.
        </v-card-text>

        <v-card-text>
          <demo-chip-in-selects></demo-chip-in-selects>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- expandable -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Expandable"
        :code="codeSnippets.chipExpandable"
      >
        <v-card-text>
          Chips can be combined with <code>v-menu</code> to enable a specific set of actions for a chip.
        </v-card-text>

        <v-card-text>
          <demo-chip-expandable></demo-chip-expandable>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

// demos

import DemoChipColor from './demos/DemoChipColor.vue'
import DemoChipOutlined from './demos/DemoChipOutlined.vue'
import DemoChipLabel from './demos/DemoChipLabel.vue'
import DemoChipLight from './demos/DemoChipLight.vue'
import DemoChipClosable from './demos/DemoChipClosable.vue'
import DemoChipWithIcon from './demos/DemoChipWithIcon.vue'
import DemoChipPill from './demos/DemoChipPill.vue'
import DemoChipSizes from './demos/DemoChipSizes.vue'
import DemoChipExpandable from './demos/DemoChipExpandable.vue'
import DemoChipInSelects from './demos/DemoChipInSelects.vue'

// code
import {
  chipColor,
  chipOutlined,
  chipLabel,
  chipLight,
  chipClosable,
  chipWithIcon,
  chipPill,
  chipSizes,
  chipExpandable,
  chipInSelects,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoChipColor,
    DemoChipOutlined,
    DemoChipLabel,
    DemoChipLight,
    DemoChipClosable,
    DemoChipWithIcon,
    DemoChipPill,
    DemoChipSizes,
    DemoChipExpandable,
    DemoChipInSelects,
  },
  setup() {
    return {
      codeSnippets: {
        chipColor,
        chipOutlined,
        chipLabel,
        chipLight,
        chipClosable,
        chipWithIcon,
        chipPill,
        chipSizes,
        chipExpandable,
        chipInSelects,
      },
    }
  },
}
</script>
