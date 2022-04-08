import {
  mdiAccountOutline,
  mdiAccountPlusOutline,
  mdiAlertOutline,
  mdiAlphaBBoxOutline,
  mdiAlphaTBoxOutline,
  mdiBellOutline,
  mdiCalendarOutline,
  mdiChartBar,
  mdiChartDonut,
  mdiCheckboxBlankOutline,
  mdiCheckboxMarkedOutline,
  mdiCheckCircleOutline,
  mdiClockOutline,
  mdiCloseOctagonOutline,
  mdiCogOutline,
  mdiContentCopy,
  mdiControllerClassicOutline,
  mdiCreditCardOutline,
  mdiCurrencyUsd,
  mdiDebugStepOver,
  mdiDotsHorizontal,
  mdiEmailOutline,
  mdiEyeOutline,
  mdiFamilyTree,
  mdiFileDocumentOutline,
  mdiFileMusicOutline,
  mdiFileOutline,
  mdiFormatAlignCenter,
  mdiFormatAlignLeft,
  mdiFormatListBulleted,
  mdiHelpCircleOutline,
  mdiHomeOutline,
  mdiInformationOutline,
  mdiKeyOutline,
  mdiLockOutline,
  mdiMapOutline,
  mdiMemory,
  mdiMessageTextOutline,
  mdiPlus,
  mdiPoll,
  mdiPound,
  mdiRadioboxMarked,
  mdiRayVertex,
  mdiStarOutline,
  mdiTagOutline,
  mdiToggleSwitchOffOutline,
  mdiViewGridOutline,
} from '@mdi/js'

/* eslint-disable */
// prettier-ignore
export default [
  { header: 'Pages' },

  // dashboard
  { title: 'CRM', to: { name: 'dashboard-crm' }, icon: mdiHomeOutline },
  { title: 'Analytics', to: { name: 'dashboard-analytics' }, icon: mdiHomeOutline },
  { title: 'eCommerce', to: { name: 'dashboard-eCommerce' }, icon: mdiHomeOutline },

  // Apps
  { title: 'Calendar', to: { name: 'apps-calendar' }, icon: mdiCalendarOutline },
  { title: 'Chat', to: { name: 'apps-chat' }, icon: mdiMessageTextOutline },

  { title: 'Invoice List', to: { name: 'apps-invoice-list' }, icon: mdiFileDocumentOutline },
  {
    title: 'Invoice Preview',
    to: { name: 'apps-invoice-preview', params: { id: 4987 } },
    icon: mdiFileDocumentOutline,
  },
  { title: 'Invoice Edit', to: { name: 'apps-invoice-edit', params: { id: 4987 } }, icon: mdiFileDocumentOutline },
  { title: 'Invoice Add', to: { name: 'apps-invoice-add' }, icon: mdiFileDocumentOutline },

  { title: 'User List', to: { name: 'apps-user-list' }, icon: mdiAccountOutline },
  { title: 'User View', to: { name: 'apps-user-view', params: { id: 21 } }, icon: mdiAccountOutline },
  { title: 'Email', to: { name: 'apps-email' }, icon: mdiEmailOutline },

  // authentication
  { title: 'Login v1', to: { name: 'auth-login-v1' }, icon: mdiLockOutline },
  { title: 'Login v2', to: { name: 'auth-login-v2' }, icon: mdiLockOutline },
  { title: 'Register v1', to: { name: 'auth-register-v1' }, icon: mdiAccountPlusOutline },
  { title: 'Register v2', to: { name: 'auth-register-v2' }, icon: mdiAccountPlusOutline },
  { title: 'Forgot Password v1', to: { name: 'auth-forgot-password-v1' }, icon: mdiKeyOutline },
  { title: 'Forgot Password v2', to: { name: 'auth-forgot-password-v2' }, icon: mdiKeyOutline },
  { title: 'Reset Password v1', to: { name: 'auth-reset-password-v1' }, icon: mdiKeyOutline },
  { title: 'Reset Password v2', to: { name: 'auth-reset-password-v2' }, icon: mdiKeyOutline },

  // pages
  { title: 'Knowledge Base', to: { name: 'page-knowledge-base' }, icon: mdiInformationOutline },
  { title: 'Account Settings', to: { name: 'page-account-settings' }, icon: mdiCogOutline },
  { title: 'Pricing', to: { name: 'page-pricing' }, icon: mdiCurrencyUsd },
  { title: 'FAQ', to: { name: 'page-faq' }, icon: mdiHelpCircleOutline },

  // misc
  { title: 'Under Maintenance', to: { name: 'misc-under-maintenance' }, icon: mdiFileOutline },
  { title: 'Error', to: { name: 'misc-error' }, icon: mdiHelpCircleOutline },
  { title: 'Coming Soon', to: { name: 'misc-coming-soon' }, icon: mdiClockOutline },
  { title: 'Not Authorized', to: { name: 'misc-not-authorized' }, icon: mdiCloseOctagonOutline },

  //ui
  { title: 'Typography', to: { name: 'ui-typography' }, icon: mdiAlphaTBoxOutline },
  { title: 'Gamification', to: { name: 'ui-gamification' }, icon: mdiControllerClassicOutline },
  { title: 'Icons', to: { name: 'ui-icons' }, icon: mdiEyeOutline },

  // Cards
  { title: 'Card Basic', to: { name: 'card-basic' }, icon: mdiCreditCardOutline },
  { title: 'Card Statistics', to: { name: 'card-statistics' }, icon: mdiCreditCardOutline },
  { title: 'Card Advance', to: { name: 'card-advance' }, icon: mdiCreditCardOutline },
  { title: 'Card Actions', to: { name: 'card-actions' }, icon: mdiCreditCardOutline },
  { title: 'Card Chart', to: { name: 'card-chart' }, icon: mdiChartBar },

  // Components
  { title: 'Alert', to: { name: 'components-alert' }, icon: mdiAlertOutline },
  { title: 'Avatar', to: { name: 'components-avatar' }, icon: mdiAccountOutline },
  { title: 'Badge', to: { name: 'components-badge' }, icon: mdiTagOutline },
  { title: 'Button', to: { name: 'components-button' }, icon: mdiAlphaBBoxOutline },
  { title: 'Menu', to: { name: 'components-menu' }, icon: mdiDotsHorizontal },
  { title: 'Expansion Panel', to: { name: 'components-expansion-panel' }, icon: mdiPlus },
  { title: 'List', to: { name: 'components-list' }, icon: mdiFormatListBulleted },
  { title: 'Dialog', to: { name: 'components-dialog' }, icon: mdiContentCopy },
  { title: 'Pagination', to: { name: 'components-pagination' }, icon: mdiPound },
  { title: 'Tabs', to: { name: 'components-tabs' }, icon: mdiCreditCardOutline },
  { title: 'Tooltip', to: { name: 'components-tooltip' }, icon: mdiContentCopy },
  { title: 'Chip', to: { name: 'components-chip' }, icon: mdiMemory },
  { title: 'Snackbar', to: { name: 'components-snackbar' }, icon: mdiBellOutline },
  { title: 'Stepper', to: { name: 'components-stepper' }, icon: mdiDebugStepOver },
  { title: 'Timeline', to: { name: 'components-timeline' }, icon: mdiClockOutline },
  { title: 'Treeview', to: { name: 'components-treeview' }, icon: mdiFamilyTree },

  // forms elements
  { title: 'Autocomplete', to: { name: 'form-autocomplete' }, icon: mdiFormatAlignLeft },
  { title: 'Checkbox', to: { name: 'form-checkbox' }, icon: mdiCheckboxMarkedOutline },
  { title: 'Combobox', to: { name: 'form-combobox' }, icon: mdiCheckboxBlankOutline },
  { title: 'File Input', to: { name: 'form-file-input' }, icon: mdiAlphaTBoxOutline },
  { title: 'Radio', to: { name: 'form-radio' }, icon: mdiRadioboxMarked },
  { title: 'Range Slider', to: { name: 'form-range-slider' }, icon: mdiRadioboxMarked },
  { title: 'Select', to: { name: 'form-select' }, icon: mdiFormatAlignCenter },
  { title: 'Slider', to: { name: 'form-slider' }, icon: mdiRayVertex },
  { title: 'Switch', to: { name: 'form-switch' }, icon: mdiToggleSwitchOffOutline },
  { title: 'Textarea', to: { name: 'form-textarea' }, icon: mdiAlphaTBoxOutline },
  { title: 'Textfield', to: { name: 'form-textfield' }, icon: mdiAlphaTBoxOutline },
  { title: 'Form Datepicker', to: { name: 'form-datepicker' }, icon: mdiClockOutline },
  { title: 'Form Month Picker', to: { name: 'form-month-picker' }, icon: mdiClockOutline },
  { title: 'Form Time Picker', to: { name: 'form-time-picker' }, icon: mdiClockOutline },
  { title: 'Rating', to: { name: 'form-rating' }, icon: mdiStarOutline },
  { title: 'Form Layout', to: { name: 'form-layout' }, icon: mdiViewGridOutline },
  { title: 'Form Validation', to: { name: 'form-validation' }, icon: mdiCheckCircleOutline },

  // chart and maps
  { title: 'Apex Chart', to: { name: 'apex-chart' }, icon: mdiChartDonut },
  { title: 'Chartjs', to: { name: 'chartjs-chart' }, icon: mdiPoll },

  // map
  { title: 'Leaflet Maps', to: { name: 'leaflet-maps' }, icon: mdiMapOutline },

  // tables
  { title: 'Simple Table', to: { name: 'table-simple' }, icon: mdiContentCopy },
  { title: 'Datatable', to: { name: 'table-data-table' }, icon: mdiContentCopy },

  // Files
  { header: 'Files' },
  { title: "Joe's CV", by: 'Stacy Watson', icon: mdiFileMusicOutline, size: '1.7 mb' },
  { title: 'Passport Image', by: 'Ben Sinitiere', icon: mdiFileMusicOutline, size: '52 kb' },
  { title: 'Questions', by: 'Charleen Patti', icon: mdiFileMusicOutline, size: '1.5 gb' },
  { title: 'Parenting Guide', by: 'Doyle Blatteau', icon: mdiFileMusicOutline, size: '2.3 mb' },
  { title: 'Class Notes', by: 'Gwen Greenlow', icon: mdiFileMusicOutline, size: ' 30 kb' },
  { title: 'Class Attendance', by: 'Tom Alred', icon: mdiFileMusicOutline, size: '52 mb' },
  { title: 'Company Salary', by: 'Nellie Dezan', icon: mdiFileMusicOutline, size: '29 mb' },
  { title: 'Company Logo', by: 'Steve Sheldon', icon: mdiFileMusicOutline, size: '1.3 mb' },
  { title: 'Crime Rates', by: 'Sherlock Holmes', icon: mdiFileMusicOutline, size: '37 kb' },
  { title: 'Ulysses', by: 'Theresia Wrenne', icon: mdiFileMusicOutline, size: '7.2 mb' },
  { title: 'War and Peace', by: 'Goldie Highnote', icon: mdiFileMusicOutline, size: '10.5 mb' },
  { title: 'Vedas', by: 'Ajay Patel', icon: mdiFileMusicOutline, size: '8.3 mb' },
  { title: 'The Trial', by: 'Sirena Linkert', icon: mdiFileMusicOutline, size: '1.5 mb' },

  // Contacts
  { header: 'Contacts' },
  { avatar: require('@/assets/images/avatars/6.png'), title: 'Rena Brant', email: 'nephrod@preany.co.uk', time: '21/05/2019' },
  { avatar: require('@/assets/images/avatars/4.png'), title: 'Mariano Packard', email: 'seek@sparaxis.org', time: '14/01/2018' },
  { avatar: require('@/assets/images/avatars/3.png'), title: 'Risa Montufar', email: 'vagary@unblist.org', time: '10/08/2019' },
  { avatar: require('@/assets/images/avatars/7.png'), title: 'Maragaret Cimo', email: 'designed@insanely.net', time: '01/12/2019' },
  { avatar: require('@/assets/images/avatars/8.png'), title: 'Jona Prattis', email: 'unwieldable@unblist.org', time: '21/05/2019' },
  { avatar: require('@/assets/images/avatars/5.png'), title: 'Edmond Chicon', email: 'museist@anaphyte.co.uk', time: '15/11/2019' },
  { avatar: require('@/assets/images/avatars/6.png'), title: 'Abbey Darden', email: 'astema@defectively.co.uk', time: '07/05/2019' },
  { avatar: require('@/assets/images/avatars/1.png'), title: 'Seema Moallankamp', email: 'fernando@storkish.co.uk', time: '13/08/2017' },
  { avatar: require('@/assets/images/avatars/3.png'), title: 'Charleen Warmington', email: 'furphy@cannibal.net', time: '11/08/1891' },
  { avatar: require('@/assets/images/avatars/5.png'), title: 'Geri Linch', email: 'insignia@markab.org', time: '18/01/2015' },
  { avatar: require('@/assets/images/avatars/2.png'), title: 'Shellie Muster', email: 'maxillary@equalize.co.uk', time: '26/07/2019' },
  { avatar: require('@/assets/images/avatars/7.png'), title: 'Jesenia Vanbramer', email: 'hypotony@phonetist.net', time: '12/09/2017' },
  { avatar: require('@/assets/images/avatars/1.png'), title: 'Mardell Channey', email: 'peseta@myrica.com', time: '11/11/2019' },
]
