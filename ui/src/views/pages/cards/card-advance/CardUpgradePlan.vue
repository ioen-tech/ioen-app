<template>
  <v-card>
    <v-card-title class="align-start">
      Upgrade Your Plan
      <v-spacer></v-spacer>

      <v-btn
        icon
        small
        class="me-n3 mt-n2"
      >
        <v-icon>
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text>
      <p class="text-xs mb-0">
        Plase make the payment to start enjoying all the features of our premuim plan as soon as possible.
      </p>

      <div class="plan-banner d-flex align-center flex-wrap">
        <v-avatar
          rounded
          class="banner-avatar"
          size="43"
        >
          <v-img
            contain
            width="23"
            height="20"
            src="@/assets/images/pages/briefcase.png"
          ></v-img>
        </v-avatar>

        <div class="font-weight-medium ms-3">
          <p class="text--primary mb-0">
            Platinum
          </p>
          <span class="text-xs primary--text">Upgrade Plan</span>
        </div>

        <v-spacer></v-spacer>

        <div class="d-flex align-center mt-2">
          <sup>
            <span class="text-xs font-weight-medium text--primary">$</span>
          </sup>
          <sup><h1 class="text-2xl">5,250</h1></sup>
          <sub>/Year</sub>
        </div>
      </div>

      <div class="payment-details">
        <p class="font-weight-semibold text--primary mb-1">
          Payment details
        </p>

        <div
          v-for="data in paymentDetails"
          :key="data.cardNo"
          class="d-flex align-center flex-wrap"
        >
          <v-avatar rounded>
            <v-img
              width="42"
              height="30"
              :src="data.avatarImg"
            ></v-img>
          </v-avatar>

          <div class="mx-3">
            <p class="font-weight-medium text--primary mb-0">
              {{ data.title }}
            </p>
            <span class="text-xs">{{ data.cardNo }}</span>
          </div>

          <v-spacer></v-spacer>

          <v-text-field
            outlined
            class="cvv"
            placeholder="CVV"
            dense
            hide-details
          ></v-text-field>
        </div>

        <p class="text-xs primary--text font-weight-medium mt-2">
          Add Payment Method
        </p>
      </div>

      <v-text-field
        outlined
        placeholder="Email Address"
        class="mt-5 mb-4"
        dense
        hide-details
      ></v-text-field>

      <v-btn
        block
        color="primary"
      >
        <span class="me-1">Procees to payment</span>
        <v-icon size="20">
          {{ icons.mdiArrowRight }}
        </v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiDotsVertical, mdiArrowRight } from '@mdi/js'

export default {
  setup() {
    const paymentDetails = [
      {
        avatarImg: require('@/assets/images/logos/master-card.jpg'),
        title: 'Credit card',
        cardNo: '2566 xxxx xxxx 8908',
      },
      {
        avatarImg: require('@/assets/images/logos/credit-card2.jpg'),
        title: 'Credit card',
        cardNo: '8990 xxxx xxxx 6852',
      },
    ]

    return {
      paymentDetails,
      icons: {
        mdiDotsVertical,
        mdiArrowRight,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.plan-banner {
  background-color: rgba(145, 85, 253, 0.12);
  padding: 0.563rem 0.688rem;
  border-radius: 4px;
  margin: 0.875rem 0 1.125rem 0;
  .banner-avatar {
    border: solid 1px var(--v-primary-base);
    border-radius: 4px;
  }
  sup {
    h1 {
      margin-top: 0.5rem;
    }
  }
}
.payment-details {
  .cvv {
    max-width: 3.5rem;
  }
}
</style>
