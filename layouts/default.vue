<template>
  <div id="app">
    <v-header/>
    <nuxt class="content"/>
    <v-footer/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    VHeader: Header,
    VFooter: Footer
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
