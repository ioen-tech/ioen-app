<template>
  <v-card>
    <v-card-title>
      Timeline With Icons
    </v-card-title>

    <v-card-text>
      <v-timeline
        class="no-dots-shadow pb-4"
        align-top
        :dense="$vuetify.breakpoint.smAndDown"
      >
        <!-- Timeline Item: Flight -->
        <v-timeline-item color="transparent">
          <template #icon>
            <v-avatar
              color="primary"
              class="v-avatar-light-bg primary--text"
              size="40"
            >
              <v-icon
                size="24"
                color="primary"
              >
                {{ icons.mdiAirplane }}
              </v-icon>
            </v-avatar>
          </template>
          <!-- Header -->
          <div class="d-flex justify-space-between">
            <p class="mb-1 text--primary font-weight-semibold">
              Get on the flight
            </p>
            <small>Wednesday</small>
          </div>

          <!-- Content -->
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
        </v-timeline-item>

        <!-- Timeline Item: Interview -->
        <v-timeline-item color="transparent">
          <template #icon>
            <v-avatar
              color="success"
              class="v-avatar-light-bg success--text"
              size="40"
            >
              <v-icon
                size="24"
                color="success"
              >
                {{ icons.mdiClockOutline }}
              </v-icon>
            </v-avatar>
          </template>

          <!-- Header -->
          <div class="d-flex justify-space-between">
            <p class="mb-1 text--primary font-weight-semibold">
              Interview Schedule
            </p>
            <small class="text-no-wrap">April, 18</small>
          </div>

          <p class="mb-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quos, voluptates voluptas rem veniam expedita.
          </p>

          <!-- Divider -->
          <v-divider class="my-4"></v-divider>

          <!-- Person -->
          <div class="d-flex justify-space-between align-center flex-wrap">
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
        </v-timeline-item>

        <!-- Timeline Item: Puma Shoes -->
        <v-timeline-item color="transparent">
          <template #icon>
            <v-avatar
              color="warning"
              class="v-avatar-light-bg warning--text"
              size="40"
            >
              <v-icon
                size="24"
                color="warning"
                class="rounded-0"
              >
                {{ icons.mdiCartOutline }}
              </v-icon>
            </v-avatar>
          </template>
          <div class="d-flex align-start mb-3 flex-sm-row flex-column">
            <v-img
              height="100"
              width="100"
              src="@/assets/images/pages/puma-shoes.jpeg"
              class="rounded me-4"
            ></v-img>
            <div>
              <!-- Header -->
              <div class="d-flex justify-space-between">
                <p class="mb-1 font-weight-semibold text-base text--primary">
                  Sold Puma POPX Blue Color
                </p>
                <small class="text-no-wrap">January, 10</small>
              </div>
              <span>PUMA presents the latest shoes from its collection. Light &amp; comfortable made with highly durable material.</span>
            </div>
          </div>

          <!-- Timeline Item: Meta Content -->
          <div class="d-flex justify-space-between flex-sm-row flex-column">
            <div class="text-center mb-1">
              <p class="mb-1 text-base font-weight-semibold text--primary">
                Customer
              </p>
              <span>Micheal Scott</span>
            </div>
            <div class="text-center mb-1">
              <p class="mb-1 text-base font-weight-semibold text--primary">
                Price
              </p>
              <span>$375.00</span>
            </div>
            <div class="text-center mb-1">
              <p class="mb-1 text-base font-weight-semibold text--primary">
                Quantity
              </p>
              <span>1</span>
            </div>
          </div>
        </v-timeline-item>

        <!-- Timeline Item: Design Review -->
        <v-timeline-item color="transaparent">
          <template #icon>
            <v-avatar
              color="info"
              class="v-avatar-light-bg info--text"
              size="40"
            >
              <v-icon
                size="24"
                color="info"
              >
                {{ icons.mdiFileEditOutline }}
              </v-icon>
            </v-avatar>
          </template>
          <!-- Header -->
          <div class="d-flex justify-space-between">
            <p class="mb-1 text--primary font-weight-semibold">
              Design Review
            </p>
            <small class="text-no-wrap">September, 20</small>
          </div>

          <!-- Content -->
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
        </v-timeline-item>

        <!-- Timeline Item: Ubuntu Server -->
        <v-timeline-item color="transparent">
          <template #icon>
            <v-avatar
              color="error"
              class="v-avatar-light-bg error--text"
              size="40"
            >
              <v-icon
                size="24"
                color="error"
                class="rounded-0"
              >
                {{ icons.mdiServer }}
              </v-icon>
            </v-avatar>
          </template>

          <!-- Header -->
          <div class="d-flex justify-space-between">
            <p class="mb-1 text--primary font-weight-semibold">
              Ubuntu Server
            </p>
            <v-chip
              class="v-chip-light-bg error--text"
              color="error"
              small
            >
              Inactive
            </v-chip>
          </div>

          <!-- Content -->
          <table class="w-full mt-3">
            <tr>
              <td class="d-flex align-center pb-2">
                <v-icon class="me-1">
                  {{ icons.mdiWeb }}
                </v-icon>
                <span>IP Address</span>
              </td>
              <td class="text-right">
                192.654.8.566
              </td>
            </tr>
            <tr>
              <td class="d-flex align-center pb-2">
                <v-icon class="me-1">
                  {{ icons.mdiCpu64Bit }}
                </v-icon>
                <span>CPU</span>
              </td>
              <td class="text-right">
                4 Cores
              </td>
            </tr>
            <tr>
              <td class="d-flex align-center pb-2">
                <v-icon class="me-1">
                  {{ icons.mdiMemory }}
                </v-icon>
                <span>Memory</span>
              </td>
              <td class="text-right">
                2 GB
              </td>
            </tr>
          </table>

          <v-divider class="mt-3"></v-divider>
          <div class="d-flex justify-space-between align-end">
            <div>
              <v-icon class="me-2">
                {{ icons.mdiShareVariantOutline }}
              </v-icon>
              <v-icon>{{ icons.mdiReload }}</v-icon>
            </div>
            <v-switch hide-details></v-switch>
          </div>
        </v-timeline-item>

        <!-- Timeline Item: Location -->
        <v-timeline-item color="transaparent">
          <template #icon>
            <v-avatar
              color="success"
              class="v-avatar-light-bg success--text"
              size="40"
            >
              <v-icon
                size="24"
                color="success"
              >
                {{ icons.mdiMapMarkerOutline }}
              </v-icon>
            </v-avatar>
          </template>
          <!-- Header -->
          <div class="d-flex justify-space-between">
            <div class="d-flex align-end mb-1">
              <v-icon class="me-1">
                {{ icons.mdiMapMarkerOutline }}
              </v-icon>
              <p class="mb-0 text--primary font-weight-semibold">
                <span>Location</span>
              </p>
            </div>
            <v-chip
              class="v-chip-light-bg error--text"
              color="error"
              small
            >
              High
            </v-chip>
          </div>

          <!-- Content -->
          <p class="mb-0 text--primary font-weight-semibold">
            Find location for the company celebration.
          </p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          <v-divider></v-divider>

          <div class="d-flex justify-space-between mt-4 flex-wrap">
            <div>
              <v-icon class="me-2">
                {{ icons.mdiLinkVariant }}
              </v-icon>
              <v-icon class="me-2">
                {{ icons.mdiMessageTextOutline }}
              </v-icon>
              <v-icon>{{ icons.mdiAccountOutline }}</v-icon>
            </div>
            <span class="text-xs">Due date: 15th Jan</span>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiFilePdf,
  mdiClockOutline,
  mdiMessageTextOutline,
  mdiPhone,
  mdiCartOutline,
  mdiFileEditOutline,
  mdiAirplane,
  mdiArrowRight,
  mdiServer,
  mdiWeb,
  mdiCpu64Bit,
  mdiMemory,
  mdiShareVariantOutline,
  mdiReload,
  mdiMapMarkerOutline,
  mdiLinkVariant,
  mdiAccountOutline,
} from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiAirplane,
        mdiFilePdf,
        mdiClockOutline,
        mdiMessageTextOutline,
        mdiPhone,
        mdiCartOutline,
        mdiFileEditOutline,
        mdiArrowRight,
        mdiServer,
        mdiWeb,
        mdiCpu64Bit,
        mdiMemory,
        mdiShareVariantOutline,
        mdiReload,
        mdiMapMarkerOutline,
        mdiLinkVariant,
        mdiAccountOutline,
      },
    }
  },
}
</script>
