<template>
  <div id="layout" class="clearfix">
      <topHeader v-bind:menuData="$store.state.menuData"></topHeader>
      <router-view class="container"></router-view>
      <bottomFooter></bottomFooter>
  </div>
</template>

<script type="text/ecmascript-6">
  import topHeader from '@/views/layout/topHeader'
  import bottomFooter from '@/views/layout/bottomFooter'
  import ZTable from '@/components/ZTable'
  export default {
    name: 'page',
    components: {
      topHeader,
      bottomFooter,
      ZTable
    }, // 组件接收
    mounted(){
      const self = this;
      window.onresize = () => {
        return (()=> {
          window.screenWidth = document.body.clientWidth;
          self.screenWidth = window.screenWidth;
          console.log(self.screenWidth)
        })
      }
    },
    created(){
    },
    data(){
      return {
        screenWidth: document.body.clientWidth,
        menuData: [
          {
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
        ]
      }
    },
    method: {},
    watch: {
      screenWidth (val) {
//            优化 因为 频繁 触发 resize 函数，导致页面很卡的 问题
        if (!this.timer) {
          this.screenWidth = val;
          this.timer = true
          let that = this
          setTimeout(function () {
            // that.screenWidth = that.$store.state.canvasWidth
            console.log(that.screenWidth)
            that.init();
            that.timer = false
          }, 400)
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/main";
  @import "../../assets/scss/common";

  html, body {
    width: 1440px;
    height: 1152px;
    background-color: #f5f5f5;
    padding: 0;
    margin: 0;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #666;
    padding: 0;
    width: 100%;
    height:100%;
    background-color: #fff;
    font-size: $fontSize;
  }

  .container {
    margin: 86px auto;
    width: 1200px;
    background-color:#f5f5f5;
  }

  [v-cloak] {
    display: none;
  }
</style>
