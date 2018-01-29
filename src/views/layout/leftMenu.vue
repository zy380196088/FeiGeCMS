<template>
    <div class="left-menu">
        <ul>
            <router-link tag="li" v-for="leftMenu in children" :key="leftMenu.name" v-text="leftMenu.name" :to="leftMenu.path"></router-link>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: '',
        props: [], // 父到子传参
        components: {}, // 组件接收
        mixins: [], // 混合
        data () { // 基础数据
            return {
                children: [
                    {path: '/index', component: 'TaskManage', name: '任务管理 '},
                ]
            }
        },
        created () {
        }, // 创建周期
        mounted () {
        },
        watch: {},
        methods: {}, // 方法
        computed: {}, // 计算属性
        filters: {}, // 过滤
        directives: {} // 指令
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../../assets/scss/main";

    .left-menu {
        width: 85px;
        height: 100%;
        position: absolute;
        left: 0;
        ul {
            list-style: none;
            li {
                float: left;
                width: 85px;
                height: 100%;
                color: #fff;
            }
            li:hover, li:active, li:visited {
                background-color: $activeColor;
                cursor: pointer;
            }
        }

    }
</style>