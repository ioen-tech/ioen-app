<template>
  <v-card>
    <v-card-title>
      Custom Timeline Card
    </v-card-title>

    <v-card-text>
      <v-timeline
        dense
        class="timeline-custom-dense timeline-custom-dots card-content"
      >
        <!-- Flight -->
        <v-timeline-item
          small
          color="error"
        >
          <v-card color="error">
            <v-card-title>
              <span class="text-base white--text">Get on the flight</span>
              <v-spacer></v-spacer>
              <small class="text-xs white--text">Wednesday</small>
            </v-card-title>
            <v-card-text class="pt-4">
              <p class="mb-1">
                <span>Charles de Gaulle Airport, Paris</span>
                <v-icon
                  size="20"
                  class="mx-2"
                >
                  {{ icons.mdiArrowRight }}
                </v-icon>
                <span>Heathrow Airport, London</span>
              </p>
              <p>6:30 AM</p>
              <span class="d-flex align-center">
                <v-icon
                  color="error"
                  class="me-1"
                >
                  {{ icons.mdiFilePdf }}
                </v-icon>
                <span class="text--primary font-weight-semibold text-sm">booking-card.pdf</span>
              </span>
            </v-card-text>
          </v-card>
        </v-timeline-item>

        <!-- Interview Schedule -->
        <v-timeline-item
          small
          color="primary"
        >
          <v-card color="primary">
            <v-card-title>
              <span class="text-base white--text">Interview Schedule</span>
              <v-spacer></v-spacer>
              <small class="text-xs white--text text-no-wrap">April, 18</small>
            </v-card-title>
            <v-card-text class="pt-4">
              <p class="mb-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos, voluptates voluptas rem veniam expedita.
              </p>

              <!-- Divider -->
              <v-divider class="my-4"></v-divider>

              <!-- Person -->
              <div class="d-flex justify-space-between align-center">
                <!-- Avatar & Personal Info -->
                <span class="d-flex align-bottom mt-2">
                  <v-avatar
                    size="40"
                    class="me-2"
                  >
                    <v-img src="@/assets/images/avatars/2.png"></v-img>
                  </v-avatar>
                  <div class="d-flex flex-column">
                    <p class="text--primary font-weight-semibold mb-0">Rebecca Godman</p>
                    <span>Javascript Developer</span>
                  </div>
                </span>

                <!-- Person Actions -->
                <div>
                  <v-icon class="me-2">
                    {{ icons.mdiMessageTextOutline }}
                  </v-icon>
                  <v-icon>{{ icons.mdiPhone }}</v-icon>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-timeline-item>

        <!-- Puma Shoes -->
        <v-timeline-item
          small
          color="info"
        >
          <v-card color="info">
            <v-card-title>
              <span class="text-base white--text">Sold Puma POPX Blue Color</span>
              <v-spacer></v-spacer>
              <small class="text-xs white--text text-no-wrap">January, 10</small>
            </v-card-title>
            <v-card-text class="pt-4">
              <div class="d-flex align-sm-center mb-3 flex-sm-row flex-column">
                <v-img
                  height="100"
                  width="100"
                  src="@/assets/images/pages/puma-shoes.jpeg"
                  class="rounded me-4"
                ></v-img>
                <div>
                  <span>PUMA presents the latest shoes from its collection. Light &amp; comfortable made with highly durable material.</span>
                </div>
              </div>
              <div class="d-flex justify-space-between">
                <div class="text-center">
                  <p class="mb-1 text-base font-weight-semibold text--primary">
                    Customer
                  </p>
                  <span>Micheal Scott</span>
                </div>
                <div class="text-center">
                  <p class="mb-1 text-base font-weight-semibold text--primary">
                    Price
                  </p>
                  <span>$375.00</span>
                </div>
                <div class="text-center">
                  <p class="mb-1 text-base font-weight-semibold text--primary">
                    Quantity
                  </p>
                  <span>1</span>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-timeline-item>

        <!-- Design Review -->
        <v-timeline-item
          small
          color="success"
        >
          <v-card color="success">
            <v-card-title>
              <span class="text-base white--text">Design Review</span>
              <v-spacer></v-spacer>
              <small class="text-xs white--text text-no-wrap">September, 20</small>
            </v-card-title>
            <v-card-text class="pt-4">
              <p>
                Weekly review of freshly prepared design for our new application.
              </p>
              <div class="d-flex align-center">
                <v-avatar
                  size="40"
                  class="me-2"
                >
                  <v-img src="@/assets/images/avatars/1.png"></v-img>
                </v-avatar>
                <span class="text--primary font-weight-semibold">John Doe (Client)</span>
              </div>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiFilePdf, mdiArrowRight, mdiMessageTextOutline, mdiPhone } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiFilePdf,
        mdiArrowRight,
        mdiMessageTextOutline,
        mdiPhone,
      },
    }
  },
}
</script>
