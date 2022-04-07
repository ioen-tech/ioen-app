<template>
  <v-card
    flat
    class="pa-3"
  >
    <v-card-text>
      <v-form class="multi-col-validation">
        <v-row>
          <v-col
            cols="12"
            md="8"
            sm="6"
          >
            <v-row>
              <v-col cols="12">
                <span class="text-xs">Payment Method</span>
                <v-radio-group
                  v-model="selectedPaymentMethod"
                  row
                  hide-details
                  class="mt-2"
                >
                  <v-radio
                    value="credit-debit-atm-card"
                    label="Credit/Debit/ATM Card"
                  ></v-radio>
                  <v-radio
                    value="cod-cheque"
                    label="COD/Cheque"
                    class="mt-3 mt-md-0"
                  ></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Name"
                  dense
                  value="john Doe"
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Card Number"
                  value="13563 21565 48789"
                  dense
                  outlined
                >
                </v-text-field>
              </v-col>

              <v-col
                cols="6"
                md="4"
              >
                <v-text-field
                  label="Expiry Date"
                  value="0524"
                  outlined
                  dense
                ></v-text-field>
              </v-col>

              <v-col
                cols="6"
                md="4"
              >
                <v-text-field
                  type="password"
                  label="CVV Code"
                  value="0524"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>

          <v-col
            cols="12"
            md="4"
            sm="6"
          >
            <v-card outlined>
              <v-card-text>
                <v-checkbox
                  v-model="currentPlan"
                  class="mt-0"
                >
                  <template #label>
                    <h3 class="text-xl font-weight-medium">
                      Your Current Plan
                    </h3>
                  </template>
                </v-checkbox>

                <v-chip
                  small
                  color="primary"
                  class="v-chip-light-bg primary--text font-weight-semibold"
                >
                  Basic Plan
                </v-chip>

                <v-list dense>
                  <v-list-item class="px-0">
                    <v-icon size="20">
                      {{ icons.mdiAccountOutline }}
                    </v-icon>
                    <span class="ms-2">5 Users</span>
                  </v-list-item>

                  <v-list-item class="px-0">
                    <v-icon size="20">
                      {{ icons.mdiCloudOutline }}
                    </v-icon>
                    <span class="ms-2">10 GB storage</span>
                  </v-list-item>

                  <v-list-item class="px-0">
                    <v-icon size="20">
                      {{ icons.mdiHelpCircleOutline }}
                    </v-icon>
                    <span class="ms-2">Basic Support</span>
                  </v-list-item>
                </v-list>

                <v-btn
                  color="primary"
                  block
                  class="mt-2"
                  @click="isPlanUpgradeDialogVisible = !isPlanUpgradeDialogVisible"
                >
                  Upgrade Plan
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-btn
              color="primary"
              class="me-3 mt-3"
            >
              Save changes
            </v-btn>
            <v-btn
              color="secondary"
              outlined
              class="mt-3"
            >
              Cancel
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>

    <v-dialog
      v-model="isPlanUpgradeDialogVisible"
      max-width="650"
    >
      <v-card class="py-8">
        <v-card-title class="justify-center text-h5 px-5">
          Upgrade Plan
        </v-card-title>
        <v-card-text class="text-center mt-n2 px-5">
          Choose the best plan for user.
        </v-card-text>
        <v-card-text class="d-flex align-center flex-wrap flex-sm-nowrap mt-5 px-15">
          <v-select
            v-model="selectedPlan"
            label="Choose Plan"
            :items="plansList"
            item-text="text"
            item-value="value"
            outlined
            dense
            hide-details
            class="me-3"
          ></v-select>
          <v-btn
            color="primary"
            class="mt-3 mt-sm-0"
          >
            Upgrade
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="px-15 pt-8">
          <p class="font-weight-medium text--primary mb-2">
            User current plan is standard plan
          </p>
          <div class="d-flex justify-space-between flex-wrap">
            <div class="user-pricing me-3">
              <sup class="primary--text">$</sup>
              <span class="text-5xl font-weight-semibold primary--text">99</span>
              <sub class="text-base font-weight-light">/ month</sub>
            </div>
            <v-btn
              color="error"
              outlined
              class="mt-3"
            >
              Cancel Subscription
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import { mdiAccountOutline, mdiCloudOutline, mdiHelpCircleOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const selectedPaymentMethod = ref('credit-debit-atm-card')
    const currentPlan = ref(true)
    const isPlanUpgradeDialogVisible = ref(false)
    const selectedPlan = ref('standard')
    const plansList = [
      { text: 'Basic - $0/month', value: 'basic' },
      { text: 'Standard - $99/month', value: 'standard' },
      { text: 'Enterprise - $499/month', value: 'enterprise' },
      { text: 'Company - $999/month', value: 'company' },
    ]

    return {
      selectedPaymentMethod,
      currentPlan,
      selectedPlan,
      plansList,
      isPlanUpgradeDialogVisible,
      icons: {
        mdiAccountOutline,
        mdiCloudOutline,
        mdiHelpCircleOutline,
      },
    }
  },
}
</script>
