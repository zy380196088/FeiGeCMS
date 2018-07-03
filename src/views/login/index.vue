<template>
  <div id="login-box" class="clearfix">
    <h3>飞鸽舆信互动管理平台</h3>
    <el-form ref="loginForm">
      <el-form-item label="手机号">
        <span></span>
        <el-input name="login_name" type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input name="login_password" type="text"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "login",
    components: {},
    data() {
      return {
        loading: false,
        showDialog: false,
        loginForm: {
          loginName: "admin",
          password: "123456"
        },
        loginRules: {
          userName: [{
            required: true,
            trigger: "blur",
            validator: ""
          }],
          password: [{
            required: true,
            trigger: "blur",
            validator: ""
          }]
        }
      };
    },
    methods: {
      showPassword() {
        if (this.pwdType === "password") {
          this.pwdType = "";
        } else {
          this.pwdType = "password";
        }
      }
    }
  };

</script>

<style rel="stylesheet/scss" lang="scss" scoped>


</style>
