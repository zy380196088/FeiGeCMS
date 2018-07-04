<template>
  <div>
    <Tab id="org-tab"></Tab>
    <h2 class="org-title">部门架构</h2>
    <Tree id="org-tree"></Tree>
  </div>
</template>

<script type="text/ecmascript-6">
  import Tab from '@/components/common/Tab'
  import Tree from '@/components/common/Tree'
  export default {
    name: 'OrganizationManage',
    props: [], // 父到子传参
    components: {
      Tab,
      Tree
    }, // 组件接收
    data() { // 基础数据
      return {}
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
#org-tab{
  position: absolute;
  width:120px;
  height: 100%;
  top: 0 ;
  left:0;
  overflow-y: scroll;
  overflow-x: hidden;
}
  #org-tree {
    width: 260px;
    max-height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .org-title {
    width: 100%;
    display: inline-block;
    line-height: 32px;
    font-size: 20px;
    font-weight: bold;
  }

</style>
