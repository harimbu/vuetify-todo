<template>
  <div>
    <TodoInput />
    <TodoList />
  </div>
</template>

<script>
import TodoInput from '@/views/todo/TodoInput'
import TodoList from '@/views/todo/TodoList'

export default {
  components: { TodoInput, TodoList }
}
</script>
