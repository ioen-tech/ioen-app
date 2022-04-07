<template>
  <div class="demo-space-x">
    <!-- default -->
    <v-badge
      content="1"
      overlap
    >
      <v-btn
        outlined
        color="primary"
      >
        Default
      </v-btn>
    </v-badge>

    <!-- bordered -->
    <v-badge
      content="5"
      bordered
      overlap
    >
      <v-btn
        outlined
        color="primary"
      >
        Border
      </v-btn>
    </v-badge>

    <!-- dot -->
    <v-badge
      dot
      bottom
      overlap
      offset-x="12"
      offset-y="12"
    >
      <v-avatar>
        <v-img src="@/assets/images/avatars/8.png"></v-img>
      </v-avatar>
    </v-badge>
  </div>
</template>
