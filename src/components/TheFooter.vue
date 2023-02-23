<template>
    <v-footer
      class="footer text-center d-flex flex-column"
      color="primary"
    >
      <div>
        <a 
          v-for="icon in icons"
          :key="icon.icon"
          :href="icon.link"
          target="blank"
        >
          <v-btn
            class="mx-1"
            :icon="icon.icon"
            variant="text"
            color="button"
          ></v-btn>
        </a>
      </div>

      <div>
        <strong>Thomas Mosset</strong> | 2023
      </div>
    </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data: () => ({
     icons: [
      {
        link: "https://www.thomasmosset.fr/",
        icon: 'mdi-application-outline',
      },
      {
        link: "https://www.linkedin.com/in/thomasmosset/",
        icon: 'mdi-linkedin',
      }
    ],
  }),
};
</script>