import Vue from 'vue'
import App from './App.vue'
import './http';
import qs from 'qs'
import router from './router/router.js'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.prototype.$qs = qs


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
