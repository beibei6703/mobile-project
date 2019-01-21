<template>
  <div class="wraper">
    <div class="content" v-if="show">
      <div class="imgs">
        <img src="@/assets/images/2018.png" alt > 
      </div>
      <div class="toptext">
        <span class="txt1">你与云集</span>
        <span class="txt2">的点点滴滴都值得铭记</span>
      </div>
      <div class="planes">
        <img src="../assets/images/Group.png" alt >
        <!-- <div class="light"></div> -->
      </div>
      <div class="progressCon">
        <div class="progress">
          <span :style="{width:progressnum+'px'}"></span>
        </div>
        <span class="nums">{{percentage}}%</span>
      </div>
    </div>
    <Swipercontent v-if="(startShow && !show) && getEntryTime !=0"></Swipercontent>
    <Lastenter v-if="(startShow && !show)&&getEntryTime ==0"></Lastenter>
  </div>
</template>

<script>
 import axios from 'axios'
 import qs from "qs"
import Swipercontent from "./swipercontent";
import Lastenter from "./lastenter";

export default {
  name: "loadpage",
  components: {
    Swipercontent,
    Lastenter
  },
  data() {
    return {
      percentage: 0,
      progressnum: 0,
      timer: null,
      show: true, //加载页面展示
      startShow: false ,//true时轮播图展示
     
    };
  },
  computed:{
    getEntryTime(){
      return this.$store.state.yunji.Entry_time
    },
   getusername(){
      return this.$store.state.yunji.name
    }
  },
  watch: {
    // 当达到外围高度时，定时器关闭，开始加载下面的内容页面
    progressnum(newvalue, oldvalue) {
      if (newvalue == 200) {
        clearInterval(this.timer);
        this.show = false;
        this.startShow = true;
      }
    }
  },
  created() {
       const data = qs.stringify({
        workcode: this.getCookie("username")
      }); 
    this.$store.dispatch("getEntryInfo",data)
    // 定时器控制进度跳的高度
    this.timer = setInterval(() => {
      this.progressnum += 2;
      this.percentage++;
    }, 50);
  },
 
};
</script>
<style lang="scss" scoped>
@keyframes float {
  0% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(5px);
  }
}
@keyframes hover {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0);
  }
}

.wraper {
  width: 100%;

  .content {
    width: 100%;
    height:100%;
  // padding-bottom:100%;
    background: url("../assets/images/Rectangle.png") no-repeat center center;
    background-size: 100% 100%;
    // background-clip:content-box;

    .imgs {
      width: 100%;
      height: 52px;
      display: flex;
      justify-content: center;
      padding-top: 51px;
      img {
        width: 150px;
        height: 52px;
        border: 0;
        display: block;
      }
    }
    .toptext {
      // width: 100%;
      span {
        display: block;
      }
      .txt1 {
        display: block;
        font-size: 30px;
        // width: 120px;
        height: 42px;
        color: #ffefd8;
        line-height: 42px;
        padding-top: 26px;
        margin-left: 38px;
      }
      .txt2 {
        font-size: 16px;
        color: #ffefd8;
        height: 25px;
        line-height: 25px;
        margin-top: 10px;
        margin-left: 38px;
      }
    }
    .planes {
      width: 100%;
      margin-top: 61px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
        animation: hover infinite ease-in-out 1.5s;
      -webkit-animation: hover infinite ease-in-out 1.5s;
      img {
        width: 180px;
        height: 135px;
      }
    }
    .progressCon {
      width: 100%;
      height: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 29px;
      .progress {
        width: 200px;
        height: 4px;
        background: #bf6060;
        line-height: 4px;
        display: flex;
        align-items: center;
        align-content: center;
        span {
          display: inline-block;
          width: 200px;
          height: 4px;
          /*! autoprefixer: off */
          background:-webkit-gradient(linear, 100% 0, 0 0, from(#ee6cb5), to(#51c9f9));
          background: -webkit-linear-gradientrig(
            left,
            #ee6cb5,
            #51c9f9
          ); 
          /* autoprefixer: on */
          background: -o-linear-gradient(
            left,
            #ee6cb5,
            #51c9f9
          ); 
          background: -moz-linear-gradient(
            left,
            #ee6cb5,
            #51c9f9
          ); 
          background: linear-gradient(left, #ee6cb5, #51c9f9); /* 标准的语法 */
        }
      }
      .nums {
        color: #fff8ee;
        font-size: 12px;
        line-height: 12px;
        margin-left: 4px;
      }
    }
  }
}


</style>
