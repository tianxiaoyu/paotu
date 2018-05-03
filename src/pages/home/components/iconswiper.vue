<template>
<div  class="banner">
  <swiper class="swiperContainer" :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
    <!-- slides -->
    <swiper-slide >
       <ul class="list">
         <li  v-for="item in iconSwiperl" :key="item.id">
         <router-link to="/list">
                <div><img :src="item.imgsrc" alt=""/></div>
                <p>{{item.font}}</p>
           </router-link>
         </li>
       
       </ul>
    
    </swiper-slide>
    <swiper-slide> 
        <ul class="list">
         <li  v-for="item in iconSwiperr" :key="item.id">
           <div><img :src="item.imgsrc" alt=""/></div>
           <p>{{item.font}}</p>
         </li>
       
       </ul>
    
    </swiper-slide>
      
    <div class="swiper-pagination"  slot="pagination"></div>
   

  </swiper>
  </div>
</template>

<script>
 import {swiper,swiperSlide} from 'vue-awesome-swiper'
 
  // swiper options example:
  export default {
    props:['iconSwiperl','iconSwiperr'],
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
    
    mounted(){
      bus.$on("change",function(){
        alert("swiper")
      })
    }
    
  }
</script>
<style scoped>

 .list {
    width:100%;
   padding:10px 0;
     
     
     
 }
 .list li{
     width:25%;
     height:100px;
     float:left;
   

 }
 .list li div{
    width:100%;
    overflow:hidden;
 }
 .list li img{
    
     display:block;
     width:30px;
     height:30px;
     margin:0 auto
 }
 .list li p{
     width:100%;
     line-height:30px;
     text-align:center;
 }

</style>