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
