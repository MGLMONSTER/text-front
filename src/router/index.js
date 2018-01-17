import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Rich = resolve => require(['@/views/Rich'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Chinese = resolve => require(['@/views/Chinese'], resolve)
const Letter = resolve => require(['@/views/Letter'], resolve)
const FullAndHalf = resolve => require(['@/views/FullAndHalf'], resolve)

const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/rich',
        component: Rich
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/chinese',
        component: Chinese
    },
    {
        path: '/letter',
        component: Letter
    },
    {
        path: '/fullAndHalf',
        component: FullAndHalf
    },
    {
        path: '*',
        component: Error404
    }
]

export default new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})
