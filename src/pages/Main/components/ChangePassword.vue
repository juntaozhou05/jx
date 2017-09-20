<template>
  <div class="changePassword">
    <table class="lists">
      <tr>
          <td>原密码</td>
          <td>
            <input type="text" placeholder="请输入原密码">
          </td>
      </tr>
      <tr>
          <td>新密码</td>
          <td>
            <input type="text" placeholder="请输入新密码">
          </td>
      </tr>
      <tr>
          <td>确认新密码</td>
          <td>
            <input type="text" placeholder="请确认新密码">
          </td>
      </tr>
    </table>
    <el-button type="primary" :loading="loading" @click="submit">{{btn}}</el-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      msg : "",
      loading: false,
      btn: '提交'
    }
  },
  methods: {
    //提交
    submit() {
      this.loading = true
      this.btn = '提交中...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .changePassword {
    width:450px;
    padding:20px;
    font-size: 18px;
    background-color: white;
    margin:50px 350px;
    .lists {
      width:100%;
      text-align: center;
      font-weight: bold;
      td {
        vertical-align: middle;
        padding:20px;
        input {
          padding:5px;
        }
      }
    }
    .el-button--primary {
      margin-top: 30px;
      margin-left: 40px;
    }
  }
</style>