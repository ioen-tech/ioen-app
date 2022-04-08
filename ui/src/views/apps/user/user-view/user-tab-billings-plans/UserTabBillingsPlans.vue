<template>
  <div class="user-tab-billings-plans">
    <!-- current plan -->
    <v-card class="mb-7">
      <v-card-title>
        Current plan
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <h4 class="mb-1">
              <span class="font-weight-medium me-1">Your Current Plan is</span>
              <span>Basic</span>
            </h4>
            <p>A simple start for everyone</p>

            <h4 class="font-weight-medium mb-1">
              Active until Dec 09, 2021
            </h4>
            <p>We will send you a notification upon Subscription expiration</p>

            <div class="d-flex align-center">
              <h4 class="font-weight-medium me-2 mb-1">
                $99 Per Month
              </h4>
              <v-chip
                label
                color="primary"
                small
                class="v-chip-light-bg primary--text font-weight-semibold mb-1"
              >
                Popular
              </v-chip>
            </div>
            <p>Standard plan for small to medium businesses</p>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-alert
              color="warning"
              text
            >
              <p class="font-weight-semibold mb-1">
                We need your attention!
              </p>
              <p class="text-sm mb-0">
                your plan requires updates
              </p>
            </v-alert>

            <p class="d-flex font-weight-semibold text--primary mt-3 mb-2">
              <span>Days</span>
              <v-spacer></v-spacer>
              <span>26 of 30 Days</span>
            </p>
            <v-progress-linear
              value="86"
              height="10"
              rounded
            ></v-progress-linear>
            <p class="mt-2">
              Your plan requires update
            </p>
          </v-col>

          <v-col
            cols="12"
            class="d-flex align-center flex-wrap"
          >
            <v-btn
              color="primary"
              class="me-3 mb-3 mb-sm-0"
              @click.stop="$emit('update:is-plan-upgrade-dialog-visible',true)"
            >
              Upgrade Plan
            </v-btn>
            <v-btn
              color="error"
              outlined
              class="mb-3 mb-sm-0"
            >
              Cancel Subscription
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- payment cards -->
    <v-card class="mb-7">
      <v-card-title>
        <p class="mb-2 mb-sm-0">
          Payment Methods
        </p>
        <v-spacer></v-spacer>
        <v-btn color="primary">
          <v-icon
            size="18"
            class="me-1"
          >
            {{ icons.mdiPlus }}
          </v-icon>
          <span>Add Card</span>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-card
          v-for="(paymentCard,index) in paymentCards"
          :key="paymentCard.id"
          outlined
          :class="index < paymentCards.length -1 ? 'mb-4':''"
        >
          <v-card-text class="d-flex align-sm-center flex-column flex-sm-row">
            <div class="mb-3 mb-sm-0">
              <v-img
                contain
                :max-width="paymentCard.imgWidth"
                height="25"
                :src="require(`@/assets/images/logos/${paymentCard.cardImg}`)"
              ></v-img>
              <div class="text--primary font-weight-medium mt-2">
                <span class="text-base me-2">{{ paymentCard.owner }}</span>

                <v-chip
                  v-if="paymentCard.cardStatus"
                  :color="resolvePaymentStatusVariant(paymentCard.cardStatus)"
                  label
                  small
                  :class="`v-chip-light-bg ${resolvePaymentStatusVariant(paymentCard.cardStatus)}--text`"
                >
                  {{ paymentCard.cardStatus }}
                </v-chip>
              </div>
              <span>
                <span class="text-xs">**** **** **** </span>
                <span>{{ paymentCard.cardLastDigit.substring(paymentCard.cardLastDigit.length - 4) }}</span>
              </span>
            </div>

            <v-spacer></v-spacer>

            <div class="text-sm-right">
              <v-btn
                color="primary"
                outlined
                class="mb-5"
                @click="editCardDetails(paymentCard.id)"
              >
                Edit
              </v-btn>
              <v-btn
                color="secondary"
                outlined
                class="ms-3 mb-5"
              >
                Delete
              </v-btn>

              <p class="mb-0">
                <span class="me-1">Card expires at</span>
                <span>{{ paymentCard.cardExpires }}</span>
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>

    <!-- Billing Address -->
    <v-card>
      <v-card-title>
        <p class="mb-2 mb-sm-0">
          Billing Address
        </p>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="isEditAddressDialogVisible =!isEditAddressDialogVisible"
        >
          Edit Address
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col
            cols="12"
            lg="6"
          >
            <table class="billing-address-table">
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    Company Name:
                  </p>
                </td>
                <td><p>{{ currentBillingAddress.companyName }}</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    Billing Email:
                  </p>
                </td>
                <td><p>{{ currentBillingAddress.billingEmail }}</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    Tax ID:
                  </p>
                </td>
                <td><p>{{ currentBillingAddress.taxID }}</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    VAT Number:
                  </p>
                </td>
                <td><p>{{ currentBillingAddress.vatNumber }}</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium mb-0">
                    Billing Address:
                  </p>
                </td>
                <td>
                  <p class="mb-0">
                    {{ currentBillingAddress.address }}
                  </p>
                </td>
              </tr>
            </table>
          </v-col>
          <v-col
            cols="12"
            lg="6"
          >
            <table class="billing-address-table">
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    Contact:
                  </p>
                </td>
                <td><p>{{ currentBillingAddress.contact }}</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    Country:
                  </p>
                </td>
                <td><p>{{ currentBillingAddress.country }}</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    State:
                  </p>
                </td>
                <td><p>{{ currentBillingAddress.state }}</p></td>
              </tr>
              <tr>
                <td class="billing-title">
                  <p class="text-no-wrap text--primary font-weight-medium">
                    Zip Code:
                  </p>
                </td>
                <td><p>{{ currentBillingAddress.zipCode }}</p></td>
              </tr>
            </table>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- edit address dialog -->
    <v-dialog
      v-model="isEditAddressDialogVisible"
      max-width="650"
    >
      <v-card class="pa-sm-10 pa-3">
        <v-card-title class="justify-center text-h5 px-5">
          Edit Address
        </v-card-title>
        <v-card-text class="text-center mt-n2 px-5">
          Add your billing address.
        </v-card-text>
        <v-card-text class="pt-5">
          <v-form class="multi-col-validation">
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="Company Name"
                  outlined
                  dense
                  :value="currentBillingAddress.companyName"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="Email"
                  outlined
                  type="email"
                  dense
                  :value="currentBillingAddress.billingEmail"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="Tax ID"
                  outlined
                  dense
                  :value="currentBillingAddress.taxID"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="VAT Number"
                  outlined
                  dense
                  :value="currentBillingAddress.vatNumber"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Billing Address"
                  outlined
                  rows="2"
                  :value="currentBillingAddress.address"
                ></v-textarea>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="Contact"
                  outlined
                  dense
                  :value="currentBillingAddress.contact"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  label="Country"
                  :items="countries"
                  dense
                  outlined
                  :value="currentBillingAddress.country"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="State"
                  outlined
                  dense
                  :value="currentBillingAddress.state"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="Zip Code                                "
                  outlined
                  dense
                  :value="currentBillingAddress.zipCode"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                class="d-flex justify-center"
              >
                <v-btn
                  color="primary"
                  class="me-3"
                  @click="isEditAddressDialogVisible= false"
                >
                  Submit
                </v-btn>
                <v-btn
                  outlined
                  color="secondary"
                  @click="isEditAddressDialogVisible= false"
                >
                  Cancel
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- edit card details -->
    <user-tab-payment-details-edit
      :is-plan-upgrade-open.sync="isPlanUpgradeOpen"
      :card-detail="cardDetail"
    ></user-tab-payment-details-edit>
  </div>
</template>

<script>
import { mdiPlus, mdiDeleteOutline, mdiSquareEditOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
import countries from '@/@fake-db/data/other/countries'
import UserTabPaymentDetailsEdit from './UserTabPaymentDetailsEdit.vue'

export default {
  components: {
    UserTabPaymentDetailsEdit,
  },
  props: {
    isPlanUpgradeDialogVisible: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const paymentCards = [
      {
        id: 1,
        cardImg: 'master.png',
        imgWidth: '45',
        owner: 'Tom McBride',
        cardLastDigit: '5577 0000 5577 9865',
        cardExpires: '12/24',
        cardStatus: 'Primary',
      },
      {
        id: 2,
        cardImg: 'visa.png',
        imgWidth: '60',
        owner: 'Mildred Wagner',
        cardLastDigit: '4532 3616 2070 5678',
        cardExpires: '02/24',
      },
      {
        id: 3,
        cardImg: 'american-express.png',
        imgWidth: '80',
        owner: 'Lester Jennings',
        cardLastDigit: '6011 0009 9013 9424',
        cardExpires: '08/20',
        cardStatus: 'Expired',
      },
    ]
    const currentBillingAddress = {
      companyName: 'Kelly Group',
      billingEmail: 'gertrude@gmail.com',
      taxID: 'TAX-875623',
      vatNumber: 'SDF754K77',
      address: '100 Water Plant Avenue, Building 1303 Wake Island',
      contact: '+1(609) 933-44-22',
      country: 'USA',
      state: 'Capholim',
      zipCode: '403114',
    }
    const isEditAddressDialogVisible = ref(false)
    const cardDetail = ref({})
    const isPlanUpgradeOpen = ref(false)

    const resolvePaymentStatusVariant = status => {
      if (status === 'Primary') return 'primary'
      if (status === 'Expired') return 'error'

      return 'secondary'
    }

    const editCardDetails = cardID => {
      const detail = paymentCards.filter(item => item.id === cardID)
      cardDetail.value = JSON.parse(JSON.stringify(detail[0]))
      Object.assign(cardDetail.value, { saveCardDetails: true })

      if (isPlanUpgradeOpen.value) {
        isPlanUpgradeOpen.value = false
      } else {
        isPlanUpgradeOpen.value = true
      }
    }

    return {
      countries,
      paymentCards,
      cardDetail,
      isPlanUpgradeOpen,
      isEditAddressDialogVisible,
      currentBillingAddress,

      resolvePaymentStatusVariant,
      editCardDetails,
      icons: {
        mdiPlus,
        mdiDeleteOutline,
        mdiSquareEditOutline,
      },
    }
  },
}
</script>
