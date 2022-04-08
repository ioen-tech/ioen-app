<template>
  <v-row class="match-height">
    <v-col
      md="6"
      cols="12"
    >
      <!-- style -->
      <app-card-code
        title="Style"
        :code="codeSnippets.badgeStyle"
      >
        <v-card-text>
          The badge has different style <code>default</code>, <code>border</code>, <code>dot</code>.
        </v-card-text>

        <v-card-text>
          <demo-badge-style></demo-badge-style>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      md="6"
      cols="12"
    >
      <!-- color -->
      <app-card-code
        title="Color"
        :code="codeSnippets.badgeColor"
      >
        <v-card-text>
          Use <code>color</code> prop to create various background badges.
        </v-card-text>

        <v-card-text>
          <demo-badge-color></demo-badge-color>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      md="6"
      cols="12"
    >
      <!-- position -->
      <app-card-code
        title="Position"
        :code="codeSnippets.badgePosition"
      >
        <v-card-text>
          The badge has different positions <code>bottom</code>, <code>left</code>, <code>overlap</code>, <code>inline</code>.
        </v-card-text>

        <v-card-text>
          <demo-badge-position></demo-badge-position>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      md="6"
      cols="12"
    >
      <!-- type -->
      <app-card-code
        title="Type"
        :code="codeSnippets.badgeType"
      >
        <v-card-text>
          The badge has different type <code>avatar</code>, <code>icon</code>, <code>tile</code>.
        </v-card-text>

        <v-card-text>
          <demo-badge-type></demo-badge-type>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      md="6"
      cols="12"
    >
      <!-- Avatar Status -->
      <app-card-code
        title="Avatar Status"
        :code="codeSnippets.badgeAvatarStatus"
      >
        <v-card-text>
          You can use badge with avatar as status.
        </v-card-text>

        <v-card-text>
          <demo-badge-avatar-status></demo-badge-avatar-status>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      md="6"
      cols="12"
    >
      <!-- dynamic notifications -->
      <app-card-code
        title="Dynamic notifications"
        :code="codeSnippets.badgeDynamicNotifications"
      >
        <v-card-text>
          You can incorporate badges with dynamic content to make things such as a notification system.
        </v-card-text>

        <v-card-text>
          <demo-badge-dynamic-notifications></demo-badge-dynamic-notifications>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      md="6"
      cols="12"
    >
      <!-- hover -->
      <app-card-code
        title="Show on hover"
        :code="codeSnippets.badgeShowOnHover"
      >
        <v-card-text>
          You can do many things with visibility control, for example, show badge on hover.
        </v-card-text>

        <v-card-text>
          <demo-badge-show-on-hover></demo-badge-show-on-hover>
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col
      md="6"
      cols="12"
    >
      <!-- badge with tabs -->
      <app-card-code
        title="Tabs"
        :code="codeSnippets.badgeTabs"
      >
        <v-card-text>
          Badges help convey information to the user in a variety of ways.
        </v-card-text>

        <v-card-text>
          <demo-badge-tabs></demo-badge-tabs>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoBadgePosition from './demos/DemoBadgePosition.vue'
import DemoBadgeStyle from './demos/DemoBadgeStyle.vue'
import DemoBadgeType from './demos/DemoBadgeType.vue'
import DemoBadgeColor from './demos/DemoBadgeColor.vue'
import DemoBadgeShowOnHover from './demos/DemoBadgeShowOnHover.vue'
import DemoBadgeDynamicNotifications from './demos/DemoBadgeDynamicNotifications.vue'
import DemoBadgeTabs from './demos/DemoBadgeTabs.vue'
import DemoBadgeAvatarStatus from './demos/DemoBadgeAvatarStatus.vue'

// code
import {
  badgePosition,
  badgeStyle,
  badgeType,
  badgeColor,
  badgeShowOnHover,
  badgeDynamicNotifications,
  badgeTabs,
  badgeAvatarStatus,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoBadgePosition,
    DemoBadgeStyle,
    DemoBadgeType,
    DemoBadgeColor,
    DemoBadgeShowOnHover,
    DemoBadgeDynamicNotifications,
    DemoBadgeTabs,
    DemoBadgeAvatarStatus,
  },
  setup() {
    return {
      codeSnippets: {
        badgePosition,
        badgeStyle,
        badgeType,
        badgeColor,
        badgeShowOnHover,
        badgeDynamicNotifications,
        badgeTabs,
        badgeAvatarStatus,
      },
    }
  },
}
</script>
