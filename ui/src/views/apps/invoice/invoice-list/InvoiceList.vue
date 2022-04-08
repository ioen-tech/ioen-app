<template>
  <v-card id="invoice-list">
    <!-- search -->
    <v-card-text class="d-flex align-center flex-wrap pb-0">
      <div class="d-flex align-center pb-5">
        <!-- actions -->
        <v-select
          v-model="selectedAction"
          label="Actions"
          single-line
          outlined
          dense
          :items="actions"
          hide-details
          :disabled="Boolean(!selectedTableData.length)"
          class="invoice-list-actions me-3"
        ></v-select>

        <!-- create invoice -->
        <v-btn
          color="primary"
          class="me-3"
          :to="{ name: 'apps-invoice-add' }"
        >
          <v-icon
            size="18"
            class="me-1"
          >
            {{ icons.mdiPlus }}
          </v-icon>
          <span>Create Invoice</span>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center pb-5">
        <v-text-field
          v-model="searchQuery"
          single-line
          dense
          outlined
          hide-details
          placeholder="Search Invoice"
          class="invoice-list-search me-3"
        ></v-text-field>

        <v-select
          v-model="statusFilter"
          :items="statusOptions"
          single-line
          outlined
          dense
          hide-details
          clearable
          placeholder="Select Status"
          class="invoice-list-status"
        ></v-select>
      </div>
    </v-card-text>

    <!-- table -->
    <v-data-table
      v-model="selectedTableData"
      :headers="tableColumns"
      :items="invoiceListTable"
      :options.sync="options"
      :server-items-length="totalInvoiceListTable"
      :loading="loading"
      show-select
      class="text-no-wrap"
    >
      <!-- trending header -->
      <template #[`header.trending`]>
        <v-icon size="22">
          {{ icons.mdiTrendingUp }}
        </v-icon>
      </template>

      <!-- id -->
      <template #[`item.id`]="{ item }">
        <router-link
          class="font-weight-medium text-decoration-none"
          :to="{ name: 'apps-invoice-preview', params: { id: item.id } }"
        >
          #{{ item.id }}
        </router-link>
      </template>

      <!-- status  -->
      <template #[`item.trending`]="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar
              size="30"
              :color="resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant"
              :class="`v-avatar-light-bg ${resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant}--text`"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon
                size="18"
                :color="resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).variant"
              >
                {{ resolveInvoiceStatusVariantAndIcon(item.invoiceStatus).icon }}
              </v-icon>
            </v-avatar>
          </template>
          <span>{{ item.invoiceStatus }}</span>
        </v-tooltip>
      </template>

      <!-- client -->
      <template #[`item.client`]="{ item }">
        <div class="d-flex align-center">
          <v-avatar
            :color="resolveClientAvatarVariant(item.invoiceStatus)"
            :class="`v-avatar-light-bg ${resolveClientAvatarVariant(item.invoiceStatus)}--text`"
            size="30"
          >
            <v-img
              v-if="item.avatar"
              :src="require(`@/assets/images/avatars/${item.avatar}`)"
            ></v-img>
            <span
              v-else
              class="font-weight-medium"
            >{{ avatarText(item.client.name) }}</span>
          </v-avatar>

          <div class="d-flex flex-column ms-3">
            <span class="d-block text--primary font-weight-semibold text-truncate">{{ item.client.name }}</span>
            <span class="text-xs">{{ item.client.companyEmail }}</span>
          </div>
        </div>
      </template>

      <!-- total -->
      <template #[`item.total`]="{ item }">
        ⚡️{{ item.total }}
      </template>

      <!-- Balance -->
      <template #[`item.balance`]="{ item }">
        <span v-if="checkType(item.balance) !== 'number'">
          {{ item.balance }}
        </span>

        <!-- chip -->
        <v-chip
          v-else
          small
          :color="item.total !== item.balance ? 'success' : 'error'"
          :class="`v-chip-light-bg ${item.total !== item.balance ? 'success' : 'error'}--text font-weight-semibold`"
        >
          {{ item.total !== item.balance ? 'Paid' : 'Unpaid' }}
        </v-chip>
      </template>

      <!-- date -->
      <template #[`item.issuedDate`]="{ item }">
        <span class="text-no-wrap">{{ item.issuedDate }}</span>
      </template>

      <!-- actions -->
      <template #[`item.actions`]="{ item }">
        <div class="d-flex align-center justify-center">
          <!-- delete -->
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                icon
                small
                v-bind="attrs"
                v-on="on"
              >
                <v-icon size="18">
                  {{ icons.mdiDeleteOutline }}
                </v-icon>
              </v-btn>
            </template>
            <span>Delete</span>
          </v-tooltip>

          <!-- view  -->
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                icon
                small
                v-bind="attrs"
                :to="{ name: 'apps-invoice-preview', params: { id: item.id } }"
                v-on="on"
              >
                <v-icon size="18">
                  {{ icons.mdiEyeOutline }}
                </v-icon>
              </v-btn>
            </template>
            <span>View Invoice</span>
          </v-tooltip>

          <!-- dropdown -->
          <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                small
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon size="18">
                  {{ icons.mdiDotsVertical }}
                </v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(option, i) in actionOptions"
                :key="i"
                href="javascript:void(0)"
              >
                <v-list-item-title>
                  <v-icon
                    size="18"
                    class="me-2"
                  >
                    {{ option.icon }}
                  </v-icon>
                  <span>{{ option.title }}</span>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import {
  mdiTrendingUp,
  mdiPlus,
  mdiDeleteOutline,
  mdiDotsVertical,
  mdiEyeOutline,
  mdiDownloadOutline,
  mdiPencilOutline,
  mdiContentCopy,
} from '@mdi/js'

import { onUnmounted, ref } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import store from '@/store'

// store module
import invoiceStoreModule from '../invoiceStoreModule'

// composition function
import useInvoicesList from './useInvoiceList'

export default {
  setup() {
    const INVOICE_APP_STORE_MODULE_NAME = 'app-invoice'

    // Register module
    if (!store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) {
      store.registerModule(INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.unregisterModule(INVOICE_APP_STORE_MODULE_NAME)
    })

    const {
      invoiceListTable,
      searchQuery,
      tableColumns,
      options,
      statusFilter,
      totalInvoiceListTable,
      loading,
      selectedTableData,
      resolveInvoiceStatusVariantAndIcon,
      resolveClientAvatarVariant,
    } = useInvoicesList()

    const statusOptions = ref(['Downloaded', 'Draft', 'Paid', 'Partial Payment', 'Past Due'])

    const actions = ['Delete', 'Edit', 'Send']

    const selectedAction = ref('')

    const actionOptions = [
      { title: 'Download', icon: mdiDownloadOutline },
      { title: 'Edit', icon: mdiPencilOutline },
      { title: 'Delete', icon: mdiDeleteOutline },
      { title: 'Duplicate', icon: mdiContentCopy },
    ]

    const checkType = data => {
      if (typeof data === 'number') return 'number'
      if (typeof data === 'string') return 'string'

      return 0
    }

    return {
      tableColumns,
      searchQuery,
      statusOptions,
      statusFilter,
      options,
      totalInvoiceListTable,
      invoiceListTable,
      loading,
      actions,
      selectedTableData,
      actionOptions,
      selectedAction,

      checkType,
      avatarText,
      resolveInvoiceStatusVariantAndIcon,
      resolveClientAvatarVariant,

      icons: {
        mdiTrendingUp,
        mdiPlus,
        mdiDeleteOutline,
        mdiDotsVertical,
        mdiEyeOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
#invoice-list {
  .invoice-list-actions {
    max-width: 7.81rem;
  }
  .invoice-list-search {
    max-width: 10.625rem;
  }
  .invoice-list-status {
    max-width: 11.3rem;
  }
}
</style>
