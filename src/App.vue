<template>
  <div id="app">
    <!-- 顶部搜索框 -->
    <llbsou></llbsou>
    <!-- 公共样式路由切换 -->
    <llbgoufenlei></llbgoufenlei>
     <router-view/>
  </div>
</template>

<script>
//顶部搜索框
import llbsou from './public/Sousuo'
//公共样式路由切换
import llbgoufenlei from './public/Goufenlie'
export default {
  name: 'App',
  components:{
    llbgoufenlei,
    llbsou
  }
}
</script>

<style scoped>
</style>
