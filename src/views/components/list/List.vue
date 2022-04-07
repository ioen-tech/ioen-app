<template>
  <v-row class="match-height">
    <v-col
      cols="12"
      md="6"
    >
      <!-- basic -->
      <app-card-code
        title="Basic"
        :code="codeSnippets.listBasic"
      >
        <v-card-text>
          <code>v-list</code> component can contain an avatar, content, actions and much more.
        </v-card-text>

        <demo-list-basic></demo-list-basic>
      </app-card-code>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- flat -->
      <app-card-code
        title="Flat"
        :code="codeSnippets.listFlat"
      >
        <v-card-text>
          Items don’t change when selected in <code>v-list</code> with <code>flat</code> property.
        </v-card-text>

        <demo-list-flat></demo-list-flat>
      </app-card-code>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- dense -->
      <app-card-code
        title="Dense"
        :code="codeSnippets.listDense"
      >
        <v-card-text>
          <code>v-list</code> can be lowered with <code>dense</code> prop.
        </v-card-text>

        <demo-list-dense></demo-list-dense>
      </app-card-code>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- nav -->
      <app-card-code
        title="Nav"
        :code="codeSnippets.listNav"
      >
        <v-card-text>
          Lists can receive an alternative <span class="font-weight-bold">nav</span> styling that reduces the width <code>v-list-item</code> takes up as well as adding a border radius. Use <code>nav</code> prop to receive nav styling.
        </v-card-text>

        <demo-list-nav></demo-list-nav>
      </app-card-code>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- rounded -->
      <app-card-code
        title="Rounded"
        :code="codeSnippets.listRounded"
      >
        <v-card-text>
          You can make <code>v-list</code> items rounded using <code>rounded</code> prop.
        </v-card-text>

        <demo-list-rounded></demo-list-rounded>
      </app-card-code>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- shaped -->
      <app-card-code
        title="Shaped"
        :code="codeSnippets.listShaped"
      >
        <v-card-text>Use <code>shaped</code> prop for rounded borders on one side of the <code>v-list-item</code>.</v-card-text>

        <demo-list-shaped></demo-list-shaped>
      </app-card-code>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- sub group -->
      <app-card-code
        title="Sub Group"
        :code="codeSnippets.listSubGroup"
      >
        <v-card-text>Using the v-list-group component you can create up to 2 levels in depth using the sub-group prop.</v-card-text>

        <demo-list-sub-group></demo-list-sub-group>
      </app-card-code>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- Two lines and subheader -->
      <app-card-code
        title="Two lines and subheader"
        :code="codeSnippets.listTwoLinesAndSubheader"
      >
        <v-card-text>Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.</v-card-text>

        <demo-list-two-lines-and-subheader></demo-list-two-lines-and-subheader>
      </app-card-code>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- Three line -->
      <app-card-code
        title="Three line"
        :code="codeSnippets.listThreeLine"
      >
        <v-card-text>
          For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.
        </v-card-text>

        <demo-list-three-line></demo-list-three-line>
      </app-card-code>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <!-- Action and item groups -->
      <app-card-code
        title="Action and item group"
        :code="codeSnippets.listActionAndItemGroup"
      >
        <v-card-text>
          A <span class="font-weight-bold">three-line</span> list with actions. Utilizing <code>v-list-item-group</code>, easily connect actions to your tiles.
        </v-card-text>

        <demo-list-action-and-item-group></demo-list-action-and-item-group>
      </app-card-code>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- expansion lists -->
      <app-card-code
        title="Expansion Lists"
        :code="codeSnippets.listExpansionList"
      >
        <v-card-text>
          A list can contain a group of items which will display on click utilizing <code>v-item-group</code>'s <code>activator</code> slot.
        </v-card-text>

        <demo-list-expansion-list></demo-list-expansion-list>
      </app-card-code>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <!-- action stack -->
      <app-card-code
        title="Action Stack"
        :code="codeSnippets.listActionStack"
      >
        <v-card-text>
          A list can contain a stack within an action. This is useful when you need to display meta text next to your action item.
        </v-card-text>

        <demo-list-action-stack></demo-list-action-stack>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoListBasic from './demos/DemoListBasic.vue'
import DemoListDense from './demos/DemoListDense.vue'
import DemoListFlat from './demos/DemoListFlat.vue'
import DemoListNav from './demos/DemoListNav.vue'
import DemoListRounded from './demos/DemoListRounded.vue'
import DemoListShaped from './demos/DemoListShaped.vue'
import DemoListSubGroup from './demos/DemoListSubGroup.vue'
import DemoListTwoLinesAndSubheader from './demos/DemoListTwoLinesAndSubheader.vue'
import DemoListExpansionList from './demos/DemoListExpansionList.vue'
import DemoListActionAndItemGroup from './demos/DemoListActionAndItemGroup.vue'
import DemoListActionStack from './demos/DemoListActionStack.vue'
import DemoListThreeLine from './demos/DemoListThreeLine.vue'

// code
import {
  listBasic,
  listDense,
  listFlat,
  listNav,
  listRounded,
  listShaped,
  listSubGroup,
  listTwoLinesAndSubheader,
  listExpansionList,
  listActionAndItemGroup,
  listActionStack,
  listThreeLine,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoListBasic,
    DemoListDense,
    DemoListFlat,
    DemoListNav,
    DemoListRounded,
    DemoListShaped,
    DemoListSubGroup,
    DemoListTwoLinesAndSubheader,
    DemoListExpansionList,
    DemoListActionAndItemGroup,
    DemoListActionStack,
    DemoListThreeLine,
  },
  setup() {
    return {
      codeSnippets: {
        listBasic,
        listDense,
        listFlat,
        listNav,
        listRounded,
        listShaped,
        listSubGroup,
        listTwoLinesAndSubheader,
        listExpansionList,
        listActionAndItemGroup,
        listActionStack,
        listThreeLine,
      },
    }
  },
}
</script>
