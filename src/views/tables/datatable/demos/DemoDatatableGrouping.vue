<template>
  <v-data-table
    :headers="headers"
    :items="userList"
    :items-per-page="10"
    group-by="status"
    show-group-by
  >
    <!-- name -->
    <template #[`item.full_name`]="{item}">
      <div class="d-flex align-center">
        <v-avatar
          :color="item.avatar ? '' : 'primary'"
          :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
          size="32"
        >
          <v-img
            v-if="item.avatar"
            :src="require(`@/assets/images/avatars/${item.avatar}`)"
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
    <template #[`item.salary`]="{item}">
      {{ `$${item.salary}` }}
    </template>

    <!-- status -->
    <template #[`item.status`]="{item}">
      <v-chip
        small
        :color="statusColor[status[item.status]]"
        :class="`${statusColor[status[item.status]]}--text`"
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
