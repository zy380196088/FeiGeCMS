<template>
  <header class="header">
    <div class="headerBox clearfix">
      <div class="logo clearfix">
        <img src="" alt="" class="fl">
        <span class="fl">飞鸽舆信互动管理平台</span>
      </div>
      <ul id="menu">
        <router-link tag="li" v-for="menu in menuList" :key="menu.num" v-text="menu.text" :to="menu.path"></router-link>
      </ul>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
import store from '@/store'
  export default {
    name: '',
    props: ['menuData'], // 父到子传参
    components: {}, // 组件接收
    mixins: [], // 混合
    data() { // 基础数据
      return {
        menuList: this.menuData
      }
    },
    created() {}, // 创建周期
    mounted() {},
    watch: {},
    methods: {}, // 方法
    computed: {}, // 计算属性
    filters: {}, // 过滤
    directives: {} // 指令
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/main";
  @import "../../assets/scss/common";
  @import "../../assets/scss/color";
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $headerHeight;
    text-align: center;
    font-size: $fontSize;
    background-color: #333;
    color: #fff;
    line-height: $headerHeight;
    z-index: 99;
    .headerBox {
      width: 1200px;
      margin: 0 auto;
    }
    .logo {
      float: left;
      margin-right: 20px;
      img {
        display: inline-block;
        margin: 8px;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: #fff;
      }
      span {
        display: inline-block;
        height: 100%;
      }
    }
    ul {
      list-style: none;
      li {
        float: left;
        width: 85px;
        height: 100%;
        color: #fff;
      }
      li:hover,
      li:active,
      li:visited {
        background-color: $activeColor;
        cursor: pointer;
      }
    }
    .router-link-active {
      background-color: $activeColor;
    }


  }

</style>
