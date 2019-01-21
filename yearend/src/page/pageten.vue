<template>
  <div class="wraper">
    <div class="name ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s">
      <span>{{getusername}}</span>
    </div>
    <div class="textCon margintop1 ani" swiper-animate-effect="bounceInLeft" swiper-animate-duration="2s">
      <span class="content_text textleft">感谢</span>
      <span class="content_text textleft">这一年</span>
      <span class="content_text textleft">辛苦的你</span>
    </div>
    <div class="text2 ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="2s" v-if="honorList.length>0">
      <span class="content_text textright" v-for="(item,index) in honorList" :key="index">{{item}}</span>
      <span class="content_text textright">点点滴滴</span>
    </div>
    <div class="text2 margin_top2 ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="2s">
      <span class="content_text textright">值得铭记</span>
      <span class="content_text textright">多么棒的你</span>
    </div>
    <div class="textCenter marginstop ani" swiper-animate-effect="rollIn" swiper-animate-duration="2s" swiper-animate-delay="1s">
      <span class="content_text textcenter">云集与你一起</span>
      <span class="content_text textcenter">迎接更强的自己</span>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
import {honorInfo} from "../api/api.js"
export default {
  name: "Pageten",
  data(){
    return{
      honorList:[],
    }
  },
  computed:{
  getusername(){
      return this.$store.state.yunji.name
    }
  },
  created(){
    this.gethonor()
     const data = qs.stringify({
        workcode: this.getCookie("username")
      }); 
    this.$store.dispatch("getEntryInfo",data)
  },
  methods:{
    gethonor(){
       const data = qs.stringify({
        workcode: this.getCookie("username")
      }); 
      honorInfo(data).then(res =>{
        const data = res.data
        if(data.success == true && data.data){

            Object.keys(data.data).forEach( key=>{
           this.honorList.push(data.data[key].horor_detail)
           
         })
        console.log( this.honorList,"122")
        }else{
          console.log(data.errorMsg)
          return false;
        }
      })

    }
  }
};
</script>
<style lang="scss" scoped>
.wraper {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: url("../assets/images/last.png") no-repeat center center;
  background-size: 100% 100%;
  background-size: cover;
  font-size: 16px;
  color: #ffefd8;
  .name {
    font-size: 24px;
    color: #ffefd8;
    margin-left: 40px;
    padding-top: 93px;
  }
  .textCon {
    margin-left: 40px;
    line-height: 30px;
  }
  .textCenter {
    line-height: 30px;
  }
  .text2 {
    margin-right: 40px;
    line-height: 30px;
  }
  .paddingtop {
    padding-top: 65px;
  }
}
.nums {
  font-size: 24px;
  
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
.marginstop {
  margin-top: 30px;
}
.margintop1 {
  margin-top: 40px;
}
.textcenter {
  text-align: center;
}
.margin_top2 {
  margin-top: 40px;
}
</style>


