<template>
  <v-list
    subheader
    two-line
  >
    <v-subheader inset>
      Folders
    </v-subheader>

    <v-list-item
      v-for="folder in folders"
      :key="folder.title"
    >
      <v-list-item-avatar>
        <v-icon size="26">
          {{ mdiFolderOutline }}
        </v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="folder.title"></v-list-item-title>

        <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon>
          <v-icon>
            {{ mdiInformationOutline }}
          </v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>

    <v-divider inset></v-divider>

    <v-subheader inset>
      Files
    </v-subheader>

    <v-list-item
      v-for="file in files"
      :key="file.title"
    >
      <v-list-item-avatar :color="file.color">
        <v-icon
          dark
          size="26"
          color="white"
          v-text="file.icon"
        ></v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="file.title"></v-list-item-title>

        <v-list-item-subtitle v-text="file.subtitle"></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon>
          <v-icon>
            {{ mdiInformationOutline }}
          </v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiClipboardTextOutline, mdiGestureTapButton, mdiInformationOutline, mdiFolderOutline } from '@mdi/js'

export default {
  setup() {
    const files = [
      {
        color: 'primary',
        icon: mdiClipboardTextOutline,
        subtitle: 'Jan 20, 2014',
        title: 'Vacation itinerary',
      },
      {
        color: 'warning',
        icon: mdiGestureTapButton,
        subtitle: 'Jan 10, 2014',
        title: 'Kitchen remodel',
      },
    ]
    const folders = [
      {
        subtitle: 'Jan 9, 2014',
        title: 'Photos',
      },
      {
        subtitle: 'Jan 17, 2014',
        title: 'Recipes',
      },
      {
        subtitle: 'Jan 28, 2014',
        title: 'Work',
      },
    ]

    return {
      files,
      folders,
      mdiInformationOutline,
      mdiFolderOutline,
    }
  },
}
</script>
