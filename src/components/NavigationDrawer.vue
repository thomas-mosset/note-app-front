<template>
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

          <v-list-item v-if="this.$store.state.isLogged === true">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/my-account">Account</router-link>
              </v-list-item-title>
          </v-list-item>

          <v-list-item v-if="this.$store.state.isLogged === false">
            <v-list-item-icon>
              <v-icon>mdi-login-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/login">Login</router-link>
              </v-list-item-title>
          </v-list-item>

          <v-list-item v-if="this.$store.state.isLogged === true">
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/logout">Logout</router-link>
              </v-list-item-title>
          </v-list-item>

          <v-list-item v-if="this.$store.state.isLogged === false">
            <v-list-item-icon>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link to="/signup">Signup</router-link>  
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>