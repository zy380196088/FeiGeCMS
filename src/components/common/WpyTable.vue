<template>
  <div>
    <section class="wpy-table-panel">
      <div class="table-title">{{tableTitle}}</div>
      <table>
        <thead>
          <tr>
            <th v-for="(item,index) in tableHead" v-text="item" :key="item.id">{{item}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tableLine,index) in tableData" :key="tableLine.id">
            <td>{{tableLine.title}}</td>
            <td v-if="tableLine.type==0">转发</td>
            <td v-if="tableLine.type!=0">评论</td>
            <td v-if="tableLine.state==0" class="error">已结束</td>
            <td v-if="tableLine.state!=0" class="info">进行中</td>
            <td>
              <span>开始{{tableLine.beginTime}}</span>
              <span>结束{{tableLine.endTime }}</span>
            </td>
            <td>{{tableLine.refreshTime}}</td>
            <td v-if="tableLine.handle==0" class="success">未处理</td>
            <td v-if="tableLine.handle!=0" class="error">已处理</td>
            <td>{{tableLine.points}}</td>
            <td>
              <button v-if="tableLine.state!=0" class="btn">任务处理</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'wpy-table',
    props: {
      tableTitle: '',
      tableData: {
        type: Array,
        required: true
      }
    }, // 父到子传参
    components: {}, // 组件接收
    mixins: [], // 混合
    data() { // 基础数据
      return {
        tableHead: ['任务标题', '类型', '任务状态', '任务时间', '任务更新时间', '处理情况', '任务积分数', '操作'],
      }
    },
    created() {}, // 创建周期
    mounted() {
      this.getTableData();
    },
    watch: {},
    methods: {
      getTableData() {
        this.axios.post('/rest/task/getList', {
            params: {
              "flag": 0, // 0接收的任务 1发送的任务
              "page_index": 0, //页号，从0开始
              "page_count": 10, //每页多少条，默认10
              "order_type": 0, //0创建时间排序 1截止时间排序
              "enabled": 0, //是否关闭
              "time_status": [0], //状态组合 0未开始 1进行中 2已结束
              "type": 0, // 0评论 1转发 2发文
              "keyword": "", //搜索关键字
              "finish_status": 1, //1已完成 0未完成
              "i_finish_status": 1, //本用户是否完成了该任务（网评员和联络员）
              "mission_status": 1, //0未处理 1已处理(网评员)
              "dispatched_flag": 1 //是否已下发(区县管理员)
            }
          }).then((response) => {
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
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

  .wpy-table-panel {
    width: 1200px;
    height: 840px;
    background-color: #fff;
    padding: 0;
    margin: 0;
    border: 0;

    .table-title {
      width: 100%;
      height: 70px;
      line-height: 70px;
      font-size: 18px;
      text-align: left;
      padding-left: 40px;
      font-family: PingFangSC-Bold;
      font-weight: bold;
      color: rgba(102, 102, 102, 1);
    }

    table {
      width: 100%;

      thead {
        height: $tableHeight;
        line-height: $tableHeight;
        background-color: #fafafa;
        font-weight: bold;

        th {
          text-align: center;
        }
      }

      tbody {
        tr {
          border-bottom: 1px solid $borderColor;
          height: $tableHeight;

          td {
            display: table-cell;
            vertical-align: middle;
            min-width: 100px;

            span {
              display: inline-block;
              height: $tableHeight/2;
              line-height: $tableHeight/2;
            }
          }
        }

        tr:nth-child(2n) {
          background-color: #f1f1f1;
        }

      }

      tr {
        border-bottom: 1px solid $borderColor;
        padding: 0;
        cursor: pointer;

        &:hover {
          background-color: $tableHoverColor;
        }
      }
    }
  }

</style>
