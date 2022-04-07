<template>
  <v-dialog
    v-model="isPlanUpgradeOpen"
    max-width="650"
    @click:outside="$emit('update:is-plan-upgrade-open',false)"
  >
    <v-card class="user-card-detail pa-sm-10 pa-3">
      <v-card-title class="user-edit-title justify-center text-h5">
        Edit Card
      </v-card-title>
      <v-card-text class="text-center mt-n2">
        Edit card for future billing
      </v-card-text>

      <v-card-text class="mt-5">
        <v-form class="multi-col-validation">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="cardDetail.cardLastDigit"
                label="Card Number"
                outlined
                dense
              >
                <template v-slot:append>
                  <img
                    height="25"
                    :src="require(`@/assets/images/logos/${cardDetail.cardImg}`)"
                    alt="card-logo"
                  />
                </template>
              </v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="9"
            >
              <v-text-field
                v-model="cardDetail.owner"
                outlined
                dense
                label="Name On Card"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="3"
            >
              <v-text-field
                v-model="cardDetail.cardExpires"
                outlined
                dense
                label="Expiration Date"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="9"
            >
              <v-select
                v-model="cardDetail.cardStatus"
                label="Card Status"
                outlined
                dense
                :items="['Primary','Expired','Active']"
              ></v-select>
            </v-col>
            <v-col
              cols="12"
              sm="3"
            >
              <v-text-field
                outlined
                dense
                label="CVV"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-switch
                v-model="cardDetail.saveCardDetails"
                hide-details
                class="mt-0"
              >
                <template v-slot:label>
                  <span>Save Card for future billing?</span>
                </template>
              </v-switch>
            </v-col>

            <v-col
              cols="12"
              class="d-flex justify-center"
            >
              <v-btn
                color="primary"
                class="me-3"
                @click="$emit('update:is-plan-upgrade-open',false)"
              >
                submit
              </v-btn>
              <v-btn
                color="secondary"
                outlined
                @click="$emit('update:is-plan-upgrade-open',false)"
              >
                Cancel
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  props: {
    isPlanUpgradeOpen: {
      type: Boolean,
      required: true,
    },
    cardDetail: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const isPlanUpgrade = ref(false)

    // card details

    return {
      isPlanUpgrade,
    }
  },
}
</script>
