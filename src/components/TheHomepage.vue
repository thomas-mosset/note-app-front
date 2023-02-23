<template>
  <v-row class="ma-14">
    <v-col>
      <v-btn
        class="ma-2"
        color="highlight"
        icon="mdi-note-edit"
      ></v-btn>

      <p class="text-h4">Welcome to the ultimate note-taking app!</p>
    </v-col>
  </v-row>

  <v-row class="ma-8 d-flex justify-center">
    <v-col cols="12" md="5" lg="3" sm="8" xs="12" class="my-2">
      We understand that managing your notes and ideas can be overwhelming at times, which is why we created this app to simplify your life. Whether you are a busy professional, a student, or just someone who loves to jot down their thoughts, our note manager app has got you covered.
    </v-col>

    <v-col cols="12" md="5" lg="3" sm="8" xs="12" class="my-2">
      With our app, you can easily create, edit, and organize your notes with just a few clicks. Say goodbye to scattered thoughts and cluttered notebooks. Our user-friendly interface and intuitive design make it easy to find the note you need, whenever you need it.
    </v-col>

    <v-col cols="12" md="5" lg="3" sm="8" xs="12" class="my-2">
      But that's not all. Our app also offers a range of customization options, allowing you to personalize your notes to suit your style and preferences. You can choose from a range of fonts, colors, and formatting options to make your notes stand out.
    </v-col>

    <v-col cols="12" md="5" lg="3" sm="8" xs="12" class="my-2">
      In short, our note manager app is everything you need to stay organized and productive. Start taking control of your notes and ideas like never before.
    </v-col>
  </v-row>

  <v-row class="ma-8 d-flex justify-center">
    <v-col cols="12" md="5" lg="3" sm="8" xs="12">
      <v-card title="Login to my profile" color="highlight">
        <v-card-actions>
          <v-btn>
            <router-link to="/login" class="router-link login-router">Login</router-link>
            </v-btn>
          <v-icon>mdi-login-variant</v-icon>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col cols="12" md="5" lg="3" sm="8" xs="12">
      <v-card title="Create a profile">
        <v-card-actions>
          <v-btn><router-link to="/signin" class="router-link signin-router">Signin</router-link></v-btn>
          <v-icon>mdi-account-plus</v-icon>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TheHomepage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.router-link {
  text-decoration: none;
  font-weight: bold;
}

.login-router {
  color: white;
}

.signin-router {
  color: #0f0e17;
}

</style>
