import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import state from '@/pages/state'
import getter from '@/pages/getter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/state',
      name: 'vuex-state',
      component: state
    },
    {
      path: '/getter',
      name: 'vuex-getter',
      component:getter
    },
    {
      path: '/',
      name: '',
      redirect:"/state"
    }
  ]
})
