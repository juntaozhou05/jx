<template>
  <div class="roleControl">
    <div class="title">角色管理</div>
    <div class="content">
      <div class="top">
        <div class="search">
          <el-input placeholder="" v-model="input3">
            <template slot="prepend">角色名称</template>
          </el-input>
          <el-button type="success" icon="search">搜索</el-button>
        </div>
        <div class="btns">
          <el-button type="success"><i class="el-icon-plus"></i> 添加</el-button>
          <el-button type="success"><i class="el-icon-edit"></i> 修改</el-button>
          <el-button type="success"><i class="el-icon-close"></i> 删除</el-button>
          <el-button type="success"><i class="el-icon-document"></i> 权限配置</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      msg : ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .roleControl {
    width:700px;
    padding:20px;
    font-size: 14px;
    background-color:white;
    margin:20px 100px;
    .title {
      font-weight: bold;
      font-size: 16px;
      padding:5px;
      border-bottom:1px solid #eaeaea;
    }
    .content {
      padding:20px 10px;
      .top {
        .search {
          .el-input-group {
            width:50%;
          }
        }
      }
      .btns {
        margin-top: 15px;
      }
    }
  }
</style>