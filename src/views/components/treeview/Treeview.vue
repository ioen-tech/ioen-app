<template>
  <v-row class="match-height">
    <!--basic -->
    <v-col
      md="6"
      cols="12"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.treeviewBasic"
      >
        <v-card-text>
          The <code>v-treeview</code> component is useful for displaying large amounts of nested data.
        </v-card-text>

        <v-card-text>
          <demo-treeview-basic></demo-treeview-basic>
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
        :code="codeSnippets.treeviewColor"
      >
        <v-card-text>
          You can control the text and background color of the active treeview node.
        </v-card-text>

        <v-card-text>
          <demo-treeview-color></demo-treeview-color>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Activatable -->
    <v-col
      md="6"
      cols="12"
    >
      <app-card-code
        title="Activatable"
        :code="codeSnippets.treeviewActivatable"
      >
        <v-card-text>
          Treeview nodes can be activated by clicking on them.
        </v-card-text>

        <v-card-text>
          <demo-treeview-activatable></demo-treeview-activatable>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Dense mode -->
    <v-col
      md="6"
      cols="12"
    >
      <app-card-code
        title="Dense Mode"
        :code="codeSnippets.treeviewDenseMode"
      >
        <v-card-text>
          Dense mode provides more compact layout with decreased heights of the items.
        </v-card-text>

        <v-card-text>
          <demo-treeview-dense-mode></demo-treeview-dense-mode>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Hoverable -->
    <v-col
      md="6"
      cols="12"
    >
      <app-card-code
        title="Hoverable"
        :code="codeSnippets.treeviewHoverable"
      >
        <v-card-text>
          Treeview nodes can have a hover effect.
        </v-card-text>

        <v-card-text>
          <demo-treeview-hoverable></demo-treeview-hoverable>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Item disabled -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Item disabled"
        :code="codeSnippets.treeviewItemDisabled"
      >
        <v-card-text>
          Setting <code>item-disabled</code> prop allows to control which node’s property disables the node when set to true.
        </v-card-text>

        <v-card-text>
          <demo-treeview-item-disabled></demo-treeview-item-disabled>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- shaped -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Shaped"
        :code="codeSnippets.treeviewShaped"
      >
        <v-card-text>
          Shaped treeview’s have rounded borders on one side of the nodes.
        </v-card-text>

        <v-card-text>
          <demo-treeview-shaped></demo-treeview-shaped>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- rounded -->
    <v-col
      md="6"
      cols="12"
    >
      <app-card-code
        title="Rounded"
        :code="codeSnippets.treeviewRounded"
      >
        <v-card-text>
          You can make treeview nodes rounded.
        </v-card-text>

        <v-card-text>
          <demo-treeview-rounded></demo-treeview-rounded>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Selectable -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Selectable"
        :code="codeSnippets.treeviewSelectable"
      >
        <v-card-text>
          You can easily select treeview nodes and children.
        </v-card-text>

        <v-card-text>
          <demo-treeview-selectable></demo-treeview-selectable>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- selected color -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Selected Color"
        :code="codeSnippets.treeviewSelectedColor"
      >
        <v-card-text>
          You can control the color of the selected node checkbox.
        </v-card-text>

        <v-card-text>
          <demo-treeview-selected-color></demo-treeview-selected-color>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- open all -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Open all"
        :code="codeSnippets.treeviewOpenAll"
      >
        <v-card-text>
          Treeview nodes can be pre-opened on page load.
        </v-card-text>

        <v-card-text>
          <demo-treeview-open-all></demo-treeview-open-all>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Search and filter -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Search and filter"
        :code="codeSnippets.treeviewSearchAndFilter"
      >
        <v-card-text>Easily filter your treeview by using the <code>search</code> prop.</v-card-text>

        <v-card-text>
          <demo-treeview-search-and-filter></demo-treeview-search-and-filter>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- slots -->
    <v-col
      cols="12"
      md="5"
    >
      <app-card-code
        title="Append and label"
        :code="codeSnippets.treeviewAppendAndLabel"
      >
        <v-card-text>
          Using the the <code>label</code>, and an <code>append</code> slots we are able to create an intuitive file explorer.
        </v-card-text>

        <v-card-text>
          <demo-treeview-append-and-label></demo-treeview-append-and-label>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- selection type -->
    <v-col
      cols="12"
      md="7"
    >
      <app-card-code
        title="Selection type"
        :code="codeSnippets.treeviewSelectionType"
      >
        <v-card-text>
          Treeview now supports two different selection types. The default type is ‘<span class="font-weight-bold">leaf</span>’, which will only include leaf nodes in the v-model array, but will render parent nodes as either partially or fully selected. The alternative mode is ‘<span class="font-weight-bold">independent</span>’, which allows one to select parent nodes, but each node is independent of its parent and children.
        </v-card-text>

        <v-card-text>
          <demo-treeview-selection-type></demo-treeview-selection-type>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- load children -->
    <v-col cols="12">
      <app-card-code
        title="Load Children"
        :code="codeSnippets.treeviewLoadChildren"
      >
        <v-card-text>
          You can dynamically load child data by supplying a Promise callback to the <code>load-children</code> prop. This callback will be executed the first time a user tries to expand an item that has a children property that is an empty array.
        </v-card-text>

        <v-card-text>
          <demo-treeview-load-children></demo-treeview-load-children>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Selectable icons -->
    <v-col cols="12">
      <app-card-code
        title="Selectable icons"
        :code="codeSnippets.treeviewSelectableIcons"
      >
        <v-card-text>
          Customize the <span class="font-weight-bold">on</span>, <span class="font-weight-bold">off</span> and <span class="font-weight-bold">indeterminate</span> icons for your selectable tree.
        </v-card-text>

        <v-card-text>
          <demo-treeview-selectable-icons></demo-treeview-selectable-icons>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoTreeviewBasic from './demos/DemoTreeviewBasic.vue'
import DemoTreeviewActivatable from './demos/DemoTreeviewActivatable.vue'
import DemoTreeviewColor from './demos/DemoTreeviewColor.vue'
import DemoTreeviewDenseMode from './demos/DemoTreeviewDenseMode.vue'
import DemoTreeviewHoverable from './demos/DemoTreeviewHoverable.vue'
import DemoTreeviewItemDisabled from './demos/DemoTreeviewItemDisabled.vue'
import DemoTreeviewLoadChildren from './demos/DemoTreeviewLoadChildren.vue'
import DemoTreeviewOpenAll from './demos/DemoTreeviewOpenAll.vue'
import DemoTreeviewRounded from './demos/DemoTreeviewRounded.vue'
import DemoTreeviewSelectable from './demos/DemoTreeviewSelectable.vue'
import DemoTreeviewSelectedColor from './demos/DemoTreeviewSelectedColor.vue'
import DemoTreeviewSelectionType from './demos/DemoTreeviewSelectionType.vue'
import DemoTreeviewShaped from './demos/DemoTreeviewShaped.vue'
import DemoTreeviewAppendAndLabel from './demos/DemoTreeviewAppendAndLabel.vue'
import DemoTreeviewSearchAndFilter from './demos/DemoTreeviewSearchAndFilter.vue'
import DemoTreeviewSelectableIcons from './demos/DemoTreeviewSelectableIcons.vue'

// code
import {
  treeviewBasic,
  treeviewActivatable,
  treeviewColor,
  treeviewDenseMode,
  treeviewHoverable,
  treeviewItemDisabled,
  treeviewLoadChildren,
  treeviewOpenAll,
  treeviewRounded,
  treeviewSelectable,
  treeviewSelectedColor,
  treeviewSelectionType,
  treeviewShaped,
  treeviewAppendAndLabel,
  treeviewSearchAndFilter,
  treeviewSelectableIcons,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoTreeviewBasic,
    DemoTreeviewActivatable,
    DemoTreeviewColor,
    DemoTreeviewDenseMode,
    DemoTreeviewHoverable,
    DemoTreeviewItemDisabled,
    DemoTreeviewLoadChildren,
    DemoTreeviewOpenAll,
    DemoTreeviewRounded,
    DemoTreeviewSelectable,
    DemoTreeviewSelectedColor,
    DemoTreeviewSelectionType,
    DemoTreeviewShaped,
    DemoTreeviewAppendAndLabel,
    DemoTreeviewSearchAndFilter,
    DemoTreeviewSelectableIcons,
  },
  setup() {
    return {
      codeSnippets: {
        treeviewBasic,
        treeviewActivatable,
        treeviewColor,
        treeviewDenseMode,
        treeviewHoverable,
        treeviewItemDisabled,
        treeviewLoadChildren,
        treeviewOpenAll,
        treeviewRounded,
        treeviewSelectable,
        treeviewSelectedColor,
        treeviewSelectionType,
        treeviewShaped,
        treeviewAppendAndLabel,
        treeviewSearchAndFilter,
        treeviewSelectableIcons,
      },
    }
  },
}
</script>
