<template>
  <v-card
    v-if="data.invoiceData"
    class="app-invoice-editable"
  >
    <!-- Header -->
    <v-card-text class="py-9 px-8">
      <div class="invoice-header d-flex flex-wrap justify-space-between">
        <!-- Left Content -->
        <div class="mb-6">
          <div class="d-flex align-center mb-6">
            <v-img
              :src="appLogo"
              max-height="30px"
              max-width="30px"
              alt="logo"
              contain
              class="me-3"
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
        <div :class="$vuetify.rtl ? 'text-left' : 'text-right'">
          <div class="mb-4 d-flex align-center justify-end">
            <span class="me-2 font-weight-medium text-xl text--primary">Invoice:</span>
            <v-text-field
              v-model.number="data.invoiceData.id"
              outlined
              disabled
              dense
              class="header-inputs flex-grow-0"
              hide-details="auto"
            ></v-text-field>
          </div>
          <div class="mb-4 d-flex align-center">
            <span class="me-2">Date Issued: </span>
            <v-menu
              v-model="isIssueDateMenuOpen"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              eager
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="data.invoiceData.issuedDate"
                  class="header-inputs flex-grow-0"
                  readonly
                  outlined
                  dense
                  hide-details="auto"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="data.invoiceData.issuedDate"
                @input="isIssueDateMenuOpen = false"
              ></v-date-picker>
            </v-menu>
          </div>
          <div class="mb-2 d-flex align-center justify-end">
            <span class="me-2">Due Date: </span>
            <v-menu
              v-model="isDueDateMenuOpen"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              eager
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="data.invoiceData.dueDate"
                  class="header-inputs flex-grow-0"
                  readonly
                  outlined
                  dense
                  hide-details="auto"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="data.invoiceData.dueDate"
                @input="isDueDateMenuOpen = false"
              ></v-date-picker>
            </v-menu>
          </div>
        </div>
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <!-- Payment Details -->
    <v-card-text class="py-9 px-8">
      <div class="d-flex justify-space-between flex-wrap flex-column flex-sm-row">
        <div class="mb-6 mb-sm-0">
          <p class="font-weight-semibold payment-details-header">
            Invoice To:
          </p>
          <v-select
            v-model="data.invoiceData.client"
            outlined
            :menu-props="{ offsetY: true }"
            :items="clients"
            dense
            item-text="name"
            item-value="company"
            return-object
            placeholder="Select Customer"
            class="select-invoice-to"
          ></v-select>
          <p class="mb-1">
            {{ data.invoiceData.client.name }}
          </p>
          <p class="mb-1">
            {{ data.invoiceData.client.company }}
          </p>
          <p
            v-if="data.invoiceData.client.address"
            class="mb-1"
          >
            {{ data.invoiceData.client.address }}, {{ data.invoiceData.client.country }}
          </p>
          <p class="mb-1">
            {{ data.invoiceData.client.contact }}
          </p>
          <p class="mb-0">
            {{ data.invoiceData.client.companyEmail }}
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
                {{ data.paymentDetails.totalDue }}
              </td>
            </tr>
            <tr>
              <td class="pe-6">
                Bank Name:
              </td>
              <td>
                {{ data.paymentDetails.bankName }}
              </td>
            </tr>
            <tr>
              <td class="pe-6">
                Country:
              </td>
              <td>
                {{ data.paymentDetails.country }}
              </td>
            </tr>
            <tr>
              <td class="pe-6">
                IBAN:
              </td>
              <td>
                {{ data.paymentDetails.iban }}
              </td>
            </tr>
            <tr>
              <td class="pe-6">
                SWIFT Code:
              </td>
              <td>
                {{ data.paymentDetails.swiftCode }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <!-- Add purchased products -->
    <div class="add-products-form pt-9 pb-10 px-8">
      <div
        v-for="(purchasedProduct, purchasedProductIndex) in data.purchasedProducts"
        :key="purchasedProductIndex"
        class="single-product-form"
      >
        <div class="add-products-header mb-2 d-none d-md-flex">
          <div class="px-5 flex-grow-1 font-weight-semibold">
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <span>Item</span>
              </v-col>
              <v-col
                cols="12"
                md="2"
              >
                <span>Cost</span>
              </v-col>
              <v-col
                cols="12"
                md="2"
              >
                <span>Hours</span>
              </v-col>
              <v-col
                cols="12"
                md="2"
              >
                <span>Price</span>
              </v-col>
            </v-row>
          </div>
          <div class="header-spacer"></div>
        </div>
        <v-card
          outlined
          class="d-flex"
        >
          <!-- Left Form -->
          <div class="pa-5 flex-grow-1">
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-select
                  v-model="purchasedProduct.itemTitle"
                  outlined
                  dense
                  :items="itemsOptions"
                  item-text="itemTitle"
                  item-value="itemTitle"
                  :menu-props="{ offsetY : true }"
                  placeholder="Select Item"
                  label="Select Item"
                  hide-details="auto"
                  return-object
                  class="mb-3"
                  @input="obj => updateItemForm(purchasedProductIndex, obj)"
                ></v-select>
                <v-textarea
                  v-model="purchasedProduct.description"
                  outlined
                  label="Description"
                  rows="3"
                  hide-details="auto"
                  placeholder="Description"
                ></v-textarea>
              </v-col>
              <v-col
                cols="12"
                md="2"
                sm="4"
              >
                <v-text-field
                  v-model.number="purchasedProduct.cost"
                  outlined
                  dense
                  min="0"
                  type="number"
                  hide-details="auto"
                  label="Cost"
                  placeholder="$"
                  @input="val => { purchasedProduct.cost = Math.abs(val) }"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="2"
                sm="4"
              >
                <v-text-field
                  v-model.number="purchasedProduct.hours"
                  outlined
                  dense
                  min="0"
                  type="number"
                  hide-details="auto"
                  label="Hours"
                  placeholder="Hours"
                  @input="val => { purchasedProduct.hours = Math.abs(val) }"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="2"
                sm="4"
              >
                <p class="my-2">
                  <span class="d-inline d-md-none">Price: </span>
                  <span>${{ purchasedProduct.cost * purchasedProduct.hours }}</span>
                </p>
              </v-col>
            </v-row>
          </div>
          <!-- Item Actions -->
          <div class="d-flex flex-column item-actions rounded-0 pa-1">
            <v-btn
              icon
              small
              @click="data.purchasedProducts.splice(purchasedProductIndex, 1)"
            >
              <v-icon size="20">
                {{ icons.mdiClose }}
              </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              icon
              small
            >
              <v-icon size="20">
                {{ icons.mdiCogOutline }}
              </v-icon>
            </v-btn>
          </div>
        </v-card>
      </div>
      <v-btn
        color="primary"
        class="mt-4"
        outlined
        @click="addNewItem"
      >
        Add Item
      </v-btn>
    </div>

    <v-divider></v-divider>

    <!-- Total -->
    <v-card-text class="py-9 px-8">
      <div class="d-flex justify-space-between flex-wrap flex-column flex-sm-row">
        <div class="mb-6 mb-sm-0">
          <div class="mb-4 d-flex align-center">
            <span class="font-weight-semibold me-2">Salesperson:</span>
            <v-text-field
              v-model="data.salesperson"
              outlined
              dense
              hide-details="auto"
              class="input-salesperson"
            ></v-text-field>
          </div>
          <v-text-field
            v-model="data.thanksNote"
            outlined
            dense
            hide-details="auto"
            placeholder="Thanks for your business"
            class="input-thanks-note"
          ></v-text-field>
        </div>
        <div>
          <table class="w-full">
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
      <div class="mb-0">
        <p class="font-weight-semibold mb-2">
          Note:
        </p>
        <v-textarea
          v-model="data.note"
          outlined
          rows="3"
          hide-details="auto"
          placeholder="It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"
        ></v-textarea>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import themeConfig from '@themeConfig'
import { ref, onUnmounted } from '@vue/composition-api'
import { mdiClose, mdiCogOutline } from '@mdi/js'
import store from '@/store'
import invoiceStoreModule from './invoiceStoreModule'

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
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

    const isIssueDateMenuOpen = ref(false)
    const isDueDateMenuOpen = ref(false)

    const clients = ref([])
    store.dispatch('app-invoice/fetchClients').then(response => {
      clients.value = response.data
    })

    const itemsOptions = [
      {
        itemTitle: 'App Design',
        cost: 24,
        hours: 1,
        description: 'Designed UI kit & app pages.',
      },
      {
        itemTitle: 'App Customization',
        cost: 26,
        hours: 1,
        description: 'Customization & Bug Fixes.',
      },
      {
        itemTitle: 'ABC Template',
        cost: 28,
        hours: 1,
        description: 'Vuetify admin template.',
      },
      {
        itemTitle: 'App Development',
        cost: 32,
        hours: 1,
        description: 'Native App Development.',
      },
    ]

    const updateItemForm = (index, val) => {
      const { cost, hours, description } = val
      /* eslint-disable no-param-reassign */
      props.data.purchasedProducts[index].cost = cost
      props.data.purchasedProducts[index].hours = hours
      props.data.purchasedProducts[index].description = description
      /* eslint-enable */
    }

    const addNewItem = () => {
      props.data.purchasedProducts.push({
        itemTitle: '',
        cost: 0,
        hours: 0,
        description: '',
      })
    }

    return {
      isIssueDateMenuOpen,
      isDueDateMenuOpen,

      clients,
      itemsOptions,
      updateItemForm,
      addNewItem,

      // themeConfig
      appName: themeConfig.app.name,
      appLogo: themeConfig.app.logo,

      // Icons
      icons: {
        mdiClose,
        mdiCogOutline,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/apps/invoice.scss';

.app-invoice-editable {
  .input-salesperson {
    width: 100px;
  }

  .select-invoice-to {
    width: 190px !important;
  }

  .header-inputs {
    width: 122px;
  }

  .add-products-form {
    .single-product-form {
      &:not(:first-child) {
        margin-top: 2rem;
      }
    }

    .header-spacer {
      // This is according to item actions width
      width: 39px;
    }
    .item-actions {
      @at-root {
        @include theme--child(add-products-form) using ($material) {
          .item-actions {
            border-left: thin solid map-deep-get($material, 'dividers');
          }
        }
      }
    }
  }
}
</style>
