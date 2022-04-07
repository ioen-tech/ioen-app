<template>
  <v-row class="match-height">
    <v-col
      md="6"
      cols="12"
    >
      <!-- basic -->
      <app-card-code
        title="Basic"
        :code="codeSnippets.paginationBasic"
      >
        <v-card-text>
          The <code>v-pagination</code> component is used to separate long sets of data.
        </v-card-text>

        <v-card-text>
          <demo-pagination-basic></demo-pagination-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- circle -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Circle"
        :code="codeSnippets.paginationCircle"
      >
        <v-card-text>The <code>circle</code> prop gives you an alternate style for pagination buttons.</v-card-text>

        <v-card-text>
          <demo-pagination-circle></demo-pagination-circle>
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
        :code="codeSnippets.paginationDisabled"
      >
        <v-card-text>
          Pagination items can be manually deactivated using the <code>disabled</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-pagination-disabled></demo-pagination-disabled>
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
        :code="codeSnippets.paginationIcons"
      >
        <v-card-text>
          Customize previous and next icons using <code>prev-icon</code> and <code>next-icon</code> props.
        </v-card-text>

        <v-card-text>
          <demo-pagination-icons></demo-pagination-icons>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- length -->
    <v-col
      md="6"
      cols="12"
    >
      <app-card-code
        title="Length"
        :code="codeSnippets.paginationLength"
      >
        <v-card-text>
          Using the <code>length</code> prop you can set the length of v-pagination, if the number of page buttons exceeds the parent container, it will truncate the list.
        </v-card-text>

        <v-card-text>
          <demo-pagination-length></demo-pagination-length>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- total visible -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Total visible"
        :code="codeSnippets.paginationTotalVisible"
      >
        <v-card-text>
          You can also manually set the maximum number of visible page buttons with the <code>total-visible</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-pagination-total-visible></demo-pagination-total-visible>
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
        :code="codeSnippets.paginationColor"
      >
        <v-card-text>
          Use <code>color</code> prop for create different color pagination.
        </v-card-text>

        <v-card-text>
          <demo-pagination-color></demo-pagination-color>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoPaginationBasic from './demos/DemoPaginationBasic.vue'
import DemoPaginationColor from './demos/DemoPaginationColor.vue'
import DemoPaginationCircle from './demos/DemoPaginationCircle.vue'
import DemoPaginationDisabled from './demos/DemoPaginationDisabled.vue'
import DemoPaginationIcons from './demos/DemoPaginationIcons.vue'
import DemoPaginationLength from './demos/DemoPaginationLength.vue'
import DemoPaginationTotalVisible from './demos/DemoPaginationTotalVisible.vue'

// code
import {
  paginationBasic,
  paginationColor,
  paginationCircle,
  paginationDisabled,
  paginationIcons,
  paginationLength,
  paginationTotalVisible,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoPaginationBasic,
    DemoPaginationColor,
    DemoPaginationCircle,
    DemoPaginationDisabled,
    DemoPaginationIcons,
    DemoPaginationLength,
    DemoPaginationTotalVisible,
  },
  setup() {
    return {
      codeSnippets: {
        paginationBasic,
        paginationColor,
        paginationCircle,
        paginationDisabled,
        paginationIcons,
        paginationLength,
        paginationTotalVisible,
      },
    }
  },
}
</script>
