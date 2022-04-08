<template>
  <v-card class="user-tab-notification">
    <v-card-title>
      Notifications
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="text--primary font-weight-medium">
      You will receive notification for the below selected items.
    </v-card-text>

    <v-data-table
      :headers="tableColumn"
      :items="notifications"
      hide-default-footer
    >
      <!-- email -->
      <template #[`item.email`]="{item}">
        <v-row
          align="center"
          justify="center"
        >
          <v-checkbox
            v-model="item.email"
            hide-details
            dense
            class="shrink"
          ></v-checkbox>
        </v-row>
      </template>

      <!-- browser -->
      <template #[`item.browser`]="{item}">
        <v-row
          align="center"
          justify="center"
        >
          <v-checkbox
            v-model="item.browser"
            hide-details
            dense
            class="shrink"
          ></v-checkbox>
        </v-row>
      </template>

      <!-- app -->
      <template #[`item.app`]="{item}">
        <v-row
          align="center"
          justify="center"
        >
          <v-checkbox
            v-model="item.app"
            hide-details
            dense
            class="shrink"
          ></v-checkbox>
        </v-row>
      </template>
    </v-data-table>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        color="primary"
        class="me-3"
      >
        save changes
      </v-btn>
      <v-btn
        color="secondary"
        outlined
      >
        Discard
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  setup() {
    const tableColumn = [
      {
        text: 'TYPE',
        value: 'type',
        sortable: false,
      },
      {
        text: 'EMAIL',
        value: 'email',
        sortable: false,
        align: 'center',
      },
      {
        text: 'BROWSER',
        value: 'browser',
        sortable: false,
        align: 'center',
      },
      {
        text: 'APP',
        value: 'app',
        sortable: false,
        align: 'center',
      },
    ]
    const notifications = [
      {
        type: 'New for you',
        email: true,
        browser: false,
        app: false,
      },
      {
        type: 'Account activity',
        email: false,
        browser: true,
        app: true,
      },
      {
        type: 'A new browser used to sign in',
        email: true,
        browser: true,
        app: true,
      },
      {
        type: 'A new device is linked',
        email: false,
        browser: true,
        app: false,
      },
    ]

    return {
      tableColumn,
      notifications,
    }
  },
}
</script>
