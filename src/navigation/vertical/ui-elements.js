import {
  mdiAlphaTBoxOutline,
  mdiArchiveOutline,
  mdiControllerClassicOutline,
  mdiCreditCardOutline,
  mdiEyeOutline,
} from '@mdi/js'

export default [
  {
    subheader: 'USER INTERFACE',
  },
  {
    icon: mdiAlphaTBoxOutline,
    title: 'Typography',
    to: 'ui-typography',
  },
  {
    icon: mdiEyeOutline,
    title: 'Icons',
    to: 'ui-icons',
  },
  {
    icon: mdiControllerClassicOutline,
    title: 'Gamification',
    to: 'ui-gamification',
  },
  {
    title: 'Cards',
    icon: mdiCreditCardOutline,
    badge: 'New',
    badgeColor: 'success',
    children: [
      {
        title: 'Basic',
        to: 'card-basic',
      },
      {
        title: 'Statistics',
        to: 'card-statistics',
      },
      {
        title: 'Advance',
        to: 'card-advance',
      },
      {
        title: 'Actions',
        to: 'card-actions',
      },
      {
        title: 'Chart',
        to: 'card-chart',
      },
    ],
  },
  {
    title: 'Components',
    icon: mdiArchiveOutline,
    children: [
      {
        title: 'Alert',
        to: 'components-alert',
      },
      {
        title: 'Avatar',
        to: 'components-avatar',
      },
      {
        title: 'Badge',
        to: 'components-badge',
      },
      {
        title: 'Button',
        to: 'components-button',
      },
      {
        title: 'Chip',
        to: 'components-chip',
      },
      {
        title: 'Dialog',
        to: 'components-dialog',
      },

      {
        title: 'Expansion Panel',
        to: 'components-expansion-panel',
      },
      {
        title: 'List',
        to: 'components-list',
      },
      {
        title: 'Menu',
        to: 'components-menu',
      },
      {
        title: 'Pagination',
        to: 'components-pagination',
      },

      {
        title: 'Snackbar',
        to: 'components-snackbar',
      },
      {
        title: 'Stepper',
        to: 'components-stepper',
      },
      {
        title: 'Tabs',
        to: 'components-tabs',
      },
      {
        title: 'Timeline',
        to: 'components-timeline',
      },
      {
        title: 'Tooltip',
        to: 'components-tooltip',
      },
      {
        title: 'Treeview',
        to: 'components-treeview',
      },
    ],
  },
]
