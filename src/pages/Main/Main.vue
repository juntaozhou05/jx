<template>
  <!-- 主页 -->
  <div class="main">
    <!-- 左侧导航 -->
    <Left></Left>
    <!-- 右边内容区 -->
    <Right></Right>
    <div class="bottom">
      <span class="instr"> 
        <span>© 2016-2017 </span>
        <a href="">jxpay</a>
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Left from '@/pages/Main/components/Left'
import Right from '@/pages/Main/components/Right'
export default {
  data () {
    return {
      msg : ""
    }
  },
  components: {
    Left,
    Right
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .main {
    width: 100%;
    height:100%;
    .bottom {
      height: 50px;
      line-height: 50px;
      background-color: white;
      position: fixed;
      bottom:0;
      left:0;
      width: 100%;
      .instr {
        position: absolute;
        right:10px;
      }
    }
  }
</style>