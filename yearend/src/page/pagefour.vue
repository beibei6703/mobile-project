<template>
  <div class="wraper">
    <!-- 只收到未送出 -->
    <div v-if="getFrom_num>0 && (getNUmto==0 ||getNUmto==null) ">
      <div
        class="textCon paddingtop ani"
        swiper-animate-effect="bounceInLeft"
        swiper-animate-duration="2s"
      >
        <span class="content_text textleft">你是否意识到总有人默默看着你</span>
        <!-- <span class="content_text textleft">总有人默默看着你</span> -->
        <span class="content_text textleft">
          <i class="nums">{{getFrom_num}}</i>张牛币来自同一个小云鸡
        </span>
        <!-- <span class="content_text textleft">来自同一个小云鸡</span> -->
      </div>
      <div class="text2 ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="2s">
        <span class="content_text textright">刹那间你是否会想起</span>
        <!-- <span class="content_text textright">你是否会想起</span> -->
        <span class="content_text textright">
          TA就是
          <i class="nums">{{getNamefrom}}</i>
        </span>
      </div>
    </div>
    <!-- 只送出未收到 -->
    <div v-if="getNUmto>0 && getFrom_num==0">
      <div class="textCon1 ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s">
        <span class="content_text textleft">
          不管什么原因你送给了
          <i class="nums">{{getnameTo}}</i>
        </span>
        <!-- <span class="content_text textleft">你送给了
          <i class="nums">{{getnameTo}}</i>
        </span>-->
        <span class="content_text textleft">
          <i class="nums">{{getNUmto}}</i>张牛币
        </span>
      </div>
    </div>
    <!-- 有互送牛币 -->
    <div v-if="getNUmto>0 && getFrom_num>0">
      <div
        class="textCon paddingtop ani"
        swiper-animate-effect="bounceInLeft"
        swiper-animate-duration="2s"
      >
        <span class="content_text textleft">你是否意识到总有人默默看着你</span>
        <!-- <span class="content_text textleft">总有人默默看着你</span> -->
        <span class="content_text textleft">
          <i class="nums">{{getFrom_num}}</i>张牛币来自同一个小云鸡
        </span>
        <!-- <span class="content_text textleft">来自同一个小云鸡</span> -->
      </div>
      <div class="text2 ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="2s">
        <span class="content_text textright">刹那间你是否会想起</span>
        <!-- <span class="content_text textright">你是否会想起</span> -->
        <span class="content_text textright">
          TA就是
          <i class="nums">{{getNamefrom}}</i>
        </span>
      </div>
      <div
        class="textCon marginstop ani"
        swiper-animate-effect="bounceInLeft"
        swiper-animate-duration="2s"
      >
        <span class="content_text textleft">
          不管什么原因你送给了
          <i class="nums">{{getnameTo}}</i>
        </span>
        <!-- <span class="content_text textleft">你送给了
          <i class="nums">{{getnameTo}}</i>
        </span>-->
        <span class="content_text textleft">
          <i class="nums">{{getNUmto}}</i>张牛币
        </span>
      </div>
      <div class="text2 ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="2s" v-if="(getWithname!=0 && getwithNum!=0) ||(getWithname!=null&&getwithNum!=null)">
        <span class="content_text textright">此刻是否应该再次感谢下帮助你的</span>
        <!-- <span class="content_text textright">是否应该再次</span> -->
        <!-- <span class="content_text textright">感谢下帮助你的那个TA</span> -->
        <span class="content_text textright">那个TA，没想到
          <i class="nums">{{getWithname}}</i>与你
        </span>
        <span class="content_text textright">
          <i class="nums">{{getwithNum}}</i>次互送牛币
        </span>
        <span class="content_text textright">心心相惜应该在一起</span>
        <!-- <span class="content_text textright">应该在一起</span> -->
      </div>
    </div>
    <!-- <Plane></Plane> -->
  </div>
</template>
<script>
import Plane from "./plane"
import qs from "qs";
export default {
  name: "Pagefour",
  components:{
Plane
  },
  data() {
    return {};
  },
  computed: {
    getNamefrom() {
      return this.$store.state.nb.fromName;
    },
    getFrom_num() {
      return this.$store.state.nb.from_num;
    },
    getnameTo() {
      return this.$store.state.nb.nbToname;
    },
    getNUmto() {
      return this.$store.state.nb.nbToNum;
    },
    getWithname() {
      return this.$store.state.nb.withName;
    },
    getwithNum() {
      return this.$store.state.nb.withNum;
    }
  },
  created() {
    const data = qs.stringify({
      workcode: this.getCookie("username")
    });
    //牛币数量
    this.$store.dispatch("getnbNum", data);
    //收到最多的
    this.$store.dispatch("getnbMaxfrom", data);
    //送出最多的
    this.$store.dispatch("getnbMaxTo", data);
    //牛币维度
    this.$store.dispatch("getnbType", data);
    //牛币排名
    this.$store.dispatch("getnbIndex", data);
    this.$store.dispatch("getnbWithOther", data);
    // console.log(
    //   this.$store.state.nb.fromName,
    //   " this.$store.state.nb.fromName"
    // );
  
  }
};
</script>
<style lang="scss" scoped>
.wraper {
  width: 100%;
  height: 100%;
  background: url("../assets/images/blank.png") no-repeat center center;
  background-size: 100% 100%;
  background-size: cover;
  font-size: 16px;
  color: #ffefd8;
  .text2 {
    margin-right: 40px;
    line-height: 30px;
    margin-top: 30px;
  }
  .paddingtop {
    padding-top: 65px;
  }
}
.marginstop {
  margin-top: 30px;
}
.nums {
  font-size: 24px;
}
.textCon {
  margin-left: 40px;
  line-height: 30px;
}
.textCon1 {
  margin-left: 40px;
  line-height: 30px;
  padding-top: 65px;
}
.content_text {
  font-size: 16px;
  display: block;
}
.textleft {
  text-align: left;
}
.textright {
  text-align: right;
}
</style>


