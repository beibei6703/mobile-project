<template>
  <div class="wraper">
    <div class="topText ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s">
      <span>你的付出不会被忘记</span>
    </div>
    <div class="testTwo ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s">
        <span> <b class="nums">{{getnuNum}}</b> 张牛币</span>
        <span>是你最好的证明</span>
        <span v-if="getnubIndex<200">牛币总数全公司第 <b class="nums">{{getnubIndex}}</b></span>
        <span v-if="getnubIndex<200">牛币已破天际</span>
    </div>
        <div class="bottomText ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="2s">
            <span>客户至上<i class="nums">{{getnumCus}}</i> 张</span>
            <span>创新进取<i class="nums">{{getnumNew}}</i> 张</span>
            <span>正直诚信<i class="nums">{{getnumInter}}</i> 张</span>
            <span>协作分享<i class="nums">{{getnumPartner}}</i> 张</span>
        </div>
        <!-- <Plane></Plane> -->
  </div>
</template>
<script>
import  qs from "qs"
import Plane from "./plane"
export default {
  name: "Pagethree",
  components:{
      Plane
  },
  data(){
      return{}
  },
  computed:{
      getnuNum(){
          return this.$store.state.nb.nbNum;
      },
      getnumCus(){
           return this.$store.state.nb.numCus;
      },
      getnumInter(){
       return this.$store.state.nb.numInter;
      },
      getnumPartner(){
            return this.$store.state.nb.numPartner;
      },
      getnumNew(){
        return this.$store.state.nb.numNew;
      },
      getnubIndex(){
          return this.$store.state.nb.nbIndex;
      }

     
  }
};
</script>
<style lang="scss" scoped>
.wraper {
  width: 100%;
  height: 100%;
  background: url("../assets/images/niub.png") no-repeat center center;
  background-size: 100% 100%;
  background-size: cover;
  font-size: 16px;
  color: #ffefd8;
  // line-height: 30px;
  .topText {
    padding-top: 65px;
   
    line-height: 30px;
    margin-left: 40px;
  }
  .testTwo{
       margin-left: 40px;
       margin-top:10px;
       span{
           display:block;
           width:151px;
           text-align: left;
            line-height: 30px;
            white-space: nowrap;
       } 
    }
    .bottomText{
        margin-top:40px;
        height:180px;
        span{
            display:block;
            margin-right:40px;
            line-height:30px;
            text-align: right;
            white-space: nowrap;
        }
    }
}
.nums{
   font-size: 24px;
 
}

</style>


