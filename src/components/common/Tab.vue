<template>
  <div class="tab-wrap">
    <ul class="tab-link">
      <li class="tab-link-item" v-for="item in tabData" :key="item.index" @click="tabSwitch(item.index)" v-bind:class="{'tab-on':item.isOn}">{{item.name}}</li>
    </ul>
    <div class="tab-content">
      <div class="dept-tree-box">
        <div class="org-title">部门架构</div>
        <Tree id="org-tree"></Tree>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from '@/components/common/Tab'
  import Tree from '@/components/common/Tree'
  export default {
    name: 'Tab',
    components: {
      Tab,
      Tree
    }, // 组件接收
    data() {
      return {
        tabOption: {
          openSearch: true,
          openSelecte: true,
        },
        tabData: [{
            index: 0,
            name: '部门管理',
            router:{
              'name':'DeptOrg',
            },
            isOn: true
          }, {
            index: 1,
            name: '网评员管理',
            router:{
              'name':'UserOrg',
            },
            isOn: false
          },
        ]

      }
    },
    props: {},
    methods: {
      tabSwitch(tabIndex) {
        //Tab切换
        console.log(this,tabIndex);
        this.tabData.forEach(element => {
          element.isOn = false;
        });
        this.tabData[tabIndex].isOn = true;

      }
    }

  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/color";
  .tab-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    .tab-link {
      position: absolute;
      width: 120px;
      margin: 0;
      padding: 20px 0;
      list-style: none;
      .tab-link-item {
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        line-height: 50px;
        list-style: none;
        text-align: center;
        cursor: pointer;
      }
      .tab-on{
        width: 121px;
        color : $activeColor ;
        border-top: 1px solid $borderColor;
        border-bottom: 1px solid $borderColor;
        z-index: 9;
      }
    }
    .tab-content {
      position: absolute;
      top:0;
      left:120px;
      width: calc(100% - 120px);
      height: 100%;
    }
  }

  .dept-tree-box{
    box-sizing: border-box;
    width: 280px;
    height: 100%;
    padding: 20px;
    border-left: 1px solid $borderColor;
    border-right: 1px solid $borderColor;
    .org-title{
      font-weight: bold;
      height:50px;
      line-height: 50px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
    }
  }
</style>
