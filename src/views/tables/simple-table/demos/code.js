/* eslint-disable no-useless-escape */

export const simpleTableBasic = `
<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase">
            Dessert (100g serving)
          </th>
          <th class="text-center text-uppercase">
            Calories
          </th>
          <th class="text-center text-uppercase">
            Fat (g)
          </th>
          <th class="text-center text-uppercase">
            Carbs (g)
          </th>
          <th class="text-center text-uppercase">
            Protein (g)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.dessert"
        >
          <td>{{ item.dessert }}</td>
          <td class="text-center">
            {{ item.calories }}
          </td>
          <td class="text-center">
            {{ item.fat }}
          </td>
          <td class="text-center">
            {{ item.carbs }}
          </td>
          <td class="text-center">
            {{ item.protein }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  setup() {
    const desserts = [
      {
        dessert: 'Frozen Yogurt',
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Ice cream sandwich',
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Eclair',
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Cupcake',
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Gingerbread',
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
    ]

    return {
      desserts,
    }
  },
}
</script>
`

export const simpleTableFixedHeader = `
<template>
  <v-simple-table
    height="250"
    fixed-header
  >
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase">
            Dessert (100g serving)
          </th>
          <th class="text-center text-uppercase">
            Calories
          </th>
          <th class="text-center text-uppercase">
            Fat (g)
          </th>
          <th class="text-center text-uppercase">
            Carbs (g)
          </th>
          <th class="text-center text-uppercase">
            Protein (g)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.dessert"
        >
          <td>{{ item.dessert }}</td>
          <td class="text-center">
            {{ item.calories }}
          </td>
          <td class="text-center">
            {{ item.fat }}
          </td>
          <td class="text-center">
            {{ item.carbs }}
          </td>
          <td class="text-center">
            {{ item.protein }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  setup() {
    const desserts = [
      {
        dessert: 'Frozen Yogurt',
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Ice cream sandwich',
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Eclair',
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Cupcake',
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Gingerbread',
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
    ]

    return {
      desserts,
    }
  },
}
</script>
`

export const simpleTableHeight = `
<template>
  <v-simple-table height="250">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase">
            Dessert (100g serving)
          </th>
          <th class="text-center text-uppercase">
            Calories
          </th>
          <th class="text-center text-uppercase">
            Fat (g)
          </th>
          <th class="text-center text-uppercase">
            Carbs (g)
          </th>
          <th class="text-center text-uppercase">
            Protein (g)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.dessert"
        >
          <td>{{ item.dessert }}</td>
          <td class="text-center">
            {{ item.calories }}
          </td>
          <td class="text-center">
            {{ item.fat }}
          </td>
          <td class="text-center">
            {{ item.carbs }}
          </td>
          <td class="text-center">
            {{ item.protein }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  setup() {
    const desserts = [
      {
        dessert: 'Frozen Yogurt',
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Ice cream sandwich',
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Eclair',
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Cupcake',
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Gingerbread',
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
    ]

    return {
      desserts,
    }
  },
}
</script>
`

export const simpleTableDense = `
<template>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase">
            Dessert (100g serving)
          </th>
          <th class="text-center text-uppercase">
            Calories
          </th>
          <th class="text-center text-uppercase">
            Fat (g)
          </th>
          <th class="text-center text-uppercase">
            Carbs (g)
          </th>
          <th class="text-center text-uppercase">
            Protein (g)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.dessert"
        >
          <td>{{ item.dessert }}</td>
          <td class="text-center">
            {{ item.calories }}
          </td>
          <td class="text-center">
            {{ item.fat }}
          </td>
          <td class="text-center">
            {{ item.carbs }}
          </td>
          <td class="text-center">
            {{ item.protein }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  setup() {
    const desserts = [
      {
        dessert: 'Frozen Yogurt',
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Ice cream sandwich',
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Eclair',
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Cupcake',
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Gingerbread',
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
    ]

    return {
      desserts,
    }
  },
}
</script>
`

export const simpleTableDark = `
<template>
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-uppercase text--primary">
            Dessert (100g serving)
          </th>
          <th class="text-center text-uppercase text--primary">
            Calories
          </th>
          <th class="text-center text-uppercase text--primary">
            Fat (g)
          </th>
          <th class="text-center text-uppercase text--primary">
            Carbs (g)
          </th>
          <th class="text-center text-uppercase text--primary">
            Protein (g)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.dessert"
        >
          <td>{{ item.dessert }}</td>
          <td class="text-center">
            {{ item.calories }}
          </td>
          <td class="text-center">
            {{ item.fat }}
          </td>
          <td class="text-center">
            {{ item.carbs }}
          </td>
          <td class="text-center">
            {{ item.protein }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  setup() {
    const desserts = [
      {
        dessert: 'Frozen Yogurt',
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Ice cream sandwich',
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Eclair',
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Cupcake',
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Gingerbread',
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
    ]

    return {
      desserts,
    }
  },
}
</script>
`
