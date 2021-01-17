<template>
  <div>
    <TodoInput />
    <TodoList :todos="todos" />
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
  created() {
    this.$eventBus.$on('addTodo', todo => {
      this.todos.push(todo)
    })

    this.$eventBus.$on('doneTodo', todo => {
      todo.done = !todo.done
    })

    this.$eventBus.$on('removeTodo', index => {
      this.todos.splice(index, 1)
    })
  }
}
</script>
