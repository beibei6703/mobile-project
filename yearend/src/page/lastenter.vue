<template>
  <div class="wraper">
    <div class="textCon1 paddingtops">
      <span>
        <i class="nums">{{getusername}}</i>
      </span>
      <span>感谢你加入云集</span>
    </div>
    <div class="textCon2">
      <span>你与云集的2018</span>
      <span>无法时光重现</span>
    </div>
    <div class="textCon2">
      <span>放开过往</span>
      <span>云集与你一起</span>
      <span>迎接2019</span>
      <span>迎接更强的自己</span>
    </div>
    <!-- <span class="fadeIn">你是2018年后入职的哦，暂无数据</span> -->
    <div class="imgs_shape">
      <img src="../assets/images/Shape.png" alt>
    </div>
    
  </div>
</template>
<script>
import qs from "qs";
export default {
  name: "Laseenter",
  data() {
    return {};
  },
  computed: {
    getusername() {
      return this.$store.state.yunji.name;
    },
    getentry_time(){
        return this.$store.state.yunji.Entry_time;
    }
  },
  created() {
    const data = qs.stringify({
      workcode: this.getCookie("username")
    });
    this.$store.dispatch("getEntryInfo", data);
    // alert(this.getentry_time)
    // alert(this.getusername)
    // alert(this.getCookie("username"))
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
  width: 100%;
  height: 100%;
  background: url("../assets/images/meet.png") no-repeat center top;
  background-size: 100% 100%;
  .imgs_shape {
    position: absolute;
    width: 89px;
    height: 82px;
    top: 52%;
    left: 25%;
    animation: heathing 1s ease infinite;
    img {
      width: 100%;
    }
  }
}
.textCon1,
.textCon2 {
  font-size: 16px;
  line-height: 30px;
  color: #ffefd8;
  margin-left: 50px;
  margin-bottom: 30px;
  span {
    display: block;
    text-align: left;
  }
}
.paddingtops {
  padding-top: 70px;
}
.nums {
  font-size: 24px;
}
</style>


