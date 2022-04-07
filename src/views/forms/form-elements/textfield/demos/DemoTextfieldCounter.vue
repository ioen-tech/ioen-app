<template>
  <div>
    <v-text-field
      v-model="title"
      :rules="rules"
      counter="25"
      hint="This field uses counter prop"
      label="Regular"
    ></v-text-field>

    <v-text-field
      v-model="description"
      :rules="rules"
      counter
      maxlength="25"
      hint="This field uses maxlength attribute"
      label="Limit exceeded"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  setup() {
    const title = 'Preliminary report'
    const description = 'California is a state in the western United States'
    const rules = [v => v.length <= 25 || 'Max 25 characters']

    return {
      title,
      description,
      rules,
    }
  },
}
</script>
