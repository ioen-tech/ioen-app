<template>
  <v-expansion-panels v-model="panel">
    <v-expansion-panel>
      <v-expansion-panel-header>
        <span class="text-base">Delivery Address</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-form class="multi-col-validation">
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Full Name"
                dense
                hide-details
                outlined
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Phone No"
                dense
                hide-details
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                label="Address"
                outlined
                rows="3"
              ></v-textarea>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Pincode"
                dense
                hide-details
                outlined
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="Landmark"
                dense
                hide-details
                outlined
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                label="City"
                dense
                hide-details
                outlined
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-select
                :items="stateList"
                outlined
                dense
                label="State"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <label>Address Type</label>
              <v-radio-group
                v-model="radios"
                mandatory
                row
              >
                <v-radio
                  label="Home (All day delivery)"
                  value="home"
                ></v-radio>
                <v-radio
                  label="Office (Delivery between 10 AM - 5 PM)"
                  value="office"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-form>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header>
        <span class="text-base">Delivery Options</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-radio-group v-model="deliveryOption">
          <div
            class="delivery-options"
            :class="deliveryOption === 'standard' ? 'active':''"
          >
            <div class="d-flex justify-space-between">
              <v-radio value="standard">
                <template #label>
                  <span class="text--primary text-lg font-weight-semibold">Standard 3-5 Days</span>
                </template>
              </v-radio>
              <span class="text-xl font-weight-bold">Free</span>
            </div>
            <span class="ms-8">Friday, 15 Nov - Monday, 18 Nov</span>
          </div>
          <div
            class="delivery-options"
            :class="deliveryOption === 'express' ? 'active':''"
          >
            <div class="d-flex justify-space-between">
              <v-radio value="express">
                <template #label>
                  <span class="text--primary text-lg font-weight-semibold">Express</span>
                </template>
              </v-radio>
              <span class="text-xl font-weight-bold">$5.00</span>
            </div>
            <span class="ms-8">Friday, 15 Nov - Sunday, 17 Nov</span>
          </div>
          <div
            class="delivery-options"
            :class="deliveryOption === 'overnight' ? 'active':''"
          >
            <div class="d-flex justify-space-between">
              <v-radio value="overnight">
                <template #label>
                  <span class="text--primary text-lg font-weight-semibold">Overnight</span>
                </template>
              </v-radio>
              <span class="text-xl font-weight-bold">$10.00</span>
            </div>
            <span class="ms-8">Friday, 15 Nov - Saturday, 16 Nov</span>
          </div>
        </v-radio-group>
      </v-expansion-panel-content>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-header>
        <span class="text-base">Payment Method</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col
            md="6"
            cols="12"
          >
            <v-form>
              <v-row>
                <v-col cols="12">
                  <v-radio-group
                    v-model="paymentMethod"
                    row
                  >
                    <v-radio value="credit-debit-card">
                      <template #label>
                        <span class="text--primary text-base me-1">Credit/Debit/ATM Card</span>
                        <v-icon size="18">
                          {{ icons.mdiCreditCardOutline }}
                        </v-icon>
                      </template>
                    </v-radio>
                    <v-radio value="cash-on-delivery">
                      <template #label>
                        <span class="text--primary text-base me-1">Cash On Delivery</span>
                        <v-icon size="18">
                          {{ icons.mdiHelpCircleOutline }}
                        </v-icon>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Card Number"
                    outlined
                    dense
                    hide-details
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Name"
                    outlined
                    dense
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="6"
                  md="3"
                >
                  <v-text-field
                    label="Expiry Date"
                    dense
                    outlined
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="6"
                  md="3"
                >
                  <v-text-field
                    label="CVV Code"
                    outlined
                    dense
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
        <v-divider class="my-5"></v-divider>
        <v-row>
          <v-col cols="12">
            <v-btn
              color="primary"
              class="me-5"
            >
              Place Order
            </v-btn>
            <v-btn
              outlined
              color="secondary"
            >
              Cancel
            </v-btn>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiCreditCardOutline, mdiHelpCircleOutline } from '@mdi/js'

export default {
  setup() {
    const stateList = [
      'Alabama',
      'Alaska',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'Florida',
      'Georgia',
      'Hawaii',
    ]
    const radios = ref('home')
    const deliveryOption = ref('standard')
    const paymentMethod = ref('credit-debit-card')
    const panel = ref(0)

    return {
      stateList,
      radios,
      deliveryOption,
      paymentMethod,
      panel,
      icons: {
        mdiCreditCardOutline,
        mdiHelpCircleOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/preset/preset/mixins.scss';

@include theme--child(delivery-options) using ($material) {
  border: 1px solid map-deep-get($material, 'dividers');
  padding: 2rem;
  &.active {
    border-color: var(--v-primary-base);
  }
}
</style>
