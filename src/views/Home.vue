<template>
    <my-page class="page-editor" title="文本编辑器" :page="page">
        <!--代码输入框（注意请务必设置高度，否则无法显示）-->
            <pre id="code" class="ace_editor" style="height100%; min-height:500px"><textarea class="ace_text-input">
## 二级标题
> 引用

这是内容
### 三级标题
**加粗**文字
        </textarea></pre>
    </my-page>
</template>

<script>
//    const $ = window.$
    const ace = window.ace
//    const saveAs = window.saveAs

    export default {
        data () {
            return {
                page: {
                    menu: [
                    ]
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                // 初始化对象
                let editor = ace.edit('code')
                this.editor = editor

                // 设置风格和语言（更多风格和语言，请到github上相应目录查看）
                let theme = 'clouds'
                let language = 'markdown'
                editor.setTheme('ace/theme/' + theme)
                editor.session.setMode('ace/mode/' + language)

                // 字体大小
                editor.setFontSize(18)

                // 设置只读（true时只读，用于展示代码）
                editor.setReadOnly(false)

                // 自动换行,设置为off关闭
                editor.setOption('wrap', 'free')

                // 启用提示菜单
                ace.require('ace/ext/language_tools')
                editor.setOptions({
                    enableBasicAutocompletion: true,
                    enableSnippets: true,
                    enableLiveAutocompletion: true
                })

                editor.getSession().setUseSoftTabs(true)

                editor.find('标题', {
                    backwards: false,
                    wrap: false,
                    caseSensitive: false,
                    wholeWord: false,
                    regExp: false
                })

                this.initWebIntents()

//                $('#new').on('click', function () {
//                    editor.setValue('')
//                })
//
//                $('#open').on('click', function () {
//                    $('#file').click()
//                })
//
//                $('#download').on('click', function () {
//                    var blob = new Blob([editor.getValue()], {type: "text/plain;charset=utf-8"})
//                    saveAs(blob, 'yunser.com-' + new Date().getTime() + '.txt')
//                })
//
//                $('#save').on('click', function () {
//                    var blob = new Blob([editor.getValue()], {type: "text/plain;charset=utf-8"})
//                    saveAs(blob, 'yunser.com-' + new Date().getTime() + '.txt')
//                })
//
//                $('#file').on('change', function (e) {
//                    e.preventDefault()
//
//                    var files = [].slice.call(e.originalEvent.target.files)
//                    var file = files[0]
//
//                    var reader = new FileReader()
//                    reader.onload = (function(theFile) {
//                        return function(e) {
//                            var doc = e.target.result
//
//                            editor.setValue(doc)
//                        }
//                    })(file)
//                    reader.readAsText(file)
//                    $('#file').click()
//                })
            },
            initWebIntents() {
                if (!window.intent) {
                    return
                }
                console.log(window.intent.data)
                let data = window.intent.data
                this.editor.setValue(data)

                this.page.menu.push({
                    type: 'icon',
                    icon: 'check',
                    click: this.finish,
                    title: '完成'
                })
            },
            finish() {
                window.intent.postResult(this.editor.getValue())
                setTimeout(() => {
                    let owner = window.opener || window.parent
                    owner.window.close()
                }, 100)
            }
        }
    }
</script>

<style scoped>
    .ace-editor {
        height: 100%;
        min-height: 500px;
        font-size: 18px
    }
</style>
