<template>
    <div id="app">
        <div id="top-fenleiv">
            <router-link to="/llbgoumai" class="llbrou">推荐</router-link>
            <router-link to="/llbxinpin" class="llbrou">新品</router-link>
            <router-link to="" class="llbrou">人气</router-link>
            <router-link to="" class="llbrou">球鞋</router-link>
            <router-link to="" class="llbrou">冬装</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'llbgoufenlei'
}
</script>

<style scoped>
    #app{
        position: relative;
    }
    #top-fenleiv{
        width: 100%;
        height:2rem;
        line-height: 2rem;
        padding-left: 0.3rem;
    }
    .llbrou{
        display: inline-block;
        width:18.5%;
        height:2rem;
        text-align: center;
        font-size:1.2rem;
        text-decoration: none;
        color:#aaaab9;
        font-weight: 700;
    }
    .llbrou:hover{
        color: black;
    }
</style>