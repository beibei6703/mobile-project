<template>
<div class="pwraper">
    <img  class="next plane " src="@/assets/images/Rectangle 7.png" alt="">
</div>
    
</template>
<script>
export default {
  name:"Plane",
    data(){
        return{

        }
    },
}
</script>
<style scoped>
.pwraper{
    background: transparent;
  /* position: relative; */
}
.plane{
      width: 18px;
      height:18px;
      position: fixed;
      bottom:0;
      left:50%;
      margin-left:-9px;
      z-index:999;
        /* height: 620px; */
}
 .next {
            animation: myfirst 1s infinite;
        }
        
        @keyframes myfirst {
            0% {
                transform: translate(0px, 0px);
            }
            50% {
                transform: translate(0px, -12px);
            }
            100% {
                transform: translate(0px, 0px);
            }
        }
          @keyframes fade {
            0% {
                transform: translate(0px, 0px);
            }
            50% {
                transform: translate(0px, -12px);
            }
            100% {
                transform: translate(0px, 0px);
            }
        }

</style>


