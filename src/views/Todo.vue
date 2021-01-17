<template>
  <div>
    <TodoInput @addTodo="addTodo" />
    <TodoList :todos="todos" @doneTodo="doneTodo" @removeTodo="removeTodo" />
  </div>
</template>

<script>
import TodoInput from '@/views/todo/TodoInput'
import TodoList from '@/views/todo/TodoList'

export default {
  components: { TodoInput, TodoList },
  data() {
    return {
      todos: [
        { id: 1, text: '일찍 일어나기', done: false, edit: false },
        { id: 2, text: '커피 찾기', done: false, edit: false },
        { id: 3, text: '커피 만들기', done: false, edit: false }
      ]
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.push({
        id: new Date(),
        text: todo,
        done: false,
        edit: false
      })
    },
    doneTodo(todo) {
      todo.done = !todo.done
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>
