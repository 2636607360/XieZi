<template>
    <div class="app">
        <!-- 搜索框以及图标样式 -->
        <i class="iconfont icon-sousuo s"></i>
        <input type="text" class="llbsou" placeholder="Travis Scott x Nike2000">
        <i class="iconfont icon-xiangji x"></i>
        <!-- 头部右边分类 -->
        <div id="top-box">
            <img src="../assets/top-fenlei.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:"llbsou"
}
</script>

<style scoped>
    .app{
        position: relative;
    }
    .llbsou{
        width: 70%;
        height: 2rem;
        margin-left:2.5rem;
        margin-top: 1rem;
        text-indent:4em;
        color: #c3c3ce;
        font-weight: 700;
        background-color: #f5f5f8;
        border: none;
    }
    .s{
        position: absolute;
        left:3.5rem;
        top:1.5rem;
    }
    .x{
        position: absolute;
        right:5.5rem;
        top:1.5rem;
    }
    #top-box img{
        width: 2rem;
        height: 2.2rem;
        position: absolute;
        right: 1.5rem;
        top: 1rem;
    }
</style>