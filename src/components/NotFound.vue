<template>
  <v-row class="ma-14">
    <v-col>
      <v-btn
        class="ma-2"
        color="highlight"
        icon="mdi-alert"
      ></v-btn>

      <p class="text-h4">Oops! It looks like you've stumbled upon a page that doesn't exist.</p>
    </v-col>
  </v-row>

  <v-row class="ma-8 d-flex justify-center">
    <v-col cols="12" class="my-2">
      We apologize for the inconvenience. Please check the URL you entered and try again.
      <br>
      In the meantime, feel free to explore the rest of our site.      
    </v-col>

    <v-col cols="10" class="my-2">
      If you believe this is an error on our part, please don't hesitate to contact us and let us know. We'll do our best to fix the problem and get you to the content you were looking for.
    </v-col>

     <v-col cols="10" class="my-2">
      Thank you for your understanding.
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
  name: 'NotFound',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
