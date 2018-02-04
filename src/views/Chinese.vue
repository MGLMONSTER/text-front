<template>
    <my-page title="繁体字工具" :page="page">
        <section class="input-box">
            <div class="tip"><h1></h1></div>
            <ui-text-field v-model="text" hintText="输入要转换的内容" multiLine :rows="4" :rowsMax="10"/>

            <div class="form-item">
                <span class="label">地区：</span>
                <ui-radio class="radio" label="无" name="group" nativeValue="" v-model="language"/>
                <ui-radio class="radio" label="台湾" name="group" nativeValue="zh_TW" v-model="language"/>
            </div>
            <div class="btns">
                <ui-raised-button class="btn" label="转成简体中文" primary @click="simplified"/>
                <ui-raised-button class="btn" label="转成繁体中文" @click="traditional"/>
                <ui-raised-button class="btn" label="重新输入" @click="clear"/>
            </div>

            <ui-text-field v-model="result" hintText="" multiLine :rows="4" :rowsMax="10" v-if="result"/>
        </section>
    </my-page>
</template>

<script>
    const transverter = window.transverter

    export default {
        data () {
            return {
                text: '', // 憂鬱的烏龜
                result: '',
                language: '',
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/chinese/help'
                        }
                    ]
                }
            }
        },
        mounted() {
        },
        methods: {
            simplified: function () {
                this.result = transverter({
                    type: 'simplified',
                    str: this.text,
                    language: this.language
                })
            },
            traditional: function () {
                this.result = transverter({
                    type: 'traditional',
                    str: this.text,
                    language: this.language
                })
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
            margin-right: 8px;
        }
    }
</style>
