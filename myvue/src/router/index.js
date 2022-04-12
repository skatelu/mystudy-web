import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

// 安装路由
Vue.use(Router)

// 导出路由，给别人使用
export default new Router({
  routes: [
    {
      path: '/main',
      name: 'App',
      component: App
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: resolve => require(['../components/HelloWorld'], resolve)
    },
    {
      path: '/content',
      name: 'content',
      component: resolve => require(['../components/content'], resolve)
    }
  ]
})
