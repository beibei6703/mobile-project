<template>
  <div class="wraper">
    <div class="textCon paddingtop ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s" >
      <span class="content_text textleft"> <i class="nums">{{getoAnum}}</i>条办结流程上</span>
      <span class="content_text textleft">烙印着你的辛勤</span>
    </div>
     <div class="textCon marginstop  ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s" swiper-animate-delay="0.5s">
      <span class="content_text textleft">这何尝不是</span>
      <span class="content_text textleft">你兢兢业业</span>
      <span class="content_text textleft">最好的证明</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pageeight",
  data(){
    return{

    }
  },
  computed:{
    getoAnum(){
      return this.$store.state.yunji.oAnum
    }
  }
};
</script>
<style lang="scss" scoped>
.wraper {
  width: 100%;
  height: 100%;
  background: url("../assets/images/oa.png") no-repeat center center;
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


