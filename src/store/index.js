import Vue from 'vue'
import Vuex from 'vuex'
import chainState from './modules/chainState.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    accountIndex: 0,
  },
  mutations: {
    setAccountIndex(state, index){
      state.accountIndex = index || 0
      console.log('#setAccountIndex', index)
    }
  },
  namespaced:true,
  modules: {
    chainState
  }
})
