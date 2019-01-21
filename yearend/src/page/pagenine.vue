<template>
  <div class="wraper">
    <div class="textCon paddingtop ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s" >
      <span class="content_text textleft"> 快递屋</span>
      <span class="content_text textleft"><i class="nums">{{getexpressNum}}</i>个包裹</span>
        <span class="content_text textleft">记录着你贡献的GMV</span>
    </div>
     <div class="textCon marginstop ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s" swiper-animate-delay="1s">
      <span class="content_text textleft">相信</span>
      <span class="content_text textleft">云集APP有你</span>
    </div>
     <div class="textCon marginstop ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s" swiper-animate-delay="1.5s">
      <span class="content_text textleft"> <i class="nums">516、双十一</i></span>
      <span class="content_text textleft">感谢付出的你</span>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
import {expressData} from "../api/api.js"
export default {
  name: "Pagenine",
  data(){
    return {
    }
  },
  computed:{
    getexpressNum(){
      return this.$store.state.yunji.expressNum
    }
  },
  created(){
    const data = qs.stringify({
        workcode: this.getCookie("username")
      }); 
    this.$store.dispatch("getExpressData", data);
  }
};
</script>
<style lang="scss" scoped>
.wraper {
  width: 100%;
  height: 100%;
  background: url("../assets/images/expressage.png") no-repeat center center;
  background-size: 100% 100%;
  background-size: cover;
  font-size: 16px;
  color: #ffefd8;
  .textCon{
  margin-left:40px;
  line-height:30px;
}
 .paddingtop{
  padding-top:65px;
 }
}
.nums {
  font-size: 24px;
 
}

.content_text{
  font-size:16px;
  display:block;
}
.textleft{
  text-align: left
}
.textright{
  text-align: right;
}
.marginstop{
  margin-top:30px;
}

</style>


