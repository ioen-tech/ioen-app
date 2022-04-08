const formTable = [
  {
    path: '/form/autocomplete',
    name: 'form-autocomplete',
    component: () => import('@/views/forms/form-elements/autocomplete/Autocomplete.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/checkbox',
    name: 'form-checkbox',
    component: () => import('@/views/forms/form-elements/checkbox/Checkbox.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/combobox',
    name: 'form-combobox',
    component: () => import('@/views/forms/form-elements/combobox/Combobox.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/file-input',
    name: 'form-file-input',
    component: () => import('@/views/forms/form-elements/file-input/FileInput.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/radio',
    name: 'form-radio',
    component: () => import('@/views/forms/form-elements/radio/Radio.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/range-slider',
    name: 'form-range-slider',
    component: () => import('@/views/forms/form-elements/range-slider/RangeSlider.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/select',
    name: 'form-select',
    component: () => import('@/views/forms/form-elements/select/Select.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/slider',
    name: 'form-slider',
    component: () => import('@/views/forms/form-elements/slider/Slider.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/switch',
    name: 'form-switch',
    component: () => import('@/views/forms/form-elements/switch/Switch.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/textarea',
    name: 'form-textarea',
    component: () => import('@/views/forms/form-elements/textarea/Textarea.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/textfield',
    name: 'form-textfield',
    component: () => import('@/views/forms/form-elements/textfield/Textfield.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/datepicker',
    name: 'form-datepicker',
    component: () => import('@/views/forms/form-elements/datepicker/Datepicker.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/monthpicker',
    name: 'form-month-picker',
    component: () => import('@/views/forms/form-elements/month-picker/MonthPicker.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/timepicker',
    name: 'form-time-picker',
    component: () => import('@/views/forms/form-elements/time-picker/TimePicker.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/rating',
    name: 'form-rating',
    component: () => import('@/views/forms/form-elements/rating/Rating.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/form-layout',
    name: 'form-layout',
    component: () => import('@/views/forms/form-layout/FormLayout.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/form/validation',
    name: 'form-validation',
    component: () => import('@/views/forms/form-validation/FormValidation.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/table/simple-table',
    name: 'table-simple',
    component: () => import('@/views/tables/simple-table/SimpleTable.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/table/data-table',
    name: 'table-data-table',
    component: () => import('@/views/tables/datatable/Datatable.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default formTable
