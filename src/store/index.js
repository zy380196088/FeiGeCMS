/**
 * Created by zhouyu on 2017/7/27.
 */
import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import index from "./modules/index";
import { mapState } from 'vuex';
//从环境变量判断当前的运行模式
const debug = process.env.NODE_ENV !== "production";

Vue.use(Vuex);

//导出 store 实例对象
const store = new Vuex.Store({
    state: {
        //data
        userInfo: {},
        menuData: [{
                num: 1,
                text: '首页',
                icon: "",
                path: '/Home'
            }, {
                num: 2,
                text: '任务管理',
                icon: "",
                path: '/TaskManage'
            }, {
                num: 3,
                text: '组织管理',
                icon: "",
                path: '/OrganizationManage'

            }, {
                num: 4,
                text: '舆情监控',
                icon: "",
                path: '/PublicOpinionMonitor'

            }, {
                num: 5,
                text: '数据中心',
                icon: "",
                path: '/DataCenter'
            }, {
                num: 6,
                text: '系统管理',
                icon: "",
                path: '/System'

            }, {
                num: 7,
                text: '知识库',
                icon: "",
                path: '/Knowledge'

            },
            {
                num: 8,
                text: '媒体服务',
                icon: "",
                path: '/Media'

            }
        ],
        tableData: {
            tableHead: ['任务标题', '类型', '任务状态', '任务时间', '任务更新时间', '处理情况', '任务积分数', '操作'],
            tableData: [{
                    title: 'G20相关评论',
                    type: 0,
                    state: 1,
                    beginTime: '2016-9-13 12:00',
                    endTime: '2016-9-14 16:00',
                    refreshTime: '2016-9-13 21:00',
                    handle: 0,
                    points: 2
                },
                {
                    title: '杭州保姆纵火案件评论',
                    type: 1,
                    state: 0,
                    beginTime: '2017-6-14 12:00',
                    endTime: '2017-6-22 16:00',
                    refreshTime: '2017-7-8 21:00',
                    handle: 1,
                    points: 5
                },
                {
                    title: 'G20相关评论',
                    type: 2,
                    state: 1,
                    beginTime: '2016-9-13 12:00',
                    endTime: '2016-9-14 16:00',
                    refreshTime: '2016-9-13 21:00',
                    handle: 0,
                    points: 3
                }, {
                    title: 'G20相关评论',
                    type: 0,
                    state: 0,
                    beginTime: '2016-9-13 12:00',
                    endTime: '2016-9-14 16:00',
                    refreshTime: '2016-9-13 21:00',
                    handle: 1,
                    points: 2
                },
            ]
        },
    },
    getters: {
        //computed


    },
    mutations: {

    },
    modules: {
        //methods

    },
    strict: true //设置运行模式
});

export default store;