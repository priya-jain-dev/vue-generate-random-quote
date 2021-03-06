import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
//   // render: h => h(App),
// })

new Vue({ el: '#app', router, render: h => h(App) })

