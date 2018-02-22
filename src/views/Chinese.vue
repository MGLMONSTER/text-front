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
                <ui-raised-button class="btn" label="转成简体" primary @click="simplified" :disabled="text.length === 0"/>
                <ui-raised-button class="btn" label="转成繁体" @click="traditional" :disabled="text.length === 0"/>
                <ui-raised-button class="btn" label="重新输入" @click="clear"/>
            </div>
            <ui-text-field v-model="result" hintText="" multiLine :rows="4" :rowsMax="10" v-if="result"/>
            <div>
                <a class="advanced" href="#" @click.prevent="toggleAdvanced">高级</a>
            </div>
            <div class="btns" v-if="advancedVisible">
                <ui-raised-button class="btn file-btn" secondary label="从文件中导入">
                    <input type="file" class="ui-file-button" @change="fileChange($event, 1)">
                </ui-raised-button>
                <ui-raised-button class="btn" label="导出文件" :disabled="result.length === 0" @click="exportFile"/>
            </div>
        </section>
    </my-page>
</template>

<script>
    const saveAs = window.saveAs
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
                },
                advancedVisible: false,
                filename: '云设繁体字工具导出文件.txt'
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
            },
            toggleAdvanced() {
                this.advancedVisible = !this.advancedVisible
            },
            fileChange(e, left) {
                let file = e.target.files[0]
                this.filename = file.name
                this.result = ''
                console.log(file.name)
                let reader = new FileReader()
                reader.onload = e => {
                    this.text = e.target.result
                }
                reader.readAsText(file, 'utf-8')
            },
            exportFile() {
                let blob = new Blob([this.result], {type: 'text/plain;charset=utf-8'})
                saveAs(blob, this.filename)
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
    .advanced {
        display: inline-block;
        margin-bottom: 16px;
        color: #999;
    }
</style>
