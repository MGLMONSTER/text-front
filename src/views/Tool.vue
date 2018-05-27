<template>
    <my-page title="文本处理" :page="page">
        <div id="input-box" class="row">
			<div class="col-sm-8">
				<section class="input-box">
					<div class="tip">请在下框输入您要统计的字符内容:</div>
                    <ui-text-field v-model="text" hintText="" multiLine :rows="4" :rowsMax="4"/>
					<div class="btns">
                        <ui-raised-button class="btn" primary label="统计" @click="compute"/>
                        <ui-raised-button class="btn" label="去重" @click="simple"/>
                        <ui-raised-button class="btn" label="删除空行" @click="blank"/>
                        <ui-raised-button class="btn" label="删除多余空行" @click="blank2" title="连续空行只保留一行" />
                        <ui-raised-button class="btn" label="排序" @click="sort"/>
                        <ui-raised-button class="btn" label="重新输入" @click="clear"/>
					</div>
				</section>
			</div>
			<div class="col-sm-4">
				
			</div>
		</div>
        <section class="result-box">
            <div class="info">字数统计结果:</div>
            <ui-article>
                <table class="table table-bordered">
                    <tr>
                        <th>中文字符</th>
                        <td>{{ count.chinese }} 个</td>
                    </tr>
                    <tr>
                        <th>中文字符（含标点）</th>
                        <td>{{ count.char }} 个</td>
                    </tr>
                    <tr>
                        <th>英文字符</th>
                        <td>{{ count.letter }} 个</td>
                    </tr>
                    <tr>
                        <th>英文单词</th>
                        <td>{{ count.word }} 个</td>
                    </tr>
                    <tr>
                        <th>数字字符</th>
                        <td>{{ count.number }} 个</td>
                    </tr>
                    <tr>
                        <th>行（段）</th>
                        <td>{{ count.p }} 个</td>
                    </tr>
                    <tr>
                        <th>共计</th>
                        <td>{{ count.total }} 个数字、{{ count.totalChar }} 个字符。</td>
                    </tr>
                </table>
            </ui-article>
            
            <div class="info">注意：</div>
            <ul class="list-common">
                <li>英文、数字、空格以及半角标点符号为 1 个字符。</li>
                <li>汉字为 2 个字符。</li>
            </ul>
        </section>
    </my-page>
</template>

<script>
    /* eslint-disable2 */
    export default {
        data () {
            return {
                result: '',
                text: '',
                count: {
                    total: 0,
                    number: 0,
                    letter: 0,
                    char: 0,
                    chinese: 0,
                    totalChar: 0,
                    word: 0,
                    p: 0
                },
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
                this.initWebIntents()
            },
            initWebIntents() {
                if (!window.intent) {
                    return
                }
                console.log(window.intent.data)
                let data = window.intent.data
                this.text = data
                this.compute()
                this.page.menu.push({
                    type: 'icon',
                    icon: 'check',
                    click: this.finish,
                    title: '完成'
                })
            },
            finish() {
                window.intent.postResult(this.text)
                setTimeout(() => {
                    let owner = window.opener || window.parent
                    owner.window.close()
                }, 100)
            },
            compute() {
                if (!this.text) {
                    this.$message({
                        type: 'danger',
                        text: '请输入内容'
                    })
                    return
                }
                var W = {}
                var letter = 0
                var p = 1
                console.log(p)
                var sTotal = 0
                var iTotal = 0
                var eTotal = 0
                var inum = 0
                for (let i = 0; i < this.text.length; i++) {
                    var c = this.text.charAt(i)
                    if (c.match(/[\u4e00-\u9fa5]/)) {
                        if (isNaN(W[c])) {
                            W[c] = 1
                        }
                        iTotal++
                    }
                }
                var word = 0
                var isWord = false
                for (var i = 0; i < this.text.length; i++) {
                    let c = this.text.charAt(i)
                    if (c.match(/[^\x00-\xff]/)) {
                        sTotal++
                    } else {
                        eTotal++
                    }
                    // 英文字符与单词
                    if (c.match(/[a-zA-Z]/)) {
                        letter++
                        if (i === 0) {
                            isWord = true
                        } else {
                            isWord = true
                        }
                    } else {
                        if (isWord) {
                            word++
                        }
                        isWord = false
                    }

                    if (c === '\n') {
                        console.log(1)
                        p++
                    }
                    if (c.match(/[0-9]/)) {
                        inum++
                    }
                }
                this.count = {
                    char: sTotal,
                    letter: letter,
                    number: inum,
                    totalChar: iTotal * 2 + (sTotal - iTotal) * 2 + eTotal,
                    chinese: iTotal,
                    total: inum + iTotal,
                    word: word,
                    p: p
                }
                // this.count.char = sTotal
                // this.count.letter = letter
                // this.count.number = inum
                // this.count.totalChar = iTotal * 2 + (sTotal - iTotal) * 2 + eTotal
                // this.count.chinese = iTotal
                // this.count.total = inum + iTotal
                // this.count.word = word
                // this.count.p = p
            },
            simple() {
                if (!this.text) {
                    this.$message({
                        type: 'danger',
                        text: '请输入内容'
                    })
                    return
                }
                var newArr = []
                var arr = this.text.split('\n')
                var map = {}
                for (var i = 0; i < arr.length; i++) {
                    console.log(arr[i])
                    if (!map[arr[i]]) {
                        map[arr[i]] = 1
                        newArr.push(arr[i])
                    }
                }

                this.text = newArr.join('\n')
            },
            blank() {
                if (!this.text) {
                    this.$message({
                        type: 'danger',
                        text: '请输入内容'
                    })
                    return
                }
                var newArr = []
                var arr = this.text.split('\n')
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].length) {
                        newArr.push(arr[i])
                    }
                }

                this.text = newArr.join('\n')
            },
            blank2() {
                if (!this.text) {
                    this.$message({
                        type: 'danger',
                        text: '请输入内容'
                    })
                    return
                }
                var newArr = []
                var arr = this.text.split('\n')
                var lastEmpty = false
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].length) {
                        newArr.push(arr[i])
                        lastEmpty = false
                    } else {
                        if (!lastEmpty) {
                            newArr.push('')
                        }
                        lastEmpty = true
                    }
                }

                this.text = newArr.join('\n')
            },
            sort() {
                if (!this.text) {
                    this.$message({
                        type: 'danger',
                        text: '请输入内容'
                    })
                    return
                }
                var newArr = []
                var arr = this.text.split('\n')
                newArr = arr.sort()
                this.text = newArr.join('\n')
            },
            clear() {
                if (!this.text) {
                    this.$message({
                        type: 'danger',
                        text: '请输入内容'
                    })
                    return
                }
                this.text = ''
                this.compute()
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

    /**/
.input-box {

}
.input-box .tip {
    margin-bottom: 16px;
    color: #999;
}
.input-box .btns {
    margin-bottom: 16px;
}
.input-box .btns .btn {
    margin-bottom: 8px;
}
.input-box textarea {
    margin-bottom: 16px;
}
/**/
.result-box .info {
    margin-bottom: 16px;
}
/**/
.list-common {
    padding-left: 16px;
}
.list-common li {
    list-style: disc;
}
</style>
