<template>
  <v-row>
    <!-- basic -->
    <v-col cols="12">
      <app-card-code
        title="Basic"
        :code="codeSnippets.datatableBasic"
      >
        <demo-datatable-basic></demo-datatable-basic>
      </app-card-code>
    </v-col>

    <!-- dense -->
    <v-col cols="12">
      <app-card-code
        title="Dense"
        :code="codeSnippets.datatableDense"
      >
        <demo-datatable-dense></demo-datatable-dense>
      </app-card-code>
    </v-col>

    <!-- Table cell Slot for custom data rendering -->
    <v-col cols="12">
      <app-card-code
        title="Table Cell Slot"
        :code="codeSnippets.datatableCellSlot"
      >
        <demo-datatable-cell-slot></demo-datatable-cell-slot>
      </app-card-code>
    </v-col>

    <!-- row selection -->
    <v-col cols="12">
      <app-card-code
        title="Row selection"
        :code="codeSnippets.datatableRowSelection"
      >
        <demo-datatable-row-selection></demo-datatable-row-selection>
      </app-card-code>
    </v-col>

    <!-- fixed header -->
    <v-col cols="12">
      <app-card-code
        title="Fixed Header"
        :code="codeSnippets.datatableFixedHeader"
      >
        <demo-datatable-fixed-header></demo-datatable-fixed-header>
      </app-card-code>
    </v-col>

    <!-- grouping -->
    <v-col cols="12">
      <app-card-code
        title="Grouping"
        :code="codeSnippets.datatableGrouping"
      >
        <demo-datatable-grouping></demo-datatable-grouping>
      </app-card-code>
    </v-col>

    <!-- expandable rows -->
    <v-col cols="12">
      <app-card-code
        title="Expandable Rows"
        :code="codeSnippets.datatableExpandableRows"
      >
        <demo-datatable-expandable-rows></demo-datatable-expandable-rows>
      </app-card-code>
    </v-col>

    <!-- Row Editing via dialog -->
    <v-col cols="12">
      <app-card-code
        title="Row Editing via dialog"
        :code="codeSnippets.datatableRowEditingViaDialog"
      >
        <demo-datatable-row-editing-via-dialog></demo-datatable-row-editing-via-dialog>
      </app-card-code>
    </v-col>

    <!-- Cell Editing via dialog -->
    <v-col cols="12">
      <app-card-code
        title="Cell Editing via dialog"
        :code="codeSnippets.datatableCellEditingViaDialog"
      >
        <demo-datatable-cell-editing-via-dialog></demo-datatable-cell-editing-via-dialog>
      </app-card-code>
    </v-col>

    <!-- pagination -->
    <v-col cols="12">
      <app-card-code
        title="External Pagination"
        :code="codeSnippets.datatableExternalPagination"
      >
        <demo-datatable-external-pagination></demo-datatable-external-pagination>
      </app-card-code>
    </v-col>

    <!-- kitchen sink -->
    <v-col cols="12">
      <app-card-code
        title="Kitchen Sink"
        :code="codeSnippets.datatableKitchenSink"
      >
        <demo-datatable-kitchen-sink></demo-datatable-kitchen-sink>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoDatatableBasic from './demos/DemoDatatableBasic.vue'
import DemoDatatableDense from './demos/DemoDatatableDense.vue'
import DemoDatatableFixedHeader from './demos/DemoDatatableFixedHeader.vue'
import DemoDatatableGrouping from './demos/DemoDatatableGrouping.vue'
import DemoDatatableCellSlot from './demos/DemoDatatableCellSlot.vue'
import DemoDatatableExpandableRows from './demos/DemoDatatableExpandableRows.vue'
import DemoDatatableRowEditingViaDialog from './demos/DemoDatatableRowEditingViaDialog.vue'
import DemoDatatableCellEditingViaDialog from './demos/DemoDatatableCellEditingViaDialog.vue'
import DemoDatatableExternalPagination from './demos/DemoDatatableExternalPagination.vue'
import DemoDatatableKitchenSink from './demos/DemoDatatableKitchenSink.vue'
import DemoDatatableRowSelection from './demos/DemoDatatableRowSelection.vue'

// code
import {
  datatableBasic,
  datatableDense,
  datatableCellSlot,
  datatableFixedHeader,
  datatableGrouping,
  datatableExpandableRows,
  datatableRowEditingViaDialog,
  datatableCellEditingViaDialog,
  datatableExternalPagination,
  datatableKitchenSink,
  datatableRowSelection,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoDatatableBasic,
    DemoDatatableDense,
    DemoDatatableCellSlot,
    DemoDatatableFixedHeader,
    DemoDatatableGrouping,
    DemoDatatableExpandableRows,
    DemoDatatableRowEditingViaDialog,
    DemoDatatableCellEditingViaDialog,
    DemoDatatableExternalPagination,
    DemoDatatableKitchenSink,
    DemoDatatableRowSelection,
  },
  setup() {
    return {
      codeSnippets: {
        datatableBasic,
        datatableDense,
        datatableCellSlot,
        datatableFixedHeader,
        datatableGrouping,
        datatableExpandableRows,
        datatableRowEditingViaDialog,
        datatableCellEditingViaDialog,
        datatableExternalPagination,
        datatableKitchenSink,
        datatableRowSelection,
      },
    }
  },
}
</script>
