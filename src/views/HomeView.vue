<template>
  <div class="home">
    <TheHomepage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TheHomepage from '@/components/TheHomepage.vue'

export default {
  name: 'HomeView',
  components: {
    TheHomepage
  }
}
</script>
