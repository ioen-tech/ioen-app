/* eslint-disable no-useless-escape */

export const chipWithIcon = `
<template>
  <div class="demo-space-x">
    <v-chip>
      <v-icon
        class="me-1"
        size="18"
      >
        {{ icons.mdiAccountOutline }}
      </v-icon>
      Account
    </v-chip>

    <v-chip color="primary">
      <v-icon
        class="me-1"
        size="18"
      >
        {{ icons.mdiStarOutline }}
      </v-icon>
      Premium
    </v-chip>

    <v-chip color="secondary">
      <v-icon
        size="18"
        class="me-1"
      >
        {{ icons.mdiCake }}
      </v-icon>
      1 Year
    </v-chip>

    <v-chip color="success">
      <v-icon
        class="me-1"
        size="18"
      >
        {{ icons.mdiBellOutline }}
      </v-icon>
      Notification
    </v-chip>

    <v-chip color="info">
      <v-icon
        class="me-1"
        size="18"
      >
        {{ icons.mdiForumOutline }}
      </v-icon>
      Message
    </v-chip>

    <v-chip color="warning">
      <v-icon
        class="me-1"
        size="18"
      >
        {{ icons.mdiAlertOutline }}
      </v-icon>
      Warning
    </v-chip>

    <v-chip color="error">
      <v-icon
        class="me-1"
        size="18"
      >
        {{ icons.mdiAlertCircleOutline }}
      </v-icon>
      Error
    </v-chip>
  </div>
</template>

<script>
import {
  mdiAccountOutline,
  mdiStarOutline,
  mdiCake,
  mdiBellOutline,
  mdiAlertCircleOutline,
  mdiAlertOutline,
  mdiForumOutline,
} from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiAccountOutline,
        mdiStarOutline,
        mdiCake,
        mdiBellOutline,
        mdiAlertCircleOutline,
        mdiAlertOutline,
        mdiForumOutline,
      },
    }
  },
}
</script>
`

export const chipColor = `
<template>
  <div class="demo-space-x">
    <v-chip>
      Default
    </v-chip>

    <v-chip color="primary">
      Primary
    </v-chip>

    <v-chip color="secondary">
      Secondary
    </v-chip>

    <v-chip color="success">
      Success
    </v-chip>

    <v-chip color="info">
      Info
    </v-chip>

    <v-chip color="warning">
      Warning
    </v-chip>

    <v-chip color="error">
      Error
    </v-chip>
  </div>
</template>
`

export const chipInSelects = `
<template>
  <v-combobox
    v-model="chips"
    :items="items"
    chips
    clearable
    label="Your favorite hobbies"
    multiple
    :prepend-icon="icons.mdiFilterVariant"
    solo
  >
    <template #selection="{ attrs, item, select, selected }">
      <v-chip
        v-bind="attrs"
        :input-value="selected"
        close
        @click="select"
        @click:close="remove(item)"
      >
        <strong>{{ item }}</strong>&nbsp;
      </v-chip>
    </template>
  </v-combobox>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiFilterVariant } from '@mdi/js'

export default {
  setup() {
    const chips = ref(['Programming', 'Playing video games', 'Sleeping'])
    const items = ref(['Streaming', 'Eating'])

    const remove = item => {
      chips.value.splice(chips.value.indexOf(item), 1)
      chips.value = [...chips.value]
    }

    return {
      chips,
      items,
      remove,
      icons: {
        mdiFilterVariant,
      },
    }
  },
}
</script>
`

export const chipLight = `
<template>
  <div class="demo-space-x">
    <v-chip class="v-chip-light-bg">
      Default
    </v-chip>

    <v-chip
      class="v-chip-light-bg primary--text"
      color="primary"
    >
      Primary
    </v-chip>

    <v-chip
      class="v-chip-light-bg secondary--text"
      color="secondary"
    >
      Secondary
    </v-chip>

    <v-chip
      class="v-chip-light-bg success--text"
      color="success"
    >
      Success
    </v-chip>

    <v-chip
      class="v-chip-light-bg info--text"
      color="info"
    >
      Info
    </v-chip>

    <v-chip
      class="v-chip-light-bg warning--text"
      color="warning"
    >
      Warning
    </v-chip>

    <v-chip
      class="v-chip-light-bg error--text"
      color="error"
    >
      Error
    </v-chip>
  </div>
</template>
`

export const chipClosable = `
<template>
  <div class="demo-space-x">
    <v-chip
      v-if="isDefaultVisible"
      close
      @click:close="isDefaultVisible = !isDefaultVisible"
    >
      Default
    </v-chip>

    <v-chip
      v-if="isPrimaryVisible"
      close
      color="primary"
      @click:close="isPrimaryVisible = !isPrimaryVisible"
    >
      Primary
    </v-chip>

    <v-chip
      v-if="isSecondaryVisible"
      close
      color="secondary"
      @click:close="isSecondaryVisible = !isSecondaryVisible"
    >
      Secondary
    </v-chip>

    <v-chip
      v-if="isSuccessVisible"
      close
      color="success"
      @click:close="isSuccessVisible = !isSuccessVisible"
    >
      Success
    </v-chip>

    <v-chip
      v-if="isInfoVisible"
      close
      color="info"
      @click:close="isInfoVisible = !isInfoVisible"
    >
      Info
    </v-chip>

    <v-chip
      v-if="isWarningVisible"
      close
      color="warning"
      @click:close="isWarningVisible = !isWarningVisible"
    >
      Warning
    </v-chip>

    <v-chip
      v-if="isErrorVisible"
      close
      color="error"
      @click:close="isErrorVisible = !isErrorVisible"
    >
      Error
    </v-chip>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isDefaultVisible = ref(true)
    const isPrimaryVisible = ref(true)
    const isSecondaryVisible = ref(true)
    const isSuccessVisible = ref(true)
    const isInfoVisible = ref(true)
    const isWarningVisible = ref(true)
    const isErrorVisible = ref(true)

    return {
      isDefaultVisible,
      isPrimaryVisible,
      isSecondaryVisible,
      isSuccessVisible,
      isInfoVisible,
      isWarningVisible,
      isErrorVisible,
    }
  },
}
</script>
`

export const chipPill = `
<template>
  <div class="demo-space-x">
    <v-chip pill>
      <v-avatar left>
        <v-img src="@/assets/images/avatars/1.png"></v-img>
      </v-avatar>
      John Doe
    </v-chip>

    <v-chip pill>
      <v-avatar left>
        <v-img src="@/assets/images/avatars/2.png"></v-img>
      </v-avatar>
      Darcey Nooner
    </v-chip>

    <v-chip pill>
      <v-avatar left>
        <v-img src="@/assets/images/avatars/3.png"></v-img>
      </v-avatar>
      Elicia Rieske
    </v-chip>

    <v-chip pill>
      <v-avatar left>
        <v-img src="@/assets/images/avatars/4.png"></v-img>
      </v-avatar>
      Vinnie Mostowy
    </v-chip>
  </div>
</template>
`

export const chipSizes = `
<template>
  <div class="demo-space-x">
    <v-chip x-small>
      x-small chip
    </v-chip>

    <v-chip small>
      small chip
    </v-chip>

    <v-chip>Default</v-chip>

    <v-chip large>
      large chip
    </v-chip>

    <v-chip x-large>
      x-large chip
    </v-chip>
  </div>
</template>
`

export const chipLabel = `
<template>
  <div class="demo-space-x">
    <v-chip label>
      Default
    </v-chip>

    <v-chip
      label
      color="primary"
    >
      Primary
    </v-chip>

    <v-chip
      label
      color="secondary"
    >
      Secondary
    </v-chip>

    <v-chip
      label
      color="success"
    >
      Success
    </v-chip>

    <v-chip
      label
      color="info"
    >
      Info
    </v-chip>

    <v-chip
      label
      color="warning"
    >
      Warning
    </v-chip>

    <v-chip
      label
      color="error"
    >
      Error
    </v-chip>
  </div>
</template>
`

export const chipOutlined = `
<template>
  <div class="demo-space-x">
    <v-chip outlined>
      Default
    </v-chip>

    <v-chip
      outlined
      color="primary"
    >
      Primary
    </v-chip>

    <v-chip
      outlined
      color="secondary"
    >
      Secondary
    </v-chip>

    <v-chip
      outlined
      color="success"
    >
      Success
    </v-chip>

    <v-chip
      outlined
      color="info"
    >
      Info
    </v-chip>

    <v-chip
      outlined
      color="warning"
    >
      Warning
    </v-chip>

    <v-chip
      outlined
      color="error"
    >
      Error
    </v-chip>
  </div>
</template>
`

export const chipExpandable = `
<template>
  <v-menu
    v-model="isMenuVisible"
    bottom
    right
    transition="scale-transition"
    origin="top left"
  >
    <template #activator="{ on }">
      <v-chip v-on="on">
        VueJS
      </v-chip>
    </template>

    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>VueJS</v-list-item-title>
          <v-list-item-subtitle>
            The Progressive JavaScript Framework
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn
            icon
            @click="isMenuVisible = false"
          >
            <v-icon>{{ icons.mdiClose }}</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiClose } from '@mdi/js'

export default {
  setup() {
    const isMenuVisible = ref(false)

    return {
      isMenuVisible,
      icons: { mdiClose },
    }
  },
}
</script>
`
