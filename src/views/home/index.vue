<template>
  <div>
    <TaskInfoPanel></TaskInfoPanel>
    <Table :table-data="tableData" :table-title="tableTitle"></Table>
  </div>
</template>

<script type="text/ecmascript-6">
  import Table from "@/components/common/Table.vue";
  import Panel from "@/components/common/Panel.vue";
  import TaskInfoPanel from "@/components/TaskInfoPanel.vue";
  export default {
    name: "Home",
    props: [

    ], // 父到子传参
    components: {
      Table,
      Panel,
      TaskInfoPanel
    }, // 组件接收
    mixins: [], // 混合
    data() {
      // 基础数据
      return {
        tableTitle: '任务列表',
        tableData: [{
            title: 'G20相关评论',
            type: 0,
            state: 1,
            beginTime: '2016-9-13 12:00',
            endTime: '2016-9-14 16:00',
            refreshTime: '2016-9-13 21:00',
            handle: 0,
            points: 2
          },
          {
            title: '杭州保姆纵火案件评论',
            type: 1,
            state: 0,
            beginTime: '2017-6-14 12:00',
            endTime: '2017-6-22 16:00',
            refreshTime: '2017-7-8 21:00',
            handle: 1,
            points: 5
          },
          {
            title: 'G20相关评论',
            type: 2,
            state: 1,
            beginTime: '2016-9-13 12:00',
            endTime: '2016-9-14 16:00',
            refreshTime: '2016-9-13 21:00',
            handle: 0,
            points: 3
          }, {
            title: 'G20相关评论',
            type: 0,
            state: 0,
            beginTime: '2016-9-13 12:00',
            endTime: '2016-9-14 16:00',
            refreshTime: '2016-9-13 21:00',
            handle: 1,
            points: 2
          },
        ]
      };
    },
    created() {}, // 创建周期
    mounted() {
      this.getUserInfo();
    },
    watch: {},
    methods: {
      getUserInfo() {
        this.axios.get("/rest/user/info").then(
          res => {
            if (res.data.error_code == 4) {
              this.$router.push({
                path: "/Login"
              });
            } else {
              this.$store.commit("SET_USERINFO", res.data.data);
            }
          },
          error => {
            console.log(error);
          }
        );
      }
    }, // 方法
    computed: {}, // 计算属性
    filters: {}, // 过滤
    directives: {} // 指令
  };

</script>

<style rel="stylesheet/scss" lang="scss" scoped>


</style>
