<template>
  <div class="h-full">
    <div class="drawer-header d-flex align-center mb-4">
      <span class="font-weight-semibold text-base text--primary">{{ eventLocal.id ? 'Update' : 'Add' }} Event</span>
      <v-spacer></v-spacer>
      <v-btn
        v-if="eventLocal.id"
        icon
        small
        class="me-1"
        @click=" $emit('remove-event'); $emit('close-drawer')"
      >
        <v-icon size="22">
          {{ icons.mdiTrashCanOutline }}
        </v-icon>
      </v-btn>
      <v-btn
        icon
        small
        @click="$emit('close-drawer')"
      >
        <v-icon size="22">
          {{ icons.mdiClose }}
        </v-icon>
      </v-btn>
    </div>
    <perfect-scrollbar
      :settings="perfectScrollbarSettings"
      class="ps-calendar-event-handler"
    >
      <v-form
        ref="refCalendarEventHandlerForm"
        class="px-5 pt-3 pb-10"
        @submit.prevent="handleFormSubmit"
      >
        <v-text-field
          v-model="eventLocal.name"
          label="Name"
          placeholder="Name"
          outlined
          :rules="[validators.required]"
          hide-details="auto"
          dense
          class="mb-6"
        ></v-text-field>

        <v-select
          v-model="eventLocal.extendedProps.calendar"
          outlined
          label="Calendar"
          placeholder="Calendar"
          :item-text="item => item.label"
          :item-value="item => item.value"
          :items="$store.state['app-calendar'].calendarOptions"
          :rules="[validators.required]"
          hide-details="auto"
          :menu-props="{ offsetY: true }"
          dense
          class="mb-6"
        >
          <!-- Selected Item Slot -->
          <template #selection="{ item }">
            <div class="d-flex align-center">
              <v-badge
                inline
                :color="item.color"
                dot
                class="me-2"
              ></v-badge>
              <span>{{ item.label }}</span>
            </div>
          </template>

          <!-- Options Slot -->
          <template #item="{ item }">
            <div class="d-flex align-center">
              <v-badge
                inline
                :color="item.color"
                dot
                class="me-2 mb-1"
              ></v-badge>
              <span>{{ item.label }}</span>
            </div>
          </template>
        </v-select>

        <v-menu
          v-model="isStartDateMenuOpen"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          eager
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="eventLocal.start"
              label="Start Date"
              readonly
              outlined
              dense
              class="mb-6"
              hide-details="auto"
              v-bind="attrs"
              :rules="[validators.required]"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="eventLocal.start"
            @input="isStartDateMenuOpen = false"
          ></v-date-picker>
        </v-menu>

        <v-menu
          v-model="isEndDateMenuOpen"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="eventLocal.end"
              label="End Date"
              readonly
              outlined
              dense
              class="mb-6"
              hide-details="auto"
              v-bind="attrs"
              :rules="[validators.required, validators.endDateValidator]"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="eventLocal.end"
            @input="isEndDateMenuOpen = false"
          ></v-date-picker>
        </v-menu>

        <v-switch
          v-model="eventLocal.timed"
          label="Timed"
          hide-details
          class="mt-0 mb-7 d-inline-flex"
        ></v-switch>

        <v-text-field
          v-model="eventLocal.extendedProps.url"
          type="url"
          outlined
          dense
          class="mb-6"
          hide-details="auto"
          label="Event URL"
          placeholder="Event URL"
          :rules="[validators.urlValidator]"
        ></v-text-field>

        <v-select
          v-model="eventLocal.extendedProps.guests"
          outlined
          chips
          small-chips
          deletable-chips
          multiple
          dense
          class="mb-6 select-guest"
          hide-details="auto"
          label="Guests"
          placeholder="Guests"
          :menu-props="{ offsetY: true, contentClass: 'list-style' }"
          :item-text="guest => guest.name"
          :item-value="guest => guest.name"
          :items="guestsOptions"
        >
          <!-- Options Slot -->
          <template #item="{ item }">
            <div class="d-flex align-center">
              <v-avatar
                size="25"
                class="me-2"
              >
                <v-img :src="item.avatar"></v-img>
              </v-avatar>
              <span class="text-sm">{{ item.name }}</span>
            </div>
          </template>
        </v-select>

        <v-text-field
          v-model="eventLocal.extendedProps.location"
          label="Location"
          dense
          class="mb-6"
          hide-details="auto"
          placeholder="Location"
          outlined
        ></v-text-field>

        <v-textarea
          v-model="eventLocal.extendedProps.description"
          outlined
          label="Description"
          placeholder="Description"
        ></v-textarea>

        <v-btn
          color="primary"
          class="me-3"
          type="submit"
        >
          {{ eventLocal.id ? 'Update' : 'Add ' }}
        </v-btn>
        <v-btn
          outlined
          @click="resetEventLocal"
        >
          Reset
        </v-btn>
      </v-form>
    </perfect-scrollbar>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api'
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'

import { required, urlValidator } from '@core/utils/validation'
import { dateInPast } from '@core/utils'
import { mdiTrashCanOutline, mdiClose } from '@mdi/js'

export default {
  components: {
    PerfectScrollbar,
  },
  props: {
    event: {
      type: Object,
      required: true,
    },
    clearEventData: {
      type: Function,
      required: true,
    },
  },
  setup(props, { emit }) {
    // ————————————————————————————————————
    //* ——— Template Refs
    // ————————————————————————————————————

    const refCalendarEventHandlerForm = ref(null)

    // ————————————————————————————————————
    //* ——— Local Event
    // ————————————————————————————————————

    const eventLocal = ref(JSON.parse(JSON.stringify(props.event)))
    const resetEventLocal = () => {
      eventLocal.value = JSON.parse(JSON.stringify(props.event))

      // Only get date from event
      if (eventLocal.value.start) eventLocal.value.start = new Date(eventLocal.value.start).toISOString().substr(0, 10)
      if (eventLocal.value.end) eventLocal.value.end = new Date(eventLocal.value.end).toISOString().substr(0, 10)

      // Reset Validation
      refCalendarEventHandlerForm.value.resetValidation()
    }
    watch(
      () => props.event,
      () => {
        resetEventLocal()
      },
      { deep: true },
    )

    // ————————————————————————————————————
    //* ——— Form
    // ————————————————————————————————————

    const isStartDateMenuOpen = ref(false)
    const isEndDateMenuOpen = ref(false)

    const guestsOptions = [
      { avatar: require('@/assets/images/avatars/1.png'), name: 'Jane Foster' },
      { avatar: require('@/assets/images/avatars/3.png'), name: 'Donna Frank' },
      { avatar: require('@/assets/images/avatars/5.png'), name: 'Gabrielle Robertson' },
      { avatar: require('@/assets/images/avatars/7.png'), name: 'Lori Spears' },
      { avatar: require('@/assets/images/avatars/6.png'), name: 'Sandy Vega' },
      { avatar: require('@/assets/images/avatars/2.png'), name: 'Cheryl May' },
    ]

    const handleFormSubmit = () => {
      const isFormValid = refCalendarEventHandlerForm.value.validate()

      if (!isFormValid) return

      const eventData = JSON.parse(JSON.stringify(eventLocal.value))

      // * If event has id => Edit Event
      // Emit event for add/update event
      if (eventData.id) emit('update-event', eventData)
      else emit('add-event', eventData)

      // Close sidebar
      emit('close-drawer')
    }

    // ————————————————————————————————————
    //* ——— Perfect Scrollbar
    // ————————————————————————————————————

    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
      wheelSpeed: 0.7,
    }

    // ————————————————————————————————————
    //* ——— Form Validator
    // ————————————————————————————————————

    const endDateValidator = val => {
      if (!eventLocal.value.start) return true

      return !dateInPast(new Date(val), new Date(eventLocal.value.start)) || 'End date is in past'
    }

    return {
      // Template Refs
      refCalendarEventHandlerForm,

      // Local Event
      eventLocal,
      resetEventLocal,

      // Form
      isStartDateMenuOpen,
      isEndDateMenuOpen,
      guestsOptions,
      handleFormSubmit,

      // Perfect Scrollbar
      perfectScrollbarSettings,

      // Field Validators
      validators: {
        required,
        urlValidator,
        endDateValidator,
      },

      // Icons
      icons: {
        mdiTrashCanOutline,
        mdiClose,
      },
    }
  },
}
</script>

<style lang="scss">
.ps-calendar-event-handler {
  height: calc(100% - 44px - 24px - 2px);

  // Fixes: if chips row >2 => Create enough space between chips row & avoid first row chip touching the label
  // Related Issue: https://github.com/vuetifyjs/vuetify/issues/13107
  .select-guest {
    .v-select__selections {
      .v-chip--select {
        margin-bottom: 6px;
        margin-top: 6px;
      }
    }
  }
}
</style>
