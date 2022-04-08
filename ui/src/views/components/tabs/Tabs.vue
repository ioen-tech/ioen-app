<template>
  <v-row class="match-height">
    <!-- basic -->
    <v-col
      md="6"
      cols="12"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.tabsBasic"
      >
        <v-card-text>
          The <code>v-tabs</code> component is used for hiding content behind a selectable item.
        </v-card-text>

        <v-card-text>
          <demo-tabs-basic></demo-tabs-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Icons and text -->
    <v-col
      md="6"
      cols="12"
    >
      <app-card-code
        title="Icons and text"
        :code="codeSnippets.tabsIconAndText"
      >
        <v-card-text>Using <code>icons-with-text</code> prop increases the <code>v-tabs</code> height to 72px to allow for both icons as well as text to be used.</v-card-text>

        <!-- <v-card-text> -->
        <demo-tabs-icon-and-text></demo-tabs-icon-and-text>
        <!-- </v-card-text> -->
      </app-card-code>
    </v-col>

    <!-- Vertical Tabs -->
    <v-col
      md="6"
      cols="12"
    >
      <app-card-code
        title="Vertical Tabs"
        :code="codeSnippets.tabsVertical"
      >
        <v-card-text>
          The <code>vertical</code> prop allows for <code>v-tab</code> components to stack vertically.
        </v-card-text>

        <v-card-text>
          <demo-tabs-vertical></demo-tabs-vertical>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- alignment -->
    <v-col
      md="6"
      cols="12"
    >
      <app-card-code
        title="Alignment"
        :code="codeSnippets.tabsAlignment"
      >
        <v-card-text>
          Use <code>centered</code>, <code>right</code> prop to change the tabs alignment.
        </v-card-text>

        <v-card-text>
          <demo-tabs-alignment></demo-tabs-alignment>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Pagination -->
    <v-col
      md="6"
      cols="12"
    >
      <app-card-code
        title="Pagination"
        :code="codeSnippets.tabsPagination"
      >
        <v-card-text>
          If the tab items overflow their container, pagination controls will appear on desktop.
        </v-card-text>

        <v-card-text>
          <demo-tabs-pagination></demo-tabs-pagination>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Custom Icons -->
    <v-col
      md="6"
      cols="12"
    >
      <app-card-code
        title="Custom Icons"
        :code="codeSnippets.tabsIcons"
      >
        <v-card-text>
          <code>prev-icon</code> and <code>next-icon</code> props can be used for applying custom pagination icons.
        </v-card-text>

        <v-card-text>
          <demo-tabs-icons></demo-tabs-icons>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Fixed tabs -->
    <v-col cols="12">
      <app-card-code
        title="Fixed tabs"
        :code="codeSnippets.tabsFixed"
      >
        <v-card-text>
          The <code>fixed-tabs</code> prop forces <code>v-tab</code> to take up all available space up to the maximum width (300px).
        </v-card-text>

        <v-card-text>
          <demo-tabs-fixed></demo-tabs-fixed>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Grow -->
    <v-col cols="12">
      <app-card-code
        title="Grow"
        :code="codeSnippets.tabsGrow"
      >
        <v-card-text>The <code>grow</code> prop will make the tab items take up all available space up to a maximum width of 300px.</v-card-text>

        <demo-tabs-grow></demo-tabs-grow>
      </app-card-code>
    </v-col>

    <!-- programmatic navigation -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Programmatic Navigation"
        :code="codeSnippets.tabsProgrammaticNavigation"
      >
        <demo-tabs-programmatic-navigation></demo-tabs-programmatic-navigation>
      </app-card-code>
    </v-col>

    <!-- Dynamic Tabs -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Dynamic Tabs"
        :code="codeSnippets.tabsDynamic"
      >
        <v-card-text>
          Tabs can be dynamically added and removed. This allows you to update to any number and the <code>v-tabs</code> component will react.
        </v-card-text>
        <v-card-text>
          <demo-tabs-dynamic></demo-tabs-dynamic>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoTabsBasic from './demos/DemoTabsBasic.vue'
import DemoTabsIcons from './demos/DemoTabsIcons.vue'
import DemoTabsFixed from './demos/DemoTabsFixed.vue'
import DemoTabsGrow from './demos/DemoTabsGrow.vue'
import DemoTabsIconAndText from './demos/DemoTabsIconAndText.vue'
import DemoTabsPagination from './demos/DemoTabsPagination.vue'
import DemoTabsVertical from './demos/DemoTabsVertical.vue'
import DemoTabsAlignment from './demos/DemoTabsAlignment.vue'
import DemoTabsProgrammaticNavigation from './demos/DemoTabsProgrammaticNavigation.vue'
import DemoTabsDynamic from './demos/DemoTabsDynamic.vue'

// code
import {
  tabsBasic,
  tabsIcons,
  tabsFixed,
  tabsGrow,
  tabsIconAndText,
  tabsPagination,
  tabsAlignment,
  tabsVertical,
  tabsProgrammaticNavigation,
  tabsDynamic,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoTabsBasic,
    DemoTabsIcons,
    DemoTabsFixed,
    DemoTabsGrow,
    DemoTabsIconAndText,
    DemoTabsPagination,
    DemoTabsVertical,
    DemoTabsAlignment,
    DemoTabsProgrammaticNavigation,
    DemoTabsDynamic,
  },
  setup() {
    return {
      codeSnippets: {
        tabsBasic,
        tabsIcons,
        tabsFixed,
        tabsGrow,
        tabsIconAndText,
        tabsPagination,
        tabsAlignment,
        tabsVertical,
        tabsProgrammaticNavigation,
        tabsDynamic,
      },
    }
  },
}
</script>
