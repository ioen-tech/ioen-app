/* eslint-disable no-useless-escape */

export const datatableCellEditingViaDialog = `
<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="userList"
    >
      <template #top>
        <v-card-text>Try editing <code class="mx-1">name</code> or <code class="mx-1">salary</code> column</v-card-text>
      </template>

      <!-- name -->
      <template #[\`item.full_name\`]="{item}">
        <v-edit-dialog
          :return-value.sync="item.full_name"
        >
          <div class="d-flex align-center">
            <v-avatar
              :color="item.avatar ? '' : 'primary'"
              :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
              size="32"
            >
              <v-img
                v-if="item.avatar"
                :src="\`/images/avatars/\${item.avatar}\`"
              ></v-img>
              <span v-else>{{ item.full_name.slice(0,2).toUpperCase() }}</span>
            </v-avatar>
            <div class="d-flex flex-column ms-3">
              <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
              <small>{{ item.post }}</small>
            </div>
          </div>

          <!-- {{ item.full_name }} -->
          <template v-slot:input>
            <v-text-field
              v-model="item.full_name"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>

      <!-- salary -->
      <template #[\`item.salary\`]="{item}">
        <v-edit-dialog
          :return-value.sync="item.salary"
          large
          persistent
        >
          {{ \`$\${item.salary}\` }}
          <template v-slot:input>
            <div class="mt-4 title">
              Update Salary
            </div>
            <v-text-field
              v-model="item.salary"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
              autofocus
              type="number"
              prefix="$"
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>

      <!-- status -->
      <template #[\`item.status\`]="{item}">
        <v-chip
          small
          :color="statusColor[status[item.status]]"
          :class="\`\${statusColor[status[item.status]]}--text\`"
          class="v-chip-light-bg"
        >
          {{ status[item.status] }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
import data from '../datatable'

export default {
  setup() {
    const userList = []

    return {
      snack: false,
      snackColor: '',
      snackText: '',
      max25chars: v => v.length <= 25 || 'Input too long!',
      headers: [
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'DATE', value: 'start_date' },
        { text: 'SALARY', value: 'salary' },
        { text: 'AGE', value: 'age' },
        { text: 'STATUS', value: 'status' },
      ],
      statusColor: {
        /* eslint-disable key-spacing */
        Current: 'primary',
        Professional: 'success',
        Rejected: 'error',
        Resigned: 'warning',
        Applied: 'info',
        /* eslint-enable key-spacing */
      },
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
      userList,
    }
  },
  created() {
    this.userList = JSON.parse(JSON.stringify(data))
  },
}
</script>
`

export const datatableFixedHeader = `
<template>
  <v-data-table
    :headers="headers"
    :items="userList"
    :items-per-page="10"
    fixed-header
    height="300"
  >
    <!-- name -->
    <template #[\`item.full_name\`]="{item}">
      <div class="d-flex align-center">
        <v-avatar
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          size="32"
        >
          <v-img
            v-if="item.avatar"
            :src="\`/images/avatars/\${item.avatar}\`"
          ></v-img>
          <span v-else>{{ item.full_name.slice(0,2).toUpperCase() }}</span>
        </v-avatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- salary -->
    <template #[\`item.salary\`]="{item}">
      {{ \`$\${item.salary}\` }}
    </template>

    <!-- status -->
    <template #[\`item.status\`]="{item}">
      <v-chip
        small
        :color="statusColor[status[item.status]]"
        :class="\`\${statusColor[status[item.status]]}--text\`"
        class="v-chip-light-bg"
      >
        {{ status[item.status] }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
import data from '../datatable'

export default {
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Professional: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }

    return {
      headers: [
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'DATE', value: 'start_date' },
        { text: 'SALARY', value: 'salary' },
        { text: 'AGE', value: 'age' },
        { text: 'STATUS', value: 'status' },
      ],
      userList: data,
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      statusColor,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
}
</script>
`

export const datatableCellSlot = `
<template>
  <v-data-table
    :headers="headers"
    :items="usreList"
    :items-per-page="5"
  >
    <!-- name -->
    <template #[\`item.full_name\`]="{item}">
      <div class="d-flex align-center">
        <v-avatar
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          size="32"
        >
          <v-img
            v-if="item.avatar"
            :src="\`/images/avatars/\${item.avatar}\`"
          ></v-img>
          <span
            v-else
          >{{ item.full_name.slice(0,2).toUpperCase() }}</span>
        </v-avatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #[\`item.salary\`]="{item}">
      {{ \`$\${item.salary}\` }}
    </template>

    <!-- status -->
    <template #[\`item.status\`]="{item}">
      <v-chip
        small
        :color="statusColor[status[item.status]]"
        :class="\`\${statusColor[status[item.status]]}--text\`"
        class="v-chip-light-bg"
      >
        {{ status[item.status] }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
import data from '../datatable'

export default {
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Professional: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }

    return {
      headers: [
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'DATE', value: 'start_date' },
        { text: 'SALARY', value: 'salary' },
        { text: 'AGE', value: 'age' },
        { text: 'STATUS', value: 'status' },
      ],
      usreList: data,
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      statusColor,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
}
</script>
`

export const datatableRowEditingViaDialog = `
<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="userList"
      sort-by="calories"
    >
      <!-- action -->
      <template #[\`item.actions\`]="{ item }">
        <v-icon
          small
          class="me-2"
          @click="editItem(item)"
        >
          {{ icons.mdiPencilOutline }}
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          {{ icons.mdiDeleteOutline }}
        </v-icon>
      </template>

      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>

      <!-- name -->
      <template #[\`item.full_name\`]="{item}">
        <div class="d-flex align-center">
          <v-avatar
            :color="item.avatar ? '' : 'primary'"
            :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
            size="32"
          >
            <v-img
              v-if="item.avatar"
              :src="\`/images/avatars/\${item.avatar}\`"
            ></v-img>
            <span v-else>{{ item.full_name.slice(0,2).toUpperCase() }}</span>
          </v-avatar>
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
            <small>{{ item.post }}</small>
          </div>
        </div>
      </template>

      <!-- salary -->
      <template #[\`item.salary\`]="{item}">
        {{ \`$\${item.salary}\` }}
      </template>

      <!-- status -->
      <template #[\`item.status\`]="{item}">
        <v-chip
          small
          :color="statusColor[status[item.status]]"
          :class="\`\${statusColor[status[item.status]]}--text\`"
          class="v-chip-light-bg"
        >
          {{ status[item.status] }}
        </v-chip>
      </template>
    </v-data-table>

    <!-- dialog -->
    <v-dialog
      v-model="dialog"
      max-width="500px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Edit Item</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="editedItem.full_name"
                  label="User name"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="editedItem.email"
                  label="Email"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="editedItem.salary"
                  label="Salary"
                  prefix="$"
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="editedItem.age"
                  label="Age"
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="editedItem.start_date"
                  label="Date"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-select
                  v-model="editedItem.status"
                  :items="selectOptions"
                  label="Standard"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            outlined
            @click="close"
          >
            Cancel
          </v-btn>
          <v-btn
            color="success"
            @click="save"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- dialog -->
    <v-dialog
      v-model="dialogDelete"
      max-width="500px"
    >
      <v-card>
        <v-card-title>
          Are you sure you want to delete this item?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            outlined
            @click="closeDelete"
          >
            Cancel
          </v-btn>
          <v-btn
            color="success"
            @click="deleteItemConfirm"
          >
            OK
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mdiPencilOutline, mdiDeleteOutline } from '@mdi/js'
import data from '../datatable'

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    icons: {
      mdiDeleteOutline,
      mdiPencilOutline,
    },
    headers: [
      { text: 'NAME', value: 'full_name' },
      { text: 'EMAIL', value: 'email' },
      { text: 'DATE', value: 'start_date' },
      { text: 'SALARY', value: 'salary' },
      { text: 'AGE', value: 'age' },
      { text: 'STATUS', value: 'status' },
      { text: 'ACTIONS', value: 'actions' },
    ],
    status: {
      1: 'Current',
      2: 'Professional',
      3: 'Rejected',
      4: 'Resigned',
      5: 'Applied',
    },
    selectOptions: [
      { text: 'Current', value: 1 },
      { text: 'Professional', value: 2 },
      { text: 'Rejected', value: 3 },
      { text: 'Resigned', value: 4 },
      { text: 'Applied', value: 5 },
    ],
    statusColor: {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Professional: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    },
    userList: [],
    editedIndex: -1,
    editedItem: {},
    defaultItem: {},
  }),

  watch: {
    dialog(val) {
      // eslint-disable-next-line no-unused-expressions
      val || this.close()
    },
    dialogDelete(val) {
      // eslint-disable-next-line no-unused-expressions
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.userList = JSON.parse(JSON.stringify(data))
    },

    editItem(item) {
      this.editedIndex = this.userList.indexOf(item)
      this.editedItem = { ...item }
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.userList.indexOf(item)
      this.editedItem = { ...item }
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.userList.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem }
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem }
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.userList[this.editedIndex], this.editedItem)
      } else {
        this.userList.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>
`

export const datatableGrouping = `
<template>
  <v-data-table
    :headers="headers"
    :items="userList"
    :items-per-page="10"
    group-by="status"
    show-group-by
  >
    <!-- name -->
    <template #[\`item.full_name\`]="{item}">
      <div class="d-flex align-center">
        <v-avatar
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          size="32"
        >
          <v-img
            v-if="item.avatar"
            :src="\`/images/avatars/\${item.avatar}\`"
          ></v-img>
          <span v-else>{{ item.full_name.slice(0,2).toUpperCase() }}</span>
        </v-avatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- salary -->
    <template #[\`item.salary\`]="{item}">
      {{ \`$\${item.salary}\` }}
    </template>

    <!-- status -->
    <template #[\`item.status\`]="{item}">
      <v-chip
        small
        :color="statusColor[status[item.status]]"
        :class="\`\${statusColor[status[item.status]]}--text\`"
        class="v-chip-light-bg"
      >
        {{ status[item.status] }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'

export default {
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Professional: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }
    const userList = [
      {
        responsive_id: '',
        id: 1,
        avatar: '8.png',
        full_name: "Korrie O'Crevy",
        post: 'Nuclear Power Engineer',
        email: 'kocrevy0@thetimes.co.uk',
        city: 'Krasnosilka',
        start_date: '09/23/2016',
        salary: 23896.35,
        age: '61',
        experience: '1 Year',
        status: 2,
      },
      {
        responsive_id: '',
        id: 2,
        avatar: '1.png',
        full_name: 'Bailie Coulman',
        post: 'VP Quality Control',
        email: 'bcoulman1@yolasite.com',
        city: 'Hinigaran',
        start_date: '05/20/2018',
        salary: 13633.69,
        age: '63',
        experience: '3 Years',
        status: 2,
      },
      {
        responsive_id: '',
        id: 3,
        avatar: '7.png',
        full_name: 'Stella Ganderton',
        post: 'Operator',
        email: 'sganderton2@tuttocitta.it',
        city: 'Golcowa',
        start_date: '03/24/2018',
        salary: 13076.28,
        age: '66',
        experience: '6 Years',
        status: 5,
      },
      {
        responsive_id: '',
        id: 4,
        avatar: '8.png',
        full_name: 'Dorolice Crossman',
        post: 'Cost Accountant',
        email: 'dcrossman3@google.co.jp',
        city: 'Paquera',
        start_date: '12/03/2017',
        salary: 12336.17,
        age: '22',
        experience: '2 Years',
        status: 2,
      },
      {
        responsive_id: '',
        id: 6,
        avatar: '',
        full_name: 'Genevra Honeywood',
        post: 'Geologist',
        email: 'ghoneywood5@narod.ru',
        city: 'Maofan',
        start_date: '06/01/2017',
        salary: 17803.8,
        age: '61',
        experience: '1 Year',
        status: 1,
      },
      {
        responsive_id: '',
        id: 7,
        avatar: '',
        full_name: 'Eileen Diehn',
        post: 'Environmental Specialist',
        email: 'ediehn6@163.com',
        city: 'Lampuyang',
        start_date: '10/15/2017',
        salary: 18991.67,
        age: '59',
        experience: '9 Years',
        status: 3,
      },
      {
        responsive_id: '',
        id: 8,
        avatar: '7.png',
        full_name: 'Richardo Aldren',
        post: 'Senior Sales Associate',
        email: 'raldren7@mtv.com',
        city: 'Skoghall',
        start_date: '11/05/2016',
        salary: 19230.13,
        age: '55',
        experience: '5 Years',
        status: 3,
      },
      {
        responsive_id: '',
        id: 9,
        avatar: '2.png',
        full_name: 'Allyson Moakler',
        post: 'Safety Technician',
        email: 'amoakler8@shareasale.com',
        city: 'Mogilany',
        start_date: '12/29/2018',
        salary: 11677.32,
        age: '39',
        experience: '9 Years',
        status: 5,
      },
      {
        responsive_id: '',
        id: 11,
        avatar: '',
        full_name: 'De Falloon',
        post: 'Sales Representative',
        email: 'dfalloona@ifeng.com',
        city: 'Colima',
        start_date: '06/12/2018',
        salary: 19252.12,
        age: '30',
        experience: '0 Year',
        status: 4,
      },
      {
        responsive_id: '',
        id: 12,
        avatar: '',
        full_name: 'Cyrus Gornal',
        post: 'Senior Sales Associate',
        email: 'cgornalb@fda.gov',
        city: 'Boro Utara',
        start_date: '12/09/2017',
        salary: 16745.47,
        age: '22',
        experience: '2 Years',
        status: 4,
      },
      {
        responsive_id: '',
        id: 13,
        avatar: '',
        full_name: 'Tallou Balf',
        post: 'Staff Accountant',
        email: 'tbalfc@sina.com.cn',
        city: 'Siliana',
        start_date: '01/21/2016',
        salary: 15488.53,
        age: '36',
        experience: '6 Years',
        status: 4,
      },
      {
        responsive_id: '',
        id: 15,
        avatar: '',
        full_name: 'Wilmar Bourton',
        post: 'Administrative Assistant',
        email: 'wbourtone@sakura.ne.jp',
        city: 'Bích Động',
        start_date: '04/25/2018',
        salary: 13304.45,
        age: '19',
        experience: '9 Years',
        status: 5,
      },
      {
        responsive_id: '',
        id: 16,
        avatar: '4.png',
        full_name: 'Robinson Brazenor',
        post: 'General Manager',
        email: 'rbrazenorf@symantec.com',
        city: 'Gendiwu',
        start_date: '12/23/2017',
        salary: 11953.08,
        age: '66',
        experience: '6 Years',
        status: 5,
      },
      {
        responsive_id: '',
        id: 17,
        avatar: '',
        full_name: 'Nadia Bettenson',
        post: 'Environmental Tech',
        email: 'nbettensong@joomla.org',
        city: 'Chabařovice',
        start_date: '07/11/2018',
        salary: 20484.44,
        age: '64',
        experience: '4 Years',
        status: 1,
      },
      {
        responsive_id: '',
        id: 18,
        avatar: '',
        full_name: 'Titus Hayne',
        post: 'Web Designer',
        email: 'thayneh@kickstarter.com',
        city: 'Yangon',
        start_date: '05/25/2019',
        salary: 16871.48,
        age: '59',
        experience: '9 Years',
        status: 1,
      },
      {
        responsive_id: '',
        id: 19,
        avatar: '4.png',
        full_name: 'Roxie Huck',
        post: 'Administrative Assistant',
        email: 'rhucki@ed.gov',
        city: 'Polýkastro',
        start_date: '04/04/2019',
        salary: 19653.56,
        age: '41',
        experience: '1 Year',
        status: 4,
      },
      {
        responsive_id: '',
        id: 23,
        avatar: '7.png',
        full_name: 'Rosmunda Steed',
        post: 'Assistant Media Planner',
        email: 'rsteedm@xing.com',
        city: 'Manzanares',
        start_date: '12/23/2017',
        salary: 13778.34,
        age: '21',
        experience: '1 Year',
        status: 5,
      },
      {
        responsive_id: '',
        id: 26,
        avatar: '2.png',
        full_name: 'Morgen Benes',
        post: 'Senior Sales Associate',
        email: 'mbenesp@ted.com',
        city: 'Cà Mau',
        start_date: '04/10/2016',
        salary: 16969.63,
        age: '42',
        experience: '2 Years',
        status: 4,
      },
      {
        responsive_id: '',
        id: 28,
        avatar: '',
        full_name: 'Kliment McGinney',
        post: 'Chief Design Engineer',
        email: 'kmcginneyr@paginegialle.it',
        city: 'Xiaocheng',
        start_date: '07/09/2018',
        salary: 24027.81,
        age: '28',
        experience: '8 Years',
        status: 4,
      },
      {
        responsive_id: '',
        id: 31,
        avatar: '',
        full_name: 'Teressa Bleakman',
        post: 'Senior Editor',
        email: 'tbleakmanu@phpbb.com',
        city: 'Žebrák',
        start_date: '09/03/2016',
        salary: 24875.41,
        age: '37',
        experience: '7 Years',
        status: 5,
      },
    ]

    return {
      headers: [
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'DATE', value: 'start_date' },
        { text: 'SALARY', value: 'salary' },
        { text: 'AGE', value: 'age' },
        { text: 'STATUS', value: 'status' },
      ],
      userList,
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      statusColor,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
}
</script>
`

export const datatableBasic = `
<template>
  <v-data-table
    :headers="headers"
    :items="userData"
    :items-per-page="5"
  ></v-data-table>
</template>

<script>
import data from '../datatable'

export default {
  setup() {
    const userData = data

    return {
      headers: [
        { text: 'ID', sortable: false, value: 'id' },
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'DATE', value: 'start_date' },
        { text: 'EXPERIENCE', value: 'experience' },
        { text: 'AGE', value: 'age' },
      ],
      userData,
    }
  },
}
</script>
`

export const datatableExpandableRows = `
<template>
  <v-data-table
    :headers="headers"
    :items="userList"
    :items-per-page="5"
    :expanded.sync="expanded"
    show-expand
  >
    <!-- name -->
    <template #[\`item.full_name\`]="{item}">
      <div class="d-flex align-center">
        <v-avatar
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          size="32"
        >
          <v-img
            v-if="item.avatar"
            :src="\`/images/avatars/\${item.avatar}\`"
          ></v-img>
          <span v-else>{{ item.full_name.slice(0,2).toUpperCase() }}</span>
        </v-avatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <!-- salary -->
    <template #[\`item.salary\`]="{item}">
      {{ \`$\${item.salary}\` }}
    </template>

    <!-- status -->
    <template #[\`item.status\`]="{item}">
      <v-chip
        small
        :color="statusColor[status[item.status]]"
        :class="\`\${statusColor[status[item.status]]}--text\`"
        class="v-chip-light-bg"
      >
        {{ status[item.status] }}
      </v-chip>
    </template>

    <!-- expandad data -->
    <template #expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <p class="my-1">
          City: {{ item.city }}
        </p>
        <p class="mb-1">
          Experience: {{ item.experience }}
        </p>
        <p>Post: {{ item.post }}</p>
      </td>
    </template>
  </v-data-table>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
import data from '../datatable'

export default {
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Professional: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }
    const expanded = ref([])

    return {
      headers: [
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'DATE', value: 'start_date' },
        { text: 'SALARY', value: 'salary' },
        { text: 'AGE', value: 'age' },
        { text: 'STATUS', value: 'status' },
      ],
      userList: data,
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      statusColor,
      expanded,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
}
</script>
`

export const datatableRowSelection = `
<template>
  <v-data-table
    :headers="headers"
    :items="usreList"
    :items-per-page="5"
    item-key="full_name"
    show-select
  >
    <!-- name -->
    <template #[\`item.full_name\`]="{item}">
      <div class="d-flex align-center">
        <v-avatar
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          size="32"
        >
          <v-img
            v-if="item.avatar"
            :src="\`/images/avatars/\${item.avatar}\`"
          ></v-img>
          <span
            v-else
          >{{ item.full_name.slice(0,2).toUpperCase() }}</span>
        </v-avatar>
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
          <small>{{ item.post }}</small>
        </div>
      </div>
    </template>

    <template #[\`item.salary\`]="{item}">
      {{ \`$\${item.salary}\` }}
    </template>

    <!-- status -->
    <template #[\`item.status\`]="{item}">
      <v-chip
        small
        :color="statusColor[status[item.status]]"
        :class="\`\${statusColor[status[item.status]]}--text\`"
        class="v-chip-light-bg"
      >
        {{ status[item.status] }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
import data from '../datatable'

export default {
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Professional: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }

    return {
      headers: [
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'DATE', value: 'start_date' },
        { text: 'SALARY', value: 'salary' },
        { text: 'AGE', value: 'age' },
        { text: 'STATUS', value: 'status' },
      ],
      usreList: data,
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      statusColor,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
}
</script>
`

export const datatableExternalPagination = `
<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="userList"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      @page-count="pageCount = $event"
    >
      <!-- name -->
      <template #[\`item.full_name\`]="{item}">
        <div class="d-flex align-center">
          <v-avatar
            :color="item.avatar ? '' : 'primary'"
            :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
            size="32"
          >
            <v-img
              v-if="item.avatar"
              :src="\`/images/avatars/\${item.avatar}\`"
            ></v-img>
            <span v-else>{{ item.full_name.slice(0,2).toUpperCase() }}</span>
          </v-avatar>
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
            <small>{{ item.post }}</small>
          </div>
        </div>
      </template>

      <!-- salary -->
      <template #[\`item.salary\`]="{item}">
        {{ \`$\${item.salary}\` }}
      </template>

      <!-- status -->
      <template #[\`item.status\`]="{item}">
        <v-chip
          small
          :color="statusColor[status[item.status]]"
          :class="\`\${statusColor[status[item.status]]}--text\`"
          class="v-chip-light-bg"
        >
          {{ status[item.status] }}
        </v-chip>
      </template>
    </v-data-table>

    <v-card-text class="pt-2">
      <v-row>
        <v-col
          lg="2"
          cols="3"
        >
          <v-text-field
            :value="itemsPerPage"
            label="Rows per page:"
            type="number"
            min="-1"
            max="15"
            hide-details
            @input="itemsPerPage = parseInt($event, 10)"
          ></v-text-field>
        </v-col>

        <v-col
          lg="10"
          cols="9"
          class="d-flex justify-end"
        >
          <v-pagination
            v-model="page"
            total-visible="6"
            :length="pageCount"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
import data from '../datatable'

export default {
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Professional: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }

    return {
      headers: [
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'DATE', value: 'start_date' },
        { text: 'SALARY', value: 'salary' },
        { text: 'AGE', value: 'age' },
        { text: 'STATUS', value: 'status' },
      ],
      userList: data,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      statusColor,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
}
</script>
`

export const datatableKitchenSink = `
<template>
  <div>
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
          offset-md="8"
          md="4"
        >
          <v-text-field
            v-model="search"
            :append-icon="icons.mdiMagnify"
            label="Search"
            single-line
            hide-details
            dense
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>

    <!-- Table -->
    <v-data-table
      :headers="headers"
      :items="productList"
      :search="search"
      :items-per-page="5"
      class="table-kitchen-sink"
    >
      <!-- product -->
      <template #[\`item.product.name\`]="{item}">
        <div class="d-flex align-center">
          <div>
            <v-img
              :src="item.product.image"
              height="40"
              width="40"
            ></v-img>
          </div>
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-semibold text-truncate text--primary">{{ item.product.name }}</span>
            <span class="text-xs">{{ item.product.brand }}</span>
          </div>
        </div>
      </template>
      <template #[\`item.date\`]="{item}">
        <span class="text-no-wrap">{{ item.date }}</span>
      </template>
      <!-- category -->
      <template #[\`item.category\`]="{item}">
        <div class="d-flex align-center">
          <v-avatar
            v-for="(category,index) in categoryIconFilter(item.product.category)"
            :key="index"
            size="26"
            :color="category.color"
            :class="\`\${category.color}--text\`"
            class="v-avatar-light-bg"
          >
            <v-icon
              size="20"
              :color="category.color"
              class="rounded-0"
            >
              {{ category.icon }}
            </v-icon>
          </v-avatar>
          <span class="ms-1 text-no-wrap">{{ item.product.category }}</span>
        </div>
      </template>
      <!-- buyer -->
      <template #[\`item.buyer.name\`]="{item}">
        <div class="d-flex align-center">
          <v-avatar
            size="1.875rem"
            color="primary"
            class="v-avatar-light-bg primary--text"
          >
            <v-img
              v-if="item.buyer.avatar"
              :src="item.buyer.avatar"
            ></v-img>
            <span v-else>{{ item.buyer.name.slice(0,2).toUpperCase() }}</span>
          </v-avatar>
          <span class="text-no-wrap font-weight-semibold text--primary ms-2">{{ item.buyer.name }}</span>
        </div>
      </template>
      <!-- payment -->
      <template #[\`item.payment\`]="{item}">
        <div class="d-flex flex-column">
          <div class="d-flex align-center">
            <span class="primary--text font-weight-medium">\${{ item.payment.paid_amount }}</span>
            <span v-if="item.payment.paid_amount !== item.payment.total">/{{ item.payment.total }}</span>
          </div>
          <span class="text-xs text-no-wrap">{{ item.payment.received_payment_status }}</span>
        </div>
      </template>
      <!-- status -->
      <template #[\`item.status\`]="{item}">
        <v-chip
          :color="statusColor[item.payment.status]"
          :class="\`\${statusColor[item.payment.status]}--text\`"
          class="v-chip-light-bg"
          small
        >
          {{ item.payment.status }}
        </v-chip>
      </template>
      <template #[\`item.delete\`]="">
        <a><v-icon>{{ icons.mdiDeleteOutline }}</v-icon></a>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import {
  mdiMagnify,
  mdiDeleteOutline,
  mdiMouse,
  mdiGlasses,
  mdiWatchVariant,
  mdiBagPersonalOutline,
  mdiTapeDrive,
  mdiBluetooth,
  mdiControllerClassicOutline,
  mdiHomeOutline,
  mdiVirtualReality,
  mdiShoeSneaker,
  mdiFlash,
  mdiProjector,
  mdiIpod,
  mdiKeyboardVariant,
  mdiCellphone,
  mdiTelevision,
  mdiGoogleHome,
  mdiApple,
  mdiHeadphones,
  mdiDesktopMac,
} from '@mdi/js'

export default {
  setup() {
    const search = ref('')
    const productList = ref([])
    const categoryIcons = [
      { name: 'Mouse', icon: mdiMouse, color: 'warning' },
      { name: 'Glass', icon: mdiGlasses, color: 'primary' },
      { name: 'Smart Watch', icon: mdiWatchVariant, color: 'success' },
      { name: 'Bag', icon: mdiBagPersonalOutline, color: 'info' },
      { name: 'Storage Device', icon: mdiTapeDrive, color: 'warning' },
      { name: 'Bluetooth', icon: mdiBluetooth, color: 'error' },
      { name: 'Gaming', icon: mdiControllerClassicOutline, color: 'warning' },
      { name: 'Home', icon: mdiHomeOutline, color: 'error' },
      { name: 'VR', icon: mdiVirtualReality, color: 'primary' },
      { name: 'Shoes', icon: mdiShoeSneaker, color: 'success' },
      { name: 'Electronics', icon: mdiFlash, color: 'info' },
      { name: 'Projector', icon: mdiProjector, color: 'warning' },
      { name: 'IPod', icon: mdiIpod, color: 'error' },
      { name: 'Keyboard', icon: mdiKeyboardVariant, color: 'primary' },
      { name: 'Smart Phone', icon: mdiCellphone, color: 'success' },
      { name: 'Smart TV', icon: mdiTelevision, color: 'info' },
      { name: 'Google Home', icon: mdiGoogleHome, color: 'warning' },
      { name: 'Mac', icon: mdiApple, color: 'error' },
      { name: 'Headphone', icon: mdiHeadphones, color: 'primary' },
      { name: 'IMac', icon: mdiDesktopMac, color: 'success' },
      { name: 'IPhone', icon: mdiApple, color: 'warning' },
    ]
    const statusColor = { Confirmed: 'primary', Completed: 'success', Cancelled: 'error' }

    const categoryIconFilter = categoryName => {
      const index = categoryIcons.findIndex(category => category.name === categoryName)

      if (index !== -1) return [{ icon: categoryIcons[index].icon, color: categoryIcons[index].color }]

      return false
    }

    return {
      icons: {
        mdiMagnify,
        mdiDeleteOutline,
      },
      search,
      statusColor,
      headers: [
        { text: 'PRODUCT', value: 'product.name' },
        { text: 'DATE', value: 'date' },
        { text: 'CATEGORY', value: 'category' },
        { text: 'BUYERS', value: 'buyer.name' },
        { text: 'PAYMENT', value: 'payment', sortable: false },
        { text: 'STATUS', value: 'status', sortable: false },
        { text: 'DELETE', value: 'delete', sortable: false },
      ],
      categoryIconFilter,
      productList,
      categoryIcons,
    }
  },
  created() {
    this.$http.get('/data-table/data').then(res => {
      this.productList = res.data
    })
  },
}
</script>

<style lang="scss" scoped>
.table-kitchen-sink ::v-deep {
  .v-data-table-header {
    white-space: nowrap;
  }
}
</style>
`

export const datatableDense = `
<template>
  <v-data-table
    :headers="headers"
    :items="userList"
    :items-per-page="5"
    dense
  ></v-data-table>
</template>

<script>
import data from '../datatable'

export default {
  setup() {
    return {
      headers: [
        { text: 'ID', sortable: false, value: 'id' },
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'DATE', value: 'start_date' },
        { text: 'EXPERIENCE', value: 'experience' },
        { text: 'AGE', value: 'age' },
      ],
      userList: data,
    }
  },
}
</script>
`
