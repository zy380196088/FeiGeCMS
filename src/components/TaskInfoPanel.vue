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
      this.getData();
    },
    watch: {},
    methods: {
      getData(){
        this.axios.post('/rest/home/index').then(res=>{},err=>{})
      }
    }, // 方法
    computed: {}, // 计算属性
    filters: {}, // 过滤
    directives: {} // 指令
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/main";
  @import "../assets/scss/common";

  $panelHeight: 120px;
  section {
    width: 1200px;
    height: $panelHeight;
    line-height: $panelHeight/2;
    margin-bottom: 20px;
    background-color: #fff;
    .panel-box {
      display: inline-block;
      box-sizing: border-box;
      width: 300px;
      height: 120px;
      border-right: 1px solid #dddddd;
      i {
        cursor: pointer;
      }
      p {
        font-size: 30px;
        font-weight: bold;
      }
    }
    .panel-box:nth-child(1) {
      p {
        color: $blue;
      }
    }
    .panel-box:nth-child(2) {
      p {
        color: $yellow;
      }
    }
    .panel-box:nth-child(3) {
      p {
        color: $gray;
      }
    }
    .panel-box:last-child {
      border: 0;
      p {
        color: $green;
      }
    }
  }

</style>
