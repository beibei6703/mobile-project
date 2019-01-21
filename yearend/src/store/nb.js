import {nbNumInfo,nbIndex,nbType,nbMaxfrom,nbMaxTo,nbEachOther} from "../api/api.js"
let nb = {
    state:{
        nbNum:"",
        numInter:"",
        numPartner:"",
        numCus:"",
        numNew:"",
        nbIndex:"",
        fromName:"",
        from_num:"",
        nbToNum:"",
        nbToname:"",
        withNum:"",
        withName:""
    },
    actions:{
        //牛逼数量
        getnbNum(store,data){
            nbNumInfo(data).then(res =>{
                const data = res.data
                if(data.success == true && data.data){
                    store.commit("getnbNumInfo" ,data.data.num)
                }else{
                    console.log(data.errorMsg)
                }
            })
        },
        // 牛币排名
    getnbIndex(store,data){
        nbIndex(data).then(res=>{
            const data = res.data
            if(data.success ==true && data.data){
                store.commit("getnbIndex",data.data.index)

            }else{
                console.log(data.errorMsg)
            }
        })
    },
    //互送牛币
    getnbWithOther(store,data){
        nbEachOther(data).then(res=>{
            const data = res.data
            if(data.success ==true && data.data){
                store.commit("getEachNum",data.data.num)
                store.commit("getWithname",data.data.with_workcode)

            }else{
                console.log(data.errorMsg)
            }
        })

    },
        //谁送的牛币最多
        getnbMaxfrom(store,data){
            nbMaxfrom(data).then(res =>{
                const data = res.data
                if(data.success == true && data.data){
                    store.commit("getfrom_num",data.data.num)
                    store.commit("getname1",data.data.name)
                }else{
                    console.log(data.errorMsg)
                }
            })

        },
        //我送谁的最多
        getnbMaxTo(store,data){
            nbMaxTo(data).then(res =>{
                const data = res.data
                if(data.success == true && data.data){
                    store.commit("getMaxnbToname",data.data.name)
                    store.commit("getMaxnbNumTo",data.data.num)
                    // store.commit ("getnbMaxfromNum")
                }else{
                    console.log(data.errorMsg)
                }
            })
        },
        //牛币种类
        getnbType(store,data){
            nbType(data).then(res =>{
                const data = res.data
                if(data.success == true && data.data){
                    var nbArr = data.data
                    // console.log(nbArr,"nb")
                   nbArr.forEach((item,index)=>{

                      switch (item.type){
                          case "1":
                          store.commit("custmerNum",item.num)
                          break;
                          case "2":
                          store.commit("interNum",item.num)
                          break;
                          case "3":
                          store.commit("partnerNUm",item.num)
                          break;
                          case "4":
                          store.commit("newNum",item.num)
                          break;
                      }

                   })
                }else{
                    console.log(data.errorMsg)
                }
            })
        }

    },
    mutations:{
        getnbNumInfo(state,payload){
            state.nbNum = payload
        },
        interNum(state,payload){
            state.numInter = payload
        },
        partnerNUm(state,payload){
            state.numPartner = payload
        },
        newNum(state,payload){
            state.numNew = payload
        },
        custmerNum(state,payload){
            state.numCus = payload
        },
        getnbIndex(state,payload){
            state.nbIndex = payload
        },
        getfrom_num(state,payload){
            state.from_num =payload
        },
        getname1(state,payload){
            state.fromName = payload
        },
        getMaxnbToname(state,payload){
            state.nbToname = payload
        },
        getMaxnbNumTo(state,payload){
            state.nbToNum = payload
        },
        getEachNum(state,payload){
            state.withNum = payload
        },
        getWithname(state,payload){
            state.withName = payload
        }


    }
}
export default nb;