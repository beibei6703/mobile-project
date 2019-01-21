<template>
  <div class="wraper">
    <!-- <audio class="autos" :src="forword"></audio> -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :index="1">
          <Pageone></Pageone>
            <img  class="next plane " src="@/assets/images/Rectangle 7.png" alt="">
        </div>
        <div class="swiper-slide" v-if="showpage">
          <Pagetwo></Pagetwo>
            <img  class="next plane " src="@/assets/images/Rectangle 7.png" alt="">

        </div>
        <div class="swiper-slide" v-if="getnuNum>0">
          <Pagethree></Pagethree>
            <img  class="next plane " src="@/assets/images/Rectangle 7.png" alt="">
        </div>
        <div class="swiper-slide" v-if="getFrom_num>0 || getNUmto>0">
          <Pagefour></Pagefour>
            <img  class="next plane " src="@/assets/images/Rectangle 7.png" alt="">
        </div>
        <div class="swiper-slide" v-if="getdonateBookNum>0 || getBorrowBookNum >0">
          <Pagefive></Pagefive>
            <img  class="next plane " src="@/assets/images/Rectangle 7.png" alt="">
        </div>
        <div class="swiper-slide" v-if="getTrainNUm>0">
          <Pagesix></Pagesix>
            <img  class="next plane " src="@/assets/images/Rectangle 7.png" alt="">
        </div>
        <div class="swiper-slide" v-if="evectionNums>0">
          <Pagesev></Pagesev>
            <img  class="next plane " src="@/assets/images/Rectangle 7.png" alt="">
        </div>
        <div class="swiper-slide" v-if="getoAnum>0">
          <Pageeight></Pageeight>
            <img  class="next plane " src="@/assets/images/Rectangle 7.png" alt="">
        </div>
        <div class="swiper-slide" v-if="getexpressNum>0">
          <Pagenine></Pagenine>
           <img  class="next plane " src="@/assets/images/Rectangle 7.png" alt="">
        </div>
        <div class="swiper-slide pagelast ">
          <Pageten></Pageten>
          <div class="repeat" @click="goreplay">重播</div>
        </div>
      </div>
      <div id= "playmusic" class="audios rotatings" @click="stopMusic" :music="showmusic">
        <audio
          ref="audioPlay"
          loop
          :src="require('../assets/music/music_sky.mp3')"
          id="media"
          autoplay
        ></audio>
      </div>
    </div>
    <!-- <Plane></Plane> -->
  </div>
</template>
<script>
import Swiper from "swiper";
import Plane from "./plane"; //底部飞机
import Pageone from "./pageone"; //第一页内容页 入职
import Pagetwo from "./pagetwo"; // 早打卡，晚打卡
import Pagethree from "./pagethree"; //牛逼
import Pagefour from "./pagefour"; //
import Pagefive from "./pagefive"; //借书捐书
import Pagesix from "./pagesix"; //培训
import Pagesev from "./pagesev"; // 出差
import Pageeight from "./pageeight"; //oa
import Pagenine from "./pagenine"; //快递
import Pageten from "./pageten"; // 荣耀
import $ from "jquery";
import * as swiperAni from "@/assets/commonjs/swiper.animate.min.js";
import qs from "qs";
export default {
  name: "Swipercontent",
  components: {
    Plane,
    Pageone,
    Pagetwo,
    Pagethree,
    Pagefour,
    Pagefive,
    Pagesix,
    Pagesev,
    Pageeight,
    Pagenine,
    Pageten
  },
  data() {
    return {
      mySwiper: null,
      scaleHeight: "", //屏幕高度
      showmusic: true,
      showpage:true,
      index:1,
    };
  },
  computed: {
    //出差次数
    evectionNums() {
      return this.$store.state.yunji.evectionDays;
    },
    //捐书
    getdonateBookNum() {
      return this.$store.state.yunji.donateBookNum;
    },
    //借书
    getBorrowBookNum() {
      return this.$store.state.yunji.borrowBookNum;
    },
    //姓名
    // getusername() {
    //   return this.$store.state.yunji.name;
    // },
    //快递
    getexpressNum() {
      return this.$store.state.yunji.expressNum;
    },
    //培训

    getTrainNUm() {
      return this.$store.state.yunji.trainNum;
    },
    //oA
    getoAnum() {
      return this.$store.state.yunji.oAnum;
    },
    getFrom_num() {
      return this.$store.state.nb.from_num;
    },
    getNUmto() {
      return this.$store.state.nb.nbToNum;
    },
     getnuNum(){
          return this.$store.state.nb.nbNum;
      },
  },
  created() {
    const data = qs.stringify({
      workcode: this.getCookie("username")
    });
    var workcode = this.getCookie("username")
    var worcodeArr=workcode.split("")
    if(workcode.indexOf("WB") !=-1 ||worcodeArr[0]==9){
      this.showpage= false
    }
    this.$store.dispatch("getEvection", data),
      //捐书
      this.$store.dispatch("getDonaBook", data),
      //借阅
     this.$store.dispatch("getBorrowBook", data);
    //入职
    this.$store.dispatch("getEntryInfo", data);
    //快递
    this.$store.dispatch("getExpressData", data);
    //培训
    this.$store.dispatch("gettrainInfo", data);
     //oA
    this.$store.dispatch("getoAInfo", data);
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
    this.$store.dispatch("getnbWithOther",data)
      console.log(this.getFrom_num,this.getNUmto,"13232323223")
    // 加载获取屏幕高度
    this.scaleHeight =
      (window.screen.height / window.screen.width) * document.body.clientWidth;
    //  console.log(this.scaleHeight)
    this.$nextTick( ()=> {
               this.mySwiper = new Swiper('.swiper-container', {
                 direction: "vertical",
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                on: {
                  init: function() {
                    console.log(this,"12323232")
                    swiperAni.swiperAnimateCache(this); //隐藏动画元素
                    swiperAni.swiperAnimate(this); //初始化完成开始动画
                  },
                  slideChangeTransitionEnd: function() {
                    swiperAni.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                    //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
                  },   
                    touchStart: function(){
                      //阻止第一页向前滑动和最后一页继续滑动
                        this.allowSlidePrev = true;
                        this.allowSlideNext = true;
                        if(this.isEnd){ 
                        this.allowSlideNext = false;
                        }else if(this.activeIndex==0){
                              this.allowSlidePrev = false;
                        }
                    },     
                 
                },
         })
    })
      this.$refs.audioPlay.play();
          
  },
  methods: {
    goreplay() {
      this.mySwiper.slideTo(0, 0, true);
    },
    stopMusic() {
      this.showmusic = !this.showmusic;
      if (this.showmusic) {
        this.$refs.audioPlay.play();
        $("#playmusic").addClass("rotatings")
        
      } else {
        this.$refs.audioPlay.pause();
           $("#playmusic").removeClass("rotatings")
      
      }
    }
  }
};
</script>
<style lang= "scss" scoped>
.nopage {
  display: none;
}
.showpage {
  display: block;
}
.swiper-container,
.swiper-container-horizontal,
.swiper-container-ios {
  touch-action: none;
  width: 100%;
  height: 100% !important;
}
.swiper-slide {
  touch-action: none;
  width: 100%;
  height: 100% !important;
}
.swiper-container {
  transition-timing-function: linear !important;
}
.repeat {
  width:50px;
  height:20px;
  position: absolute;
  bottom: 50px;
  right: 50px;
  /* margin-left:-9px; */
  z-index: 99;
  font-size: 12px;
  color: #ffefd8;
  text-align: center;
  line-height:20px;
  border-radius: 5px;
  border:1px solid #ffefd8;
}
.audios {
  position: absolute;
  top: 25px;
  right: 20px;
  width: 30px;
  height: 30px;
  /* padding-left:5px; */
  z-index: 99;
  /* border:1px solid #303030; */
  border-radius: 50%;
  background: url("../assets/images/music.png") no-repeat center center;
  background-size: 100% 100%;
  opacity: 0.7;
}
.rotatings{
 animation: rotating 2s infinite linear;
}
@keyframes rotating{
  0%{transform:rotate(0)}
  100%{transform:rotate(360deg)}
}
</style>

