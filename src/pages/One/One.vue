<template>
  <div class="one">
    <div>{{msg}}</div>
    <div>
      <el-button @click="add" type="primary">+</el-button>
      <el-button @click="minus" type="primary">-</el-button>
    </div>
    <div>{{num}}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'one',
  data () {
    return {
      msg : "我是one组件"
    }
  },
  computed: {
    ...mapGetters(["num"])
  },
  methods: {
    ...mapActions(["add","minus"])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .one {
    border:1px solid red;
  }
</style>
