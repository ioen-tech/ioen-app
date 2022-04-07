<template>
  <v-row class="app-invoice-preview">
    <v-col
      cols="12"
      md="9"
    >
      <invoice-editable :data="invoiceData">
      </invoice-editable>
    </v-col>

    <!-- Right Column: Invoice Action -->
    <v-col
      cols="12"
      md="3"
    >
      <v-card class="mb-6">
        <v-card-text>
          <v-btn
            color="primary"
            class="mb-3"
            block
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
            Preview
          </v-btn>
          <v-btn
            color="secondary"
            block
            outlined
          >
            Save
          </v-btn>
        </v-card-text>
      </v-card>

      <v-select
        outlined
        :items="paymentMethods"
        dense
        placeholder="Accept Payment Via"
        :menu-props="{ offsetY: true }"
        hide-details="auto"
        class="mb-6"
      ></v-select>

      <div class="d-flex align-center justify-space-between mb-3">
        <span>Payment Terms</span>
        <v-switch
          hide-details="auto"
          :input-value="true"
          class="mt-0"
        ></v-switch>
      </div>

      <div class="d-flex align-center justify-space-between mb-3">
        <span>Client Notes</span>
        <v-switch
          hide-details="auto"
          :input-value="false"
          class="mt-0"
        ></v-switch>
      </div>
      <div class="d-flex align-center justify-space-between">
        <span>Payment Stub</span>
        <v-switch
          hide-details="auto"
          :input-value="false"
          class="mt-0"
        ></v-switch>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mdiSendOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import InvoiceEditable from '../InvoiceEditable.vue'

export default {
  components: {
    InvoiceEditable,
  },
  setup() {
    const invoiceData = ref({
      invoiceData: {
        id: 5037,
        issuedDate: '',
        service: '',
        total: '',
        avatar: '',
        invoiceStatus: '',
        balance: '',
        dueDate: '',
        client: {},
      },
      paymentDetails: {
        totalDue: '$12,110.55',
        bankName: 'American Bank',
        country: 'United States',
        iban: 'ETD95476213874685',
        swiftCode: 'BR91905',
      },
      purchasedProducts: [
        {
          itemTitle: '',
          cost: 0,
          hours: 0,
          description: '',
        },
      ],
    })

    const paymentMethods = ['Bank Account', 'PayPal', 'UPI Transfer']

    return {
      invoiceData,
      paymentMethods,

      // Icons
      icons: {
        mdiSendOutline,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/apps/invoice.scss';
</style>
