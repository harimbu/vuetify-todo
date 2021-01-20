import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { text: '일찍 일어나기', done: false, edit: false },
      { text: '커피 찾기', done: false, edit: false },
      { text: '커피 만들기', done: false, edit: false }
    ],
    users: [
      { id: 1, name: '핸드폰', age: 31 },
      { id: 2, name: '아이폰', age: 53 },
      { id: 3, name: '갤럭시', age: 24 }
    ]
  },
  getters: {
    todoCount(state) {
      return state.todos.length
    },
    userCount(state) {
      return state.users.length
    }
  },
  mutations: {
    addUser(state, paylod) {
      state.users.push(paylod)
    },
    removeUser: (state, index) => {
      state.users.splice(index, 1)
    }
  },
  actions: {
    addUser({ commit }, paylod) {
      commit('addUser', paylod)
    },
    removeUser: ({ commit }, index) => {
      commit('removeUser', index)
    }
  },
  modules: {}
})
