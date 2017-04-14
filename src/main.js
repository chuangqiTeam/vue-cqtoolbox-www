// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCqtoolbox from 'vue-cqtoolbox'

Vue.config.productionTip = false
Vue.use(VueCqtoolbox)
import 'vue-cqtoolbox/dist/vue-cqtoolbox.css'
Vue.cqtool.registerTheme({
  default: {
    primary: 'cyan',
    warn: 'orange'
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
