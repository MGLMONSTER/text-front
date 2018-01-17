import page from './page'
import container from './container'
import richEditor from './rich-editor'
import formItem from './formItem'

export default {
    install: function (Vue) {
        Vue.component('my-page', page)
        Vue.component('my-rich-editor', richEditor)
        Vue.component('my-container', container)
        Vue.component('my-form-item', formItem)
    }
}
