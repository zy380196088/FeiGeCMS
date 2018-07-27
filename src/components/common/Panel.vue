<template>
    <section class="wpy-panel">
      <div class="panel-title">{{panelTitle}}</div>
    </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    props: [
      'panel'
    ], // 父到子传参
    components: {}, // 组件接收
    mixins: [], // 混合
    data() { // 基础数据
      return {
        panelTitle:'任务列表',
        panelBtns:[],
      }
    },
    created() {}, // 创建周期
    mounted() {
      this.getTableData();
    },
    watch: {},
    methods: {
      getTableData() {
        this.axios.get("/rest/task/getList").then(
          res => {
            if (res.data.error_code == 4) {
              this.$router.push({
                path: "/Login"
              });
            }
          },
          err => {
            console.log(err);
          }
        );
      }
    }, // 方法
    computed: {}, // 计算属性
    filters: {}, // 过滤
    directives: {} // 指令
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/color";
  @import "../../assets/scss/main";
  @import "../../assets/scss/common";

  $tableHeight: 66px;
  $tableLineHeight: 66px;
  $tableHoverColor: #F9F9F9;
  .wpy-panel {
    padding: 30px;
    box-sizing: border-box;
  }

</style>
