<template>
  <v-row class="app-invoice-preview">
    <v-col
      cols="12"
      md="9"
    >
      <v-card v-if="invoiceData">
        <!-- Header -->
        <v-card-text class="py-9 px-8">
          <div class="invoice-header d-flex flex-wrap justify-space-between flex-column flex-sm-row">
            <!-- Left Content -->
            <div class="mb-8 mb-sm-0">
              <div class="d-flex align-center mb-6">
                <v-img
                  :src="appLogo"
                  max-height="30px"
                  max-width="30px"
                  alt="logo"
                  contain
                  class="me-3 "
                ></v-img>
                <span class="text--primary font-weight-bold text-xl">
                  {{ appName }}
                </span>
              </div>
              <span class="d-block">Office 149, 450 South Brand Brooklyn</span>
              <span class="d-block">San Diego County, CA 91905, USA</span>
              <span class="d-block">+1 (123) 456 7891, +44 (876) 543 2198</span>
            </div>
            <!-- Right Content -->
            <div>
              <p class="font-weight-medium text-xl text--primary mb-4">
                Invoice #{{ invoiceData.id }}
              </p>
              <p class="mb-2">
                <span>Date Issued: </span>
                <span class="font-weight-semibold">{{ invoiceData.issuedDate }}</span>
              </p>
              <p class="mb-2">
                <span>Due Date: </span>
                <span class="font-weight-semibold">{{ invoiceData.dueDate }}</span>
              </p>
            </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <!-- Payment Details -->
        <v-card-text class="py-9 px-8">
          <div class="payment-details d-flex justify-space-between flex-wrap flex-column flex-sm-row">
            <div class="mb-8 mb-sm-0">
              <p class="font-weight-semibold payment-details-header">
                Invoice To:
              </p>
              <p class="mb-1">
                {{ invoiceData.client.name }}
              </p>
              <p class="mb-1">
                {{ invoiceData.client.company }}
              </p>
              <p class="mb-1">
                {{ invoiceData.client.address }}, {{ invoiceData.client.country }}
              </p>
              <p class="mb-1">
                {{ invoiceData.client.contact }}
              </p>
              <p class="mb-0">
                {{ invoiceData.client.companyEmail }}
              </p>
            </div>
            <div>
              <p class="font-weight-semibold payment-details-header">
                Bill To:
              </p>
              <table>
                <tr>
                  <td class="pe-6">
                    Total Due:
                  </td>
                  <td>
                    {{ paymentDetails.totalDue }}
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    Bank Name:
                  </td>
                  <td>
                    {{ paymentDetails.bankName }}
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    Country:
                  </td>
                  <td>
                    {{ paymentDetails.country }}
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    IBAN:
                  </td>
                  <td>
                    {{ paymentDetails.iban }}
                  </td>
                </tr>
                <tr>
                  <td class="pe-6">
                    SWIFT Code:
                  </td>
                  <td>
                    {{ paymentDetails.swiftCode }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </v-card-text>

        <!-- Table -->
        <v-simple-table class="purchased-items-table">
          <template v-slot:default>
            <thead>
              <tr>
                <th>
                  ITEM
                </th>
                <th>
                  DESCRIPTION
                </th>
                <th>
                  COST
                </th>
                <th>
                  HOURS
                </th>
                <th>
                  PRICE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in purchasedProducts"
                :key="item.name"
              >
                <td class="text-no-wrap">
                  {{ item.name }}
                </td>
                <td class="text-no-wrap">
                  {{ item.description }}
                </td>
                <td>
                  {{ item.cost }}
                </td>
                <td>
                  {{ item.hours }}
                </td>
                <td class="text-center">
                  {{ item.price }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <!-- Total -->
        <v-card-text class="py-9 px-8">
          <div class="invoice-total d-flex justify-space-between flex-column flex-sm-row">
            <div class="mb-2 mb-sm-0">
              <p class="mb-1">
                <span class="font-weight-semibold">Salesperson:</span> <span>Jenny Parker</span>
              </p>
              <p>Thanks for your business</p>
            </div>
            <div>
              <table>
                <tr>
                  <td class="pe-16">
                    Subtotal:
                  </td>
                  <th :class="$vuetify.rtl ? 'text-left' : 'text-right'">
                    $1800
                  </th>
                </tr>
                <tr>
                  <td class="pe-16">
                    Discount:
                  </td>
                  <th :class="$vuetify.rtl ? 'text-left' : 'text-right'">
                    $28
                  </th>
                </tr>
                <tr>
                  <td class="pe-16">
                    Tax:
                  </td>
                  <th :class="$vuetify.rtl ? 'text-left' : 'text-right'">
                    21%
                  </th>
                </tr>
              </table>
              <v-divider class="mt-4 mb-3"></v-divider>
              <table class="w-full">
                <tr>
                  <td class="pe-16">
                    Total:
                  </td>
                  <th :class="$vuetify.rtl ? 'text-left' : 'text-right'">
                    $1690
                  </th>
                </tr>
              </table>
            </div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="px-8 py-6">
          <p class="mb-0">
            <span class="font-weight-semibold">Note: </span>
            <span>It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!</span>
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Right Column: Invoice Action -->
    <v-col
      cols="12"
      md="3"
    >
      <v-card>
        <v-card-text>
          <v-btn
            color="primary"
            class="mb-3"
            block
            @click="isInvoiceSendSidebarActive = true"
          >
            <v-icon
              class="me-2"
              left
            >
              {{ icons.mdiSendOutline }}
            </v-icon>
            <span>Send Invoice</span>
          </v-btn>
          <v-btn
            class="mb-3"
            color="secondary"
            block
            outlined
          >
            Download
          </v-btn>
          <v-btn
            class="mb-3"
            color="secondary"
            block
            outlined
            @click="printInvoice"
          >
            Print
          </v-btn>
          <v-btn
            class="mb-3"
            color="secondary"
            block
            outlined
            :to="{ name: 'apps-invoice-edit', params: { id: $route.params.id } }"
          >
            Edit Invoice
          </v-btn>
          <v-btn
            color="success"
            block
            @click="isAddPaymentSidebarActive = true"
          >
            <v-icon
              class="me-2"
              left
            >
              {{ icons.mdiCurrencyUsd }}
            </v-icon>
            <span>Add Payment</span>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- invoice send drawer -->
    <invoice-sidebar-send-invoice v-model="isInvoiceSendSidebarActive"></invoice-sidebar-send-invoice>

    <!-- invoice add payment drawer -->
    <invoice-sidebar-add-payment v-model="isAddPaymentSidebarActive"></invoice-sidebar-add-payment>
  </v-row>
</template>

<script>
import { ref, onUnmounted } from '@vue/composition-api'
import { mdiSendOutline, mdiCurrencyUsd } from '@mdi/js'
import themeConfig from '@themeConfig'
import store from '@/store'
import router from '@/router'

import invoiceStoreModule from '../invoiceStoreModule'
import InvoiceSidebarSendInvoice from '../InvoiceSidebarSendInvoice.vue'
import InvoiceSidebarAddPayment from '../InvoiceSidebarAddPayment.vue'

export default {
  components: {
    InvoiceSidebarSendInvoice,
    InvoiceSidebarAddPayment,
  },
  setup() {
    const invoiceData = ref(null)
    const paymentDetails = ref({})

    const isInvoiceSendSidebarActive = ref(false)
    const isAddPaymentSidebarActive = ref(false)

    // Invoice Description
    // ? Your real data will contain this information
    const purchasedProducts = [
      {
        name: 'Premium Branding Package',
        description: 'Branding & Promotion',
        cost: 98,
        hours: 15,
        price: 32,
      },
      {
        name: 'SMM',
        description: 'Social media templates',
        cost: 49,
        hours: 14,
        price: 28,
      },
      {
        name: 'Web Design',
        description: 'Web designing package',
        cost: 30,
        hours: 12,
        price: 24,
      },
      {
        name: 'SEO',
        description: 'Search engine optimization',
        cost: 12,
        hours: 5,
        price: 22,
      },
    ]

    // ————————————————————————————————————
    //* ——— Store Registration
    // ————————————————————————————————————

    const INVOICE_APP_STORE_MODULE_NAME = 'app-invoice'

    // Register module
    if (!store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) {
      store.registerModule(INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.unregisterModule(INVOICE_APP_STORE_MODULE_NAME)
    })

    // ————————————————————————————————————
    //* ——— Invoice
    // ————————————————————————————————————

    store
      .dispatch('app-invoice/fetchInvoice', { id: router.currentRoute.params.id })
      .then(response => {
        invoiceData.value = response.data.invoice
        paymentDetails.value = response.data.paymentDetails
      })
      .catch(error => {
        if (error.response.status === 404) {
          invoiceData.value = undefined
        }
      })

    const printInvoice = () => {
      window.print()
    }

    return {
      invoiceData,
      paymentDetails,
      purchasedProducts,

      // invoiceDescription,
      printInvoice,

      // drawer
      isInvoiceSendSidebarActive,
      isAddPaymentSidebarActive,

      // themeConfig
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,

      icons: {
        mdiSendOutline,
        mdiCurrencyUsd,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/apps/invoice.scss';

@media print {
  .v-application {
    background: none !important;
  }

  .app-navigation-menu,
  .v-app-bar,
  .v-footer,
  .product-buy-now,
  .app-invoice-preview.row .col-12:last-of-type {
    display: none !important;
  }

  .app-invoice-preview.row .col-12:first-child {
    max-width: 100% !important;
    flex: 1 !important;
  }

  .v-main,
  .app-content-container {
    padding: 0px !important;
  }

  .v-card {
    box-shadow: none !important;
  }

  .app-invoice-preview {
    .invoice-header,
    .payment-details,
    .invoice-total {
      &.d-flex {
        flex-direction: row !important;
      }
    }
  }
}
</style>
