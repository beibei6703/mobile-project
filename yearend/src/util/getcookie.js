//获取cookie
export const getCookie = name=> {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    arr = document.cookie.match(reg)
    
    if(arr){
      //console.log('cookie:',arr[2])
      return(arr[2]);
    }else{
      return null;
    }
  }
  