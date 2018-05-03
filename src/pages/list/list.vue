<template>
<div>
  <div class="header">
  <router-link to="/">
     <span class="head-left iconfont icon-back"></span>
    </router-link>
    <div class="header-mid"> 
      <span class="iconfont icon-sousuo"></span>
      输入城市／旅游／景点
    </div>
    <span class="head-right"> 北京</span>
    

  </div>
  <div class="nav">
       <ul>
         <li v-for="(item,i) in nav" :key="i"><a href="#">{{item.title}}</a></li>
       </ul>
    
    </div>
    <listmain/>
</div>
</template>
<script>
import listmain from './main';
import axios from 'axios';
import './element-variables.scss'
Vue.use(Element)
   export default {
         data(){
           return {
             nav:[]
           }
       },
       components:{
           'listmain':listmain
       },
       created(){
         this.getListData()
       },
       methods:{
         getListData(){
           axios.get('./static/nav.json')
           .then(this.handleGetDateSucc.bind(this))
           .catch(this.handleGetDateError.bind(this))
         },
         handleGetDateSucc(response){
            const res =response.data;
            const data = res.data;
            this.nav=data.nav;
           console.log(this.list)

         },
         handleGetDateError(err){
           //console.log(err)
         }
   }
   }
</script>
<style scoped>
 .header{
     height:.88rem;
     background:#00bcd4;
     line-height:.88rem;
     font-size:14px;
     display:flex;
     justify-content:space-around;
 }
 .head-left{
   width: .4rem;
    line-height: .88rem;
    padding: 0 .2rem;
    color: #fff;
    font-size: .5rem;
    text-align: left;
    font-weight: 700;
 }
 .header-mid{
   box-sizing: border-box;
    box-flex: 1;
    flex:1;
    position: relative;
    height: .6rem;
    margin: .14rem 0;
    background: #fff;
    line-height: .6rem;
    border-radius: .06rem;
    color:#e4e7ea;
    text-align:left;
 }
 .head-right{
    line-height: .88rem;
    margin-right: .04rem;
    color: #fff;
    padding: 0 .5rem 0 .25rem;
    position: relative;

  

 }
 .head-right::after{
   content:'';
   border-right:0.12rem solid transparent;
   border-left:0.12rem solid transparent;
   border-top:0.12rem solid #fff;
   width:0;
   height:0;
   position:absolute;
   top:18px;
   right:10px
 }
 .nav{
    overflow:hidden;
     height:.6rem;
     white-space:nowrap;
     overflow-x: auto; 
    

 }
 .nav ul {
     min-width:1000px;
      height:.6rem;
      overflow:hidden;
      
     
 }
 .nav li{
    display : inline-block;
    min-width: .26rem;
    padding: 0 .22rem;
    background: #fff;
    color: #212121;
    font-size: .26rem;
    line-height: .56rem;
    border-radius: .04rem;
    
 }
 ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
}
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
} 
</style>