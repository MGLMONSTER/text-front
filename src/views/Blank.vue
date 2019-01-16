<template>
    <my-page title="文章加空格" :page="page">
        <textarea class="form-control" v-model="code" rows="6" placeholder="文本"></textarea>
        <div class="btns">
            <ui-raised-button class="btn" primary label="处理" @click="calculate" />
        </div>
        <div v-if="result">
            <result :text="result" :copyable="true" />
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    import Pangu from '../util/core'

    export default {
        data () {
            return {
                code: '这段话共有8个字',
                result: '',
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/c807c7400db711e99f2863e9d9681573',
                            target: '_blank',
                            title: '帮助'
                        }
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
                Pangu.spacingText(this.code, (err, text) => {
                    this.result = text
                })
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
