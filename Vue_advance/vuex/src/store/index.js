import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    add(context,value){
        //这里要使用context，比较容易犯错去使用store
        if(context.state.number%2===0){
            context.commit('ADD',value)
        }
    }
}

const mutations = {
    ADD(state,value){
        state.number += value
    }
}

const state = {
    number:0
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})

