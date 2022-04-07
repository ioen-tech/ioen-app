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
