import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import TaskManage from '@/views/TaskManage'
import OrganizationManage from '@/views/OrganizationManage'
import PublicOpinionMonitor from '@/views/PublicOpinionMonitor'
import DataCenter from '@/views/dataCenter/index.vue'
import Knowledge from '@/views/knowledge/index.vue'
import Media from '@/views/media/index.vue'
import System from '@/views/media/index.vue'
Vue.use(Router);

import Layout from '../views/layout/Layout'

export const constantRouterMap = [{
        path: '/Home',
        name: 'Home',
        component: Home
    },
    {
        path: '/TaskManage',
        name: '任务管理',
        component: TaskManage
    },
    {
        path: '/OrganizationManage',
        name: '组织管理',
        component: OrganizationManage
    },
    {
        path: '/PublicOpinionMonitor',
        name: '舆情管理',
        component: PublicOpinionMonitor,
    },
    {
        path: '/DataCenter',
        name: '数据中心',
        component: DataCenter,
    },
    {
        path: '/Knowledge',
        name: '知识库',
        component: Knowledge,
    },
    {
        path: '/Media',
        name: '媒体服务',
        component: Media,
    }
]

export default new Router({
    routes: constantRouterMap
})