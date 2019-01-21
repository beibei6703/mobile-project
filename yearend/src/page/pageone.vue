<template>
  <div class="wraper">
    <div class="content">
      <div class="name ani" swiper-animate-effect="bounceIn" swiper-animate-duration="2s">
        <span>{{name}}</span>
      </div>
      <div class="times ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s">庆幸
        <span>{{entry_date[0]}}</span>年
        <span>{{entry_date[1]}}</span>月
        <span>{{entry_date[2]}}</span>日遇见你
      </div>
      <div class="thansCon ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s">
        <span>感谢</span>
        <span>
          <b class="days">{{days}}</b> 天的不离不弃
        </span>
      </div>
      <div class="rightCon">
        <div class="imgs">
          <img src="../assets/images/Shape.png" alt>
        </div>
        <div class="righText">
          <p class="ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="2s">
            <span>相信未来</span>
            <span>一定更加美丽</span>
          </p>
          <p
            class="marginTops ani"
            swiper-animate-effect="bounceInRight"
            swiper-animate-duration="2s"
          >这是云集和你的约定</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {entryInfo} from "../api/api.js"
import qs from 'qs'
export default {
  name: "Pageone",
  data(){
    return{
      workcode:"",
      name:"",
      entry_date:"",
      days:""


    }
  },
  created(){
      console.log("getcookie",this.getCookie("username"),typeof(this.getCookie("username")))
    // this.workCode = this.getCookie("username")
    this.getEntryInfo()
    // console.log(111111111111)
  },
   methods:{
    //入职信息
    getEntryInfo(){
        const data = qs.stringify({
          workcode: this.getCookie("username")
        })
        entryInfo(data).then(res=>{
          console.log(res)
          const data = res.data
          console.log(data.data)
         if(data.success == true && data.data){
            this.name = data.data.name
            // this.$utils.localData.set("name",data.data.name)
            this.entry_date = data.data.entry_date
           this.entry_date =data.data.entry_date.split("-")
            console.log(this.entry_date,"324567")
            this.days = data.data.days
         }
        })
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes heathing {
  	0% {
    transform: scale(0.8,0.8);
    opacity:1;
  }
  25% {
    transform: scale(1,1);
    opacity:0.8;
  }
  100% {
    transform: scale(0.8,0.8);
    opacity:1;
  }
}
.wraper {
  .content {
    width: 100%;
    height: 100%;
    // height:667px;
    // padding-bottom:100%;
    background: url("../assets/images/meet.png") no-repeat center center;
    background-size: 100% 100%;
    background-size: cover;
    //  background-clip:cover;
    .name {
      font-size: 24px;
      color: #ffefd8;
     
      // width:100%;
      padding-top: 65px;
      margin-left: 40px;
      height: 42px;
      line-height: 42px;
    }
    .times {
      //  width:100%;
      font-size: 16px;
      color: #ffefd8;
      height: 33px;
      line-height: 33px;
      margin-left: 40px;
      margin-top: 10px;
      span {
        font-size: 24px;
      }
    }
    .thansCon {
      margin-left: 40px;
      font-size: 16px;
      color: #ffefd8;
      margin-top: 30px;
      height: 53px;
      span {
        display: block;
        width: 127px;
        line-height: 28px;
        white-space: nowrap;
        .days {
          font-size: 24px;
        }
      }
    }
    .rightCon {
      width: 100%;
      height: 80px;
      margin-top: 40px;
      .imgs {
        width: 89px;
        height: 82px;
        float:left;
        margin-left:114px;
         animation: heathing 1s ease infinite;
        img {
          width: 100%;
        }
      }
      .righText {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        // width: 156px;
        p {
          // width: 126px;
          font-size: 16px;
          color: #ffefd8;
          margin-right: 40px;
          white-space: nowrap;
          text-align: right;
          line-height: 24px;
          span {
            display: block;
            text-align: right;
          }
        }
        .marginTops {
          margin-top: 30px;
        }
      }
    }
  }
}
</style>


