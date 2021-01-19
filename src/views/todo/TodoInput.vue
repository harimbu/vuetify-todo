<template>
  <div>
    <v-text-field
      v-model="newTodo"
      class="px-3 mt-5"
      outlined
      label="Add Todo..."
      append-icon="mdi-plus"
      @click:append="addTodo"
      @keyup.enter="addTodo"
      @blur="inputBlur"
    ></v-text-field>
    <h1>Todocount : {{ $store.getters.todoCount }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    inputBlur() {
      this.newTodo = ''
    },
    addTodo() {
      if (this.newTodo !== '') {
        this.$store.state.todos.push({
          id: new Date(),
          text: this.newTodo,
          done: false,
          edit: false
        })

        this.newTodo = ''
      }
    }
  }
}
</script>
