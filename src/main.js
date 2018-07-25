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
Vue.use(VueAxios, axios);

//axios 配置
//可以通过这种方式给axios设置的默认请求头
axios.defaults.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
};
// 发送请求前处理request的数据
axios.defaults.transformRequest = [function(data) {
    // Do whatever you want to transform the data
    let newData = ''
    for (let k in data) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
    }
    return newData;
}];
axios.defaults.withCredentials = true; //ajax带cookie
axios.defaults.timeout = 5000;

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
    res => {
        console.log("Axios:", res, res.request.responseURL)
        return res;
    },
    err => {
        if (err.response) {
            switch (err.response.status) {
                case 401:
                    router.currentRoute.path !== 'Login' &&
                        router.replace({ path: 'Login', query: { redirect: router.currentRoute.path } })
            }
        }
        console.log(JSON.stringify(err));
        return Promise.reject(err.response.data)
    }
)

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