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
                :src="require(`@/assets/images/avatars/${avatar}`)"
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
                :href="`//${selected.website}`"
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
