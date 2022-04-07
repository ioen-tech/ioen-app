import {
  mdiAccountCheckOutline,
  mdiAccountOutline,
  mdiAccountPlusOutline,
  mdiAccountRemoveOutline,
  mdiCogOutline,
  mdiDatabaseOutline,
  mdiDnsOutline,
  mdiPencilOutline,
} from '@mdi/js'
import { ref, watch } from '@vue/composition-api'
import store from '@/store'

export default function useUsersList() {
  const userListTable = ref([])

  const tableColumns = [
    { text: 'USER', value: 'fullName' },
    { text: 'EMAIL', value: 'email' },
    { text: 'ROLE', value: 'role', sortable: false },
    { text: 'PLAN', value: 'currentPlan', sortable: false },
    { text: 'STATUS', value: 'status', sortable: false },
    {
      text: 'ACTIONS',
      value: 'actions',
      align: 'center',
      sortable: false,
    },
  ]

  const searchQuery = ref('')
  const roleFilter = ref(null)
  const planFilter = ref(null)
  const statusFilter = ref(null)
  const totalUserListTable = ref(0)
  const loading = ref(false)
  const options = ref({
    sortBy: ['id'],
    sortDesc: [true],
  })
  const userTotalLocal = ref([])
  const selectedRows = ref([])

  // fetch data
  const fetchUsers = () => {
    store
      .dispatch('app-user/fetchUsers', {
        q: searchQuery.value,
        options: options.value,
        status: statusFilter.value,
        role: roleFilter.value,
        plan: planFilter.value,
      })
      .then(response => {
        const { filteredData, total, userTotal } = response.data

        userListTable.value = filteredData
        totalUserListTable.value = total
        userTotalLocal.value = userTotal

        // remove loading state
        loading.value = false
      })
      .catch(error => {
        console.log(error)
      })
  }

  watch([searchQuery, roleFilter, planFilter, statusFilter, options], () => {
    loading.value = true
    selectedRows.value = []
    fetchUsers()
  })

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveUserRoleVariant = role => {
    if (role === 'subscriber') return 'primary'
    if (role === 'author') return 'warning'
    if (role === 'maintainer') return 'success'
    if (role === 'editor') return 'info'
    if (role === 'admin') return 'error'

    return 'primary'
  }

  const resolveUserRoleIcon = role => {
    if (role === 'subscriber') return mdiAccountOutline
    if (role === 'author') return mdiCogOutline
    if (role === 'maintainer') return mdiDatabaseOutline
    if (role === 'editor') return mdiPencilOutline
    if (role === 'admin') return mdiDnsOutline

    return mdiAccountOutline
  }

  const resolveUserStatusVariant = status => {
    if (status === 'pending') return 'warning'
    if (status === 'active') return 'success'
    if (status === 'inactive') return 'secondary'

    return 'primary'
  }

  const resolveUserTotalIcon = total => {
    if (total === 'Total Users') return { icon: mdiAccountOutline, color: 'primary' }
    if (total === 'Paid Users') return { icon: mdiAccountPlusOutline, color: 'error' }
    if (total === 'Active Users') return { icon: mdiAccountCheckOutline, color: 'success' }
    if (total === 'Pending Users') return { icon: mdiAccountRemoveOutline, color: 'warning' }

    return { icon: mdiAccountOutline, color: 'primary' }
  }

  return {
    userListTable,
    tableColumns,
    searchQuery,
    roleFilter,
    planFilter,
    statusFilter,
    totalUserListTable,
    loading,
    options,
    userTotalLocal,
    selectedRows,
    fetchUsers,
    resolveUserRoleVariant,
    resolveUserRoleIcon,
    resolveUserStatusVariant,
    resolveUserTotalIcon,
  }
}
