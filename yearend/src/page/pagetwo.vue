<template>
  <div class="wraper">
    <div class="topText ani" v-if='earlydate[0]!=0' swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s">
      <span>是否还能想起</span>
      <span>
        <i class="nums">{{earlydate[0]}}</i> 年
        <i class="nums">{{earlydate[1]}}</i>月
      </span>
      <span>早打卡的记忆</span>
    </div>
    <div class="centerText" v-if='laterdate[0]!=0'>
      <div  class="ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="2s">
        <!-- <span>是否还能想起</span> -->
        <span>
          <i class="nums">{{laterdate[0]}}</i> 年
          <i class="nums">{{laterdate[1]}}</i>月
        </span>
        <span>晚打卡的记忆</span>
        <!-- <span>早打卡的记忆</span> -->
        <span>不该忘记</span>
       </div>
       <div class="imgs_moon animated infinite swing" >
         <img src="../assets/images/moon.png" alt="">
       </div>
    </div>
    <div class="margins ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s">
      <div v-if="num>0">
      <span>
        <i class="nums">{{num}}</i> 天加班的努力
      </span>
      <span>值得回忆</span>
      <span>并鼓励</span>
      <span>那个付出的自己</span>
      </div>
     
    </div>
   <!-- <Plane></Plane> -->
  </div>
</template>
<script>
import Plane from "./plane"
import { ealyclock, laterclock, overWork } from "../api/api.js";
import qs from "qs";
export default {
  name: "Pagetwo",
  components:{
    Plane
  },
  data() {
    return {
      earlydate: "",
      laterdate: "",
      num: ""
    };
  },
  created() {
    this.getEarlyClock();
    this.getLaterClock();
    this.getOverwork();
  },
  methods: {
    //早打卡
    getEarlyClock() {
      const data = qs.stringify({
        workcode: this.getCookie("username")
      });
      ealyclock(data).then(res => {
        console.log(res);
        const data = res.data;
        if (data.success == true && data.data) {
          this.earlydate = data.data[0].date.split("-");
          console.log(this.earlydate);
        } else {
          console.log(data.errorMsg);
        }
      });
    },
    //晚达卡
    getLaterClock() {
      const data = qs.stringify({
        workcode: this.getCookie("username")
      });
      laterclock(data).then(res => {
        console.log(res);
        const data = res.data;
        if (data.success == true && data.data) {
          this.laterdate = data.data[0].date.split("-");
        } else {
          console.log(data.errorMsg);
        }
      });
    },
    //加班
    getOverwork() {
      const data = qs.stringify({
        workcode: this.getCookie("username")
      });
      overWork(data).then(res => {
        const data = res.data;
        if (data.success == true && data.data) {
          this.num = data.data.num;
          // this.laterdate = data.data[0].date.split("-")
        } else {
          console.log(data.errorMsg);
        }
      });
    }
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
  .topText {
    padding-top: 65px;
    margin-left: 40px;
    line-height: 30px;
    span {
      display: block;
      text-align: left;
      white-space: nowrap;
    }
  }
  .centerText {
    margin-top: 40px;
    margin-right: 40px;
    line-height: 30px;
    position:relative;
    span {
      display: block;
      text-align: right;
      white-space: nowrap;
    }
  }
  .margins {
    margin-top: 40px !important;
    margin-left: 40px;
    line-height: 30px;
    span {
      display: block;
      text-align: left;
    }
  }
}
.nums {
  font-size: 24px;
}
@keyframes swing_ani {
  0%{
    transform: rotate(-15deg)

  }
 
  50%{
     transform: rotate(15deg)
  }
  100%{
     transform: rotate(-15deg)
  }
  
}
.imgs_moon{
  position:absolute;
  // top:20%;
  top:0;
  left:31%;
  width:86px;
  height: 95px;
 animation: swing_ani 3s infinite ease-in-out;
 transform-origin: center top;
  img{
    width:100%;
  }
}
</style>


