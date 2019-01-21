<template>
  <div class="wraper">
    <!-- 只有捐书的 -->
    <div v-show="getdonateBookNum>0 && getBorrowBookNum==0">
      <div class="textCon paddingtop ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s">
        <span class="content_text textleft">图书角</span>
        <span class="content_text textleft"><i class="nums">{{getdonateBookNum}}</i>本书</span>
        <span class="content_text textleft"> 是你有爱的印记</span>
      </div>
      <div class="text2 ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="2s" >
        <span class="content_text textright">感谢爱分享的你</span>
        <span class="content_text textright">你会发现</span>
        <span class="content_text textright">书中的自己</span>
        <span class="content_text textright">最有魅力</span>
      </div>
      <!-- <div class="textCon marginstop ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s" v-if="getBorrowBookNum>0">
        <span class="content_text textleft"><i class="nums">{{getBorrowBookNum}}</i>次借阅</span>
        <span class="content_text textleft">是对自己最好的鼓励</span>
        <span class="content_text textleft"> 后面的路</span>
        <span class="content_text textleft"> 图书陪你</span>
      </div> -->
       </div>
       <!-- 只有借书 -->
      <div v-show="getdonateBookNum==0 && getBorrowBookNum>0">
        <div class="text2_2 ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="2s" >
        <span class="content_text textright">感谢爱分享的你</span>
        <span class="content_text textright">你会发现</span>
        <span class="content_text textright">书中的自己</span>
        <span class="content_text textright">最有魅力</span>
      </div>
      <div class="textCon marginstop ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s">
        <span class="content_text textleft"><i class="nums">{{getBorrowBookNum}}</i>次借阅</span>
        <span class="content_text textleft">是对自己最好的鼓励</span>
        <span class="content_text textleft"> 后面的路</span>
        <span class="content_text textleft"> 图书陪你</span>
      </div>
     </div>

     <!-- 既有捐书又有借书的 -->
     <div v-show="getdonateBookNum>0 && getBorrowBookNum>0">
        <div class="textCon paddingtop ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s">
        <span class="content_text textleft">图书角</span>
        <span class="content_text textleft"><i class="nums">{{getdonateBookNum}}</i>本书</span>
      <span class="content_text textleft"> 是你有爱的印记</span>
      </div>
      <div class="text2 ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="2s" >
        <span class="content_text textright">感谢爱分享的你</span>
        <span class="content_text textright">你会发现</span>
        <span class="content_text textright">书中的自己</span>
        <span class="content_text textright">最有魅力</span>
      </div>
      <div class="textCon marginstop ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s">
        <span class="content_text textleft"><i class="nums">{{getBorrowBookNum}}</i>次借阅</span>
        <span class="content_text textleft">是对自己最好的鼓励</span>
        <span class="content_text textleft"> 后面的路</span>
        <span class="content_text textleft"> 图书陪你</span>
      </div>
     </div>
     <!-- <Plane></Plane> -->
  </div>

</template>
<script>
import qs from "qs"
import Plane from "./plane"
export default {
  name: "Pagefive",
  components:{
Plane
  },
  data(){
    return{
    }
  },
  computed:{
    getdonateBookNum (){
      return this.$store.state.yunji.donateBookNum
    },
    getBorrowBookNum(){
      return this.$store.state.yunji.borrowBookNum
    }
  },
  created(){
  const data = qs.stringify({
      workcode: this.getCookie("username")
    });
    this.$store.dispatch("getDonaBook", data),
      //借阅
     this.$store.dispatch("getBorrowBook", data);
  },
  

};
</script>
<style lang="scss" scoped>
.wraper {
  width: 100%;
  height: 100%;
  background: url("../assets/images/book.png") no-repeat center center;
  background-size: 100% 100%;
  background-size: cover;
  font-size: 16px;
  color: #ffefd8;
  .textCon{
  margin-left:40px;
  line-height:30px;
}
 .text2{
   margin-right:40px;
   line-height:30px;
   padding-top:30px;
 }
 .text2_2{
    margin-right:40px;
    line-height:30px;
    padding-top:180px;
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


