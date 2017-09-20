<template>
  <div class="login">
    <div class="login-cover">
      <div>
        <h1>JX</h1>
      </div>
      <h3>欢迎使用 京县科技管理系统</h3>
      <el-form label-width="80px">
        <el-input placeholder="用户名" v-model="form.name"></el-input>
        <el-input placeholder="密码" v-model="form.name"></el-input>
        <el-input placeholder="验证码" v-model="form.name"></el-input>
      </el-form>
      <img @click="loadCode" class="code" src="http://paytest.jxzf.me/jxpaywebsys-1.0.1/kaptcha.do" alt="">
      <el-button type="success" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
          name: '',
          password: ''
      }
    }
  },
  methods: {
    loadCode(event) {
      event.currentTarget.src = "http://paytest.jxzf.me/jxpaywebsys-1.0.1/kaptcha.do"
    },
    login() {
      this.$router.push('./main/content/主页')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
  .login {
    text-align: center;
    padding-top: 160px;
    .login-cover {
      width: 300px;
      margin:0 auto;
      position: relative;
      h1 {
        font-size: 170px;
        color: #e6e6e6;
        font-size: 180px;
        font-weight: 800;
        letter-spacing: -10px;
        margin-bottom: 0px;
      }
      h3 {
        margin-top: 5px;
        font-weight: 600;
        font-size: 16px;
      }
      .el-input__inner {
        margin-top: 20px;
      }
      .code {
        position: absolute;
        right: 0px;
        bottom: 56px;
      }
      .el-button {
        width: 100%;
        margin-top: 20px;
      }
    }
    
  }
</style>
