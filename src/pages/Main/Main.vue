<template>
  <!-- 主页 -->
  <div class="main">
    <!-- 左侧导航 -->
    <Left></Left>
    <!-- 右边内容区 -->
    <Right></Right>
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
  }
</style>