<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in llbimgs" :key="index">
      <img :src="slide.src" class="llbimgss">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'llbswiper',
    props:['llbimgs'],
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination'
        },
        swiperSlides: [1, 2, 3,4]
      }
    }
  }
</script>

<style scoped>
    .llbimgss{
        width: 100%;
    }
</style>