<template>
  <section class="wpy-main-panel" v-cloak>
    <div class="panel-item" v-for="item in panelData" :key="item.id">
      <div class="panel-title-box">
        <i :class="item.iconClass"></i>
        <span class="panel-title-text">{{item.text}}</span>
        <i class="pz-icon icon-help fn-pointer"></i>
        <p class="panel-tips">任务完成率 =
          <br> 完成任务数 / 接收任务数</p>
      </div>
      <p :class="item.valueClass">{{item.value}}</p>
    </div>
  </section>

</template>

<script type="text/ecmascript-6">
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    name: 'IndexPanel',
    props: [], // 父到子传参
    components: {}, // 组件接收
    mixins: [], // 混合
    data() { // 基础数据
      return {
        panelData: [{
          iconClass: "iconfont icon-news-o",
          text: "接收任务总数",
          value: 12,
          valueClass: "panel-value blue"
        }, {
          iconClass: "iconfont icon-pie-chart-o",
          text: "任务完成率",
          value: 23,
          valueClass: "panel-value yellow"
        }, {
          iconClass: "iconfont icon-history-o",
          text: "任务完成平均耗时",
          value: 1235,
          valueClass: "panel-value"
        }, {
          iconClass: "iconfont icon-user-o",
          text: "获得总积分",
          value: 32,
          valueClass: "panel-value green"

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
    computed: {}, // 计算属性
    mounted() {
      this.$store.dispatch("getPanelData");
    },
    filters: {}, // 过滤
    directives: {} // 指令
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/main";
  @import "../assets/scss/common";

  $panelHeight: 120px;

  .wpy-main-panel {
    margin: 30px auto;
    width: 100%;
    min-width: 1200px;
    height: $panelHeight;
    background-color: $white;
    border-radius: $borderRadius;
  }

  .panel-item {
    position: relative;
    box-sizing: border-box;
    float: left;
    width: 300px;
    height: 60px;
    border-right: 1px solid $borderColor;
    margin: 30px 0 30px 0;
    text-align: center;
    &:last-child {
      border: 0;
    }
    .panel-title-box {
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      .iconfont {
        margin: 3px;
        font-size: 24px;
        line-height: 24px;
      }
      .panel-title-text {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        i {
          display: inline-block;
          font-size: 24px;
          line-height: 24px;
          color: #b4b4b4;
          margin: 0 15px 0 0;
          &:before {
            line-height: 30px;
          }
        }
      }
      .icon-help {
        font-size: 16px;
      }
    }
    .panel-value {
      font-family: PingFangSC-Heavy;
      font-size: 28px;
      font-weight: bold;
      line-height: 28px;
    }


  }

  .panel-tips {
    display: none;
    position: absolute;
    box-sizing: border-box;
    padding: 0 20px;
    font-size: 14px;
    top: 36px;
    left: 20px;
    width: 260px;
    height: 60px;
    line-height: 30px;
    background-color: rgba(0, 0, 0, .7);
    color: $white;
    border-radius: $borderRadius;
    &:after {
      position: absolute;
      left: 200px;
      top: 40px;
      content: '';
      width: 0;
      height: 0;
      border-top: 20px solid rgba(0, 0, 0, 0.5);
    }
  }

</style>
