<template>
  <v-app id="app">
    <router-view></router-view>
    <v-footer
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="footer text-center"
      >
              <v-divider></v-divider>

        <v-card-text>
          <strong> Priya Jain @ DevChallenges.io 🚀</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import vuetify from '@/plugins/vuetify'
export default {
  name: 'app',
  vuetify
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
  color: #2c3e50;
  /* background-color: #f2f2f2; */
}
.v-footer{
  padding: 0;
}
.footer{
  font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 17px;
color: #A9A9A9;
}
</style>
