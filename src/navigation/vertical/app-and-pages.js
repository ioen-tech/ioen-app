import {
  mdiAccountOutline,
  mdiCalendarOutline,
  mdiFileDocumentOutline,
  mdiFileOutline,
  mdiMessageTextOutline,
} from '@mdi/js'

export default [
  {
    subheader: 'APPS AND PAGES',
  },
  {
    title: 'Calendar',
    icon: mdiCalendarOutline,
    to: 'apps-calendar',
  },
  {
    title: 'Chat',
    icon: mdiMessageTextOutline,
    to: 'apps-chat',
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
  {
    title: 'Pages',
    icon: mdiFileOutline,
    children: [
      {
        title: 'Authentication',
        children: [
          {
            title: 'Login V1',
            to: 'auth-login-v1',
            target: '_blank',
          },
          {
            title: 'Login V2',
            to: 'auth-login-v2',
            target: '_blank',
          },
          {
            title: 'Register V1',
            to: 'auth-register-v1',
            target: '_blank',
          },
          {
            title: 'Register V2',
            to: 'auth-register-v2',
            target: '_blank',
          },
          {
            title: 'Forgot Password V1',
            to: 'auth-forgot-password-v1',
            target: '_blank',
          },
          {
            title: 'Forgot Password V2',
            to: 'auth-forgot-password-v2',
            target: '_blank',
          },
          {
            title: 'Reset Password V1',
            to: 'auth-reset-password-v1',
            target: '_blank',
          },
          {
            title: 'Reset Password V2',
            to: 'auth-reset-password-v2',
            target: '_blank',
          },
        ],
      },
      {
        title: 'Miscellaneous',
        children: [
          {
            title: 'Under Maintenance',
            to: 'misc-under-maintenance',
            target: '_blank',
          },
          {
            title: 'Error',
            to: 'misc-error',
            target: '_blank',
          },
          {
            title: 'Coming Soon',
            to: 'misc-coming-soon',
            target: '_blank',
          },
          {
            title: 'Not Authorized',
            to: 'misc-not-authorized',
            target: '_blank',
          },
        ],
      },
      {
        title: 'Knowledge Base',
        to: 'page-knowledge-base',
      },
      {
        title: 'Account Settings',
        to: 'page-account-settings',
      },
      {
        title: 'Pricing',
        to: 'page-pricing',
      },
      {
        title: 'FAQ',
        to: 'page-faq',
      },
    ],
  },
]
