<template>
  <div class="home">
     <indexheader/>
     <indexbanner/>
     <indexiconswiper :iconSwiperl="iconSwiperl" :iconSwiperr="iconSwiperr"/>
     <indexmiddle/>
     <indexmain/>
     <indexcity/>
  </div>
</template>

<script>
  import header  from './components/header';
  import banner from './components/banner';
  import swiper from './components/iconswiper';
  import middle from './components/middle';
  import main from './components/main';
  import city from './components/city';
  import axios from 'axios'
  
   export default {
       components:{
          'indexheader':header,
          'indexbanner':banner,
          'indexiconswiper':swiper,
          'indexmiddle':middle,
          'indexmain':main,
          'indexcity':city

       },
       data(){
           return {
             iconSwiperl:[],
             iconSwiperr:[]
           }
       },
       mounted(){
         this.getHomeData();
       },
       methods:{
         getHomeData(){
           axios.get('./static/index.json')
           .then(this.handleGetDateSucc.bind(this))
           .catch(this.handleGetDateError.bind(this))
         },
         handleGetDateSucc(response){
            const res =response.data;
            const data = res.data;
            this.iconSwiperl=data.iconSwiperl;
            this.iconSwiperr=data.iconSwiperr;
           // console.log(this.iconSwiperl)

         },
         handleGetDateError(err){
           console.log(err)
         }
       }
   }
</script>

<style scoped>

</style>
