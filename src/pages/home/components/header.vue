<template>
  <div class="header">
    <span class="head-left iconfont icon-back"></span>
    
        <div class="header-mid">
        <router-link to="/list">
          <span class="iconfont icon-sousuo"></span>
          </router-link>
          输入城市／旅游／景点
        </div>
      
      <span class="head-right" @click="handleclick"> 北京</span>
    </div>

</template>
<script>
 export default{
   method:{
     handleclick(){
       Vue.bus.$emit("change")
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
</style>