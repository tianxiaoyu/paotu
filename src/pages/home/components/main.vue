<template>
    <div class="main">
        <h3 class="hot">热销推荐</h3>

        <div id="wrapper">
        <div id="scroller">
        <ul>
          <li v-for="i in list"><a href="#"><img data-v-acd8868c="" :src="i.imgsrc" alt="故宫"></a>
            <div class="m-r">
                <h3>{{i.font}}</h3>
                <h4>{{i.title}}</h4>
                <p><i class="yuan"> ¥</i><span>{{i.price}}</span>起</p>
            </div>
          
          </li>
        <p class="searmore">查看所有产品</p>
        </ul>
        </div>
    </div>
    </div>

</template>

<script>
 import axios from 'axios';
 require("../../../uitls/iscroll-probe");
 console.log(IScroll);

   export default {
     
         data(){
           return {
             list:[]
           }
       },
       created(){
         this.getListData()
       },
         mounted(){
             this.createScroll()
       

       },
       methods:{
           createScroll(){
                this.myScroll = new IScroll('#wrapper', {probeType:3, mouseWheel: true });
           },
         getListData(){
             var that =this;
           axios.get('./static/list.json')
           .then(that.handleGetDateSucc.bind(that))
           .catch(that.handleGetDateError.bind(that))
         },
         handleGetDateSucc(response){
            const res =response.data;
            const data = res.data;
            this.list=data.list1;
           // console.log(this)

         },
         handleGetDateError(err){
           //console.log(err)
         }
   }
   }
</script>
<style scoped>
#wrapper{
    height:150px;
    overflow:hidden;
}
#scroller{
    height:300px;
}

.main ul{
    background:#fff;
}
   .main h3.hot{
       line-height: .8rem;
       color: #212121;
       padding-left: .26rem;
   }
.main li{

   position: relative;
    height: 1.4rem;
    padding: .24rem;
    border-bottom: 1px solid #e0e0e0;
}
.main li a{
    position: absolute;
    top: .24rem;
    left: .24rem;
    width: 1.4rem;
    height: 1.4rem;
}
.main li img {
    width:100%;
    height:100%;
}
.main li .m-r{
    margin-left:1.6rem
}
.main li .m-r h3{
    overflow: hidden;
    margin-top: .04rem;
    margin-bottom: .1rem;
    color: #212121;
    font-size: .3rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.main li .m-r h4{
  
   overflow: hidden;
    margin-bottom: .1rem;
    height: .4rem;
    line-height: .4rem;
    color: #9e9e9e;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.main li .m-r .yuan{
    color:#ff8300;

}
.main li .m-r span{
    color:#ff8300;
    font-size: .36rem;
    padding: 0 .04rem;

} 
.main ul  .searmore{
     height: .88rem;
    color: #00afc7;
    line-height: .88rem;
    text-align: center;
}
</style>