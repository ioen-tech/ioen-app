<template>
  <v-navigation-drawer
    :value="isInvoiceSendSidebarActive"
    temporary
    touchless
    :right="!$vuetify.rtl"
    width="350"
    app
    @input="(val) => $emit('update:is-invoice-send-sidebar-active', val)"
  >
    <v-card height="100%">
      <div class="drawer-header d-flex align-center mb-4">
        <h4 class="font-weight-semibold text-base">
          Send Invoice
        </h4>
        <v-spacer></v-spacer>
        <v-btn
          icon
          small
          @click="$emit('update:is-invoice-send-sidebar-active',false)"
        >
          <v-icon size="22">
            {{ icons.mdiClose }}
          </v-icon>
        </v-btn>
      </div>

      <v-card-text class="pt-5">
        <v-form>
          <!-- from -->
          <v-text-field
            v-model="sendInvoiceData.from"
            outlined
            label="From"
            dense
            hide-details="auto"
            class="mb-6"
          ></v-text-field>

          <!-- to -->
          <v-text-field
            v-model="sendInvoiceData.to"
            outlined
            label="To"
            dense
            hide-details="auto"
            class="mb-6"
          ></v-text-field>

          <!-- subject -->
          <v-text-field
            v-model="sendInvoiceData.subject"
            outlined
            label="Subject"
            dense
            hide-details="auto"
            class="mb-6"
          ></v-text-field>

          <!-- Message -->
          <v-textarea
            v-model="sendInvoiceData.message"
            outlined
            label="Message"
            rows="11"
            hide-details="auto"
            class="mb-6"
          >
          </v-textarea>

          <!-- attached invoice chip -->
          <v-chip
            color="primary"
            small
            label
            class="v-chip-light-bg primary--text mb-6"
          >
            Invoice Attached
          </v-chip>

          <div class="d-flex flex-wrap">
            <v-btn
              color="primary"
              class="me-3"
              @click="$emit('update:is-invoice-send-sidebar-active',false)"
            >
              send
            </v-btn>
            <v-btn
              color="secondary"
              outlined
              @click="$emit('update:is-invoice-send-sidebar-active',false)"
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
    prop: 'isInvoiceSendSidebarActive',
    event: 'update:is-invoice-send-sidebar-active',
  },
  props: {
    isInvoiceSendSidebarActive: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const sendInvoiceData = ref({
      from: 'shelbyComapny@email.com',
      to: 'qConsolidated@email.com',
      subject: 'Invoice of purchased Admin Templates',
      message: `Dear Queen Consolidated,

Thank you for your business, always a pleasure to work with you!

We have generated a new invoice in the amount of $95.59

We would appreciate payment of this invoice by 05/11/2019`,

      // ? Need to handle how you want to send item
      // * You can also send link to download invoice in message
    })

    return {
      sendInvoiceData,
      icons: {
        mdiClose,
      },
    }
  },
}
</script>
