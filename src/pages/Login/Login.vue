<template>
  <div class="login">
    <div class="login-cover">
      <div>
        <h1>JX</h1>
      </div>
      <h3>欢迎使用 京县科技管理系统</h3>
      <el-form label-width="80px">
        <el-input placeholder="用户名" v-model="name"></el-input>
        <el-input placeholder="密码" v-model="password"></el-input>
        <el-input placeholder="验证码" v-model="checkImg"></el-input>
      </el-form>
      <img @click="loadCode" class="code" :src="codeImg" alt="">
      <el-button type="success" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
import config from '@/config/config'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'login',
  data () {
    return {
      name: '',
      password: '',
      checkImg: '',
      codeImg: ''
    }
  },
  mounted: function(){
    this.loadImg();
  },
  methods: {
    loadCode(event) {
      event.currentTarget.src = "http://paytest.jxzf.me/jxpaywebsys-1.0.1/kaptcha.do"
    },
    loadImg() {
      axios.get(config.api + "/kaptcha.do")
      .then(function (res) {
        console.log(res.statusText);
        this.codeImg = res.config.url
      }.bind(this))
      .catch(function (res) {
        console.log(res);
      });
    },
    login() {
      if(this.name == '') {
        this.$message('请输入用户名')
        return
      }
      if(this.password == '') {
        this.$message('请输入密码')
        return
      }
      if(this.checkImg == '') {
        this.$message('请输入验证码')
        return
      }
      //登录
      axios.post(config.api + "/login.do", qs.stringify({
        name: this.name.toString(),
        password: this.password.toString(),
        checkImg: this.checkImg.toString()
      }))
      .then(function (res) {
        console.log(res.data.message);
        if(res.data.message == "登录成功！") {
          console.log(11111);
          //exp.setTime(exp.getTime() + 1*60*60*1000);
          //document.cookie = "id="+ escape(res.body.dataModel.id) + ";expires=" + exp.toGMTString() + "; path=/";
          //document.cookie = "name="+ escape(res.body.dataModel.name) + ";expires=" + exp.toGMTString() + "; path=/"; 
          this.$router.push("main/content/主页");
        }
      })
      .catch(function (res) {
        console.log(res.message);
      });
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
        font-family: Arial;
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
