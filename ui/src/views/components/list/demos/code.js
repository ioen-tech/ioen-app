/* eslint-disable no-useless-escape */

export const listActionAndItemGroup = `
<template>
  <v-list
    flat
    subheader
    three-line
  >
    <v-subheader>General</v-subheader>

    <v-list-item-group
      v-model="settings"
      multiple
    >
      <v-list-item>
        <template #default="{ active }">
          <v-list-item-action>
            <v-checkbox :input-value="active"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Notifications</v-list-item-title>
            <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-list-item>

      <v-list-item>
        <template #default="{ active }">
          <v-list-item-action>
            <v-checkbox :input-value="active"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Sound</v-list-item-title>
            <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-list-item>

      <v-list-item>
        <template #default="{ active }">
          <v-list-item-action>
            <v-checkbox :input-value="active"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Auto-add widgets</v-list-item-title>
            <v-list-item-subtitle>Automatically add home screen widgets when downloads complete</v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const settings = ref([])

    return { settings }
  },
}
</script>
`

export const listShaped = `
<template>
  <v-list shaped>
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiInstagram, mdiFacebook, mdiTwitter } from '@mdi/js'

export default {
  setup() {
    const selectedItem = ref(1)
    const items = [
      { text: 'Cupcake sesame snaps dessert marzipan.', icon: mdiInstagram },
      { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', icon: mdiFacebook },
      { text: 'Bonbon macaroon gummies pie jelly', icon: mdiTwitter },
    ]

    return { selectedItem, items }
  },
}
</script>
`

export const listDense = `
<template>
  <v-list dense>
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const selectedItem = ref(1)
    const items = [
      'halvah icing marshmallow',
      'Cake caramels donut danish muffin biscuit',
      'Chocolate cake pie lollipop',
      'Apple pie toffee pudding gummi bears',
      'Jujubes chupa chups cheesecake tart',
      'Candy fruitcake bonbon sesame snaps dessert',
      'Candy wafer tiramisu sugar plum sweet.',
      'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop. ',
    ]

    return { selectedItem, items }
  },
}
</script>
`

export const listActionStack = `
<template>
  <v-list two-line>
    <v-list-item-group
      v-model="selected"
      active-class="pink--text"
      multiple
    >
      <template v-for="(item, index) in items">
        <v-list-item :key="item.title">
          <template #default="{ active }">
            <v-list-item-content>
              <v-list-item-title
                class="primary--text"
                v-text="item.title"
              ></v-list-item-title>

              <v-list-item-subtitle
                class="grey--text"
                v-text="item.headline"
              ></v-list-item-subtitle>

              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

              <v-icon v-if="!active">
                {{ mdiStarOutline }}
              </v-icon>

              <v-icon
                v-else
                color="warning"
              >
                {{ mdiStar }}
              </v-icon>
            </v-list-item-action>
          </template>
        </v-list-item>

        <v-divider
          v-if="index < items.length - 1"
          :key="index"
        ></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiStarOutline, mdiStar } from '@mdi/js'

export default {
  setup() {
    const selected = ref([2])
    const items = [
      {
        action: '15 min',
        headline: 'Brunch this weekend?',
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        title: 'Ali Connors',
      },
      {
        action: '2 hr',
        headline: 'Summer BBQ',
        subtitle: "Wish I could come, but I'm out of town this weekend.",
        title: 'me, Scrott, Jennifer',
      },
      {
        action: '6 hr',
        headline: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
        title: 'Sandra Adams',
      },
      {
        action: '12 hr',
        headline: 'Birthday gift',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
        title: 'Trevor Hansen',
      },
      {
        action: '18hr',
        headline: 'Recipe to try',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        title: 'Britta Holt',
      },
    ]

    return {
      selected,
      items,
      mdiStarOutline,
      mdiStar,
    }
  },
}
</script>
`

export const listExpansionList = `
<template>
  <v-list>
    <v-list-group
      v-for="item in items"
      :key="item.title"
      :prepend-icon="item.action"
      no-action
    >
      <template #activator>
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item
        v-for="child in item.items"
        :key="child.title"
      >
        <v-list-item-content>
          <v-list-item-title v-text="child.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
import {
  mdiTicketConfirmationOutline,
  mdiSilverwareForkKnife,
  mdiSchoolOutline,
  mdiRun,
  mdiBottleTonicPlusOutline,
  mdiContentCut,
  mdiTagOutline,
} from '@mdi/js'

export default {
  setup() {
    const items = [
      {
        action: mdiTicketConfirmationOutline,
        items: [{ title: 'List Item' }],
        title: 'Attractions',
      },
      {
        action: mdiSilverwareForkKnife,
        items: [{ title: 'Breakfast & brunch' }, { title: 'New American' }, { title: 'Sushi' }],
        title: 'Dining',
      },
      {
        action: mdiSchoolOutline,
        items: [{ title: 'List Item' }],
        title: 'Education',
      },
      {
        action: mdiRun,
        items: [{ title: 'List Item' }],
        title: 'Family',
      },
      {
        action: mdiBottleTonicPlusOutline,
        items: [{ title: 'List Item' }],
        title: 'Health',
      },
      {
        action: mdiContentCut,
        items: [{ title: 'List Item' }],
        title: 'Office',
      },
      {
        action: mdiTagOutline,
        items: [{ title: 'List Item' }],
        title: 'Promotions',
      },
    ]

    return { items }
  },
}
</script>
`

export const listNav = `
<template>
  <v-list
    nav
    dense
  >
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-icon>
          <v-icon>
            {{ item.icon }}
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { ref } from '@vue/composition-api'
import {
  mdiFolderOutline,
  mdiAccountMultipleOutline,
  mdiStarOutline,
  mdiHistory,
  mdiCheckCircleOutline,
  mdiUploadOutline,
  mdiCloudUploadOutline,
} from '@mdi/js'

export default {
  setup() {
    const selectedItem = ref(0)
    const items = [
      { text: 'My Files', icon: mdiFolderOutline },
      { text: 'Shared with me', icon: mdiAccountMultipleOutline },
      { text: 'Starred', icon: mdiStarOutline },
      { text: 'Recent', icon: mdiHistory },
      { text: 'Offline', icon: mdiCheckCircleOutline },
      { text: 'Uploads', icon: mdiUploadOutline },
      { text: 'Backups', icon: mdiCloudUploadOutline },
    ]

    return { selectedItem, items }
  },
}
</script>
`

export const listThreeLine = `
<template>
  <v-list three-line>
    <template v-for="(item, index) in items">
      <v-subheader
        v-if="item.header"
        :key="item.header"
        v-text="item.header"
      ></v-subheader>

      <v-divider
        v-else-if="item.divider"
        :key="index"
        :inset="item.inset"
      ></v-divider>

      <v-list-item
        v-else
        :key="item.title"
      >
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <span class="text--primary">
              {{ item.subtitle.name }}
            </span>
            &mdash; {{ item.subtitle.desc }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  setup() {
    const items = [
      { header: 'Today' },
      {
        avatar: require('@/assets/images/avatars/1.png'),
        title: 'Brunch this weekend?',
        subtitle: {
          name: 'Ali Connors',
          desc: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
      },
      { divider: true, inset: true },
      {
        avatar: require('@/assets/images/avatars/3.png'),
        title: 'Summer BBQ ',
        subtitle: {
          name: 'to Alex, Scott, Jennifer',
          desc: "Wish I could come, but I'm out of town this weekend.",
        },
      },
      { divider: true, inset: true },
      {
        avatar: require('@/assets/images/avatars/2.png'),
        title: 'Oui oui',
        subtitle: {
          name: 'Sandra Adams',
          desc: 'Do you have Paris recommendations? Have you ever been?',
        },
      },
    ]

    return { items }
  },
}
</script>
`

export const listBasic = `
<template>
  <v-list>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Cras justo odio</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Dapibus ac facilisis in</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          Morbi leo risus
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Porta ac consectetur ac</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          Vestibulum at eros
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
`

export const listTwoLinesAndSubheader = `
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
`

export const listFlat = `
<template>
  <v-list flat>
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const selectedItem = ref(1)
    const items = [
      'Sweet gummi bears gingerbread carrot',
      'Cake macaroon brownie wafer soufflé',
      'Jelly beans lemon drops',
      'Lollipop ice cream donut chupa chups',
      'Chocolate candy canes tootsie roll',
    ]

    return { selectedItem, items }
  },
}
</script>
`

export const listSubGroup = `
<template>
  <v-list>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>{{ mdiHomeOutline }}</v-icon>
      </v-list-item-icon>

      <v-list-item-title>Home</v-list-item-title>
    </v-list-item>

    <v-list-group
      :value="true"
      :prepend-icon="mdiAccountCircleOutline"
    >
      <template #activator>
        <v-list-item-title>Users</v-list-item-title>
      </template>

      <v-list-group
        no-action
        sub-group
      >
        <template #activator>
          <v-list-item-content>
            <v-list-item-title>Admin</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="([title, icon], i) in admins"
          :key="i"
          link
        >
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

      <v-list-group
        no-action
        :value="true"
        sub-group
      >
        <template #activator>
          <v-list-item-content>
            <v-list-item-title>Actions</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="([title, icon], i) in cruds"
          :key="i"
          link
        >
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
    </v-list-group>
  </v-list>
</template>

<script>
import {
  mdiAccountMultipleOutline,
  mdiCogOutline,
  mdiPlusOutline,
  mdiFileOutline,
  mdiUpdate,
  mdiDeleteOutline,
  mdiHomeOutline,
  mdiAccountCircleOutline,
} from '@mdi/js'

export default {
  setup() {
    const admins = [
      ['Management', mdiAccountMultipleOutline],
      ['Settings', mdiCogOutline],
    ]

    const cruds = [
      ['Create', mdiPlusOutline],
      ['Read', mdiFileOutline],
      ['Update', mdiUpdate],
      ['Delete', mdiDeleteOutline],
    ]

    return {
      admins,
      cruds,
      mdiHomeOutline,
      mdiAccountCircleOutline,
    }
  },
}
</script>
`

export const listRounded = `
<template>
  <v-list rounded>
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiInstagram, mdiFacebook, mdiTwitter } from '@mdi/js'

export default {
  setup() {
    const selectedItem = ref(1)
    const items = [
      { text: 'Cupcake sesame snaps dessert marzipan.', icon: mdiInstagram },
      { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', icon: mdiFacebook },
      { text: 'Bonbon macaroon gummies pie jelly', icon: mdiTwitter },
    ]

    return { selectedItem, items }
  },
}
</script>
`
