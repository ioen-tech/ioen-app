<template>
  <v-row class="match-height">
    <!-- basic -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.menuBasic"
        class="mb-6"
      >
        <v-card-text>Remember to put the element that activates the menu in the <code>activator</code> slot.</v-card-text>

        <v-card-text>
          <demo-menu-basic></demo-menu-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- close on click -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Close on click &amp; content click"
        :code="codeSnippets.menuCloseOn"
        class="mb-6"
      >
        <v-card-text>
          The menu can be closed when lost focus. To override this behavior you can use the <code>close-on-click</code> prop's value set to <code>false</code>. You can configure whether the <code>v-menu</code> should be closed when its content is clicked.
        </v-card-text>

        <v-card-text>
          <demo-menu-close-on></demo-menu-close-on>
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
        :code="codeSnippets.menuPosition"
        class="mb-6"
      >
        <v-card-text>
          Menu can be offset by the X and Y axis to make the activator visible.
        </v-card-text>

        <v-card-text>
          <demo-menu-position></demo-menu-position>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- disabled -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Disabled"
        :code="codeSnippets.menuDisabled"
        class="mb-6"
      >
        <v-card-text>
          You can disable the menu. Disabled menu can’t be opened.
        </v-card-text>

        <v-card-text>
          <demo-menu-disabled></demo-menu-disabled>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- hover -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Open on hover"
        :code="codeSnippets.menuHover"
        class="mb-6"
      >
        <v-card-text>
          Menu can be accessed using hover instead of clicking with the <code>open-on-hover</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-menu-hover></demo-menu-hover>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- animation -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Custom transitions"
        :code="codeSnippets.menuTransitions"
        class="mb-6"
      >
        <v-card-text>
          Vuetify comes with 3 standard transitions, <code>scale</code>, <code>slide-x</code> and <code>slide-y</code>. You can also create your own and pass it as the transition argument.
        </v-card-text>

        <v-card-text>
          <demo-menu-transitions></demo-menu-transitions>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- popover menu -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Popover menu"
        :code="codeSnippets.menuPopover"
        class="mb-6"
      >
        <v-card-text>
          A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.
        </v-card-text>

        <v-card-text>
          <demo-menu-popover></demo-menu-popover>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- tooltip -->
      <app-card-code
        title="Activator and tooltip"
        :code="codeSnippets.menuTooltip"
      >
        <v-card-text>
          With the new <code>v-slot</code> syntax, nested activators such as those seen with a <code>v-menu</code> and <code>v-tooltip</code> attached to the same activator button, need a particular setup in order to function correctly.
        </v-card-text>

        <v-card-text>
          <demo-menu-tooltip></demo-menu-tooltip>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoMenuBasic from './demos/DemoMenuBasic.vue'
import DemoMenuPosition from './demos/DemoMenuPosition.vue'
import DemoMenuCloseOn from './demos/DemoMenuCloseOn.vue'
import DemoMenuDisabled from './demos/DemoMenuDisabled.vue'
import DemoMenuHover from './demos/DemoMenuHover.vue'
import DemoMenuTooltip from './demos/DemoMenuTooltip.vue'
import DemoMenuTransitions from './demos/DemoMenuTransitions.vue'
import DemoMenuPopover from './demos/DemoMenuPopover.vue'

// code
import {
  menuBasic,
  menuPosition,
  menuCloseOn,
  menuDisabled,
  menuHover,
  menuTooltip,
  menuTransitions,
  menuPopover,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoMenuBasic,
    DemoMenuPosition,
    DemoMenuCloseOn,
    DemoMenuDisabled,
    DemoMenuHover,
    DemoMenuTooltip,
    DemoMenuTransitions,
    DemoMenuPopover,
  },
  setup() {
    return {
      codeSnippets: {
        menuBasic,
        menuPosition,
        menuCloseOn,
        menuDisabled,
        menuHover,
        menuTooltip,
        menuTransitions,
        menuPopover,
      },
    }
  },
}
</script>
