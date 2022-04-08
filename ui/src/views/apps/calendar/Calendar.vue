<template>
  <v-card class="max-h-content-container app-calendar position-relative overflow-hidden text-sm">
    <v-navigation-drawer
      v-model="isLeftSidebarOpen"
      width="250"
      mobile-breakpoint="sm"
      absolute
      touchless
      :right="$vuetify.rtl"
      :temporary="$vuetify.breakpoint.xsOnly"
      style="z-index: 2"
    >
      <calendar-left-sidebar-content @open-evnt-handler-drawer="isEventHandlerDrawerActive = true"></calendar-left-sidebar-content>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="isEventHandlerDrawerActive"
      :right="!$vuetify.rtl"
      touchless
      app
      temporary
      width="420"
    >
      <calendar-event-handler-drawer-content
        :event="event"
        :clear-event-data="clearEventData"
        @remove-event="removeEvent"
        @add-event="addEvent"
        @update-event="updateEvent"
        @close-drawer="isEventHandlerDrawerActive = false"
      ></calendar-event-handler-drawer-content>
    </v-navigation-drawer>

    <div
      :style="contentStyles"
      class="h-full"
    >
      <div
        v-if="refCalendar"
        class="calendar-header mx-6 my-5 d-flex align-center flex-wrap"
      >
        <v-btn
          icon
          class="d-inline-block d-md-none me-1"
          @click="isLeftSidebarOpen = true"
        >
          <v-icon size="30">
            {{ icons.mdiMenu }}
          </v-icon>
        </v-btn>
        <v-btn
          icon
          class="me-1"
          @click="refCalendar.prev()"
        >
          <v-icon size="30">
            {{ icons.mdiChevronLeft }}
          </v-icon>
        </v-btn>
        <v-btn
          icon
          class="me-3"
          @click="refCalendar.next()"
        >
          <v-icon size="30">
            {{ icons.mdiChevronRight }}
          </v-icon>
        </v-btn>
        <p class="font-weight-semibold text-xl text--primary mb-0 me-6">
          {{ refCalendar.title }}
        </p>

        <v-spacer></v-spacer>

        <v-btn-toggle
          v-model="activeCalendarView"
          color="primary"
          class="mt-3 mt-sm-0"
        >
          <v-btn
            v-for="calendarViewOption in calendarViewOptions"
            :key="calendarViewOption"
            elevation="0"
            :value="calendarViewOption"
          >
            {{ calendarViewOption }}
          </v-btn>
        </v-btn-toggle>
      </div>

      <v-calendar
        ref="refCalendar"
        v-model="calendarValue"
        :type="activeCalendarView"
        :events="calendarEvents"
        :event-margin-bottom="5"
        :event-text-color="getEventTextColor"
        @click:event="calenderHandleEventClick"
        @click:day="calendarHandleDayClick"
        @click:time="calendarHandleDayClick"
        @click:more="calendarHandleMoreClick"
      ></v-calendar>
    </div>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { ref, onUnmounted, computed, watch } from '@vue/composition-api'
import { mdiChevronLeft, mdiChevronRight, mdiMenu } from '@mdi/js'
import { useResponsiveLeftSidebar } from '@core/comp-functions/ui'
import { hexToRgb, getVuetify } from '@core/utils'
import store from '@/store'
import calendarStoreModule from './calendarStoreModule'

// Local Components
import CalendarLeftSidebarContent from './CalendarLeftSidebarContent.vue'
import CalendarEventHandlerDrawerContent from './CalendarEventHandlerDrawerContent.vue'

export default {
  components: {
    CalendarLeftSidebarContent,
    CalendarEventHandlerDrawerContent,
  },
  setup() {
    // ————————————————————————————————————
    //* ——— Store Registration
    // ————————————————————————————————————

    const CALENDAR_APP_STORE_MODULE_NAME = 'app-calendar'

    // Register module
    if (!store.hasModule(CALENDAR_APP_STORE_MODULE_NAME)) {
      store.registerModule(CALENDAR_APP_STORE_MODULE_NAME, calendarStoreModule)
    }

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(CALENDAR_APP_STORE_MODULE_NAME)) store.unregisterModule(CALENDAR_APP_STORE_MODULE_NAME)
    })

    // ————————————————————————————————————
    //* ——— Vuetify Instance
    // ————————————————————————————————————

    const $vuetify = getVuetify()

    // ————————————————————————————————————
    //* ——— Left Sidebar
    // ————————————————————————————————————
    const { isLeftSidebarOpen, contentStyles } = useResponsiveLeftSidebar({ sidebarWidth: 250 })

    // ————————————————————————————————————
    //* ——— Templare Ref
    // ————————————————————————————————————

    const refCalendar = ref(null)

    // ————————————————————————————————————
    //* ——— Calendar View/Type
    // ————————————————————————————————————

    const activeCalendarView = ref('month')
    const calendarViewOptions = ['month', 'week', 'day']

    // ————————————————————————————————————
    //* ——— Calendar Value & Events
    // ————————————————————————————————————

    const calendarValue = ref()
    const calendarEvents = ref([])

    const blankEvent = {
      id: '',
      name: '',
      start: '',
      end: '',
      timed: false,
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    }
    const event = ref(JSON.parse(JSON.stringify(blankEvent)))
    const clearEventData = () => {
      event.value = JSON.parse(JSON.stringify(blankEvent))
    }

    const fetchEvents = () => {
      store
        .dispatch(`${CALENDAR_APP_STORE_MODULE_NAME}/fetchEvents`)
        .then(response => {
          const events = response.data
          events.forEach(fetchedEvent => {
            /* eslint-disable no-param-reassign */
            fetchedEvent.start = new Date(fetchedEvent.start)
            fetchedEvent.end = new Date(fetchedEvent.end)

            const eventColor = store.state[CALENDAR_APP_STORE_MODULE_NAME].calendarOptions.find(
              calendar => calendar.label === fetchedEvent.extendedProps.calendar,
            )

            const rgbColor = hexToRgb($vuetify.theme.currentTheme[eventColor.color])

            fetchedEvent.color = `rgba(${rgbColor.r},${rgbColor.g},${rgbColor.b}, 0.12)`
            fetchedEvent.eventTextColor = eventColor.color
            /* eslint-enable */
          })
          calendarEvents.value = events
        })
        .catch(error => {
          console.error(error)
          console.error(error.response)
        })
    }

    fetchEvents()

    const getEventTextColor = e => e.eventTextColor

    //
    //* ——— Calendar Event Handler ——————————————————
    //

    // TODO: Remove this once issue is resolved
    // Please check: https://github.com/vuetifyjs/vuetify/issues/13900
    const eventClickBugWorkaround = ref(false)

    const calenderHandleEventClick = eventObj => {
      // Grab only event object
      event.value = eventObj.event

      // eslint-disable-next-line no-use-before-define
      isEventHandlerDrawerActive.value = true

      // Bug workaround
      eventClickBugWorkaround.value = true
    }

    const calendarHandleDayClick = dayObj => {
      // Bug workaround
      if (eventClickBugWorkaround.value) {
        eventClickBugWorkaround.value = false

        return
      }

      event.value.start = dayObj.date

      // eslint-disable-next-line no-use-before-define
      isEventHandlerDrawerActive.value = true
    }

    const calendarHandleMoreClick = ({ date }) => {
      calendarValue.value = date

      activeCalendarView.value = 'day'

      // Bug workaround
      eventClickBugWorkaround.value = true
    }

    //
    //* ——— Event Actions ——————————————————
    //

    const addEvent = eventData => {
      // Only get date from event
      /* eslint-disable no-param-reassign */
      if (eventData.start) eventData.start = new Date(eventData.start).toISOString().substr(0, 10)
      if (eventData.end) eventData.end = new Date(eventData.end).toISOString().substr(0, 10)

      eventData.timed = false
      /* eslint-enable */

      store.dispatch(`${CALENDAR_APP_STORE_MODULE_NAME}/addEvent`, { event: eventData }).then(() => {
        // TODO: Next Update - Perform adding or refetching
        fetchEvents()
      })
    }

    const updateEvent = eventData => {
      store.dispatch(`${CALENDAR_APP_STORE_MODULE_NAME}/updateEvent`, { event: eventData }).then(response => {
        const updatedEvent = response.data.event

        updatedEvent.color = store.state[CALENDAR_APP_STORE_MODULE_NAME].calendarOptions.find(
          calendar => calendar.label === updatedEvent.extendedProps.calendar,
        ).color

        const updatedEventIndex = calendarEvents.value.findIndex(e => e.id === updatedEvent.id)

        calendarEvents.value.splice(updatedEventIndex, 1, updatedEvent)
      })
    }

    const removeEvent = () => {
      const eventId = event.value.id
      store.dispatch(`${CALENDAR_APP_STORE_MODULE_NAME}/removeEvent`, { id: eventId }).then(() => {
        const updatedEventIndex = calendarEvents.value.findIndex(e => e.id === eventId)
        calendarEvents.value.splice(updatedEventIndex, 1)
      })
    }

    //
    //* ——— Selected Calendars ——————————————————
    //
    const selectedCalendars = computed(() => store.state[CALENDAR_APP_STORE_MODULE_NAME].selectedCalendars)

    watch(selectedCalendars, () => {
      fetchEvents()
    })

    // ————————————————————————————————————
    //* ——— Event Handler
    // ————————————————————————————————————

    const isEventHandlerDrawerActive = ref(false)
    watch(isEventHandlerDrawerActive, val => {
      if (!val) clearEventData()
    })

    return {
      // Left Sidebar
      isLeftSidebarOpen,
      contentStyles,

      // Template Refs
      refCalendar,

      getEventTextColor,

      // Calendar View/Type
      activeCalendarView,
      calendarViewOptions,

      // Calendar Value & Events
      calendarValue,
      calendarEvents,
      event,
      clearEventData,

      calenderHandleEventClick,
      calendarHandleDayClick,
      calendarHandleMoreClick,

      addEvent,
      updateEvent,
      removeEvent,

      // Event handler sidebar
      isEventHandlerDrawerActive,

      // Icons
      icons: {
        mdiChevronLeft,
        mdiChevronRight,
        mdiMenu,
      },
    }
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/apps/calendar.scss';
</style>
