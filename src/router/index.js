import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/Home'], resolve)
const Editor = resolve => require(['@/views/Editor'], resolve)
const Rich = resolve => require(['@/views/Rich'], resolve)
const Tool = resolve => require(['@/views/Tool'], resolve)
const About = resolve => require(['@/views/About'], resolve)
const Chinese = resolve => require(['@/views/Chinese'], resolve)
const ChineseHelp = resolve => require(['@/views/ChineseHelp'], resolve)
const Letter = resolve => require(['@/views/Letter'], resolve)
const FullAndHalf = resolve => require(['@/views/FullAndHalf'], resolve)
const FullAndHalfHelp = resolve => require(['@/views/FullAndHalfHelp'], resolve)
const Split = resolve => require(['@/views/Split'], resolve)
// chinesevertical
const Column = resolve => require(['@/views/Column'], resolve)
const SplitHelp = resolve => require(['@/views/SplitHelp'], resolve)
const Blank = resolve => require(['@/views/Blank'], resolve)
const BlankHelp = resolve => require(['@/views/BlankHelp'], resolve)
const PasswordCheck = resolve => require(['@/views/PasswordCheck'], resolve)
const Chinese2Number = resolve => require(['@/views/Chinese2Number'], resolve)
const LineText = resolve => require(['@/views/LineText'], resolve)
const Reverse = resolve => require(['@/views/Reverse'], resolve)
const Ant = resolve => require(['@/views/Ant'], resolve)
const AntHelp = resolve => require(['@/views/AntHelp'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        component: Home
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
        path: '/about',
        component: About
    },
    {
        path: '/chinese',
        component: Chinese
    },
    {
        path: '/chinese/help',
        component: ChineseHelp
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
        path: '/split/help',
        component: SplitHelp
    },
    {
        path: '/fullAndHalf',
        component: FullAndHalf
    },
    {
        path: '/fullAndHalf/help',
        component: FullAndHalfHelp
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
        path: '/blank/help',
        component: BlankHelp
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
        path: '/ant/help',
        component: AntHelp
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
