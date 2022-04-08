/* eslint-disable no-useless-escape */

export const tabsIconAndText = `
<template>
  <div>
    <v-tabs
      v-model="currentTab"
      icons-and-text
      grow
    >
      <v-tab>
        Recents
        <v-icon>{{ icons.mdiPhone }}</v-icon>
      </v-tab>

      <v-tab>
        Favorites
        <v-icon>{{ icons.mdiHeartOutline }}</v-icon>
      </v-tab>

      <v-tab>
        Nearby
        <v-icon>{{ icons.mdiAccountBoxOutline }}</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="currentTab">
      <v-tab-item
        v-for="i in 3"
        :key="i"
      >
        <v-card flat>
          <v-card-text>{{ tabItemText }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiPhone, mdiHeartOutline, mdiAccountBoxOutline } from '@mdi/js'

export default {
  setup() {
    const currentTab = ref(null)
    const tabItemText = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    \`

    return { currentTab, tabItemText, icons: { mdiPhone, mdiHeartOutline, mdiAccountBoxOutline } }
  },
}
</script>
`

export const tabsProgrammaticNavigation = `
<template>
  <div>
    <v-tabs
      v-model="currentTab"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="currentTab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text>{{ tabItemText }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <div class="text-center pa-4">
      <v-btn
        text
        @click="preTab"
      >
        Previous
      </v-btn>

      <v-divider
        class="mx-4"
        vertical
      ></v-divider>

      <v-btn
        text
        @click="nextTab"
      >
        Next
      </v-btn>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const currentTab = ref(0)
    const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
    const tabItemText = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      \`
    const totalLengthOfTab = items.length

    const preTab = () => {
      if (currentTab.value !== 0) {
        currentTab.value -= 1
      }
    }

    const nextTab = () => {
      if (currentTab.value !== totalLengthOfTab - 1) {
        currentTab.value += 1
      }
    }

    return {
      currentTab,
      items,
      tabItemText,
      preTab,
      nextTab,
    }
  },
}
</script>
`

export const tabsPagination = `
<template>
  <v-tabs show-arrows>
    <v-tab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </v-tab>
  </v-tabs>
</template>
`

export const tabsAlignment = `
<template>
  <div class="demo-space-y">
    <!-- default -->
    <v-tabs>
      <v-tab>Home</v-tab>
      <v-tab>Service</v-tab>
      <v-tab>Account</v-tab>
    </v-tabs>

    <v-tabs centered>
      <v-tab>Home</v-tab>
      <v-tab>Service</v-tab>
      <v-tab>Account</v-tab>
    </v-tabs>

    <v-tabs right>
      <v-tab>Home</v-tab>
      <v-tab>Service</v-tab>
      <v-tab>Account</v-tab>
    </v-tabs>
  </div>
</template>
`

export const tabsBasic = `
<template>
  <div>
    <v-tabs v-model="currentTab">
      <v-tab>Tab One</v-tab>
      <v-tab>Tab Two</v-tab>
      <v-tab>Tab Three</v-tab>
    </v-tabs>

    <v-tabs-items v-model="currentTab">
      <v-tab-item
        v-for="item in 3"
        :key="item"
      >
        <v-card flat>
          <v-card-text
            class="pb-0"
            v-text="tabItemContent"
          >
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const currentTab = ref(0)
    const tabItemContent = \`Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.
    \`

    return { currentTab, tabItemContent }
  },
}
</script>
`

export const tabsVertical = `
<template>
  <v-tabs vertical>
    <v-tab>
      <v-icon left>
        {{ icons.mdiAccountOutline }}
      </v-icon>
      Option 1
    </v-tab>
    <v-tab>
      <v-icon left>
        {{ icons.mdiLockOutline }}
      </v-icon>
      Option 2
    </v-tab>
    <v-tab>
      <v-icon left>
        {{ icons.mdiAccessPoint }}
      </v-icon>
      Option 3
    </v-tab>

    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci.
          </p>

          <p class="mb-0">
            Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import { mdiAccountOutline, mdiLockOutline, mdiAccessPoint } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiAccountOutline,
        mdiLockOutline,
        mdiAccessPoint,
      },
    }
  },
}
</script>
`

export const tabsGrow = `
<template>
  <div>
    <v-tabs
      v-model="currentTab"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="currentTab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
          <v-card-text>{{ tabItemText }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const currentTab = ref(null)
    const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
    const tabItemText = \`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      \`

    return { currentTab, items, tabItemText }
  },
}
</script>
`

export const tabsIcons = `
<template>
  <v-tabs
    :next-icon="icons.mdiArrowRight"
    :prev-icon="icons.mdiArrowLeft"
    show-arrows
  >
    <v-tab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </v-tab>
  </v-tabs>
</template>

<script>
import { mdiArrowRight, mdiArrowLeft } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiArrowRight,
        mdiArrowLeft,
      },
    }
  },
}
</script>
`

export const tabsDynamic = `
<template>
  <div>
    <v-tabs v-model="currentTab">
      <v-tab
        v-for="n in totalTabs"
        :key="n"
      >
        Tab {{ n }}
      </v-tab>
    </v-tabs>

    <!-- buttons -->
    <div class="text-center mt-11">
      <v-btn
        :disabled="!totalTabs"
        text
        @click="totalTabs--"
      >
        Remove Tab
      </v-btn>

      <v-divider
        class="mx-4"
        vertical
      ></v-divider>

      <v-btn
        text
        @click="totalTabs++"
      >
        Add Tab
      </v-btn>
    </div>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api'

export default {
  setup() {
    const totalTabs = ref(3)
    const currentTab = ref(0)

    watch(totalTabs, newValue => {
      currentTab.value = newValue - 1
    })

    return { totalTabs, currentTab }
  },
}
</script>
`

export const tabsFixed = `
<template>
  <v-tabs fixed-tabs>
    <v-tab>
      Fixed Tab 1
    </v-tab>
    <v-tab>
      Fixed Tab 2
    </v-tab>
    <v-tab>
      Fixed Tab 3
    </v-tab>
    <v-tab>
      Fixed Tab 4
    </v-tab>
  </v-tabs>
</template>
`
