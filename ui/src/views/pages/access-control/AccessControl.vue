<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>Common</v-card-title>
        <v-card-text>No ability is required to view this card</v-card-text>
        <v-card-text class="primary--text">
          This card is visible to 'user' and 'admin' both
        </v-card-text>
      </v-card>
    </v-col>
    <v-col
      v-if="$can('read', 'Analytics')"
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>Analytics</v-card-title>
        <v-card-text>User with 'Analytics' subject's 'Read' ability can view this card</v-card-text>
        <v-card-text class="text-danger">
          This card is visible to 'admin' only
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
