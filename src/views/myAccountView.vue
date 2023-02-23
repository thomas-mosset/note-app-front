<template>
  <div class="myAccountView">
    <myAccount />
  </div>
</template>

<script>
// @ is an alias to /src
import myAccount from '@/components/myAccount.vue'

export default {
  name: 'myAccountView',
  components: {
    myAccount
  }
}
</script>
