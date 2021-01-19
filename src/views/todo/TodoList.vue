<template>
  <v-list flat class="pt-0">
    <div v-for="(todo, index) in $store.state.todos" :key="index">
      <v-list-item @click.stop="doneTodo(index)" :class="{ 'blue lighten-5': todo.done }">
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
            <v-btn @click.stop="removeTodo(index)" icon>
              <v-icon color="primary lighten-1">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>

      <v-divider></v-divider>
    </div>
  </v-list>
</template>
<script>
export default {
  props: ['todos'],
  methods: {
    doneTodo(index) {
      this.$store.state.todos[index].done = !this.$store.state.todos[index].done
    },
    removeTodo(index) {
      this.$store.state.todos.splice(index, 1)
      console.log(index)
    }
  }
}
</script>
