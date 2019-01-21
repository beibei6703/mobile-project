<template>
  <div class="wraper">
    <div class="textCon paddingtop ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s">
      <span class="content_text textleft">你是否能记起</span>
      <span class="content_text textleft">拿起本子</span>
     <span class="content_text textleft"> 参加培训的自己</span>
     <span class="content_text textleft"> 我们不会忘记</span>
     <span class="content_text textleft"> <i class="nums">{{getTrainNUm}}</i> 次培训的你</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pagesix",
  data(){
    return{

    }
  },
  computed:{
    getTrainNUm(){
      return this.$store.state.yunji.trainNum
    }
  }
};
</script>
<style lang="scss" scoped>
.wraper {
  width: 100%;
  height: 100%;
  background: url("../assets/images/train.png") no-repeat center center;
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

</style>


