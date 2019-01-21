
import {evection,donateBook,borrowBook,entryInfo,expressData,trainInfo,oaInfo} from "../api/api.js";
let yunji = {
    state:{
        evectionDays:"",
        donateBookNum:"",
        borrowBookNum:"",
        name:"",
        expressNum:"",
        trainNum:"",
        oAnum:"",
        Entry_time:""
    },
    mutations:{
        getevectNum(state, payload){
            state.evectionDays = payload
        },
        getdonateBookNum ( state,payload){
            state.donateBookNum = payload
            // return this.$store.state.yunji.donateBookNum
          },
          getBorrowbooknum(state,payload){
              state.borrowBookNum = payload

          },
          getname(state,payload){
              state.name = payload
          },
          getexpressNum(state,payload){
            state.expressNum = payload;
          },
          gettrainnum(state,payload){
              state.trainNum = payload
          },
          getoAnum(state,payload){
            state.oAnum = payload
          },
          getEntry_time(state,payload){
            state.Entry_time = payload
          }

    },
    actions:{
        //出差次数
        getEvection(store,data){
           evection(data).then(res =>{
               const data = res.data;
               console.log("12122232313223",res)
             if (data.success == true && data.data) {
                 store.commit("getevectNum",data.data.days)
             }else{
               console.log(data.errorMsg)
               return 
             }
           })
         },
         //捐书
         getDonaBook( store,data){
           donateBook(data).then(res =>{
             const data = res.data
             if(data.success == true && data.data){
                //  console.log(data.data.num,"哈桑萨就撒娇")
                store.commit("getdonateBookNum",data.data.num)
             }else{
               console.log(data.errorMsg)
               return false;
             } 
           })
         },
         //借阅书籍
         getBorrowBook(store,data){
          borrowBook(data).then(res =>{
            const data = res.data
            if(data.success == true && data.data){
            // this.borrowNum = data.data.num
            store.commit("getBorrowbooknum",data.data.num)
            //  this.$utils.localData.set("borrowNum",data.data.num)
            }else{
              console.log(data.errorMsg)
              return false;
            } 
          })
    
        },
        //入职
        getEntryInfo( store,data){
            entryInfo(data).then(res=>{
              console.log(res)
              const data = res.data
              console.log(data.data)
             if(data.success == true && data.data){
                // this.name = data.data.name
                store.commit("getname",data.data.name)
                store.commit("getEntry_time",data.data.entry_date)
                console.log("data.data.entry_date",data.data.entry_date)
             }else{
               console.log(data.errorMsg)
             }
            })
        },
        //快递
        getExpressData( store,data){
          
           expressData (data).then(res =>{
             const data = res.data
             if(data.success == true && data.data){
                 store.commit("getexpressNum", data.data.num)
            //    this.expressNum = data.data.num
            //    this.$utils.localData.set("expressNum",data.data.num)
             }else{
               console.log(data.errorMsg)
               return false;
             }
     
           })
         },
         //培训
         gettrainInfo(store,data){
            trainInfo(data).then(res =>{
                const data = res.data
                if(data.success == true && data.data){
                    // console.log(data.data,"yunjiscsdj")
                    store.commit("gettrainnum",data.data.num)
                }else{
                    console.log(data.errorMsg)
                }

            })

         },
         //oa
         getoAInfo(store,data){
            oaInfo(data).then(res =>{
                const data = res.data
                if(data.success == true && data.data){
                    store.commit("getoAnum",data.data.num)
                }else{
                    console.log(data.errorMsg)  
                }
            })

         }

    }

}
export default yunji