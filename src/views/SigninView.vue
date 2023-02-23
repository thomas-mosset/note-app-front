<template>
  <div class="SigninView">
    <Signin />
  </div>
</template>

<script>
// @ is an alias to /src
import Signin from '@/components/Signin.vue'

export default {
  name: 'SigninView',
  components: {
    Signin
  }
}
</script>
