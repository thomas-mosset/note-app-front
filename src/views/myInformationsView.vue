<template>
  <div class="myInformationsView">
    <myInformations />
  </div>
</template>

<script>
// @ is an alias to /src
import myInformations from '@/components/myInformations.vue'

export default {
  name: 'myInformationsView',
  components: {
    myInformations
  }
}
</script>
