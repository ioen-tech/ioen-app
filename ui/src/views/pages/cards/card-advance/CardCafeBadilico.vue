<template>
  <v-card>
    <v-img src="@/assets/images/pages/cafe-badilico.png"></v-img>

    <v-card-text class="d-flex align-center">
      <div>
        <v-card-title class="ps-0">
          Cafe Badilico
        </v-card-title>

        <v-card-subtitle class="d-flex align-center flex-wrap ps-0 pb-0">
          <v-rating
            dense
            readonly
            background-color="warning"
            color="warning"
            :value="5"
          ></v-rating>
          <span class="ms-3">5 Star (245)</span>
        </v-card-subtitle>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        icon
        small
        class="me-n3"
      >
        <v-icon>
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-text>
    <v-card-text>
      <p>
        Italian Cafe
      </p>
      <p>The refrigerated dairy aisle of your local grocery store can be a great source tasty, convenient selections for your.</p>

      <v-divider></v-divider>

      <p class="text-base text--primary mt-3">
        Tonight’s availability
      </p>
      <div class="demo-space-x">
        <v-chip>
          5:30PM
        </v-chip>
        <v-chip>
          7:00PM
        </v-chip>
        <v-chip>7:15PM</v-chip>
      </div>
    </v-card-text>
    <v-card-actions class="dense">
      <v-btn
        text
        color="primary"
      >
        Book Now
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mdiDotsVertical } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiDotsVertical,
      },
    }
  },
}
</script>
