<template>
  <div>
    <!-- colors -->
    <app-card-code
      title="Colors"
      :code="codeSnippets.buttonColors"
      class="mb-6"
    >
      <v-card-text>
        <code>color</code> prop is used to change the background color of button.
      </v-card-text>

      <v-card-text>
        <demo-button-colors></demo-button-colors>
      </v-card-text>
    </app-card-code>

    <!-- outlined -->
    <app-card-code
      title="Outlined"
      :code="codeSnippets.buttonOutlined"
      class="mb-6"
    >
      <v-card-text>
        <code>outlined</code> prop is used to create outline buttons.
      </v-card-text>

      <v-card-text>
        <demo-button-outlined></demo-button-outlined>
      </v-card-text>
    </app-card-code>

    <!-- text -->
    <app-card-code
      title="Text"
      :code="codeSnippets.buttonText"
      class="mb-6"
    >
      <v-card-text>
        Use <code>text</code> prop to create text button. Text buttons have no box shadow and no background.
      </v-card-text>

      <v-card-text>
        <demo-button-text></demo-button-text>
      </v-card-text>
    </app-card-code>

    <!-- plain -->
    <app-card-code
      title="Plain"
      :code="codeSnippets.buttonPlain"
      class="mb-6"
    >
      <v-card-text>
        Use <code>plain</code> prop to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.
      </v-card-text>

      <v-card-text>
        <demo-button-plain></demo-button-plain>
      </v-card-text>
    </app-card-code>

    <!-- tile -->
    <app-card-code
      title="Tile"
      :code="codeSnippets.buttonTile"
      class="mb-6"
    >
      <v-card-text>
        Use <code>tile</code> prop to create a tile button. Tile buttons behave the same as regular buttons but have no border radius.
      </v-card-text>

      <v-card-text>
        <demo-button-tile></demo-button-tile>
      </v-card-text>
    </app-card-code>

    <!-- rounded -->
    <app-card-code
      title="Rounded"
      :code="codeSnippets.buttonRounded"
      class="mb-6"
    >
      <v-card-text>
        Use <code>rounded</code> prop to create buttons with rounded edges.
      </v-card-text>

      <v-card-text>
        <demo-button-rounded></demo-button-rounded>
      </v-card-text>
    </app-card-code>

    <!-- depressed -->
    <app-card-code
      title="Depressed"
      :code="codeSnippets.buttonDepressed"
      class="mb-6"
    >
      <v-card-text>
        Use <code>depressed</code> prop to create a depressed button. Depressed button still maintain their background color, but have no box shadow.
      </v-card-text>

      <v-card-text>
        <demo-button-depressed></demo-button-depressed>
      </v-card-text>
    </app-card-code>

    <!-- icon -->
    <app-card-code
      title="Icon"
      :code="codeSnippets.buttonIcon"
      class="mb-6"
    >
      <v-card-text>
        Icons can be used inside of buttons to add emphasis to the action.
      </v-card-text>

      <v-card-text>
        <demo-button-icon></demo-button-icon>
      </v-card-text>
    </app-card-code>

    <!-- icon only -->
    <app-card-code
      title="Icon Only"
      :code="codeSnippets.buttonIconOnly"
      class="mb-6"
    >
      <v-card-text>
        Use <code>icon</code> prop to create button with icon only. This property makes the button rounded and applies the text prop styles.
      </v-card-text>

      <v-card-text>
        <demo-button-icon-only></demo-button-icon-only>
      </v-card-text>
    </app-card-code>

    <!-- sizing -->
    <app-card-code
      title="Sizing"
      :code="codeSnippets.buttonSizing"
      class="mb-6"
    >
      <v-card-text>Buttons can be given different sizing options to fit a multitude of scenarios.</v-card-text>

      <v-card-text>
        <demo-button-sizing></demo-button-sizing>
      </v-card-text>
    </app-card-code>

    <!-- block -->
    <app-card-code
      title="Block Button"
      :code="codeSnippets.buttonBlock"
      class="mb-6"
    >
      <v-card-text><code>block</code> buttons extend the full available width.</v-card-text>

      <v-card-text>
        <demo-button-block></demo-button-block>
      </v-card-text>
    </app-card-code>

    <!-- floating -->
    <app-card-code
      title="Floating"
      :code="codeSnippets.buttonFloating"
      class="mb-6"
    >
      <v-card-text>
        Use <code>fab</code> prop to create a floating button. Floating buttons are rounded and usually contain an icon.
      </v-card-text>

      <v-card-text>
        <demo-button-floating></demo-button-floating>
      </v-card-text>
    </app-card-code>

    <!-- loaders -->
    <app-card-code
      title="Loaders"
      :code="codeSnippets.buttonLoaders"
      class="mb-6"
    >
      <v-card-text>
        Using the <code>loading</code> prop, you can notify a user that there is processing taking place. The default behavior is to use a <code>v-progress-circular</code> component but this can be customized.
      </v-card-text>

      <v-card-text>
        <demo-button-loaders></demo-button-loaders>
      </v-card-text>
    </app-card-code>

    <!-- router -->
    <app-card-code
      title="Router"
      :code="codeSnippets.buttonRouter"
      class="mb-6"
    >
      <v-card-text>
        Use <code>to</code> prop to create button with router support.
      </v-card-text>

      <v-card-text>
        <v-alert
          color="warning"
          text
          class="mb-0"
        >
          Note: Onclick of the Link button will redirect you to another page.
        </v-alert>
      </v-card-text>

      <v-card-text>
        <demo-button-router></demo-button-router>
      </v-card-text>
    </app-card-code>

    <!-- link -->
    <app-card-code
      title="Link"
      :code="codeSnippets.buttonLink"
      class="mb-6"
    >
      <v-card-text>
        Designates that the component is a link. This is automatic when using the <code>href</code> or <code>to</code> prop.
      </v-card-text>

      <v-card-text>
        <v-alert
          text
          color="warning"
          dark
          class="mb-0"
        >
          Note: Onclick of the Link button will redirect you to another page.
        </v-alert>
      </v-card-text>
      <v-card-text>
        <demo-button-link></demo-button-link>
      </v-card-text>
    </app-card-code>

    <!-- group -->
    <app-card-code
      title="Group Button"
      :code="codeSnippets.buttonGroup"
      class="mb-6"
    >
      <v-card-text>
        Wrap buttons with the <code>v-btn-toggle</code> component to create a group button. <code>v-btn-toggle</code> with the <code>mandatory</code> prop will always have a value.
      </v-card-text>

      <v-card-text>
        <demo-button-group></demo-button-group>
      </v-card-text>
    </app-card-code>

    <!-- speed dial -->
    <app-card-code
      title="Speed dial"
      :code="codeSnippets.buttonSpeedDial"
    >
      <v-card-text>
        The speed-dial component has an very robust api for customizing your FAB experience exactly how you want.
      </v-card-text>

      <v-card-text>
        <demo-button-speed-dial></demo-button-speed-dial>
      </v-card-text>
    </app-card-code>
  </div>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoButtonColors from './demos/DemoButtonColors.vue'
import DemoButtonOutlined from './demos/DemoButtonOutlined.vue'
import DemoButtonText from './demos/DemoButtonText.vue'
import DemoButtonRounded from './demos/DemoButtonRounded.vue'
import DemoButtonIcon from './demos/DemoButtonIcon.vue'
import DemoButtonIconOnly from './demos/DemoButtonIconOnly.vue'
import DemoButtonSizing from './demos/DemoButtonSizing.vue'
import DemoButtonGroup from './demos/DemoButtonGroup.vue'
import DemoButtonRouter from './demos/DemoButtonRouter.vue'
import DemoButtonLink from './demos/DemoButtonLink.vue'
import DemoButtonBlock from './demos/DemoButtonBlock.vue'
import DemoButtonFloating from './demos/DemoButtonFloating.vue'
import DemoButtonDepressed from './demos/DemoButtonDepressed.vue'
import DemoButtonLoaders from './demos/DemoButtonLoaders.vue'
import DemoButtonPlain from './demos/DemoButtonPlain.vue'
import DemoButtonTile from './demos/DemoButtonTile.vue'
import DemoButtonSpeedDial from './demos/DemoButtonSpeedDial.vue'

// code
import {
  buttonColors,
  buttonOutlined,
  buttonText,
  buttonRounded,
  buttonIcon,
  buttonIconOnly,
  buttonSizing,
  buttonGroup,
  buttonRouter,
  buttonLink,
  buttonBlock,
  buttonFloating,
  buttonDepressed,
  buttonLoaders,
  buttonPlain,
  buttonTile,
  buttonSpeedDial,
} from './demos/code'

export default {
  components: {
    AppCardCode,

    // demos
    DemoButtonColors,
    DemoButtonOutlined,
    DemoButtonText,
    DemoButtonRounded,
    DemoButtonIcon,
    DemoButtonIconOnly,
    DemoButtonSizing,
    DemoButtonGroup,
    DemoButtonRouter,
    DemoButtonLink,
    DemoButtonBlock,
    DemoButtonFloating,
    DemoButtonDepressed,
    DemoButtonLoaders,
    DemoButtonPlain,
    DemoButtonTile,
    DemoButtonSpeedDial,
  },
  setup() {
    return {
      codeSnippets: {
        buttonColors,
        buttonOutlined,
        buttonText,
        buttonRounded,
        buttonIcon,
        buttonIconOnly,
        buttonSizing,
        buttonGroup,
        buttonRouter,
        buttonLink,
        buttonBlock,
        buttonFloating,
        buttonDepressed,
        buttonLoaders,
        buttonPlain,
        buttonTile,
        buttonSpeedDial,
      },
    }
  },
}
</script>
