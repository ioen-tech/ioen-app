<template>
  <v-row>
    <!-- basic -->
    <v-col cols="12">
      <app-card-code
        title="Basic"
        :code="codeSnippets.simpleTableBasic"
      >
        <demo-simple-table-basic></demo-simple-table-basic>
      </app-card-code>
    </v-col>

    <!-- dark -->
    <v-col cols="12">
      <app-card-code
        title="Dark"
        :code="codeSnippets.simpleTableDark"
      >
        <v-card-text>
          Use <code>dark</code> prop to switch table to the dark theme.
        </v-card-text>
        <demo-simple-table-dark></demo-simple-table-dark>
      </app-card-code>
    </v-col>

    <!-- Dense -->
    <v-col cols="12">
      <app-card-code
        title="Dense"
        :code="codeSnippets.simpleTableDense"
      >
        <v-card-text>
          You can show a dense version of the table by using the <code>dense</code> prop.
        </v-card-text>
        <demo-simple-table-dense></demo-simple-table-dense>
      </app-card-code>
    </v-col>

    <!-- height -->
    <v-col cols="12">
      <app-card-code
        title="Height"
        :code="codeSnippets.simpleTableHeight"
      >
        <v-card-text>
          Use the <code>height</code> prop to set the height of the table.
        </v-card-text>
        <demo-simple-table-height></demo-simple-table-height>
      </app-card-code>
    </v-col>

    <!-- fixed header -->
    <v-col cols="12">
      <app-card-code
        title="Fixed header"
        :code="codeSnippets.simpleTableHeight"
      >
        <v-card-text>
          Use the <code>fixed-header</code> prop together with the <code>height</code> prop to fix the header to the top of the table.
        </v-card-text>

        <demo-simple-table-fixed-header></demo-simple-table-fixed-header>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoSimpleTableBasic from './demos/DemoSimpleTableBasic.vue'
import DemoSimpleTableDark from './demos/DemoSimpleTableDark.vue'
import DemoSimpleTableDense from './demos/DemoSimpleTableDense.vue'
import DemoSimpleTableHeight from './demos/DemoSimpleTableHeight.vue'
import DemoSimpleTableFixedHeader from './demos/DemoSimpleTableFixedHeader.vue'

// code
// eslint-disable-next-line object-curly-newline
import { simpleTableBasic, simpleTableDark, simpleTableDense, simpleTableHeight } from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoSimpleTableBasic,
    DemoSimpleTableDark,
    DemoSimpleTableDense,
    DemoSimpleTableHeight,
    DemoSimpleTableFixedHeader,
  },
  setup() {
    return {
      codeSnippets: {
        simpleTableBasic,
        simpleTableDark,
        simpleTableDense,
        simpleTableHeight,
      },
    }
  },
}
</script>
