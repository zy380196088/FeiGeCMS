<template>
  <div id="login-box" class="clearfix">
    <h3>飞鸽舆信互动管理平台</h3>
    <el-form ref="loginForm">
      <el-form-item label="手机号">
        <span></span>
        <el-input name="login_name" type="text" v-model=""></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  import {isvalidUsername} from '@/utils/validate'
  const validateUserName = (rule, value, callback)=> {
    if (!isvalidUsername(value)) {
      callback(new Error('请输入正确的用户名'))
    } else {
      callback()
    }
  };
  export default{
    components: {},
    name: 'login',
    data(){
      return {
        loading: false,
        showDialog: false,
        loginForm: {
          loginName: 'admin',
          password: '123456'
        },
        loginRules: {
          userName: [{
            required: true,
            trigger: 'blur',
            validator: ''
          }],
          password: [{
            required: true,
            trigger: 'blur',
            validator: ''
          }]
        }
      }
    },
    methods: {
      showPassword(){
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      handleLogin(){
//
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
