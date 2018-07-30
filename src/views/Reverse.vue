<template>
    <my-page title="文本翻转" :page="page">
        <textarea class="form-control" v-model="code" rows="6" placeholder="文本"></textarea>
        <div class="btns">
            <ui-raised-button class="btn" primary label="转换" @click="calculate" />
        </div>
        <textarea class="form-control result-input" v-model="result" rows="6" placeholder="中文数字" v-if="result"></textarea>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                code: 'yunser',
                result: '',
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
                // this.calculate()
            },
            calculate() {
                if (!this.code) {
                    alert('请输入文本')
                    return
                }
                this.result = this.code.split('').reverse().join('')
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
.result-input {
    font-family: '宋体'
}
</style>
