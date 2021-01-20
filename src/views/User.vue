<template>
  <v-container class="mt-5">
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <UserList />
      </v-col>
      <v-col cols="12" sm="6">
        <UserInput />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import UserInput from '@/views/user/UserInput'
import UserList from '@/views/user/UserList'

export default {
  components: { UserInput, UserList },
  data() {
    return {}
  }
}
</script>
