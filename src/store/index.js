import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
const state = {
  num:1,
  my:'美元'
}
const actions = {}
const mutations = {
  uptUserName (state,val) {
    state.num = val
    console.log(state.num, 'state.num')
  },
  getMy (state,val) {
    state.my = val
  }
}
const getters = {
  rmb (state) {
    return state.my*7.091
  }
}
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules:{}
})