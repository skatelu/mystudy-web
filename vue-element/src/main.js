// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from '@/module/i18n'
import App from './App'
import router from './router'

Vue.config.productionTip = false
i18n.globalScope.LOCALE === 'en_US' ? Vue.use(ElementUI, { locale }) : Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
