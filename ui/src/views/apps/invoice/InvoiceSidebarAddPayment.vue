<template>
  <v-navigation-drawer
    :value="isAddPaymentSidebarActive"
    temporary
    touchless
    :right="!$vuetify.rtl"
    width="350"
    app
    @input="(val) => $emit('update:is-add-payment-sidebar-active', val)"
  >
    <v-card height="100%">
      <div class="drawer-header d-flex align-center mb-4">
        <h4 class="font-weight-semibold text-base">
          Add Payment
        </h4>
        <v-spacer></v-spacer>
        <v-btn
          icon
          small
          @click="$emit('update:is-add-payment-sidebar-active',false)"
        >
          <v-icon size="22">
            {{ icons.mdiClose }}
          </v-icon>
        </v-btn>
      </div>

      <v-card-text class="pt-5">
        <v-form>
          <!-- balance -->
          <v-text-field
            v-model="addPaymentData.balance"
            outlined
            label="Invoice Balance"
            dense
            hide-details="auto"
            class="mb-6"
          ></v-text-field>

          <!-- amount -->
          <v-text-field
            v-model="addPaymentData.amount"
            outlined
            label="Payment Amount"
            dense
            hide-details="auto"
            class="mb-6"
          ></v-text-field>

          <!-- date -->
          <v-menu
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="addPaymentData.paymentDate"
                outlined
                dense
                label="Payment Date"
                :prepend-icon="icons.mdiCalendar"
                readonly
                v-bind="attrs"
                hide-details="auto"
                class="mb-6"
                v-on="on"
              ></v-text-field>
            </template>

            <v-date-picker
              v-model="addPaymentData.paymentDate"
              color="primary"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>

          <!-- payment method -->
          <v-select
            v-model="addPaymentData.selectedPaymentMethod"
            :items="paymentOptions"
            outlined
            dense
            label="Select Payment Method"
          ></v-select>

          <!-- note -->
          <v-textarea
            v-model="addPaymentData.paymentNote"
            label="Internal Payment Note"
            placeholder="Internal Payment Note"
            outlined
          >
          </v-textarea>

          <div class="d-flex flex-wrap">
            <v-btn
              color="primary"
              class="me-3"
              @click="$emit('update:is-add-payment-sidebar-active',false)"
            >
              send
            </v-btn>
            <v-btn
              color="secondary"
              outlined
              @click="$emit('update:is-add-payment-sidebar-active',false)"
            >
              cancel
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import { mdiClose } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  model: {
    prop: 'isAddPaymentSidebarActive',
    event: 'update:is-add-payment-sidebar-active',
  },
  props: {
    isAddPaymentSidebarActive: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const date = new Date().toISOString().substr(0, 10)
    const addPaymentData = ref({
      balance: 5000,
      amount: null,
      paymentDate: new Date().toISOString().substr(0, 10),
      selectedPaymentMethod: '',
      paymentNote: '',

      // ? Need to handle how you want to send item
      // * You can also send link to download invoice in message
    })
    const paymentOptions = ['Cash', 'Bank Transfer', 'Debit', 'Credit', 'Paypal']

    return {
      date,
      addPaymentData,
      paymentOptions,
      icons: {
        mdiClose,
      },
    }
  },
}
</script>
