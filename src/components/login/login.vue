<template>
  <section v-cloak>
    <div class="panel-box" v-for="item in panelData" :key="item.id">
      <i :class="item.iconClass"></i>
      <span>{{item.text}}</span>
      <p>{{item.value}}</p>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'IndexPanel',
    props: [], // 父到子传参
    components: {}, // 组件接收
    mixins: [], // 混合
    data() { // 基础数据
    },
    created() {}, // 创建周期
    mounted() {},
    watch: {},
    methods: {
      loginUser:function(){
        const authUser = {}
        var app = this;
        loginService.login(this.loginDetails).then(
          function(res){
            if(res.status === "success"){
              authUser.data = res.data;
              authUser.token = res.token;
              app.$store.state.isLoginIn = true;
              window.localStorage.setItem('lbUser',JSON.stringify(authUser))
              if(authUser.data.role === 0){
                //网评员
              }else if(authUser.data.role === 1){
                //管理员
              }else{
                //联络员
              }
            }
          }
        )
      }
    }, // 方法
    computed: {}, // 计算属性
    filters: {}, // 过滤
    directives: {} // 指令
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../assets/scss/main";
  @import "../assets/scss/common";

</style>
