<template>
<v-app>

  <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>

      <v-toolbar-title>Note manager</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/">Home</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/my-account">Account</router-link>
              </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-login-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/login">Login</router-link>
              </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/logout">Logout</router-link>
              </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/signin">Signin</router-link>  
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  
</template>


<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #0f0e17;
    text-decoration: none;

    &.router-link-exact-active {
      color: #ff8906;
    }
  }
}
</style>
