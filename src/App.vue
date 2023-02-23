<template>
  <v-app>

    <NavigationDrawer />

    <v-main>
      <router-view/>
    </v-main>

    <TheFooter />
  </v-app>
  
</template>

<script>
import NavigationDrawer from "./components/NavigationDrawer.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: 'App',
  components: {
    NavigationDrawer,
    TheFooter,
  },
  data: () => ({}),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  font-weight: bold;
  color: #0f0e17;
  text-decoration: none;

  &.router-link-exact-active {
    color: #ff8906;
  }
}
</style>
