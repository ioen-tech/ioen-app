<template>
  <v-card>
    <v-card-title class="align-start">
      <span>Team Members</span>
      <v-spacer></v-spacer>

      <v-btn
        icon
        small
        class="me-n3 mt-n2"
      >
        <v-icon>
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-simple-table class="team-table">
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Project
          </th>
          <th class="text-left">
            Task
          </th>
          <th class="text-left">
            Progress
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="team in teamMembers"
          :key="team.chipText"
        >
          <td class="d-flex">
            <v-avatar size="38">
              <v-img :src="team.avatar"></v-img>
            </v-avatar>
            <div class="text-no-wrap ms-3">
              <p class="font-weight-medium mb-0 text--primary">
                {{ team.title }}
              </p>
              <span class="text-xs">{{ team.subtitle }}</span>
            </div>
          </td>
          <td>
            <v-chip
              small
              color="primary"
              :class="`v-chip-light-bg ${team.chipColor}--text font-weight-semibold`"
            >
              {{ team.chipText }}
            </v-chip>
          </td>
          <td>
            <p class="font-weight-semibold mb-0">
              <span class="primary--text">{{ team.task.split('/')[0] }}</span>/<span class="text--primary">{{ team.task.split('/')[1] }}</span>
            </p>
          </td>
          <td class="d-flex align-center justify-center">
            <vue-apex-charts
              type="radialBar"
              :options="getChartConfig(team.chartColor)"
              :series="team.series"
              height="90"
              width="60"
            ></vue-apex-charts>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
import { mdiDotsVertical } from '@mdi/js'
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const chartOptions = {
      chart: {
        sparkline: {
          enabled: false,
        },
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '30%',
          },
          track: {
            background: '#ebe9f1',
          },
          dataLabels: {
            show: false,
            name: {
              show: false,
            },
          },
        },
      },

      grid: {
        padding: {
          bottom: -15,
        },
      },
    }

    const teamMembers = [
      {
        avatar: require('@/assets/images/avatars/1.png'),
        title: 'Dean Hogan',
        subtitle: 'iOS Developer',
        chipText: 'Zipcar',
        chipColor: 'primary',
        task: '87/135',
        series: [65],
        chartColor: '#9155fd',
      },
      {
        avatar: require('@/assets/images/avatars/8.png'),
        title: 'Hilda Rice',
        subtitle: 'iOS Developer',
        chipText: 'Brandi',
        chipColor: 'success',
        task: '340/420',
        series: [75],
        chartColor: '#56ca00',
      },
      {
        avatar: require('@/assets/images/avatars/5.png'),
        title: 'Andrew Obrien',
        subtitle: 'iOS Developer',
        chipText: 'Payers',
        chipColor: 'warning',
        task: '50/82',
        series: [55],
        chartColor: '#ffb400',
      },
      {
        avatar: require('@/assets/images/avatars/2.png'),
        title: 'Eleanor Price',
        subtitle: 'iOS Developer',
        chipText: 'Bitbank',
        chipColor: 'error',
        task: '98/260',
        series: [60],
        chartColor: '#ff4c51',
      },
      {
        avatar: require('@/assets/images/avatars/3.png'),
        title: 'Carl Oliver',
        subtitle: 'iOS Developer',
        chipText: 'Aviato',
        chipColor: 'secondary',
        task: '12/25',
        series: [60],
        chartColor: '#656971',
      },
    ]

    const getChartConfig = value => {
      const options = JSON.parse(JSON.stringify(chartOptions))
      options.colors = [value]

      return options
    }

    return {
      teamMembers,
      chartOptions,
      getChartConfig,
      icons: {
        mdiDotsVertical,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.team-table {
  tbody {
    td {
      border-bottom: none !important;
    }
  }
}
</style>
