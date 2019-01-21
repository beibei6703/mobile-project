import Vue from "vue";
import Vuex from "vuex";
import yunji from "./yunji"
import nb from "./nb"
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        yunji,
        nb
    }
})
export default store;