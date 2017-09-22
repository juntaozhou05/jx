<template>
  <div class="right">
    <div class="right-top">
        <span class="item-name">{{this.$route.params.type}}</span>
        <span class="quit" @click="quit">
          <i class="el-icon-d-arrow-right"></i>
          <span>退出</span>
        </span>
    </div>
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      msg : "",
      itemName: this.$route.params.type
    }
  },
  methods: {
    quit() {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .right {
    margin-left: 220px;
    padding-top: 50px;
    .right-top {
      border-bottom:2px solid black;
      width:100%;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      background-color:#fafafa;
      position: relative;
      .item-name {
        border-right:1px solid #eaeaea;
        padding:0 20px;
        display: inline-block;
        background-color: white;
      }
      .quit {
        position: absolute;
        right: 0;
        padding:0 20px;
        background-color:white;
        cursor: pointer;
      }
    }
  }
</style>