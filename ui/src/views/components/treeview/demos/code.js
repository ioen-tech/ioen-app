/* eslint-disable no-useless-escape */

export const treeviewLoadChildren = `
<template>
  <v-row>
    <v-col
      cols="12"
      sm="5"
    >
      <v-treeview
        :active.sync="active"
        :items="items"
        :load-children="fetchUsers"
        :open.sync="open"
        activatable
        color="success"
        open-on-click
        transition
      >
        <template #prepend="{ item }">
          <v-icon v-if="!item.children">
            {{ icons.mdiAccountOutline }}
          </v-icon>
        </template>
      </v-treeview>
    </v-col>

    <v-col
      sm="1"
      cols="12"
    >
      <v-divider :vertical="$vuetify.breakpoint.name === 'xs' ? false : true"></v-divider>
    </v-col>

    <v-col
      cols="12"
      sm="6"
      class="d-flex justify-center"
    >
      <v-scroll-y-transition mode="out-in">
        <div
          v-if="!selected"
          class="title font-weight-light"
        >
          Select a User
        </div>
        <v-card
          v-else
          :key="selected.id"
          class="pt-6 mx-auto"
          flat
          max-width="400"
        >
          <v-card-text class="text-center">
            <v-avatar
              v-if="avatar"
              size="88"
              rounded
              class="mb-6"
            >
              <v-img
                :src="\`/images/avatars/\${avatar}\`"
              ></v-img>
            </v-avatar>
            <h3 class="headline mb-2">
              {{ selected.name }}
            </h3>
            <div class="blue--text mb-2">
              {{ selected.email }}
            </div>
            <div class="blue--text subheading font-weight-bold">
              {{ selected.username }}
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-row
            class="text-left"
            tag="v-card-text"
          >
            <v-col
              class="text-right me-4 mb-2"
              tag="strong"
              cols="5"
            >
              Company:
            </v-col>
            <v-col>{{ selected.company.name }}</v-col>
            <v-col
              class="text-right me-4 mb-2"
              tag="strong"
              cols="5"
            >
              Website:
            </v-col>
            <v-col>
              <a
                :href="\`//\${selected.website}\`"
                target="_blank"
                rel="nofollow"
              >{{ selected.website }}</a>
            </v-col>
            <v-col
              class="text-right me-4 mb-2"
              tag="strong"
              cols="5"
            >
              Phone:
            </v-col>
            <v-col>{{ selected.phone }}</v-col>
          </v-row>
        </v-card>
      </v-scroll-y-transition>
    </v-col>
  </v-row>
</template>

<script>
import { mdiAccountOutline } from '@mdi/js'
import { ref, watch, computed } from '@vue/composition-api'
import axios from '@axios'

const avatars = ['1.png', '2.png', '3.png', '4.png', '6.png', '7.png', '8.png']

const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
  setup() {
    const active = ref([])
    const avatar = ref(null)
    const open = ref([])
    const users = ref([])

    const items = computed(() => [
      {
        name: 'Users',
        children: users.value,
      },
    ])

    const selected = computed(() => {
      if (!active.value.length) return undefined

      const id = active.value[0]

      return users.value.find(user => user.id === id)
    })

    const randomAvatar = () => {
      avatar.value = avatars[Math.floor(Math.random() * avatars.length)]
    }

    const fetchUsers = async item => {
      // Delay for demo purpose
      await pause(1500)

      return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          item.children.push(...res.data)
        })
        .catch(err => console.warn(err))
    }

    watch(selected, randomAvatar)

    return {
      items,
      active,
      avatar,
      open,
      users,
      selected,
      fetchUsers,

      // Icons
      icons: {
        mdiAccountOutline,
      },
    }
  },
}
</script>
`

export const treeviewAppendAndLabel = `
<template>
  <v-treeview
    v-model="tree"
    :open="initiallyOpen"
    :items="items"
    activatable
    item-key="name"
    open-on-click
  >
    <template #prepend="{ item, open }">
      <v-icon v-if="!item.file">
        {{ open ? icons.mdiFolderOpenOutline : icons.mdiFolderOutline }}
      </v-icon>
      <v-icon v-else>
        {{ files[item.file] }}
      </v-icon>
    </template>
  </v-treeview>
</template>

<script>
import { ref } from '@vue/composition-api'
import {
  mdiLanguageHtml5,
  mdiNodejs,
  mdiCodeJson,
  mdiLanguageMarkdownOutline,
  mdiFilePdfBoxOutline,
  mdiFileImageOutline,
  mdiFileDocumentOutline,
  mdiFileExcelOutline,
  mdiFolderOpenOutline,
  mdiFolderOutline,
} from '@mdi/js'

export default {
  setup() {
    const initiallyOpen = ref(['public'])
    const files = {
      html: mdiLanguageHtml5,
      js: mdiNodejs,
      json: mdiCodeJson,
      md: mdiLanguageMarkdownOutline,
      pdf: mdiFilePdfBoxOutline,
      png: mdiFileImageOutline,
      txt: mdiFileDocumentOutline,
      xls: mdiFileExcelOutline,
    }

    const tree = ref([])

    const items = [
      {
        name: '.git',
      },
      {
        name: 'node_modules',
      },
      {
        name: 'public',
        children: [
          {
            name: 'static',
            children: [
              {
                name: 'logo.png',
                file: 'png',
              },
            ],
          },
          {
            name: 'favicon.ico',
            file: 'png',
          },
          {
            name: 'index.html',
            file: 'html',
          },
        ],
      },
      {
        name: '.gitignore',
        file: 'txt',
      },
      {
        name: 'babel.config.js',
        file: 'js',
      },
      {
        name: 'package.json',
        file: 'json',
      },
      {
        name: 'README.md',
        file: 'md',
      },
      {
        name: 'vue.config.js',
        file: 'js',
      },
      {
        name: 'yarn.lock',
        file: 'txt',
      },
    ]

    return {
      initiallyOpen,
      files,
      tree,
      items,

      // icons
      icons: {
        mdiFolderOpenOutline,
        mdiFolderOutline,
      },
    }
  },
}
</script>
`

export const treeviewBasic = `
<template>
  <v-treeview :items="items"></v-treeview>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'src : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ]

    return { items }
  },
}
</script>
`

export const treeviewSelectedColor = `
<template>
  <v-treeview
    selectable
    selected-color="success"
    :items="items"
  ></v-treeview>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'src : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ]

    return { items }
  },
}
</script>
`

export const treeviewOpenAll = `
<template>
  <v-treeview
    open-all
    :items="items"
  ></v-treeview>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'index : ts',
              },
            ],
          },
        ],
      },

      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
    ]

    return { items }
  },
}
</script>
`

export const treeviewRounded = `
<template>
  <v-treeview
    rounded
    hoverable
    activatable
    :items="items"
  ></v-treeview>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'src : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ]

    return { items }
  },
}
</script>
`

export const treeviewSelectableIcons = `
<template>
  <v-card flat>
    <v-row>
      <v-col
        cols="12"
        sm="5"
      >
        <v-card-text>
          <v-treeview
            v-model="tree"
            :load-children="fetch"
            :items="items"
            selected-color="primary"
            open-on-click
            selectable
            return-object
            :expand-icon="icons.mdiChevronDown"
            :on-icon="icons.mdiBookmark"
            :off-icon="icons.mdiBookmarkOutline"
            :indeterminate-icon="icons.mdiBookmarkMinus"
          >
          </v-treeview>
        </v-card-text>
      </v-col>

      <v-col
        sm="1"
        cols="12"
      >
        <v-divider :vertical="$vuetify.breakpoint.name === 'xs' ? false : true"></v-divider>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <v-card-text>
          <div
            v-if="tree.length === 0"
            key="title"
            class="title font-weight-light pa-4 text-center"
          >
            Select your favorite breweries
          </div>

          <v-scroll-x-transition
            group
            hide-on-leave
          >
            <v-chip
              v-for="(selection, i) in tree"
              :key="i"
              color="secondary"
              dark
              small
              class="v-chip-light-bg secondary--text ma-1"
            >
              <v-icon
                left
                small
              >
                {{ icons.mdiTimerSandEmpty }}
              </v-icon>
              {{ selection.name }}
            </v-chip>
          </v-scroll-x-transition>
        </v-card-text>
      </v-col>
    </v-row>

    <v-card-actions class="pb-0">
      <v-btn
        text
        @click="tree = []"
      >
        Reset
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        color="success"
        depressed
      >
        Save
        <v-icon right>
          {{ icons.mdiContentSaveOutline }}
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from '@axios'
// eslint-disable-next-line object-curly-newline
import { computed, ref, watch } from '@vue/composition-api'
import {
  mdiContentSaveOutline,
  mdiTimerSandEmpty,
  mdiSilverware,
  mdiChevronDown,
  mdiBookmark,
  mdiBookmarkOutline,
  mdiBookmarkMinus,
} from '@mdi/js'

export default {
  setup() {
    const breweries = ref([])
    const isLoading = ref(false)
    const tree = ref([])
    const types = ref([])

    const fetch = () => {
      if (breweries.value.length) return null

      return axios
        .get('https://api.openbrewerydb.org/breweries')
        .then(response => {
          breweries.value = response.data
        })
        .catch(err => console.error(err))
    }

    const getName = name => \`\${name.charAt(0).toUpperCase()}\${name.slice(1)}\`

    const getChildren = type => {
      const breweriesLocal = []

      // eslint-disable-next-line no-restricted-syntax
      for (const brewery of breweries.value) {
        // eslint-disable-next-line no-continue
        if (brewery.brewery_type !== type) continue

        breweriesLocal.push({
          ...brewery,
          name: getName(brewery.name),
        })
      }

      return breweriesLocal.sort((a, b) => (a.name > b.name ? 1 : -1))
    }

    const items = computed(() => {
      const children = types.value.map(type => ({
        id: type,
        name: getName(type),
        children: getChildren(type),
      }))

      return [
        {
          id: 1,
          name: 'All Breweries',
          children,
        },
      ]
    })

    const shouldShowTree = computed(() => breweries.value.length > 0 && !isLoading.value)

    watch(breweries, val => {
      types.value = val
        .reduce((acc, cur) => {
          const type = cur.brewery_type

          if (!acc.includes(type)) acc.push(type)

          return acc
        }, [])
        .sort()
    })

    return {
      breweries,
      isLoading,
      tree,
      types,
      items,
      shouldShowTree,
      fetch,
      getName,
      getChildren,
      icons: {
        mdiContentSaveOutline,
        mdiTimerSandEmpty,
        mdiSilverware,
        mdiChevronDown,
        mdiBookmark,
        mdiBookmarkOutline,
        mdiBookmarkMinus,
      },
    }
  },
}
</script>
`

export const treeviewSelectable = `
<template>
  <v-treeview
    selectable
    selected-color="primary"
    :items="items"
  ></v-treeview>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'src : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ]

    return { items }
  },
}
</script>
`

export const treeviewShaped = `
<template>
  <v-treeview
    shaped
    hoverable
    activatable
    :items="items"
  ></v-treeview>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'src : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ]

    return { items }
  },
}
</script>
`

export const treeviewDenseMode = `
<template>
  <v-treeview
    dense
    :items="items"
  ></v-treeview>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'src : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ]

    return { items }
  },
}
</script>
`

export const treeviewItemDisabled = `
<template>
  <v-treeview
    selectable
    selected-color="primary"
    item-disabled="locked"
    :items="items"
  ></v-treeview>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        id: 1,
        name: 'Applications :',
        locked: true,
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                locked: true,
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'src : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf', locked: true },
          { id: 17, name: 'November : pdf', locked: true },
          { id: 18, name: 'Tutorial : html', locked: true },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ]

    return { items }
  },
}
</script>
`

export const treeviewActivatable = `
<template>
  <v-treeview
    activatable
    :items="items"
  ></v-treeview>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'src : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ]

    return { items }
  },
}
</script>
`

export const treeviewSearchAndFilter = `
<template>
  <div>
    <v-text-field
      v-model="search"
      label="Search Company Directory"
      clearable
      :clear-icon="icons.mdiCloseCircleOutline"
    ></v-text-field>

    <v-treeview
      :items="items"
      :search="search"
      :open.sync="open"
    >
      <template #prepend="{ item }">
        <v-icon v-if="item.children">
          {{ item.id === 1 ? icons.mdiHomeVariantOutline : icons.mdiFolderNetworkOutline }}
        </v-icon>
      </template>
    </v-treeview>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiCloseCircleOutline, mdiFolderNetworkOutline, mdiHomeVariantOutline } from '@mdi/js'

export default {
  setup() {
    const items = [
      {
        id: 1,
        name: 'Vuetify Human Resources',
        children: [
          {
            id: 2,
            name: 'Core team',
            children: [
              {
                id: 201,
                name: 'John',
              },
              {
                id: 202,
                name: 'Kael',
              },
              {
                id: 203,
                name: 'Nekosaur',
              },
              {
                id: 204,
                name: 'Jacek',
              },
              {
                id: 205,
                name: 'Andrew',
              },
            ],
          },
          {
            id: 3,
            name: 'Administrators',
            children: [
              {
                id: 301,
                name: 'Mike',
              },
              {
                id: 302,
                name: 'Hunt',
              },
            ],
          },
          {
            id: 4,
            name: 'Contributors',
            children: [
              {
                id: 401,
                name: 'Phlow',
              },
              {
                id: 402,
                name: 'Brandon',
              },
              {
                id: 403,
                name: 'Sean',
              },
            ],
          },
        ],
      },
    ]

    const open = ref([1, 2])
    const search = ref(null)
    const caseSensitive = ref(false)

    return {
      items,
      open,
      search,
      caseSensitive,

      // icons
      icons: { mdiCloseCircleOutline, mdiFolderNetworkOutline, mdiHomeVariantOutline },
    }
  },
}
</script>
`

export const treeviewSelectionType = `
<template>
  <div>
    <v-select
      v-model="selectionType"
      :items="['leaf', 'independent']"
      label="Selection type"
    ></v-select>

    <v-row>
      <v-col
        cols="12"
        sm="5"
      >
        <v-treeview
          v-model="selection"
          :items="items"
          :selection-type="selectionType"
          selectable
          return-object
          open-all
        ></v-treeview>
      </v-col>
      <v-col
        sm="1"
        cols="12"
      >
        <v-divider :vertical="$vuetify.breakpoint.name === 'xs' ? false : true"></v-divider>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <template v-if="!selection.length">
          No nodes selected.
        </template>
        <template v-else>
          <div
            v-for="node in selection"
            :key="node.id"
          >
            {{ node.name }}
          </div>
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const selectionType = ref('leaf')
    const selection = ref([])
    const items = [
      {
        id: 1,
        name: 'Root',
        children: [
          { id: 2, name: 'Child #1' },
          { id: 3, name: 'Child #2' },
          {
            id: 4,
            name: 'Child #3',
            children: [
              { id: 5, name: 'Grandchild #1' },
              { id: 6, name: 'Grandchild #2' },
            ],
          },
          {
            id: 5,
            name: 'Child #4',
            children: [
              { id: 7, name: 'Grandchild #1' },
              { id: 8, name: 'Grandchild #2' },
              { id: 9, name: 'Grandchild #3' },
            ],
          },
        ],
      },
    ]

    return { selectionType, selection, items }
  },
}
</script>
`

export const treeviewHoverable = `
<template>
  <v-treeview
    hoverable
    :items="items"
  ></v-treeview>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'src : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ]

    return { items }
  },
}
</script>
`

export const treeviewColor = `
<template>
  <v-treeview
    activatable
    color="success"
    :items="items"
  ></v-treeview>
</template>

<script>
export default {
  setup() {
    const items = [
      {
        id: 1,
        name: 'Applications :',
        children: [
          { id: 2, name: 'Calendar : app' },
          { id: 3, name: 'Chrome : app' },
          { id: 4, name: 'Webstorm : app' },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            children: [
              {
                id: 7,
                name: 'src :',
                children: [
                  { id: 8, name: 'index : ts' },
                  { id: 9, name: 'src : ts' },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            children: [
              {
                id: 11,
                name: 'src :',
                children: [
                  { id: 12, name: 'v-btn : ts' },
                  { id: 13, name: 'v-card : ts' },
                  { id: 14, name: 'v-window : ts' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: 'Downloads :',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        children: [
          {
            id: 20,
            name: 'Tutorials :',
            children: [
              { id: 21, name: 'Basic layouts : mp4' },
              { id: 22, name: 'Advanced techniques : mp4' },
              { id: 23, name: 'All about app : dir' },
            ],
          },
          { id: 24, name: 'Intro : mov' },
          { id: 25, name: 'Conference introduction : avi' },
        ],
      },
    ]

    return { items }
  },
}
</script>
`
