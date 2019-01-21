<template>
  <div class="wraper">
    <div class="textCon paddingtop ani"  swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s">
      <span class="content_text textleft"> <i class="nums">{{evectionNums}}</i>个城市</span>
      <span class="content_text textleft">留下了你出差的足迹</span>
    </div>
     <div class="textCon marginstop ani"  swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s" swiper-animate-delay="0.5s">
      <span class="content_text textleft">感谢你</span>
      <span class="content_text textleft">感谢<i class="nums">{{evectionNums}}</i>次出差的你</span>
    </div>
     <div class="textCon marginstop ani"  swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s" swiper-animate-delay="1s">
      <span class="content_text textleft">你在路上</span>
      <span class="content_text textleft">也在云集心里</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pagesev",
  data(){
    return {
    }
  },
  computed:{
    evectionNums(){
      return this.$store.state.yunji.evectionDays
    }
  },

};
</script>
<style lang="scss" scoped>
.wraper {
  width: 100%;
  height: 100%;
  background: url("../assets/images/evection.png") no-repeat center center;
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


