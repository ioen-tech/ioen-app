import {
  mdiAlertCircleOutline,
  mdiChartTimelineVariant,
  mdiCheckCircleOutline,
  mdiClose,
  mdiContentSaveOutline,
  mdiDownloadCircleOutline,
  mdiEmailOutline,
} from '@mdi/js'
import { ref, watch } from '@vue/composition-api'
import store from '@/store'

export default function useInvoicesList() {
  const invoiceListTable = ref([])

  // Table Handlers
  const tableColumns = [
    {
      text: '#ID',
      align: 'start',
      value: 'id',
    },
    { text: 'Trending', value: 'trending', sortable: false },
    { text: 'CLIENT', value: 'client' },
    { text: 'TOTAL', value: 'total' },
    { text: 'DATE', value: 'issuedDate' },
    { text: 'BALANCE', value: 'balance' },
    {
      text: 'ACTIONS',
      value: 'actions',
      align: 'center',
      sortable: false,
    },
  ]

  const searchQuery = ref('')
  const options = ref({
    sortBy: ['id'],
    sortDesc: [true],
  })
  const totalInvoiceListTable = ref(0)
  const loading = ref(false)
  const statusFilter = ref(null)
  const selectedTableData = ref([])

  const fetchInvoices = () => {
    store
      .dispatch('app-invoice/fetchInvoices', {
        q: searchQuery.value,
        options: options.value,
        status: statusFilter.value,
      })
      .then(response => {
        const { filteredData, total } = response.data
        invoiceListTable.value = filteredData
        totalInvoiceListTable.value = total
        loading.value = false
      })
      .catch(error => {
        console.log(error)
      })
  }

  watch([searchQuery, statusFilter, options], () => {
    // start loading
    loading.value = true
    selectedTableData.value = []
    fetchInvoices()
  })

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveInvoiceStatusVariantAndIcon = status => {
    if (status === 'Partial Payment') return { variant: 'warning', icon: mdiChartTimelineVariant }
    if (status === 'Paid') return { variant: 'success', icon: mdiCheckCircleOutline }
    if (status === 'Downloaded') return { variant: 'info', icon: mdiDownloadCircleOutline }
    if (status === 'Draft') return { variant: 'secondary', icon: mdiContentSaveOutline }
    if (status === 'Sent') return { variant: 'primary', icon: mdiEmailOutline }
    if (status === 'Past Due') return { variant: 'error', icon: mdiAlertCircleOutline }

    return { variant: 'secondary', icon: mdiClose }
  }

  const resolveClientAvatarVariant = status => {
    if (status === 'Partial Payment') return 'primary'
    if (status === 'Paid') return 'error'
    if (status === 'Downloaded') return 'secondary'
    if (status === 'Draft') return 'warning'
    if (status === 'Sent') return 'info'
    if (status === 'Past Due') return 'success'

    return 'primary'
  }

  return {
    tableColumns,
    searchQuery,
    options,
    invoiceListTable,
    statusFilter,
    totalInvoiceListTable,
    loading,
    selectedTableData,
    fetchInvoices,
    resolveInvoiceStatusVariantAndIcon,
    resolveClientAvatarVariant,
  }
}
