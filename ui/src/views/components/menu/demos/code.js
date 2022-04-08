/* eslint-disable no-useless-escape */

export const menuTransitions = `
<template>
  <div class="demo-space-x">
    <v-menu
      bottom
      origin="center center"
      transition="scale-transition"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Scale Transition
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu
      transition="slide-x-transition"
      bottom
      right
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Slide X Transition
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu
      transition="slide-y-transition"
      bottom
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Slide Y Transition
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  setup() {
    const items = [{ title: 'Options 1' }, { title: 'Options 2' }, { title: 'Options 3' }, { title: 'Options 4' }]

    return { items }
  },
}
</script>
`

export const menuCloseOn = `
<template>
  <div class="demo-space-x">
    <v-menu
      top
      :close-on-click="closeOnClick"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Keep open on click
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu
      top
      :close-on-content-click="closeOnContentClick"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Keep open on content click
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const closeOnClick = ref(false)
    const closeOnContentClick = ref(false)
    const items = [{ title: 'Options 1' }, { title: 'Options 2' }, { title: 'Options 3' }]

    return {
      closeOnClick,
      closeOnContentClick,
      items,
    }
  },
}
</script>
`

export const menuDisabled = `
<template>
  <v-menu
    disabled
    top
    offset-y
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="primary"
        v-bind="attrs"
        v-on="on"
      >
        Dropdown
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  setup() {
    const items = [{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me 2' }]

    return { items }
  },
}
</script>
`

export const menuHover = `
<template>
  <v-menu
    open-on-hover
    bottom
    offset-y
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        On hover
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  setup() {
    const items = [{ title: 'Options 1' }, { title: 'Options 2' }, { title: 'Options 3' }]

    return { items }
  },
}
</script>
`

export const menuBasic = `
<template>
  <div class="demo-space-x">
    <v-menu
      v-for="menu in menusVariant"
      :key="menu"
      offset-y
    >
      <template #activator="{ on, attrs }">
        <v-btn
          :color="menu"
          dark
          v-bind="attrs"
          v-on="on"
        >
          {{ menu }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  setup() {
    const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
    const items = [{ title: 'Option 1' }, { title: 'Option 2' }, { title: 'Option 3' }]

    return { menusVariant, items }
  },
}
</script>
`

export const menuTooltip = `
<template>
  <v-menu top>
    <template #activator="{ on: menu, attrs }">
      <v-tooltip bottom>
        <template #activator="{ on: tooltip }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="{ ...tooltip, ...menu }"
          >
            Dropdown w/ Tooltip
          </v-btn>
        </template>
        <span>I am a Tooltip</span>
      </v-tooltip>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  setup() {
    const items = [{ title: 'Options 1' }, { title: 'Options 2' }, { title: 'Options 3' }, { title: 'Options 4' }]

    return { items }
  },
}
</script>
`

export const menuPopover = `
<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    max-width="300"
    offset-x
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Menu as Popover
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img
              src="@/assets/images/avatars/1.png"
              alt="John"
            >
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
            <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              :class="fav ? 'error--text' : ''"
              icon
              @click="fav = !fav"
            >
              <v-icon>{{ icons.mdiHeartOutline }}</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-card-text>
        Gingerbread bear claw cake. Soufflé candy sesame snaps chocolate ice cream cake.
        Dessert candy canes oat cake pudding cupcake. Bear claw sweet wafer bonbon dragée toffee.
      </v-card-text>

      <v-card-actions>
        <v-btn icon>
          <v-icon>{{ icons.mdiHeartOutline }}</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>{{ icons.mdiBookmarkOutline }}</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>{{ icons.mdiShareVariant }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiHeartOutline, mdiBookmarkOutline, mdiShareVariant } from '@mdi/js'

export default {
  setup() {
    const fav = ref(true)
    const menu = ref(false)
    const message = ref(false)
    const hints = ref(true)

    return {
      fav,
      menu,
      message,
      hints,

      // Icons
      icons: {
        mdiHeartOutline,
        mdiBookmarkOutline,
        mdiShareVariant,
      },
    }
  },
}
</script>
`

export const menuPosition = `
<template>
  <div class="demo-space-x">
    <v-menu
      top
      :offset-x="offset"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          offset x
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu
      top
      :offset-y="offset"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="success"
          dark
          v-bind="attrs"
          v-on="on"
        >
          offset y
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const offset = ref(true)
    const items = [{ title: 'Options 1' }, { title: 'Options 2' }, { title: 'Options 3' }]

    return { offset, items }
  },
}
</script>
`
