import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '일찍 일어나기', done: false, edit: false },
      { id: 2, text: '커피 찾기', done: false, edit: false },
      { id: 3, text: '커피 만들기', done: false, edit: false }
    ]
  },
  getters: {
    todoCount(state) {
      return state.todos.length
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
