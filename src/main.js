// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import ElementUI from 'element-ui'
// import 'element-theme-default/lib/theme-default/index.css'

Vue.config.debug = true;
Vue.config.productionTip = false;
Vue.use(router);
Vue.use(ElementUI);
Vue.use(VueAxios, axios);

//axios 配置
axios.defaults.timeout = 5000;

Vue.filter('percent', function(value) {
    if (typeof value == 'number') {
        return (value / 100).toFixed(2) + '%';
    } else {
        return 0;
    }
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    ElementUI,
    template: '<App/>',
    components: { App }
});

//http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`
        }
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

//http response 拦截器
axios.interceptors.response.use(
    response => {
        console.log(response)
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    router.currentRoute.path !== 'login' &&
                        router.replace({ path: 'login', query: { redirect: router.currentRoute.path } })
            }
        }
        console.log(JSON.stringify(error));
        return Promise.reject(error.response.data)
    }
)