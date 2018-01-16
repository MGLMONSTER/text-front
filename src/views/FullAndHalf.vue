<template>
    <my-page title="全角半角转换">
        <section class="input-box">
            <div class="form-item">
                <ui-text-field v-model="text" hintText="输入要转换的内容" multiLine :rows="1" :rowsMax="4"/>
            </div>
            <div class="btns">
                <ui-raised-button class="btn" label="转换成半角" @click="toHalf"/>
                <ui-raised-button class="btn" label="转换成全角" @click="toFull"/>
                <ui-raised-button class="btn" label="清空内容" @click="clear"/>
            </div>

            <ui-text-field v-model="result" hintText="" multiLine :rows="4" :rowsMax="10" v-if="result"/>
        </section>
        <ui-article class="article">
            <h2>工具介绍</h2>
            <p>本工具主要用于全角字符和半角字符的转换，比如一些论坛无法发链接可以把链接转成全角就可以发。</p>
        </ui-article>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                text: '',
                result: ''
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                console.log(this._toFull('123') === '１２３')
                console.log(this._toHalf('１２３') === '123')
                console.log(this._toFull('123１２３') === '１２３１２３')
                console.log(this._toHalf('123１２３') === '123123')
            },
            toHalf: function () {
                if (!this.text) {
                    alert('请输入要转换的内容')
                    return
                }
                this.result = this._toHalf(this.text)
            },
            toFull: function () {
                if (!this.text) {
                    alert('请输入要转换的内容')
                    return
                }
                this.result = this._toFull(this.text)
            },
            // 全角空格为12288，半角空格为32
            // 其他字符半角(33-126)与全角(65281-65374)的对应关系是：均相差65248
            // 转换为全角
            _toFull(text) {
                let tmp = ''
                for (let i = 0; i < text.length; i++) {
                    if (text.charCodeAt(i) === 32) {
                        tmp = tmp + String.fromCharCode(12288)
                    } else if (text.charCodeAt(i) < 127) {
                        tmp = tmp + String.fromCharCode(text.charCodeAt(i) + 65248)
                    } else {
                        tmp = tmp + String.fromCharCode(text.charCodeAt(i))
                    }
                }
                return tmp
            },
            // 转换为半角
            _toHalf(text) {
                let tmp = ''
                for (let i = 0; i < text.length; i++) {
                    if (text.charCodeAt(i) > 65280 && text.charCodeAt(i) < 65375) {
                        tmp += String.fromCharCode(text.charCodeAt(i) - 65248)
                    } else if (text.charCodeAt(i) === 12288) {
                        tmp += String.fromCharCode(32)
                    } else {
                        tmp += String.fromCharCode(text.charCodeAt(i))
                    }
                }
                return tmp
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
