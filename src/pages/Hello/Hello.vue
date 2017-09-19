<template>
  <div class="hello">
    <!-- element-ui -->
    <el-alert
    title="element-ui"
    type="success"
    :closable="false">
    </el-alert>
    <br>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
    <br><br><br>

    <!-- vuex -->
    <el-alert
    title="vuex"
    type="success"
    :closable="false">
    <br>
    </el-alert>
    <div>子组件vuex数字{{num}}</div>
    <br><br><br>

    <!-- 动画 -->
    <el-alert
    title="动画"
    type="success"
    :closable="false">
    </el-alert>
    <br>
    <el-button @click="load" type="primary" :loading="loading">{{ buttonName }}</el-button>
    <transition name="fade">
      <div v-show="show" class="transition">
        <div class="name">name</div>
      </div>
    </transition>
    <br><br><br><br>

    <!-- 子组件 -->
    <el-alert
    title="子组件"
    type="success"
    :closable="false">
    </el-alert>
    <router-link to="/one">点击展示one</router-link>
    <router-view></router-view>
    <br><br><br>

    <!-- 验证码 -->
    <el-alert
    title="验证码"
    type="success"
    :closable="false">
    </el-alert>
    <img @click='code' src="http://paytest.jxzf.me/jxpaywebsys-1.0.1/kaptcha.do" alt="">
    <br>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      loading:false,
      buttonName: '展示',
      show:false
    }
  },
  computed: {
    ...mapGetters(["num"])
  },
  methods: {
    load() {
      this.loading = true
      this.buttonName = '展示中'
      this.show = true
    },
    code(event) {
      event.currentTarget.src = "http://paytest.jxzf.me/jxpaywebsys-1.0.1/kaptcha.do"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .hello {
    text-align: center;
  }
  .transition {
    background: green;
    & .name {
      color:white;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 1s ease;
  } 
  .fade-enter, .fade-leave-active {
    opacity: 0 ;
    transform:translateX(50px);
  }
  
</style>
