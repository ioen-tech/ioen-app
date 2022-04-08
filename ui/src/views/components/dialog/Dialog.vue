<template>
  <v-row class="match-height">
    <!-- basic -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.dialogBasic"
        class="mb-6"
      >
        <v-card-text>A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.</v-card-text>
        <v-card-text>
          <demo-dialog-basic></demo-dialog-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Persistent -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Persistent"
        :code="codeSnippets.dialogPersistent"
        class="mb-6"
      >
        <v-card-text>
          Use <code>persistent</code> prop to create persistent dialog.
        </v-card-text>

        <v-card-text>
          <demo-dialog-persistent></demo-dialog-persistent>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Scrollable -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Scrollable"
        :code="codeSnippets.dialogScrollable"
        class="mb-6"
      >
        <v-card-text>Use <code>scrollable</code> prop to create scrollable dialog.</v-card-text>

        <v-card-text>
          <demo-dialog-scrollable></demo-dialog-scrollable>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- loader -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Loader"
        :code="codeSnippets.dialogLoader"
        class="mb-6"
      >
        <v-card-text>The <code>v-dialog</code> component makes it easy to create a customized loading experience for your application.</v-card-text>

        <v-card-text>
          <demo-dialog-loader></demo-dialog-loader>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- nesting -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Nesting"
        :code="codeSnippets.dialogNesting"
        class="mb-6"
      >
        <v-card-text>Dialogs can be nested: you can open one dialog from another.</v-card-text>

        <v-card-text>
          <demo-dialog-nesting></demo-dialog-nesting>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- overflow -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Overflowed"
        :code="codeSnippets.dialogOverflowed"
        class="mb-6"
      >
        <v-card-text>
          Modals that do not fit within the available window space will scroll the container.
        </v-card-text>

        <v-card-text>
          <demo-dialog-overflowed></demo-dialog-overflowed>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- full screen -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Fullscreen"
        :code="codeSnippets.dialogFullScreen"
        class="mb-6"
      >
        <v-card-text>
          Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.
        </v-card-text>
        <v-card-text>
          <demo-dialog-full-screen></demo-dialog-full-screen>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- forms -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Form"
        :code="codeSnippets.dialogForm"
      >
        <v-card-text>Just a simple example of a form in a dialog.</v-card-text>

        <v-card-text>
          <demo-dialog-form></demo-dialog-form>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoDialogBasic from './demos/DemoDialogBasic.vue'
import DemoDialogPersistent from './demos/DemoDialogPersistent.vue'
import DemoDialogScrollable from './demos/DemoDialogScrollable.vue'
import DemoDialogLoader from './demos/DemoDialogLoader.vue'
import DemoDialogNesting from './demos/DemoDialogNesting.vue'
import DemoDialogOverflowed from './demos/DemoDialogOverflowed.vue'
import DemoDialogFullScreen from './demos/DemoDialogFullScreen.vue'
import DemoDialogForm from './demos/DemoDialogForm.vue'

// code
import {
  dialogBasic,
  dialogPersistent,
  dialogScrollable,
  dialogLoader,
  dialogNesting,
  dialogOverflowed,
  dialogFullScreen,
  dialogForm,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoDialogBasic,
    DemoDialogPersistent,
    DemoDialogScrollable,
    DemoDialogLoader,
    DemoDialogNesting,
    DemoDialogOverflowed,
    DemoDialogFullScreen,
    DemoDialogForm,
  },
  setup() {
    return {
      codeSnippets: {
        dialogBasic,
        dialogPersistent,
        dialogScrollable,
        dialogLoader,
        dialogNesting,
        dialogOverflowed,
        dialogFullScreen,
        dialogForm,
      },
    }
  },
}
</script>
