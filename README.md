# vuetify-todo

## Vutify textfield API

```
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
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
