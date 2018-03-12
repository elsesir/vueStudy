import Vue from 'vue'
import Router from 'vue-router'
import ReadMe from '@/views/ReadMe'
import BaseTable from '@/views/BaseTableTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'readme',
      component: ReadMe
    },
    {
      path: '/readme',
      name: 'readme',
      component: ReadMe
    },
    {
      path: '/basetable',
      name: 'BaseTable',
      component: BaseTable
    }
  ]
})
