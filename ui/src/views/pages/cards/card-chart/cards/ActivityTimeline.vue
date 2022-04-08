<template>
  <v-card>
    <v-card-title class="align-start">
      <span>Activity Timeline</span>
      <v-spacer></v-spacer>
      <v-btn
        icon
        small
        class="mt-n2 me-n3"
      >
        <v-icon size="22">
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text>
      <v-timeline
        dense
        class="timeline-custom-dense timeline-custom-dots"
      >
        <v-timeline-item
          small
          color="error"
        >
          <div class="d-flex justify-space-between align-center flex-wrap">
            <h4 class="font-weight-semibold me-1">
              8 Invoices have been paid
            </h4>
            <small class="text-no-wrap">Wednesday</small>
          </div>

          <span>Invoices have been paid to the company.</span>
          <div class="d-flex align-center mt-2">
            <v-icon
              color="error"
              class="me-1"
            >
              {{ icons.mdiFilePdf }}
            </v-icon>
            <h4 class="font-weight-semibold text-sm">
              invoice.pdf
            </h4>
          </div>
        </v-timeline-item>

        <v-timeline-item
          small
          color="primary"
        >
          <div class="d-flex justify-space-between align-center flex-wrap">
            <h4 class="font-weight-semibold me-1">
              Create a new project for client 😎
            </h4>
            <small class="text-no-wrap">April, 18</small>
          </div>

          <span>Invoices have been paid to the company.</span>
          <div class="d-flex align-center mt-2">
            <v-avatar
              size="26"
              class="me-2"
            >
              <v-img src="@/assets/images/avatars/1.png"></v-img>
            </v-avatar>
            <h4 class="font-weight-semibold">
              John Doe (Client)
            </h4>
          </div>
        </v-timeline-item>

        <v-timeline-item
          small
          color="info"
        >
          <div class="d-flex justify-space-between align-center flex-wrap">
            <h4 class="font-weight-semibold me-1">
              Order #37745 from September
            </h4>
            <small class="text-no-wrap">January, 10</small>
          </div>

          <span>Invoices have been paid to the company.</span>
        </v-timeline-item>

        <v-timeline-item
          small
          color="success"
        >
          <div class="d-flex justify-space-between align-center flex-wrap">
            <h4 class="font-weight-semibold me-1">
              Client Meeting
            </h4>
            <small class="text-no-wrap">September, 20</small>
          </div>

          <span>Project meeting with john 👨🏻‍💻 @10:15am</span>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiDotsVertical, mdiFilePdf } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiDotsVertical,
        mdiFilePdf,
      },
    }
  },
}
</script>
