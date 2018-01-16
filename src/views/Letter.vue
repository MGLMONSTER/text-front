<template>
    <my-page title="大小写转换">
        <section class="input-box">
            <div class="tip"><h1></h1></div>
            <div class="form-item">
                <ui-text-field v-model="text" hintText="输入要转换的内容" multiLine :rows="1" :rowsMax="4"/>
            </div>
            <div class="btns">
                <ui-raised-button class="btn" label="转换成小写" @click="lowercase"/>
                <ui-raised-button class="btn" label="转换成大写" @click="uppercase"/>
                <ui-raised-button class="btn" label="首字母大写" @click="capitalize"/>
                <ui-raised-button class="btn" label="清空内容" @click="clear"/>
            </div>

            <ui-text-field v-model="result" hintText="" multiLine :rows="4" :rowsMax="10" v-if="result"/>
        </section>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
//                text: 'Asd aSD. Asd aSD',
                text: '',
                result: ''
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                console.log(this._capitalize('Asd aSD') === 'Asd Asd')
            },
            lowercase: function () {
                if (!this.text) {
                    alert('请输入要转换的内容')
                    return
                }
                this.result = this.text.toLowerCase()
            },
            uppercase: function () {
                if (!this.text) {
                    alert('请输入要转换的内容')
                    return
                }
                this.result = this.text.toUpperCase()
            },
            capitalize: function () {
                if (!this.text) {
                    alert('请输入要转换的内容')
                    return
                }
                this.result = this._capitalize(this.text)
            },
            _capitalize(text) {
                return text.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase())
//                return text.replace(/(?:^|\s)\S/g, function (a) {
//                    return a.toUpperCase()
//                })
            },
            clear: function () {
                this.text = ''
                this.result = ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .form-item {
        margin: 8px 0;
        .label {
            margin-right: 16px;
            vertical-align: top;
            line-height: 24px;
        }
        .radio {
            margin-right: 24px;
        }
    }
    .btns {
        margin-bottom: 16px;
        .btn {
            margin-right: 16px;
        }
    }
</style>
