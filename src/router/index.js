import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import Home from '@/views/Home'
import TaskManage from '@/views/task/index'
import OrganizationManage from '@/views/Organization/index'
import PublicOpinionMonitor from '@/views/monitor/index'
import DataCenter from '@/views/dataCenter/index'
import Knowledge from '@/views/knowledge/index'
import Media from '@/views/media/index.vue'
import System from '@/views/media/index.vue'
import Layout from '../views/layout/Layout'

Vue.use(Router);

export const constantRouterMap = [{
        path: '/Login',
        name: 'Login',
        component: Login
    }, {
        path: '/Home',
        name: 'Home',
        meta: {
            requireAuth: true, //字段为 true,表示进入这个路由是需要登录的
        },
        component: Home
    },
    {
        path: '/TaskManage',
        name: '任务管理',
        meta: {
            requireAuth: true, //字段为 true,表示进入这个路由是需要登录的
        },
        component: TaskManage
    },
    {
        path: '/OrganizationManage',
        name: '组织管理',
        meta: {
            requireAuth: true, //字段为 true,表示进入这个路由是需要登录的
        },
        component: OrganizationManage
    },
    {
        path: '/PublicOpinionMonitor',
        name: '舆情管理',
        meta: {
            requireAuth: true, //字段为 true,表示进入这个路由是需要登录的
        },
        component: PublicOpinionMonitor,
    },
    {
        path: '/DataCenter',
        name: '数据中心',
        meta: {
            requireAuth: true, //字段为 true,表示进入这个路由是需要登录的
        },
        component: DataCenter,
    },
    {
        path: '/Knowledge',
        name: '知识库',
        meta: {
            requireAuth: true, //字段为 true,表示进入这个路由是需要登录的
        },
        component: Knowledge,
    },
    {
        path: '/Media',
        name: '媒体服务',
        meta: {
            requireAuth: true, //字段为 true,表示进入这个路由是需要登录的
        },
        component: Media,
    }
];


export default new Router({
    routes: constantRouterMap
});