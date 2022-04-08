/* eslint-disable no-useless-escape */

export const badgeShowOnHover = `
<template>
  <div class="demo-space-x">
    <v-badge
      :value="showTwitterBadgeOnHover"
      content="3"
      right
      transition="slide-x-transition"
    >
      <v-hover v-model="showTwitterBadgeOnHover">
        <v-icon>
          {{ icons.mdiTwitter }}
        </v-icon>
      </v-hover>
    </v-badge>

    <v-badge
      :value="showInstagramBadgeOnHover"
      content="5"
      right
      transition="scale-transition"
    >
      <v-hover v-model="showInstagramBadgeOnHover">
        <v-icon>
          {{ icons.mdiInstagram }}
        </v-icon>
      </v-hover>
    </v-badge>

    <v-badge
      :value="showWhatsappBadgeOnHover"
      content="1"
      right
      transition="slide-x-transition"
    >
      <v-hover v-model="showWhatsappBadgeOnHover">
        <v-icon>
          {{ icons.mdiWhatsapp }}
        </v-icon>
      </v-hover>
    </v-badge>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiInstagram, mdiTwitter, mdiWhatsapp } from '@mdi/js'

export default {
  setup() {
    const showInstagramBadgeOnHover = ref(false)
    const showTwitterBadgeOnHover = ref(false)
    const showWhatsappBadgeOnHover = ref(false)

    return {
      showInstagramBadgeOnHover,
      showTwitterBadgeOnHover,
      showWhatsappBadgeOnHover,

      // icons
      icons: { mdiInstagram, mdiTwitter, mdiWhatsapp },
    }
  },
}
</script>
`

export const badgeDynamicNotifications = `
<template>
  <div class="d-flex align-center">
    <v-badge
      :content="messages"
      :value="messages"
      color="success"
      overlap
      class="me-10"
    >
      <v-icon large>
        {{ icons.mdiVuetify }}
      </v-icon>
    </v-badge>

    <div class="demo-space-x">
      <v-btn
        color="primary"
        @click="messages++"
      >
        Send Message
      </v-btn>

      <v-btn
        color="error"
        @click="messages = 0"
      >
        Clear Notifications
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mdiVuetify } from '@mdi/js'

export default {
  setup() {
    const messages = 0

    return {
      messages,
      icons: { mdiVuetify },
    }
  },
}
</script>
`

export const badgeStyle = `
<template>
  <div class="demo-space-x">
    <!-- default -->
    <v-badge
      content="1"
      overlap
    >
      <v-btn
        outlined
        color="primary"
      >
        Default
      </v-btn>
    </v-badge>

    <!-- bordered -->
    <v-badge
      content="5"
      bordered
      overlap
    >
      <v-btn
        outlined
        color="primary"
      >
        Border
      </v-btn>
    </v-badge>

    <!-- dot -->
    <v-badge
      dot
      bottom
      overlap
      offset-x="12"
      offset-y="12"
    >
      <v-avatar>
        <v-img src="@/assets/images/avatars/8.png"></v-img>
      </v-avatar>
    </v-badge>
  </div>
</template>
`

export const badgeType = `
<template>
  <div class="demo-space-x">
    <!-- avatar -->
    <v-badge
      avatar
      overlap
    >
      <template #badge>
        <v-avatar size="15">
          <v-icon>
            {{ icons.mdiInformationVariant }}
          </v-icon>
        </v-avatar>
      </template>

      <v-avatar>
        <v-img src="@/assets/images/avatars/1.png"></v-img>
      </v-avatar>
    </v-badge>

    <!-- icon -->
    <v-badge
      :icon="icons.mdiLockOpenOutline"
      overlap
    >
      <v-avatar>
        <v-img src="@/assets/images/avatars/2.png"></v-img>
      </v-avatar>
    </v-badge>

    <!-- tile -->
    <v-badge
      tile
      content="5"
      overlap
    >
      <v-avatar>
        <v-img src="@/assets/images/avatars/3.png"></v-img>
      </v-avatar>
    </v-badge>
  </div>
</template>

<script>
import { mdiLockOpenOutline, mdiInformationVariant } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiLockOpenOutline,
        mdiInformationVariant,
      },
    }
  },
}
</script>
`

export const badgeAvatarStatus = `
<template>
  <div class="demo-space-x">
    <v-badge
      bottom
      color="success"
      overlap
      offset-x="12"
      offset-y="12"
      dot
      bordered
    >
      <v-avatar large>
        <v-img src="@/assets/images/avatars/7.png"></v-img>
      </v-avatar>
    </v-badge>

    <v-badge
      bottom
      color="warning"
      offset-x="12"
      offset-y="12"
      overlap
      dot
      bordered
    >
      <v-avatar large>
        <v-img src="@/assets/images/avatars/6.png"></v-img>
      </v-avatar>
    </v-badge>

    <v-badge
      bottom
      color="error"
      offset-x="12"
      offset-y="12"
      overlap
      dot
      bordered
    >
      <v-avatar large>
        <v-img src="@/assets/images/avatars/5.png"></v-img>
      </v-avatar>
    </v-badge>
  </div>
</template>
`

export const badgeColor = `
<template>
  <div class="demo-space-x">
    <v-badge
      color="primary"
      overlap
      dot
    >
      <v-icon>
        {{ icons.mdiInstagram }}
      </v-icon>
    </v-badge>

    <v-badge
      color="secondary"
      overlap
      dot
    >
      <v-icon>
        {{ icons.mdiInstagram }}
      </v-icon>
    </v-badge>

    <v-badge
      color="success"
      overlap
      dot
    >
      <v-icon>
        {{ icons.mdiInstagram }}
      </v-icon>
    </v-badge>

    <v-badge
      color="info"
      overlap
      dot
    >
      <v-icon>
        {{ icons.mdiInstagram }}
      </v-icon>
    </v-badge>

    <v-badge
      color="warning"
      overlap
      dot
    >
      <v-icon>
        {{ icons.mdiInstagram }}
      </v-icon>
    </v-badge>

    <v-badge
      color="error"
      overlap
      dot
    >
      <v-icon>
        {{ icons.mdiInstagram }}
      </v-icon>
    </v-badge>
  </div>
</template>

<script>
import { mdiInstagram } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiInstagram,
      },
    }
  },
}
</script>
`

export const badgeTabs = `
<template>
  <v-tabs grow>
    <v-tab>
      <v-badge content="3">
        Item One
      </v-badge>
    </v-tab>

    <v-tab>
      <v-badge content="1">
        Item Two
      </v-badge>
    </v-tab>

    <v-tab>
      <v-badge content="2">
        Item Three
      </v-badge>
    </v-tab>
  </v-tabs>
</template>
`

export const badgePosition = `
<template>
  <div class="demo-space-x d-flex flex-wrap">
    <!-- bottom -->
    <div class="me-6">
      <v-badge
        bottom
        overlap
        content="1"
      >
        <v-avatar>
          <v-img src="@/assets/images/avatars/3.png"></v-img>
        </v-avatar>
      </v-badge>
    </div>

    <!-- left -->
    <div class="me-6">
      <v-badge
        left
        overlap
        :icon="icons.mdiBellOutline"
      >
        <v-avatar>
          <v-img src="@/assets/images/avatars/5.png"></v-img>
        </v-avatar>
      </v-badge>
    </div>

    <!-- overlap -->
    <div class="me-6">
      <v-badge
        overlap
        content="3"
      >
        <v-avatar>
          <v-img src="@/assets/images/avatars/8.png"></v-img>
        </v-avatar>
      </v-badge>
    </div>

    <!-- inline -->
    <div>
      <v-badge
        inline
        content="5"
      >
        <v-avatar>
          <v-img src="@/assets/images/avatars/4.png"></v-img>
        </v-avatar>
      </v-badge>
    </div>
  </div>
</template>

<script>
import { mdiBellOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: { mdiBellOutline },
    }
  },
}
</script>
`
