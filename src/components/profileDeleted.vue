<template>
  <v-row class="ma-14">
    <v-col>
      <v-btn
        class="ma-2"
        color="highlight"
        icon="mdi-checkbox-marked-circle"
      ></v-btn>

      <p class="text-h4">Your profile has been successfully deleted.</p>
    </v-col>
  </v-row>

  <v-row class="ma-8 d-flex justify-center">
    <v-col cols="2">
      <v-card color="highlight">
        <v-card-actions class="d-flex justify-center">
          <v-btn>
            <router-link to="/" class="router-link login-router">Go back to the homepage</router-link>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'profileDeleted',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
