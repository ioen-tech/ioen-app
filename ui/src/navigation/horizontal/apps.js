import {
  mdiAccountOutline,
  mdiCalendarOutline,
  mdiFileDocumentOutline,
  mdiMessageTextOutline,
  mdiPackageVariantClosed,
} from '@mdi/js'

export default [
  {
    title: 'Apps',
    icon: mdiPackageVariantClosed,
    children: [
      {
        title: 'Calendar',
        icon: mdiCalendarOutline,
        to: 'apps-calendar',
      },
      {
        title: 'Invoice',
        icon: mdiFileDocumentOutline,
        children: [
          {
            title: 'List',
            to: 'apps-invoice-list',
          },
          {
            title: 'Preview',
            to: { name: 'apps-invoice-preview', params: { id: 4987 } },
          },
          {
            title: 'Edit',
            to: { name: 'apps-invoice-edit', params: { id: 4987 } },
          },
          {
            title: 'Add',
            to: { name: 'apps-invoice-add' },
          },
        ],
      },
      {
        title: 'Chat',
        icon: mdiMessageTextOutline,
        to: 'apps-chat',
      },
      {
        title: 'User',
        icon: mdiAccountOutline,
        children: [
          {
            title: 'User List',
            to: 'apps-user-list',
          },
          {
            title: 'User View',
            to: { name: 'apps-user-view', params: { id: 21 } },
          },
        ],
      },
    ],
  },
]
