<template>
    <div class="city">
       <h3>周末去哪儿</h3>
       <div id="wrapper">
       <div id="scroller">
       <ul>
          <li v-for="i in list" >
             <a href="#"><img  :src="i.imgsrc"/></a>
             <div>
                <h3>{{i.font}}</h3>
                <p>细数北京温泉，温暖你的冬天</p>
             </div>
          </li>
       </ul>
       </div>
       </div>
    </div>

</template>
<script>
 import axios from 'axios';
  require("../../../uitls/iscroll-probe");
   export default {
       data (){
           return {
               list:[]
           }
       },
       mounted(){
           this.getListdata();
           this.createScroll();
       },
       methods:{
            createScroll(){
                this.myScroll = new IScroll('#wrapper', {probeType:3, mouseWheel: true });
           },
           getListdata(){
               axios.get('./static/city.json')
              .then(this.handleGetDateSucc.bind(this))
             .catch(this.handleGetDateError.bind(this))
           },
           handleGetDateSucc(response){
               const res =response.data;
               const data = res.data;
                this.list=data.list2;
            console.log(this)

           },
           handleGetDateError(err){
               console.log(err)
           }
       }
   }


</script>
<style scoped>
#wrapper{
    height:200px;
    overflow:hidden;
}
#scroller{
    height:600px;
    overflow-y:scroll;
}
   .city h3{
       line-height:.8rem;
       color: #212121;
       padding-left: .26rem;
   }
   .city ul li a{
       display:block;
       height:2.43rem;
   }
   .city ul li img{
       width:100%;
       height:100%
   }
.city ul div{
        padding: .14rem .2rem .2rem .2rem;
}
</style>