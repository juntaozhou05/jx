<template>
  <div class="personnalData">
    <div class="title">用户管理</div>
    <table class="lists">
      <tr>
        <td>头像</td>
        <td class="upimg">
          <img id="preview" />
          <el-button type="success">
            <input type="file" class="upfile" @change="preview($event.currentTarget)" accept="image/*">
            <i class="el-icon-upload2 el-icon--right"> 上传</i>
            </el-button>
        </td>
      </tr>
      <tr>
        <td>用户</td>
        <td>
          <input class="text" type="text" :value="userName" disabled>
        </td>
      </tr>
      <tr>
        <td>手机</td>
        <td>
          <input class="text" type="text" placeholder="请输入11位手机号">
        </td>
      </tr>
      <tr>
        <td>邮箱</td>
        <td>
          <input class="text" type="email" placeholder="请输入邮箱">
        </td>
      </tr>
      <tr>
        <td>地址</td>
        <td>
          <input class="text" type="text" placeholder="请输入地址">
        </td>
      </tr>
    </table>
    <el-button type="success" :loading="loading" @click="submit">{{btn}}</el-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import config from '@/config/config'
export default {
  data () {
    return {
      msg : '',
      icon: '',
      userName: 'admin',
      loading: false,
      btn: '提交'
    }
  },
  mounted: function() {
    //获取用户资料
    this.$http.post(config.api + "/sys/manager/selectManager.do",
      {
        id: config.getCookie().id
      },
      {emulateJSON:true}).then(
      (res)=> {
        // 处理成功的结果
        console.log(res.body)
      },(res)=> {
        // 处理失败的结果
        this.$message("出错啦！")
    });
  },
  methods: {
    //上传图片
    preview(file) {
      var prevDiv = document.getElementById('preview');
      if (file.files && file.files[0]) {
        this.icon = file.files[0]
        prevDiv.src = window.URL.createObjectURL(file.files[0])
      } else {
        console.log(error)
      }
    },
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
  .personnalData {
    width:450px;
    margin:50px 0px 0px 350px;
    padding:20px;
    font-size: 18px;
    background-color:white;
    .title {
      padding-bottom: 10px;
      border-bottom: 1px solid #eaeaea;
    }
    .lists {
      margin-top: 10px;
      width:100%;
      td {
        vertical-align:middle;/*设置垂直居中*/
        text-align: left;
        padding:20px;
        position: relative;
        border-bottom: 1px dashed #eaeaea;
        #preview {
          display: inline-block;
          width:100px;
          height: 100px;
          border:1px solid #eaeaea;
        }
        .el-button--success {
          position: absolute;
          bottom:25px;
          left:150px;
          cursor: auto;
          .upfile {
            width:80px;
            position: absolute;
            left: 0;
            top:5px;
            opacity: 0;
          }
        }
        .text {
          padding:5px;
        }
      }
    }
    .el-button--success {
      margin-top: 30px;
      margin-left: 20px;
    }
  }
</style>

