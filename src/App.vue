<template>
  <v-app id="app">
    <RandomQuote msg="Welcome to Randome Quote Generator"/>
  </v-app>
</template>

<script>
import RandomQuote from './components/RandomQuote.vue'
import vuetify from '@/plugins/vuetify'
export default {
  name: 'App',
  vuetify,
  components: {
    RandomQuote
  },
}
</script>

<style>
#app {
  font-family:Raleway;
  font-style: normal;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
