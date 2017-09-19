<template>
  <div class="roleControl">
    <div class="">用户管理</div>
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
    width:100%;
    padding:20px;
    font-size: 18px;
  }
</style>