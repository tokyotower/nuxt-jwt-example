<template>
<v-app id="inspire">
  <v-toolbar dark fixed app>
    <v-toolbar-title>Nuxt Jwt Auth</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/profile" v-if="isAuthenticated">プロフィール</v-btn>
      <v-btn flat v-if="isAuthenticated" @click="logout">ログアウト</v-btn>
      <v-btn flat to="/login" v-if="!isAuthenticated">ログイン</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-content>
    <v-container fluid fill-height>
      <nuxt/>
    </v-container>
  </v-content>
</v-app>
</template>
<script>

export default {
  computed: {
    isAuthenticated () {
      return this.$auth.loggedIn
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
}
</script>
<style>
</style>
