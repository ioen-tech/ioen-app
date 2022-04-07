// eslint-disable-next-line object-curly-newline
import { mdiAlertOctagonOutline, mdiInboxOutline, mdiSquareEditOutline, mdiTrashCanOutline } from '@mdi/js'
import { computed } from '@vue/composition-api'

export default function useEmail() {
  const resolveLabelColor = label => {
    if (label === 'personal') return 'success'
    if (label === 'company') return 'primary'
    if (label === 'important') return 'warning'
    if (label === 'private') return 'error'

    return 'secondary'
  }

  const moveToFolderMenuListItems = computed(() => currentRoute => {
    const items = []

    const currentFolder = currentRoute.params.folder

    if (currentRoute.name !== 'apps-ioen-mail') items.push({ title: 'Inbox', value: 'inbox', icon: mdiInboxOutline })
    if (currentFolder !== 'draft') items.push({ title: 'Draft', value: 'draft', icon: mdiSquareEditOutline })
    if (currentFolder !== 'spam') items.push({ title: 'Spam', value: 'spam', icon: mdiAlertOctagonOutline })
    if (currentFolder !== 'trash') items.push({ title: 'Trash', value: 'trash', icon: mdiTrashCanOutline })

    return items
  })

  const updateLabelMenuListItems = [
    { title: 'Personal', value: 'personal', color: 'success' },
    { title: 'Company', value: 'company', color: 'primary' },
    { title: 'Important', value: 'important', color: 'warning' },
    { title: 'Private', value: 'private', color: 'error' },
  ]

  return {
    resolveLabelColor,

    // Selected Mail Actions Menu List Item
    moveToFolderMenuListItems,
    updateLabelMenuListItems,
  }
}
