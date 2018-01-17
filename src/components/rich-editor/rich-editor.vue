<template>
    <div>
        <div class="rich-editor" id="editorElem" style="text-align:left"></div>
    </div>
</template>

<script>
    import E from 'wangeditor'

    export default {
        data() {
            return {
                editorContent: ''
            }
        },
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        mounted() {
            this.editorContent = this.value

            this.editor = new E('#editorElem')
            this.editor.customConfig.onchange = html => {
                this.editorContent = html
                this.$emit('input', this.editorContent)
            }
            this.editor.create()
            this.editor.txt.html(this.editorContent)
        },
        destroyed() {
//            this.editor.destroy()
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
</style>
