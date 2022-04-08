<template>
  <div>
    <v-text-field
      label="Amount"
      value="10.00"
      prefix="$"
    ></v-text-field>

    <v-text-field
      label="Weight"
      value="28.00"
      suffix="lbs"
    ></v-text-field>

    <v-text-field
      label="Email address"
      value="example"
      suffix="@gmail.com"
    ></v-text-field>

    <v-text-field
      label="Label Text"
      value="12:30:00"
      type="time"
      suffix="PST"
      hide-details
    ></v-text-field>
  </div>
</template>
