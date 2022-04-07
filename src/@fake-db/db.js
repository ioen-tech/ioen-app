/* eslint-disable import/extensions */
import './data/apps/calendar'
import './data/apps/chat'
import './data/apps/invoice'
import './data/apps/ioen-mail'
import './data/apps/user'
import './data/table/datatable'
import './jwt/index'
import mock from './mock'

/* eslint-enable import/extensions */

mock.onAny().passThrough() // forwards the matched request over network
