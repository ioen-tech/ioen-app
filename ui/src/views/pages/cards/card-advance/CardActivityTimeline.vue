<template>
  <v-card>
    <v-img src="@/assets/images/pages/activity-timeline.png"></v-img>
    <v-card-title>Activity Timeline</v-card-title>

    <v-card-text>
      <v-timeline
        align-top
        dense
        class="activity-timeline timeline-custom-dense timeline-custom-dots"
      >
        <v-timeline-item
          color="error"
          small
        >
          <div class="d-flex align-start justify-space-between flex-wrap">
            <h4 class="font-weight-semibold me-1">
              8 Invoices have been paid
            </h4>
            <small class="text-no-wrap">Wednesday</small>
          </div>
          <span>Invoices have been paid to the company.</span>
          <div class="d-flex align-center mt-1">
            <v-img
              contain
              height="26"
              max-width="26"
              src="@/assets/images/icons/file-icons/pdf.png"
            ></v-img>
            <h4 class="font-weight-semibold ms-2">
              invoice.pdf
            </h4>
          </div>
        </v-timeline-item>
        <v-timeline-item
          color="primary"
          small
        >
          <div class="d-flex justify-space-between align-start flex-wrap">
            <h4 class="font-weight-semibold me-1">
              Create a new project for client 😎
            </h4>
            <small class="text-no-wrap">April, 18</small>
          </div>
          <p class="mb-1">
            Invoices have been paid to the company.
          </p>
          <div class="d-flex align-center">
            <v-avatar size="26">
              <v-img src="@/assets/images/avatars/1.png"></v-img>
            </v-avatar>
            <h4 class="font-weight-semibold ms-3">
              John Doe (Client)
            </h4>
          </div>
        </v-timeline-item>
        <v-timeline-item
          color="info"
          small
        >
          <div class="d-flex align-start justify-space-between flex-wrap">
            <h4 class="font-weight-semibold me-1">
              Order #37745 from September
            </h4>
            <small class="text-no-wrap">January, 10</small>
          </div>
          <span>Invoices have been paid to the company.</span>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>
