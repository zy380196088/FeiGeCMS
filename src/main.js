// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.debug = true;
Vue.config.productionTip = false;
Vue.use(router);
Vue.use(ElementUI);
Vue.use(VueAxios,axios);
// Vue.prototype.$http = axios;

Vue.filter('percent',function (value) {
  if(typeof value =='number'){
    return (value/100).toFixed(2) + '%';
  }else{
    return 0;
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});

