import {
  mdiCogOutline,
  mdiCurrencyUsd,
  mdiFileOutline,
  mdiHelpCircleOutline,
  mdiInformationOutline,
  mdiLockOutline,
} from '@mdi/js'

export default [
  {
    title: 'Pages',
    icon: mdiFileOutline,
    children: [
      {
        title: 'Authentication',
        icon: mdiLockOutline,
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
        icon: mdiFileOutline,
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
        icon: mdiInformationOutline,
        title: 'Knowledge Base',
        to: 'page-knowledge-base',
      },
      {
        icon: mdiCogOutline,
        title: 'Account Settings',
        to: 'page-account-settings',
      },
      {
        icon: mdiCurrencyUsd,
        title: 'Pricing',
        to: 'page-pricing',
      },
      {
        icon: mdiHelpCircleOutline,
        title: 'FAQ',
        to: 'page-faq',
      },
    ],
  },
]
