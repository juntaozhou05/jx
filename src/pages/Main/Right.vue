<template>
  <div class="right">
    <div class="right-top">
        <div class="item-name">{{}}</div>
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
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .right {
    float: left;
    margin-left: 220px;
  }
</style>