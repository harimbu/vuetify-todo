<template>
  <div>
    <p class="pl-3">총 {{ $store.getters.userCount }}명의 회원이 있습니다.</p>
    <v-card class="mb-3" outlined tile v-for="(item, index) in $store.state.users" :key="item.id">
      <v-list-item>
        <v-list-item-avatar>
          <v-icon>mdi-account</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.age }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn text>수정</v-btn>
          <v-btn text @click="removeUser(index)">삭제</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    removeUser(index) {
      // this.$store.state.users.splice(index, 1)
      this.$store.dispatch('removeUser', index)
    }
  }
}
</script>
