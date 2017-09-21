<template>
  <div class="left">
    <!-- 用户信息 -->
    <div class="user-info">
        <img src="../../../assets/user1.jpg" alt="" width="80">
        <div class="user-name">{{userName}}</div>
        <el-dropdown >
            <span class="el-dropdown-link">
                超级管理员<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <router-link to="/main/personalData/个人资料">
                    <el-dropdown-item command="个人资料">
                        个人资料
                    </el-dropdown-item>
                </router-link>
                <router-link to="/main/changePassword/修改密码">
                    <el-dropdown-item command="修改密码">
                        修改密码
                    </el-dropdown-item>
                </router-link>
                <router-link to="/">
                    <el-dropdown-item command="安全退出" divided>
                        安全退出
                    </el-dropdown-item>
                </router-link>
            </el-dropdown-menu>
        </el-dropdown>
        <!-- 列表菜单 -->
        <el-row class="tac">
            <el-col>
                <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span :class="{ 'is-active' : colorItem1}">系统管理</span>
                        </template>
                        <el-menu-item-group>
                            <router-link to="/main/authorization/权限管理">
                                <el-menu-item index="1-1">
                                    权限管理
                                </el-menu-item>
                            </router-link>
                            <router-link to="/main/roleControl/角色管理">
                                <el-menu-item index="1-2">
                                    角色管理
                                </el-menu-item>
                            </router-link>
                            <router-link to="/main/userControl/用户管理">
                                <el-menu-item index="1-3">
                                    用户管理
                                </el-menu-item>
                            </router-link>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span :class="{ 'is-active' : colorItem2}">铂金web数据</span> 
                        </template>
                        <el-menu-item-group>
                            <router-link to="/main/payControl/支付用户管理">
                                <el-menu-item index="2-1">
                                    支付用户管理
                                </el-menu-item>
                            </router-link>
                            <router-link to="/main/userBalance/用户余额">
                                <el-menu-item index="2-2">
                                    用户余额
                                </el-menu-item>
                            </router-link>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      colorItem1: false,
      colorItem2: false,
      userName : "admin",
      userPermission: "超级管理员"
    }
  },
  methods: {
    // 菜单展开
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
        if(key == 1) {
            this.colorItem1 = true
        }else if(key == 2) {
            this.colorItem2 = true
        }
    },
    //菜单收起
    handleClose(key, keyPath) {
        console.log(key, keyPath);
        if(key == 1) {
            this.colorItem1 = false
        }else if(key == 2) {
            this.colorItem2 = false
        }
    },
    showContent(event,val) {
        console.log(val);
    },
    quit() {
        console.log(111);
        this.$router.push({path: '/'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .left {
    height: 100%;
    background-color: #2f4050;
    width: 220px;
    position: fixed;
    z-index: 10;
    .is-active {
        color:white !important;
    }
    .user-info {
        text-align: center;
        margin-top: 50px;
        .user-name {
            font-weight: bold;
            color:white;
            padding:10px 0;
        }
        .el-dropdown {
            cursor: pointer;
            color:#8095a8;
        }
        .tac {
            margin-top: 20px;
            text-align: left;
            .el-submenu .el-menu-item {
                min-width: 180px;
            }
            .el-menu-item, .el-submenu__title {
                color:#8095a8;
            }
            ul {
                background-color: #2f4050;
                padding-left: 10px;
                a {
                    color: #8095a8;
                }
            }
        }
    }
  }
</style>