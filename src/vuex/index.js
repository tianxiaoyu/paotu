
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        count:0
    },
    moutations:{
        increment(state){
            state.count++
        }
    }
})
