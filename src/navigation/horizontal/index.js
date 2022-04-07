/*

NOTE: tag is not supported in horizontal menu

Array of object

Top level object can be:
2. Group (Group can have navItems as children)
3. navItem

* Supported Options

/--- nav Grp (top level grp is called header group) ---/

title
icon (if it's on top/second level)
children

/--- nav Item (top level item is called header link) ---/

icon (if it's on top/second level)
title
route: [route_obj/route_name] (I have to resolve name somehow from the route obj)

*/
// import dashboard from './dashboard'
// import apps from './apps'
// import pages from './pages'
// import chartsAndMaps from './charts-and-maps'
// import uiElements from './ui-elements'
// import formAndTable from './forms-and-table'
// import others from './others'

// Array of sections
// export default [...dashboard, ...apps, ...uiElements, ...formAndTable, ...pages, ...chartsAndMaps, ...others]
// import { mdiArchiveAlertOutline } from '@mdi/js'
import apps from './apps'
import chartsAndMaps from './charts-and-maps'
import dashboard from './dashboard'
import formAndTable from './forms-and-table'
import others from './others'
import pages from './pages'
import uiElements from './ui-elements'

// Array of sections
export default [...dashboard, ...apps, ...uiElements, ...pages, ...formAndTable, ...chartsAndMaps, ...others]

// export default [
//   {
//     title: 'tooltip',
//     to: 'components-tooltip',
//   },
//   {
//     title: 'Components',
//     icon: mdiArchiveAlertOutline,
//     children: [
//       {
//         title: 'Alert',
//         icon: mdiArchiveAlertOutline,
//         to: 'components-alert',
//       },
//       {
//         title: 'Button',
//         icon: mdiArchiveAlertOutline,
//         to: 'components-button',
//       },
//     ],
//   },
//   {
//     title: 'User Interface',
//     icon: mdiArchiveAlertOutline,
//     children: [
//       {
//         title: 'Badge',
//         icon: mdiArchiveAlertOutline,
//         to: 'components-badge',
//       },
//       {
//         title: 'Menu',
//         icon: mdiArchiveAlertOutline,
//         to: 'components-menu',
//       },
//       {
//         title: 'Components',
//         icon: mdiArchiveAlertOutline,
//         children: [
//           {
//             title: 'Avatar',
//             icon: mdiArchiveAlertOutline,
//             to: 'components-avatar',
//           },
//           {
//             title: 'List',
//             icon: mdiArchiveAlertOutline,
//             to: 'components-list',
//           },
//         ],
//       },
//       {
//         title: 'Dialog',
//         icon: mdiArchiveAlertOutline,
//         to: 'components-dialog',
//       },
//     ],
//   },
// ]
