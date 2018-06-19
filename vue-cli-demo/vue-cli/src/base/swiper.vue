<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides" :key="slide">
      <img :src="slide" class="img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          autoplay: 2000,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          observeParents:true,
          autoplayDisableOnInteraction:false,
          loop:true
        }

      }
    },
    props:{
      swiperSlides:{
          type:Array,
          default:[]
      }
    }
  }
</script>
<style  scoped lang="less">
  .img{
    width:100%;

  }
</style>
