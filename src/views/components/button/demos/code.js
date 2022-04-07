/* eslint-disable no-useless-escape */

export const buttonGroup = `
<template>
  <v-btn-toggle
    v-model="toggleExclusive"
    mandatory
  >
    <v-btn depressed>
      <v-icon>{{ icons.mdiFormatAlignLeft }}</v-icon>
    </v-btn>
    <v-btn depressed>
      <v-icon>{{ icons.mdiFormatAlignCenter }}</v-icon>
    </v-btn>
    <v-btn depressed>
      <v-icon>{{ icons.mdiFormatAlignRight }}</v-icon>
    </v-btn>
    <v-btn depressed>
      <v-icon>{{ icons.mdiFormatAlignJustify }}</v-icon>
    </v-btn>
  </v-btn-toggle>
</template>

<script>
import { ref } from '@vue/composition-api'
// eslint-disable-next-line object-curly-newline
import { mdiFormatAlignLeft, mdiFormatAlignCenter, mdiFormatAlignRight, mdiFormatAlignJustify } from '@mdi/js'

export default {
  setup() {
    const toggleExclusive = ref(undefined)

    return {
      toggleExclusive,

      // icon
      icons: {
        mdiFormatAlignLeft,
        mdiFormatAlignCenter,
        mdiFormatAlignRight,
        mdiFormatAlignJustify,
      },
    }
  },
}
</script>
`

export const buttonLoaders = `
<template>
  <div class="demo-space-x">
    <v-btn
      :loading="loadings.loading1"
      :disabled="loadings.loading1"
      color="primary"
      @click="triggerLoading('loading1')"
    >
      Accept Terms
    </v-btn>

    <v-btn
      :loading="loadings.loading2"
      :disabled="loadings.loading2"
      color="secondary"
      class="white--text"
      @click="triggerLoading('loading2')"
    >
      Upload
      <v-icon
        right
        dark
      >
        {{ icons.mdiCloudUploadOutline }}
      </v-icon>
    </v-btn>

    <v-btn
      :loading="loadings.loading3"
      :disabled="loadings.loading3"
      color="success"
      @click="triggerLoading('loading3')"
    >
      Custom Loader
      <template #loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    <v-btn
      :loading="loadings.loading4"
      :disabled="loadings.loading4"
      color="info"
      @click="triggerLoading('loading4')"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <v-icon light>{{ icons.mdiCached }}</v-icon>
        </span>
      </template>
    </v-btn>

    <v-btn
      :loading="loadings.loading5"
      :disabled="loadings.loading5"
      color="warning"
      class="white--text"
      fab
      @click="triggerLoading('loading5')"
    >
      <v-icon dark>
        {{ icons.mdiCloudUploadOutline }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiCloudUploadOutline, mdiCached } from '@mdi/js'

export default {
  setup() {
    const loadings = ref({
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
    })

    const triggerLoading = loadingIndex => {
      loadings.value[loadingIndex] = true

      setTimeout(() => {
        loadings.value[loadingIndex] = false
      }, 3000)
    }

    return {
      loadings,
      triggerLoading,

      // icon
      icons: { mdiCloudUploadOutline, mdiCached },
    }
  },

  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => {
        this[l] = false
      }, 3000)

      this.loader = null
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}

@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
`

export const buttonOutlined = `
<template>
  <div class="demo-space-x">
    <v-btn
      outlined
      color="primary"
    >
      Primary
    </v-btn>
    <v-btn
      outlined
      color="secondary"
    >
      Secondary
    </v-btn>
    <v-btn
      outlined
      color="success"
    >
      Success
    </v-btn>
    <v-btn
      outlined
      color="info"
    >
      Info
    </v-btn>
    <v-btn
      outlined
      color="warning"
    >
      Warning
    </v-btn>
    <v-btn
      outlined
      color="error"
    >
      Error
    </v-btn>
  </div>
</template>
`

export const buttonIconOnly = `
<template>
  <div class="demo-space-x">
    <v-btn
      icon
      color="primary"
    >
      <v-icon>
        {{ icons.mdiBriefcaseDownloadOutline }}
      </v-icon>
    </v-btn>

    <v-btn
      icon
      color="secondary"
    >
      <v-icon>
        {{ icons.mdiAccountPlusOutline }}
      </v-icon>
    </v-btn>

    <v-btn
      icon
      color="success"
    >
      <v-icon>{{ icons.mdiMagnify }}</v-icon>
    </v-btn>

    <v-btn
      icon
      color="info"
    >
      <v-icon>{{ icons.mdiThumbUpOutline }}</v-icon>
    </v-btn>

    <v-btn
      icon
      color="warning"
    >
      <v-icon>{{ icons.mdiStarOutline }}</v-icon>
    </v-btn>

    <v-btn
      icon
      color="error"
    >
      <v-icon>{{ icons.mdiHeartOutline }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiBriefcaseDownloadOutline, mdiAccountPlusOutline, mdiMagnify, mdiHeartOutline, mdiStarOutline, mdiThumbUpOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiBriefcaseDownloadOutline,
        mdiAccountPlusOutline,
        mdiMagnify,
        mdiHeartOutline,
        mdiStarOutline,
        mdiThumbUpOutline,
      },
    }
  },
}
</script>
`

export const buttonText = `
<template>
  <div class="demo-space-x">
    <v-btn
      text
      color="primary"
    >
      Primary
    </v-btn>
    <v-btn
      text
      color="secondary"
    >
      Secondary
    </v-btn>
    <v-btn
      text
      color="success"
    >
      Success
    </v-btn>
    <v-btn
      text
      color="info"
    >
      Info
    </v-btn>
    <v-btn
      text
      color="warning"
    >
      Warning
    </v-btn>
    <v-btn
      text
      color="error"
    >
      Error
    </v-btn>
  </div>
</template>
`

export const buttonDepressed = `
<template>
  <div class="demo-space-x">
    <v-btn
      depressed
      color="primary"
    >
      primary
    </v-btn>

    <v-btn
      depressed
      color="secondary"
    >
      Secondary
    </v-btn>

    <v-btn
      depressed
      color="success"
    >
      Success
    </v-btn>

    <v-btn
      color="info"
      depressed
    >
      Info
    </v-btn>

    <v-btn
      color="warning"
      depressed
    >
      Warning
    </v-btn>

    <v-btn
      color="error"
      depressed
    >
      Error
    </v-btn>
  </div>
</template>
`

export const buttonRounded = `
<template>
  <div class="demo-space-x">
    <v-btn
      rounded
      color="primary"
    >
      Primary
    </v-btn>
    <v-btn
      rounded
      color="secondary"
    >
      Secondary
    </v-btn>
    <v-btn
      rounded
      color="success"
    >
      Success
    </v-btn>
    <v-btn
      rounded
      color="info"
    >
      Info
    </v-btn>
    <v-btn
      rounded
      color="warning"
    >
      Warning
    </v-btn>
    <v-btn
      rounded
      color="error"
    >
      Error
    </v-btn>
  </div>
</template>
`

export const buttonPlain = `
<template>
  <div class="demo-space-x">
    <v-btn
      color="primary"
      plain
    >
      Primary
    </v-btn>

    <v-btn
      color="secondary"
      plain
    >
      Secondary
    </v-btn>

    <v-btn
      color="success"
      plain
    >
      Success
    </v-btn>

    <v-btn
      color="info"
      plain
    >
      Info
    </v-btn>

    <v-btn
      color="warning"
      plain
    >
      warning
    </v-btn>

    <v-btn
      color="error"
      plain
    >
      error
    </v-btn>
  </div>
</template>
`

export const buttonIcon = `
<template>
  <div class="demo-space-x">
    <v-btn
      color="primary"
      dark
    >
      Accept
      <v-icon
        dark
        right
      >
        {{ icons.mdiCheckboxMarkedCircleOutline }}
      </v-icon>
    </v-btn>

    <v-btn
      color="secondary"
      dark
    >
      <v-icon
        dark
        left
      >
        {{ icons.mdiMinusCircleOutline }}
      </v-icon>Cancel
    </v-btn>

    <v-btn
      color="success"
      dark
    >
      Upload
      <v-icon
        dark
        right
      >
        {{ icons.mdiCloudUploadOutline }}
      </v-icon>
    </v-btn>

    <v-btn
      color="info"
      dark
    >
      <v-icon
        dark
        left
      >
        {{ icons.mdiArrowLeft }}
      </v-icon>Back
    </v-btn>

    <v-btn
      color="warning"
      dark
    >
      <v-icon dark>
        {{ icons.mdiWrenchOutline }}
      </v-icon>
    </v-btn>

    <v-btn
      color="error"
      dark
    >
      <v-icon dark>
        {{ icons.mdiCancel }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import {
  mdiCheckboxMarkedCircleOutline,
  mdiCancel,
  mdiMinusCircleOutline,
  mdiArrowLeft,
  mdiWrenchOutline,
  mdiCloudUploadOutline,
} from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiCheckboxMarkedCircleOutline,
        mdiCancel,
        mdiMinusCircleOutline,
        mdiArrowLeft,
        mdiWrenchOutline,
        mdiCloudUploadOutline,
      },
    }
  },
}
</script>
`

export const buttonTile = `
<template>
  <div class="demo-space-x">
    <v-btn
      tile
      color="primary"
    >
      Primary
    </v-btn>
    <v-btn
      tile
      color="secondary"
    >
      Secondary
    </v-btn>
    <v-btn
      tile
      color="success"
    >
      Success
    </v-btn>
    <v-btn
      tile
      color="info"
    >
      Info
    </v-btn>
    <v-btn
      tile
      color="warning"
    >
      Warning
    </v-btn>
    <v-btn
      tile
      color="error"
    >
      Error
    </v-btn>
  </div>
</template>
`

export const buttonRouter = `
<template>
  <div class="demo-space-x">
    <v-btn
      color="primary"
      to="alert"
    >
      String Literal
    </v-btn>

    <v-btn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </v-btn>

    <v-btn
      color="success"
      :to="{ name: 'alert'}"
    >
      Named Router
    </v-btn>

    <v-btn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </v-btn>
  </div>
</template>
`

export const buttonLink = `
<template>
  <div class="demo-space-x">
    <v-btn
      href="https://themeselection.com/"
      color="primary"
    >
      String Literal
    </v-btn>
    <v-btn
      href="https://themeselection.com/"
      color="primary"
      target="_blank"
    >
      Open New Tab
    </v-btn>
  </div>
</template>
`

export const buttonSpeedDial = `
<template>
  <div id="create">
    <v-speed-dial
      v-model="fab"
      direction="right"
      bottom
      left
      open-on-hover
      transition="scale-transition"
    >
      <template #activator>
        <v-btn
          v-model="fab"
          color="primary"
          dark
          fab
        >
          <v-icon v-if="fab">
            {{ icons.mdiClose }}
          </v-icon>
          <v-icon v-else>
            {{ icons.mdiAccountCircleOutline }}
          </v-icon>
        </v-btn>
      </template>

      <v-btn
        fab
        dark
        small
        color="success"
      >
        <v-icon>{{ icons.mdiPencil }}</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="info"
      >
        <v-icon>{{ icons.mdiPlus }}</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="error"
      >
        <v-icon>{{ icons.mdiDeleteOutline }}</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
// eslint-disable-next-line object-curly-newline
import { mdiClose, mdiAccountCircleOutline, mdiPencil, mdiPlus, mdiDeleteOutline } from '@mdi/js'

export default {
  setup() {
    const fab = ref(false)

    return {
      fab,
      icons: {
        mdiClose,
        mdiAccountCircleOutline,
        mdiPencil,
        mdiPlus,
        mdiDeleteOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
/* This is for demo purposes and will not be needed in your application */
#create {
  height: 40px;
}
#create .v-speed-dial {
  position: absolute;
  top: 90px;
}

#create .v-btn--floating {
  position: relative;
}
</style>
`

export const buttonColors = `
<template>
  <div class="demo-space-x">
    <v-btn color="primary">
      Primary
    </v-btn>
    <v-btn color="secondary">
      Secondary
    </v-btn>
    <v-btn color="success">
      Success
    </v-btn>
    <v-btn color="info">
      Info
    </v-btn>
    <v-btn color="warning">
      Warning
    </v-btn>
    <v-btn color="error">
      Error
    </v-btn>
  </div>
</template>
`

export const buttonSizing = `
<template>
  <div class="demo-space-x">
    <v-btn
      x-large
      color="primary"
      dark
    >
      Extra large Button
    </v-btn>
    <v-btn
      color="success"
      dark
      large
    >
      Large Button
    </v-btn>
    <v-btn
      color="info"
      dark
    >
      Normal Button
    </v-btn>
    <v-btn
      small
      color="warning"
      dark
    >
      Small Button
    </v-btn>
    <v-btn
      x-small
      color="error"
    >
      Extra small Button
    </v-btn>
  </div>
</template>
`

export const buttonBlock = `
<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-btn
        color="primary"
        block
      >
        Block Button
      </v-btn>
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-btn
        outlined
        color="primary"
        block
      >
        Block Button
      </v-btn>
    </v-col>
  </v-row>
</template>
`

export const buttonFloating = `
<template>
  <div class="demo-space-x">
    <v-btn
      fab
      dark
      small
      color="primary"
    >
      <v-icon dark>
        {{ icons.mdiMinus }}
      </v-icon>
    </v-btn>

    <v-btn
      fab
      dark
      small
      color="secondary"
    >
      <v-icon dark>
        {{ icons.mdiAccountCircleOutline }}
      </v-icon>
    </v-btn>

    <v-btn
      fab
      dark
      color="success"
    >
      <v-icon dark>
        {{ icons.mdiPlus }}
      </v-icon>
    </v-btn>

    <v-btn
      fab
      dark
      color="info"
    >
      <v-icon dark>
        {{ icons.mdiFormatListBulletedSquare }}
      </v-icon>
    </v-btn>

    <v-btn
      fab
      dark
      large
      color="warning"
    >
      <v-icon dark>
        {{ icons.mdiGreasePencil }}
      </v-icon>
    </v-btn>

    <v-btn
      fab
      dark
      large
      color="error"
    >
      <v-icon dark>
        {{ icons.mdiAndroidDebugBridge }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import {
  mdiMinus,
  mdiAccountCircleOutline,
  mdiPlus,
  mdiFormatListBulletedSquare,
  mdiGreasePencil,
  mdiAndroidDebugBridge,
} from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiMinus,
        mdiAccountCircleOutline,
        mdiPlus,
        mdiFormatListBulletedSquare,
        mdiGreasePencil,
        mdiAndroidDebugBridge,
      },
    }
  },
}
</script>
`
