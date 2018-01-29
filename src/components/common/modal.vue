<template>
  <div data-popup-type="$${type}" data-popup-name="$${name}" style="display: none;">
    <div class="wpy-mask">
      <div class="wpy-popup popup-s">
        <div class="popup-header">
          <span class="popup-title">$${title}</span>
          <i class="pz-icon icon-close popup-close-btn"></i>
        </div>
        <div class="popup-body">
          <div class="row" style="margin:100px;">
            <div class="btn btn-m btn-color fn-ml50 " data-btn-type="save-add-dept">保存</div>
            <button type="reset" class="btn btn-m popup-cancel-btn fn-ml50"
                    data-btn-type="cancel">取消
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{
        name: '',
        props: ['menuData'], // 父到子传参
        components: {}, // 组件接收
        mixins: [], // 混合
        data () { // 基础数据
            return {
                menuList:this.menuData,
                popupData: {
                  type: "confirm",
                  name: "popup",
                  title: "选择消息提醒方式",
                  bodyHtml: '<p>确认删除本部门?删除后不可恢复,请谨慎操作!</p>',
                  confirmBtn: true,
                  confirmBtnText: '确定',
                  cancelBtn: true
                }
            }
        },
        created () {
        }, // 创建周期
        mounted () {
        },
        watch: {},
        methods: {}, // 方法
        computed: {}, // 计算属性
        filters: {}, // 过滤
        directives: {} // 指令
    }
</script>


<style lang="scss" scoped>

</style>

