<template>
    <div>
        <TaskInfoPanel></TaskInfoPanel>
        <ZTable></ZTable>
    </div>
</template>

<script type="text/ecmascript-6">
    import ZTable from '../components/ZTable.vue'
    import TaskInfoPanel from '../components/TaskInfoPanel.vue'
    export default{
        name: 'Home',
        props: [], // 父到子传参
        components: {
            ZTable,
            TaskInfoPanel,
        }, // 组件接收
        mixins: [], // 混合
        data () { // 基础数据
            return {}
        },
        created () {
            console.log("Home");

        }, // 创建周期
        mounted () {
            this.getUserData();
        },
        watch: {},
        methods: {
            getUserData(){
                this.axios.get('/api/user/info').then((response) =>{
                    console.log(response.data)
                },response=>{})
            }
        }, // 方法
        computed: {}, // 计算属性
        filters: {}, // 过滤
        directives: {} // 指令
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>