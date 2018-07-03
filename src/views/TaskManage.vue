<template>
    <div>
        任务管理
        <router-view> 
            <ZTable></ZTable>
        </router-view>
    </div>
</template>

<script type="text/ecmascript-6">
import ZTable from "../components/ZTable.vue";
export default {
  name: "TaskManage",
  props: [], // 父到子传参
  components: {
    ZTable
  }, // 组件接收
  mixins: [], // 混合
  data() {
    // 基础数据
    return {};
  },
  created() {}, // 创建周期
  mounted() {},
  watch: {},
  methods: {}, // 方法
  computed: {}, // 计算属性
  filters: {}, // 过滤
  directives: {} // 指令
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>