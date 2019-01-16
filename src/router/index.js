import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Editor = resolve => require(['@/views/Editor'], resolve)
const Rich = resolve => require(['@/views/Rich'], resolve)
const Tool = resolve => require(['@/views/Tool'], resolve)
const Chinese = resolve => require(['@/views/Chinese'], resolve)
const Letter = resolve => require(['@/views/Letter'], resolve)
const FullAndHalf = resolve => require(['@/views/FullAndHalf'], resolve)
const Split = resolve => require(['@/views/Split'], resolve)
const WordCounter = resolve => require(['@/views/WordCounter'], resolve)
// chinesevertical
const Column = resolve => require(['@/views/Column'], resolve)
const Blank = resolve => require(['@/views/Blank'], resolve)
const PasswordCheck = resolve => require(['@/views/PasswordCheck'], resolve)
const Chinese2Number = resolve => require(['@/views/Chinese2Number'], resolve)
const LineText = resolve => require(['@/views/LineText'], resolve)
const Reverse = resolve => require(['@/views/Reverse'], resolve)
const Ant = resolve => require(['@/views/Ant'], resolve)
const Leetspeak = resolve => require(['@/views/Leetspeak'], resolve)
const Text2Text = resolve => require(['@/views/Text2Text'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/word_counter',
        component: WordCounter
    },
    {
        path: '/editor',
        component: Editor
    },
    {
        path: '/rich',
        component: Rich
    },
    {
        path: '/tool',
        component: Tool
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
        path: '/split',
        component: Split
    },
    {
        path: '/fullAndHalf',
        component: FullAndHalf
    },
    {
        path: '/text/column',
        component: Column
    },
    {
        path: '/blank',
        component: Blank
    },
    {
        path: '/password_check',
        component: PasswordCheck
    },
    {
        path: '/chinese_to_number',
        component: Chinese2Number
    },
    {
        path: '/line_text',
        component: LineText
    },
    {
        path: '/reverse',
        component: Reverse
    },
    {
        path: '/ant',
        component: Ant
    },
    {
        path: '/leetspeak',
        component: Leetspeak
    },
    {
        path: '/text_to_text',
        component: Text2Text
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
