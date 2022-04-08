/* eslint-disable no-useless-escape */

export const avatarInitials = `
<template>
  <div class="demo-space-x">
    <v-avatar
      color="primary"
      class="v-avatar-light-bg primary--text"
      size="40"
    >
      <span class="text-lg">PI</span>
    </v-avatar>
    <v-avatar
      color="secondary"
      class="v-avatar-light-bg secondary--text"
      size="40"
    >
      <span class="text-lg">SE</span>
    </v-avatar>
    <v-avatar
      color="success"
      class="v-avatar-light-bg success--text"
      size="40"
    >
      <span class="text-lg">SU</span>
    </v-avatar>
    <v-avatar
      color="info"
      class="v-avatar-light-bg info--text"
      size="40"
    >
      <span class="text-lg">IN</span>
    </v-avatar>
    <v-avatar
      color="warning"
      class="v-avatar-light-bg warning--text"
      size="40"
    >
      <span class="text-lg">WA</span>
    </v-avatar>
    <v-avatar
      color="error"
      class="v-avatar-light-bg error--text"
      size="40"
    >
      <span class="text-lg">ER</span>
    </v-avatar>
  </div>
</template>
`

export const avatarRounded = `
<template>
  <div class="demo-space-x">
    <v-avatar
      rounded
      size="35"
      color="primary"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      rounded
      size="35"
      color="secondary"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      rounded
      size="35"
      color="success"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      rounded
      size="35"
      color="info"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      rounded
      size="35"
      color="warning"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      rounded
      size="35"
      color="error"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
    </v-avatar>
  </div>
</template>

<script>
import { mdiAccountOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiAccountOutline,
      },
    }
  },
}
</script>
`

export const avatarTile = `
<template>
  <div class="demo-space-x">
    <v-avatar
      tile
      size="35"
      color="primary"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAlertOctagramOutline }}
      </v-icon>
    </v-avatar>
    <v-avatar
      tile
      size="35"
      color="secondary"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAlarm }}
      </v-icon>
    </v-avatar>
    <v-avatar
      tile
      size="35"
      color="success"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiPlayBoxOutline }}
      </v-icon>
    </v-avatar>
    <v-avatar
      tile
      size="35"
      color="info"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiWifi }}
      </v-icon>
    </v-avatar>
    <v-avatar
      tile
      size="35"
      color="warning"
    >
      <v-icon
        color="white"
        size="25"
      >
        {{ icons.mdiAlertOutline }}
      </v-icon>
    </v-avatar>
    <v-avatar
      tile
      size="35"
      color="error"
    >
      <v-icon
        size="25"
        color="white"
      >
        {{ icons.mdiAlertCircleOutline }}
      </v-icon>
    </v-avatar>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiAlertOctagramOutline, mdiAlarm, mdiPlayBoxOutline, mdiWifi, mdiAlertOutline, mdiAlertCircleOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiAlertOctagramOutline,
        mdiAlarm,
        mdiPlayBoxOutline,
        mdiWifi,
        mdiAlertOutline,
        mdiAlertCircleOutline,
      },
    }
  },
}
</script>
`

export const avatarGroup = `
<template>
  <div
    class="v-avatar-group"
    :class="rootThemeClasses"
  >
    <v-avatar>
      <v-img src="@/assets/images/avatars/1.png"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img src="@/assets/images/avatars/2.png"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img src="@/assets/images/avatars/3.png"></v-img>
    </v-avatar>
    <v-avatar>
      <v-img src="@/assets/images/avatars/4.png"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img src="@/assets/images/avatars/5.png"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img src="@/assets/images/avatars/6.png"></v-img>
    </v-avatar>
  </div>
</template>

<script>
import useVuetify from '@core/utils/vuetify'

export default {
  setup() {
    const { rootThemeClasses } = useVuetify()

    return {
      rootThemeClasses,
    }
  },
}
</script>
`

export const avatarIcons = `
<template>
  <div class="demo-space-x">
    <v-avatar
      size="35"
      color="primary"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiHomeOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      size="35"
      color="secondary"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiCloudOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      size="35"
      color="success"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiBellOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      size="35"
      color="info"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      size="35"
      color="warning"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiAlertOutline }}
      </v-icon>
    </v-avatar>

    <v-avatar
      size="35"
      color="error"
    >
      <v-icon
        color="white"
        size="18"
      >
        {{ icons.mdiMessageOutline }}
      </v-icon>
    </v-avatar>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiHomeOutline, mdiBellOutline, mdiAccountOutline, mdiMessageOutline, mdiCloudOutline, mdiAlertOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiHomeOutline,
        mdiBellOutline,
        mdiAccountOutline,
        mdiMessageOutline,
        mdiCloudOutline,
        mdiAlertOutline,
      },
    }
  },
}
</script>
`

export const avatarColors = `
<template>
  <div class="demo-space-x">
    <v-avatar
      color="primary"
      size="40"
    >
      <span class="text-lg white--text">PI</span>
    </v-avatar>
    <v-avatar
      color="secondary"
      size="40"
    >
      <span class="text-lg white--text">SE</span>
    </v-avatar>
    <v-avatar
      color="success"
      size="40"
    >
      <span class="text-lg white--text">SU</span>
    </v-avatar>
    <v-avatar
      color="info"
      size="40"
    >
      <span class="text-lg white--text">IN</span>
    </v-avatar>
    <v-avatar
      color="warning"
      size="40"
    >
      <span class="text-lg white--text">WA</span>
    </v-avatar>
    <v-avatar
      color="error"
      size="40"
    >
      <span class="text-lg white--text">ER</span>
    </v-avatar>
  </div>
</template>
`

export const avatarSizes = `
<template>
  <div class="demo-space-x">
    <v-avatar
      color="primary"
      size="21"
      class="d-inline-flex align-center"
    >
      <small class="white--text">PI</small>
    </v-avatar>

    <v-avatar
      color="secondary"
      size="35"
    >
      <span class="white--text">PI</span>
    </v-avatar>

    <v-avatar
      color="success"
      size="49"
    >
      <span class="white--text text-2xl">
        PI
      </span>
    </v-avatar>
    <v-avatar
      color="error"
      size="70"
    >
      <span class="white--text text-4xl">
        PI
      </span>
    </v-avatar>
  </div>
</template>
`

export const avatarImages = `
<template>
  <div class="demo-space-x">
    <v-avatar>
      <v-img src="@/assets/images/avatars/1.png"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img src="@/assets/images/avatars/2.png"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img src="@/assets/images/avatars/3.png"></v-img>
    </v-avatar>
    <v-avatar>
      <v-img src="@/assets/images/avatars/4.png"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img src="@/assets/images/avatars/5.png"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img src="@/assets/images/avatars/6.png"></v-img>
    </v-avatar>
  </div>
</template>
`
