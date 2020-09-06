import Vue from 'vue'
import Router from 'vue-router'
import RandomQuote from '../components/RandomQuote.vue'
import AuthorQuote from '../components/AuthorQuote.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
        path: '/',
        name: 'RandomQuote',
        component: RandomQuote
        },
        {
        path: '/:author',
        name: 'AuthorQuote',
        component: AuthorQuote
        },
    ]
})