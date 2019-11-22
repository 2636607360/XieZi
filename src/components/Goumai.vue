<template>
    <div id="app">
        <!-- 轮播图设置 -->
        <div id="lunbo">
            <llbswiper :llbimgs = "llbimgs" class="llblun"></llbswiper>
        </div>
        <!-- 轮播图下面的样式 -->
        <div class="lunbo-bottoms-span">
            <i class="iconfont icon-zhengque-"></i>
            <span>正品保障</span>
            <i class="iconfont icon-zuanshi"></i>
            <span>逐渐查验</span>
            <i class="iconfont icon-gengxintouxiang"></i>
            <span>多重鉴别</span>
        </div>
        <!-- 轮播图下的图片样式 -->
        <div class="lunbo-bottoms-imgs">
            <img src="../assets/GoumaiImg/1.png" alt="" @click="lunboimg1">
            <img src="../assets/GoumaiImg/2.png" alt="" @click="lunboimg2">
            <img src="../assets/GoumaiImg/3.png" alt="">
            <img src="../assets/GoumaiImg/4.png" alt="">
            <img src="../assets/GoumaiImg/5.png" alt="">
            <img src="../assets/GoumaiImg/6.png" alt="">
            <img src="../assets/GoumaiImg/7.png" alt="">
            <img src="../assets/GoumaiImg/8.png" alt="">
        </div>
        <!-- 抢购效果 -->
        <div class="qianggou-imgs">
            <img src="../assets/GoumaiImg/zhong1.png" alt="" @click="yuanjia">
            <img src="../assets/GoumaiImg/zhong2.png" alt="">
        </div>
        <!-- 列表详情 -->
        <div class="liebiao-xiezi">
            <img src="../assets/GoumaiImg/xiangqing1.png" alt="">
        </div>
    </div>
</template>

<script>
import llbswiper from '../public/Swiper'
import {getBanner} from '../api/index'
export default {
    name:"llbgoumai",
    components:{
        llbswiper
    },
    data(){
        return{
            llbimgs:[]
        }
    },
    created(){
        this.lunbo();
    },
    methods:{
        lunbo(){
            return getBanner().then((imgres)=>{
                this.llbimgs = imgres.banner
            })
        },
        lunboimg1(){
            alert("这双鞋子是Air Jordan")
        },
        lunboimg2(){
            alert("这个衣服是NIKE")
        },
        yuanjia(){
            alert("原价购：限量5双")
        }
    }
}
</script>

<style scoped>
    #app{
        position: relative;
     }
     .lunbo-bottoms-span{
         width: 100%;
         height:2rem;
         line-height: 2rem;
         margin-top: 0.5rem;
     }
     .lunbo-bottoms-span span{
         font-weight: 700;
     }
     .lunbo-bottoms-span i{
         padding-left:1.7rem;
     }
     .lunbo-bottoms-imgs{
         margin-left:0.5rem;
     }
     .qianggou-imgs img:nth-of-type(1){
         width: 100%;
     }
    .qianggou-imgs img:nth-of-type(2){
         width: 100%;
     }
     .liebiao-xiezi{
         width: 100%;
     }
     .liebiao-xiezi img:nth-of-type(1){
         width: 50%;
     }
</style>