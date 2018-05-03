<template>
   <div class="list">
     <ul>
       <li v-for="item in list">
       <a><img class="list-img" :src="item.imgsrc"></a>
       <div class="list-pro"> 
          <h4 class="mp-list-productname mpg-ellipsis2">[北京出发]天安门＋故宫【赠送珍宝馆】＋八达岭长城＋鸟巢·水立方一日游</h4>
          　<div class="list-target"><span class="list-start">北京出发</span><span class="mp-list-tagitem mpf-border-right">无自费</span><span class="mp-list-tagitem mpf-border-right">无购物</span></div>
           <div><span class="price">288</span><span>起</span></div>
            <div><span>已售842</span></div>
       
       </div>
       
       
       </li>
     
     </ul>
   </div>

</template>
<script>
import axios from 'axios';
   export default {
       data(){
           return {
               list:[]
           }
       },
       mounted(){
             this.getHandleDate();
       },
       methods:{
           getHandleDate (){
            axios.get('./static/list.json')
           .then(this.handleGetedataSucc.bind(this))
           .catch(this.handleGatedateError.bind(this))
           },
            handleGetedataSucc(response){
            const res =response.data;
            const data = res.data;
            this.list=data.list1;
           // console.log(this)

         },
        handleGatedateError(err){
           //console.log(err)
         }
         
       },


   }

</script>
<style scoped>
 
 .list li{
     display:flex;
     justify-content:space-between;
 } 
.list .list-img{
   margin:.2rem;
    width:1.6rem;
    height:1.6rem;
}
.list .list-pro{
    float:left;
    padding: .2rem .2rem .2rem 0;
    height: 1.6rem;
    overflow: hidden;
}
.list .list-pro h4{
    line-height: .36rem;
    font-size: .28rem;
     display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.list .llist-target{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
}
.list .list-start{
   color: #00afc7;
    position: relative;
    top: .06rem;
    overflow: hidden;
    max-height: .58rem;
    margin-right: 1rem;
    padding-top: .06rem;
    line-height: .24rem;
    font-size:.12rem;
}
.list .mp-list-tagitem{
    display: inline;
    padding: 0 .1rem;
    font-size: .24rem;
    color: #616161;
}
</style>
