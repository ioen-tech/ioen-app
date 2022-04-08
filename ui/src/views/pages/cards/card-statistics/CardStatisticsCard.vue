<template>
  <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semibold text-base">Statistics Card</span>

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
      <v-row>
        <v-col
          cols="6"
          md="3"
        >
          <div class="d-flex">
            <v-avatar
              size="44"
              color="primary"
              rounded
              class="elevation-1"
            >
              <v-icon
                dark
                color="white"
                size="30"
              >
                {{ icons.mdiTrendingUp }}
              </v-icon>
            </v-avatar>
            <div class="ms-3">
              <p class="text-xs mb-0">
                Sales
              </p>
              <span class="text--primary text-xl font-weight-bold">245k</span>
            </div>
          </div>
        </v-col>
        <v-col
          cols="6"
          md="3"
        >
          <div class="d-flex">
            <v-avatar
              size="44"
              color="success"
              rounded
              class="elevation-1"
            >
              <v-icon
                dark
                color="white"
                size="30"
              >
                {{ icons.mdiAccountOutline }}
              </v-icon>
            </v-avatar>
            <div class="ms-3">
              <p class="text-xs mb-0">
                Customers
              </p>
              <span class="text--primary  text-xl font-weight-bold">12.5k</span>
            </div>
          </div>
        </v-col>
        <v-col
          cols="6"
          md="3"
        >
          <div class="d-flex">
            <v-avatar
              size="44"
              color="warning"
              rounded
              class="elevation-1"
            >
              <v-icon
                dark
                color="white"
                size="30"
              >
                {{ icons.mdiLabelOutline }}
              </v-icon>
            </v-avatar>
            <div class="ms-3">
              <p class="text-xs mb-0">
                Product
              </p>
              <span class="text--primary text-xl font-weight-bold">1.54k</span>
            </div>
          </div>
        </v-col>
        <v-col
          cols="6"
          md="3"
        >
          <div class="d-flex">
            <v-avatar
              size="44"
              color="info"
              rounded
              class="elevation-1"
            >
              <v-icon
                dark
                color="white"
                size="30"
              >
                {{ icons.mdiCurrencyUsd }}
              </v-icon>
            </v-avatar>
            <div class="ms-3">
              <p class="text-xs mb-0">
                Revenue
              </p>
              <span class="text--primary text-xl font-weight-bold">$88k</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiAccountOutline, mdiCurrencyUsd, mdiTrendingUp, mdiDotsVertical, mdiLabelOutline } from '@mdi/js'

export default {
  setup() {
    return {
      // icons
      icons: {
        mdiDotsVertical,
        mdiTrendingUp,
        mdiAccountOutline,
        mdiLabelOutline,
        mdiCurrencyUsd,
      },
    }
  },
}
</script>
