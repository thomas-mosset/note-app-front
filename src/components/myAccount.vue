<template>
  <div class="myAccount">
    <p>
     myAccount
    </p>
  </div>
</template>

<script>
export default {
  name: 'myAccount',

  // prevent user to access this page if not logged in
  beforeCreate () {
    if (this.$store.state.isLogged === false) {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
