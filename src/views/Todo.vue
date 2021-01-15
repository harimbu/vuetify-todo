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
    <v-list flat class="pt-0">
      <div v-for="(todo, index) in todos" :key="index">
        <v-list-item @click="doneTodo(todo)" :class="{ 'blue lighten-5': todo.done }">
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="todo.done"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title :class="{ 'text-decoration-line-through': todo.done }">
                {{ todo.text }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn @click="removeTodo(index)" icon>
                <v-icon color="primary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>

        <v-divider></v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      newTodo: '',
      todos: [
        { id: 1, text: '일찍 일어나기', done: false, edit: false },
        { id: 2, text: '커피 찾기', done: false, edit: false },
        { id: 3, text: '커피 만들기', done: false, edit: false }
      ]
    }
  },
  methods: {
    inputBlur() {
      this.newTodo = ''
    },
    doneTodo(todo) {
      todo.done = !todo.done
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    },
    addTodo() {
      if (this.newTodo !== '') {
        this.todos.push({
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
