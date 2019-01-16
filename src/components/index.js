import page from './page'
import container from './container'
import richEditor from './rich-editor'
import formItem from './formItem'
import appList from './app-list'
import result from './result'

export default {
    install: function (Vue) {
        Vue.component('my-page', page)
        Vue.component('my-rich-editor', richEditor)
        Vue.component('my-container', container)
        Vue.component('my-form-item', formItem)
        Vue.component('app-list', appList)
        Vue.component('result', result)
    }
}
