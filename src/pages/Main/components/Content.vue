<template>
  <div class="content">
      <div class="">欢迎您!</div>
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
  .content {
    width:100%;
    padding:20px;
    font-size: 18px;
  }
</style>