import Vue from 'vue'
import Router from 'vue-router'

import Mode from '@/components/mode'
import Cascader from '@/components/cascader'
import Index from '@/components/index'
import Alert from '@/components/alert'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index,
    }, {
      path: '/cascader',
      name: 'Cascader',
      component: Cascader,
    },
    {
      path: '/alert',
      name: 'Alert',
      component: Alert
    }, {
      path: '/mode',
      name: 'Mode',
      component: Mode,
    }
  ]
})
