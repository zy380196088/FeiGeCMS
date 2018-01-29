/**
 * Created by zhouyu on 2017/7/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import index from './modules/index'
//从环境变量判断当前的运行模式
const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

//导出 store 实例对象
const store = new Vuex.Store({
    getters: {},
    modules: {
        index
    },
    getters,
    strict: true, //设置运行模式
})


export default store