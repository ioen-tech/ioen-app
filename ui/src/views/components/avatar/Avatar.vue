<template>
  <v-row class="match-height">
    <!-- colors -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Colors"
        :code="codeSnippets.avatarColors"
        class="mb-6"
      >
        <v-card-text>
          Use <code>color</code> prop to change the background color of avatar.
        </v-card-text>
        <v-card-text>
          <demo-avatar-colors></demo-avatar-colors>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Avatar Initials -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Avatar Initials"
        :code="codeSnippets.avatarInitials"
      >
        <v-card-text>
          Use <code>v-avatar-light-bg</code> with text color class for avatar initials.
        </v-card-text>

        <v-card-text>
          <demo-avatar-initials></demo-avatar-initials>
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
        :code="codeSnippets.avatarSizes"
        class="mb-6"
      >
        <v-card-text>
          The size <code>prop</code> allows you to define the height and width of <code>v-avatar</code>.
        </v-card-text>
        <v-card-text>
          <demo-avatar-sizes></demo-avatar-sizes>
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
        :code="codeSnippets.avatarIcons"
        class="mb-6"
      >
        <v-card-text>
          The <code>v-avatar</code> default slot will accept the <code>v-icon</code> component, an image, or text. Mix and match these with other props to create something unique.
        </v-card-text>

        <v-card-text>
          <demo-avatar-icons></demo-avatar-icons>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- rounded -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Rounded"
        :code="codeSnippets.avatarRounded"
        class="mb-6"
      >
        <v-card-text>
          Use <code>rounded</code> prop to create a rounded border avatar.
        </v-card-text>

        <v-card-text>
          <demo-avatar-rounded></demo-avatar-rounded>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- tile -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Tile"
        :code="codeSnippets.avatarTile"
        class="mb-6"
      >
        <v-card-text>
          The <code>tile</code> prop removes the border radius from v-avatar leaving you with a simple square avatar.
        </v-card-text>
        <v-card-text>
          <demo-avatar-tile></demo-avatar-tile>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- actionable avatar -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Avatar Images"
        :code="codeSnippets.avatarImages"
      >
        <v-card-text>
          The <code>v-avatar</code> default slot will accept the <code>v-img</code> components.
        </v-card-text>

        <v-card-text>
          <demo-avatar-images></demo-avatar-images>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Avatar Group -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Avatar Group"
        :code="codeSnippets.avatarGroup"
      >
        <v-card-text>
          Use <code>v-avatar-group</code> class along with <code>rootThemeClasses</code> for avatar group
        </v-card-text>

        <v-card-text>
          <demo-avatar-group></demo-avatar-group>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoAvatarColors from './demos/DemoAvatarColors.vue'
import DemoAvatarInitials from './demos/DemoAvatarInitials.vue'
import DemoAvatarSizes from './demos/DemoAvatarSizes.vue'
import DemoAvatarIcons from './demos/DemoAvatarIcons.vue'
import DemoAvatarRounded from './demos/DemoAvatarRounded.vue'
import DemoAvatarTile from './demos/DemoAvatarTile.vue'
import DemoAvatarImages from './demos/DemoAvatarImages.vue'
import DemoAvatarGroup from './demos/DemoAvatarGroup.vue'

// code
// eslint-disable-next-line object-curly-newline
import {
  avatarColors,
  avatarInitials,
  avatarSizes,
  avatarIcons,
  avatarRounded,
  avatarTile,
  avatarImages,
  avatarGroup,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoAvatarColors,
    DemoAvatarInitials,
    DemoAvatarSizes,
    DemoAvatarIcons,
    DemoAvatarRounded,
    DemoAvatarTile,
    DemoAvatarImages,
    DemoAvatarGroup,
  },
  setup() {
    return {
      codeSnippets: {
        avatarColors,
        avatarSizes,
        avatarIcons,
        avatarRounded,
        avatarTile,
        avatarImages,
        avatarInitials,
        avatarGroup,
      },
    }
  },
}
</script>
