<template>
  <section v-cloak>
    <div class="panel-box" v-for="item in panelData" :key="item.id">
      <i :class="item.iconClass"></i>
      <span>{{item.text}}</span>
      <p>{{item.value}}</p>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'IndexPanel',
    props: [], // 父到子传参
    components: {}, // 组件接收
    mixins: [], // 混合
    data() { // 基础数据
      return {
        panelData: [{
          iconClass: "el-icon-document",
          text: "接受任务数",
          value: 12
        }, {
          iconClass: "el-icon-warning",
          text: "任务完成率",
          value: 23
        }, {
          iconClass: "el-icon-time",
          text: "任务完成平均耗时",
          value: 1235
        }, {
          iconClass: "el-icon-star-on",
          text: "获得总积分",
          value: 32
        }],
        //接收任务数
        taskQuantity: 300,
        // 任务完成率
        completionRate: .78,
        // 任务完成平均耗时(min)
        averageTime: 2421,
        // 获得总积分
        integral: 100,
      }
    },
    created() {}, // 创建周期
    mounted() {

    },
    watch: {},
    methods: {
      
    }, // 方法
    computed: {
    }, // 计算属性
    mounted(){
    },
    filters: {}, // 过滤
    directives: {} // 指令
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/main";
  @import "../assets/scss/common";
</style>
