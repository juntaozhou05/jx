<template>
  <div class="changePassword">
    <div class="">修改密码</div>
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
  .changePassword {
    width:100%;
    padding:20px;
    font-size: 18px;
  }
</style>