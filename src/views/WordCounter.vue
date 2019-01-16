<template>
    <my-page title="英文词频统计" :page="page">
        <textarea class="form-control" v-model="code" rows="6" placeholder="文本"></textarea>
        <div class="btns">
            <ui-raised-button class="btn" primary label="统计" @click="calculate" />
        </div>
        <ui-article v-if="results.length">
            <p>总字数：{{ total }}</p>
            <table>
                <tr>
                    <th>单词</th>
                    <th>数量</th>
                    <th>百分比</th>
                </tr>
                <tr v-for="item in results">
                    <td>{{ item.word }}</td>
                    <td>{{ item.count }}</td>
                    <td>{{ percent(item.count) }}%</td>
                </tr>
            </table>
        </ui-article>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                code: '',
                total: 0,
                results: [],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            href: 'https://project.yunser.com/products/68b60790fef611e891d33b6ec003c93d',
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
                // this.calculate()
            },
            calculate() {
                if (!this.code) {
                    this.$message({
                        type: 'danger',
                        text: '请输入英文文本'
                    })
                    return
                }
                this.results = this.deal(this.code)
            },
            deal(text) {
                let arr = this.code.split(/[^a-zA-Z]+/)
                let obj = {}
                for (let item of arr) {
                    if (!item) {
                        continue
                    }
                    if (!obj[item]) {
                        obj[item] = 1
                    } else {
                        obj[item]++
                    }
                }
                let results = []
                this.total = 0
                console.log(obj)
                for (let key in obj) {
                    results.push({
                        word: key,
                        count: obj[key]
                    })
                    this.total += obj[key]
                }
                results = results.sort((a, b) => b.count - a.count)
                return results
            },
            percent(value) {
                console.log('percent', this)
                return (value / this.total * 100).toFixed(3)
            }
        },
        filters: {
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
