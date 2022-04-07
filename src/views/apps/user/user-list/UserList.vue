<template>
  <div id="user-list">
    <!-- app drawer -->
    <user-list-add-new
      v-model="isAddNewUserSidebarActive"
      :role-options="roleOptions"
      :plan-options="planOptions"
      @refetch-data="fetchUsers"
    ></user-list-add-new>

    <!-- user total card -->
    <v-row class="mb-5">
      <v-col
        v-for="total in userTotalLocal"
        :key="total.total"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card>
          <v-card-text class="d-flex align-center justify-space-between pa-4">
            <div>
              <h2 class="font-weight-semibold mb-1">
                {{ total.total }}
              </h2>
              <span>{{ total.title }}</span>
            </div>

            <v-avatar
              :color="resolveUserTotalIcon(total.title).color"
              :class="`v-avatar-light-bg ${resolveUserTotalIcon(total.title).color}--text`"
            >
              <v-icon
                size="25"
                :color="resolveUserTotalIcon(total.title).color"
                class="rounded-0"
              >
                {{ resolveUserTotalIcon(total.title).icon }}
              </v-icon>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- list filters -->
    <v-card>
      <v-card-title>
        Search &amp; Filter
      </v-card-title>
      <v-row class="px-2 ma-0">
        <!-- role filter -->
        <v-col
          cols="12"
          sm="4"
        >
          <v-select
            v-model="roleFilter"
            placeholder="Select Role"
            :items="roleOptions"
            item-text="title"
            item-value="value"
            outlined
            clearable
            dense
            hide-details
          ></v-select>
        </v-col>

        <!-- plan filter -->
        <v-col
          cols="12"
          sm="4"
        >
          <v-select
            v-model="planFilter"
            placeholder="Select Plan"
            :items="planOptions"
            item-text="title"
            item-value="value"
            outlined
            dense
            clearable
            hide-details
          ></v-select>
        </v-col>

        <!-- status filter -->
        <v-col
          cols="12"
          sm="4"
        >
          <v-select
            v-model="statusFilter"
            placeholder="Select Status"
            :items="statusOptions"
            item-text="title"
            item-value="value"
            outlined
            dense
            clearable
            hide-details
          ></v-select>
        </v-col>
      </v-row>

      <v-divider class="mt-4"></v-divider>

      <!-- actions -->
      <v-card-text class="d-flex align-center flex-wrap pb-0">
        <!-- search -->
        <v-text-field
          v-model="searchQuery"
          placeholder="Search"
          outlined
          hide-details
          dense
          class="user-search me-3 mb-4"
        >
        </v-text-field>

        <v-spacer></v-spacer>

        <div class="d-flex align-center flex-wrap">
          <v-btn
            color="primary"
            class="mb-4 me-3"
            @click.stop="isAddNewUserSidebarActive = !isAddNewUserSidebarActive"
          >
            <v-icon>{{ icons.mdiPlus }}</v-icon>
            <span>Add New User</span>
          </v-btn>

          <v-btn
            color="secondary"
            outlined
            class="mb-4"
          >
            <v-icon
              size="17"
              class="me-1"
            >
              {{ icons.mdiExportVariant }}
            </v-icon>
            <span>Export</span>
          </v-btn>
        </div>
      </v-card-text>

      <!-- table -->
      <v-data-table
        v-model="selectedRows"
        :headers="tableColumns"
        :items="userListTable"
        :options.sync="options"
        :server-items-length="totalUserListTable"
        :loading="loading"
        show-select
      >
        <!-- name -->
        <template #[`item.fullName`]="{item}">
          <div class="d-flex align-center">
            <v-avatar
              :color="item.avatar ? '' : 'primary'"
              :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
              size="32"
            >
              <v-img
                v-if="item.avatar"
                :src="require(`@/assets/images/avatars/${item.avatar}`)"
              ></v-img>
              <span
                v-else
                class="font-weight-medium"
              >{{ avatarText(item.fullName) }}</span>
            </v-avatar>

            <div class="d-flex flex-column ms-3">
              <router-link
                :to="{ name : 'apps-user-view', params : { id : item.id } }"
                class="text--primary font-weight-semibold text-truncate cursor-pointer text-decoration-none"
              >
                {{ item.fullName }}
              </router-link>
              <small>@{{ item.username }}</small>
            </div>
          </div>
        </template>

        <!-- role -->
        <template #[`item.role`]="{item}">
          <div class="d-flex align-center">
            <v-avatar
              size="30"
              :color="resolveUserRoleVariant(item.role)"
              :class="`v-avatar-light-bg ${resolveUserRoleVariant(item.role)}--text me-3`"
            >
              <v-icon
                size="18"
                :color="resolveUserRoleVariant(item.role)"
              >
                {{ resolveUserRoleIcon(item.role) }}
              </v-icon>
            </v-avatar>
            <span class="text-capitalize">{{ item.role }}</span>
          </div>
        </template>

        <!-- plan -->
        <template #[`item.currentPlan`]="{item}">
          <span class="text-capitalize font-weight-semibold text--primary">{{ item.currentPlan }}</span>
        </template>

        <!-- status -->
        <template #[`item.status`]="{item}">
          <v-chip
            small
            :color="resolveUserStatusVariant(item.status)"
            :class="`${resolveUserStatusVariant(item.status)}--text`"
            class="v-chip-light-bg font-weight-semibold text-capitalize"
          >
            {{ item.status }}
          </v-chip>
        </template>

        <!-- actions -->
        <template #[`item.actions`]="{item}">
          <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                :to="{name:'apps-user-view',params:{id:item.id}}"
              >
                <v-list-item-title>
                  <v-icon
                    size="20"
                    class="me-2"
                  >
                    {{ icons.mdiFileDocumentOutline }}
                  </v-icon>
                  <span>Details</span>
                </v-list-item-title>
              </v-list-item>

              <v-list-item link>
                <v-list-item-title>
                  <v-icon
                    size="20"
                    class="me-2"
                  >
                    {{ icons.mdiDeleteOutline }}
                  </v-icon>
                  <span>Delete</span>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiSquareEditOutline,
  mdiDotsVertical,
  mdiPlus,
  mdiFileDocumentOutline,
  mdiDeleteOutline,
  mdiExportVariant,
  mdiAccountOutline,
} from '@mdi/js'
import { onUnmounted, ref } from '@vue/composition-api'

// sidebar
import { avatarText } from '@core/utils/filter'
import store from '@/store'
import UserListAddNew from './UserListAddNew.vue'
import userStoreModule from '../userStoreModule'

import useUsersList from './useUsersList'

export default {
  components: {
    UserListAddNew,
  },
  setup() {
    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    const {
      userListTable,
      tableColumns,
      searchQuery,
      roleFilter,
      planFilter,
      statusFilter,
      totalUserListTable,
      loading,
      options,
      userTotalLocal,
      selectedRows,

      fetchUsers,
      resolveUserRoleVariant,
      resolveUserRoleIcon,
      resolveUserStatusVariant,
      resolveUserTotalIcon,
    } = useUsersList()

    const isAddNewUserSidebarActive = ref(false)

    const roleOptions = [
      { title: 'Admin', value: 'admin' },
      { title: 'Author', value: 'author' },
      { title: 'Editor', value: 'editor' },
      { title: 'Maintainer', value: 'maintainer' },
      { title: 'Subscriber', value: 'subscriber' },
    ]

    const planOptions = [
      { title: 'Basic', value: 'basic' },
      { title: 'Company', value: 'company' },
      { title: 'Enterprise', value: 'enterprise' },
      { title: 'Standard', value: 'standard' },
    ]

    const statusOptions = [
      { title: 'Pending', value: 'pending' },
      { title: 'Active', value: 'active' },
      { title: 'Inactive', value: 'inactive' },
    ]

    return {
      userListTable,
      tableColumns,
      searchQuery,
      roleFilter,
      planFilter,
      statusFilter,
      totalUserListTable,
      roleOptions,
      planOptions,
      statusOptions,
      loading,
      options,
      userTotalLocal,
      isAddNewUserSidebarActive,
      selectedRows,
      avatarText,
      resolveUserRoleVariant,
      resolveUserRoleIcon,
      resolveUserStatusVariant,
      resolveUserTotalIcon,
      fetchUsers,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiFileDocumentOutline,
        mdiDotsVertical,
        mdiDeleteOutline,
        mdiPlus,
        mdiExportVariant,
        mdiAccountOutline,
      },
    }
  },
}
</script>

<style lang="scss">
@import '@core/preset/preset/apps/user.scss';
</style>
