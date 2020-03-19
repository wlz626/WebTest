import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = "上海"
defaultCity =localStorage.city
const state ={
    city:defaultCity
}

export default new Vuex.Store({
    state,
    mutations:{
        changeCity(state,cName){
            this.state.city = cName;
            localStorage.setItem("city",cName);
        }
    }
})