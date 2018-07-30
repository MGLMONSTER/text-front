<template>
    <my-page title="中文数字转数字" :page="page">
        <textarea class="form-control" v-model="code" rows="6" placeholder="中文数字，如：二十四"></textarea>
        <div class="btns">
            <ui-raised-button class="btn" primary label="转换" @click="calculate" />
        </div>
        <div v-if="result">
            {{ result }}
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    const chinese2Number = require('chinese2number')

    export default {
        data () {
            return {
                code: '',
                result: '',
                page: {
                    menu: [
                        // {
                        //     type: 'icon',
                        //     icon: 'help',
                        //     to: '/blank/help'
                        // }
                    ]
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
            },
            calculate() {
                if (!this.code) {
                    alert('请输入文本')
                    return
                }
                this.result = chinese2Number(this.code)
            }
        }
    }
</script>

<style lang="scss" scoped>
textarea.form-control {
    height: auto;
}
.form-control {
    display: block;
    width: 100%;
    max-width: 400px;
    height: 33px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42;
    color: #55595c;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 2px;
    outline: none;
}
.charset {
    margin-top: 16px;
}
.btns {
    margin-top: 16px;
    margin-bottom: 16px;
    .btn {
        margin-right: 8px;
    }
}
</style>
