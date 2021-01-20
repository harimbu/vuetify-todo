<template>
  <div>
    <p class="pl-3">회원입력</p>
    <v-card outlined tile>
      <v-form ref="form">
        <v-card-text>
          <v-text-field v-model="name" label="이름" placeholder="이름" required></v-text-field>
          <v-text-field v-model="age" label="나이" placeholder="나이" required></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="reset">초기화</v-btn>
          <v-btn color="primary" text @click="addUser">입력</v-btn>
          <v-btn color="success" text>수정</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      age: ''
    }
  },
  methods: {
    addUser() {
      const user = {
        name: this.name,
        age: this.age
      }
      // this.$store.state.users.push(user)
      // this.$store.commit('addUser', user)
      this.$store.dispatch('addUser', user)
      this.$refs.form.reset()
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>
