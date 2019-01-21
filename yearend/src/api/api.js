import Axios from "@/util/request"
//入职信息
export const entryInfo = data => Axios({ 
    method: 'post',
    url: 'entry/selectEntry',
    data
  })
  //最早打卡
  export const ealyclock = data => Axios({ 
    method: 'post',
    url: 'attend/selectEarlyTime',
    data
  })
  //最晚打卡
  export const laterclock = data => Axios({ 
    method: 'post',
    url: 'attend/selectLateTime',
    data
  })
  //加班
  export const overWork = data => Axios({ 
    method: 'post',
    url: 'attend/selectOvertime',
    data
  })
  //捐书数量
  export const donateBook = data => Axios({ 
    method: 'post',
    url: 'book/selectBookDonate',
    data
  })
  //借书数量
  export const borrowBook = data => Axios({
    method: 'post',
    url: 'book/selectBookBorrow',
    data
  })
  //出差
  export const evection = data => Axios({
    method: 'post',
    url: 'travel/selectTravelDays',
    data
  })
  //快递数量
  export const expressData = data => Axios({
    method: 'post',
    url: 'exDe/selectexDe',
    data
  })
  //荣耀
  export const honorInfo = data => Axios({
    method: 'post',
    url: 'horor/selectHoror',
    data
  })
  //培训train/selectTrain
  export const trainInfo = data => Axios({
    method: 'post',
    url: 'train/selectTrain',
    data
  })
//牛币数量
export const nbNumInfo = data => Axios({
  method: 'post',
  url: 'NB/selectnb',
  data
})
//牛币排名
export const nbIndex = data => Axios({
  method: 'post',
  url: 'NB/selectNBIndex',
  data
})
//牛币类型
export const nbType = data => Axios({
  method: 'post',
  url: 'NB/selectType',
  data
})

//查询谁送我牛币最多
export const nbMaxfrom = data => Axios({
  method: 'post',
  url: 'NB/selectMaxFrom',
  data
})
//查询我送谁牛币最多
export const nbMaxTo= data => Axios({
  method: 'post',
  url: 'NB/selectMaxTo',
  data
})
//OA/selectOAOk
export const oaInfo = data => Axios({
  method: 'post',
  url: 'OA/selectOAOk',
  data
})
//NB/selectSendCoinEachOther互送牛币
export const nbEachOther = data => Axios({
  method: 'post',
  url: 'NB/selectSendCoinEachOther',
  data
})