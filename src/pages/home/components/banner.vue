<template>
<div  class="banner">
  <swiper class="swiperContainer" :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1609/c9/cacbf705c5417e02.jpg_640x200_99b2676a.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1609/f3/52a119dbed871902.jpg_640x200_b4573df8.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1710/16/1d7693c6bd8abd02.png_640x200_43c308dd.png" alt=""></swiper-slide>
      <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1703/51/01864a8a35c20402.jpg_640x200_d16dcbcd.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1609/c9/cacbf705c5417e02.jpg_640x200_99b2676a.jpg" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
   
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
  </div>
</template>

<script>
 import {swiper,swiperSlide} from 'vue-awesome-swiper'
  // swiper options example:
  export default {
    name: 'carrousel',
    components: {
        swiper,
        swiperSlide
    },
    data() {
      return {
        notNextTick: true,
        swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          autoplay: 3000,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          
          mousewheelControl: true,
         
          // more Swiper configs and callbacks...
          // ...
        }
      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    
  }
</script>
<style scoped>
   .banner{
       height:3.3rem;
       overflow:hidden
   }
 .swiperContainer{
     height:3.3rem;
 }
 .swiperContainer img{
     width:100%;
     height:3.3rem
 }
</style>