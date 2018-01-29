<template>
    <div>
        <footer class="footer">Copyright @ 2017 新华移动传媒 All rights reserved</footer>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: 'bottomFooter',
        props: [], // 父到子传参
        components: {}, // 组件接收
        mixins: [], // 混合
        data () { // 基础数据
            return {}
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
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        background-color: #e6e6e6;
        color: #a9a9a9;
    }
</style>