<template>
    <my-page title="富文本编辑器">
        <my-rich-editor v-model="content"></my-rich-editor>

        <div class="tools">
            <ui-raised-button label="生成图片" @click="make2" primary/>
        </div>
        <div class="my-virtual-page" v-if="previewVisible">
            <ui-appbar title="图片外观设置">
                <ui-icon-button icon="close" slot="left" @click="previewVisible = false"/>
            </ui-appbar>
            <div class="page-content">
                <my-container class="preview-box-container" :maxWidth="1200">
                    <div class="left">
                        <!--<h2 class="my-section-title">预览</h2>-->
                        <div id="capture" class="capture" v-html="content" :style="captureStyle"></div>
                    </div>
                    <div class="right">
                        <ui-raised-button class="btn" label="下载" @click="download" primary/>
                        <ui-raised-button label="设置" @click="toggleSetting" secondary/>

                        <canvas id="canvas" style="display: none;"></canvas>
                    </div>
                </my-container>
            </div>
        </div>
        <ui-drawer class="setting-box" :open="settingVisible" right :docked="true" @close="toggleSetting()">
            <ui-appbar title="设置">
                <ui-icon-button icon="close" @click="toggleSetting" slot="left" />
            </ui-appbar>
            <div class="body">
                <form-item label="宽度">
                    <ui-text-field v-model.number="style.width" type="number" label="宽度" />
                </form-item>
                <form-item label="高度">
                    <ui-text-field v-model.number="style.height" type="number" label="高度" />
                </form-item>
                <form-item label="顶部旁白">
                    <!--<ui-slider v-model.number="style.paddingTop" fullWidth/>-->
                    <ui-text-field v-model.number="style.paddingTop" type="number" label="顶部旁白" />
                </form-item>
                <form-item label="左侧旁白">
                    <ui-text-field v-model.number="style.paddingLeft" type="number" label="左侧旁白" />
                </form-item>
                <form-item label="字体大小">
                    <ui-text-field v-model.number="style.fontSize" type="number" label="字体大小" />
                </form-item>
                <form-item label="字体">
                    <ui-select-field v-model="style.fontFamily" label="字体">
                        <ui-menu-item value="微软雅黑" title="微软雅黑"/>
                        <ui-menu-item value="宋体" title="宋体"/>
                        <ui-menu-item value="楷体" title="楷体"/>
                    </ui-select-field>
                </form-item>
                <form-item label="背景颜色">
                    <ui-select-field v-model="style.backgroundColor" label="背景颜色">
                        <ui-menu-item value="#fff" title="白色"/>
                        <ui-menu-item value="#f1f1f1" title="浅灰"/>
                    </ui-select-field>
                </form-item>
                <form-item label="背景图片">
                    <ui-select-field v-model="style.background" label="背景图片">
                        <ui-menu-item value="none" title="无"/>
                        <ui-menu-item value="url('/static/img/bg-1.jpg')" title="样式一"/>
                        <ui-menu-item value="url('/static/img/bg-2.jpg')" title="样式二"/>
                    </ui-select-field>
                </form-item>
            </div>
        </ui-drawer>
        <div class="my-virtual-page" v-if="resultVisible">
            <ui-appbar title="下载">
                <ui-icon-button icon="close" slot="left" @click="resultVisible = false"/>
            </ui-appbar>
            <div class="page-content">
                <my-container class="preview-box-container" :maxWidth="1200">
                    <div class="left">
                        <img :src="result">
                        <div class="tip">鼠标右键另存为可以保存图片</div>
                    </div>
                </my-container>
            </div>
        </div>
        <div class="my-virtual-page" v-if="feedbackVisible">
            <ui-appbar title="反馈">
                <ui-icon-button icon="close" slot="left" @click="feedbackVisible = false"/>
            </ui-appbar>
            <div class="page-content">
                <my-container class="preview-box-container" :maxWidth="1200">
                    <ui-text-field hintText="反馈内容"/>
                    <h2 class="capture-label">页面截图：</h2>
                    <div>
                        <img class="page-capture" :src="pageCapture">
                    </div>
                    <ui-raised-button label="提交"
                                      href="https://www.cnblogs.com/yunser/p/use-html2canvas-and-wangeditor-make-a-tool.html" target="_blank"
                                      @click="feedbackSubmit" primary/>
                </my-container>
            </div>
        </div>
        <ui-float-button icon="feedback" class="my-float-button" title="意见反馈" @click="feedback"/>
    </my-page>
</template>

<script>
    import html2canvas from 'html2canvas'
//    const html2canvas = window.html2canvas
//    const $ = window.$

    export default {
        data () {
            return {
                content: `<h2>木兰词·拟古决绝词柬友</h2>
<p>【作者】纳兰性德</p>
<p>【朝代】清</p>
<p>人生若只如初见，何事秋风悲画扇。</p>
<p>等闲变却故人心，却道故人心易变。</p>
<p>骊山语罢清宵半，泪雨零铃终不怨。</p>
<p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
<p style="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 云设 赠</p>`,
                result: '',
                previewVisible: false,
                resultVisible: false,
                settingVisible: false,
                style: {
                    width: 640,
                    height: 480,
                    paddingTop: 16,
                    paddingLeft: 16,
                    fontFamily: '微软雅黑',
//                    background: 'none',
                    background: "url('/static/img/bg-1.jpg')",
                    backgroundColor: '#fff',
                    fontSize: 14
                },
                // 反馈
                feedbackVisible: false,
                pageCapture: ''
            }
        },
        computed: {
            captureStyle() {
                let width = this.style.width === 0 ? 'inherit' : (this.style.width + 'px')
                let height = this.style.height === 0 ? 'inherit' : (this.style.height + 'px')
                return {
                    width: width,
                    height: height,
                    'font-family': this.style.fontFamily,
                    background: this.style.background,
                    'background-color': this.style.backgroundColor,
                    'background-size': '100% 100%',
                    'font-size': this.style.fontSize + 'px',
                    'padding-top': this.style.paddingTop + 'px',
                    'padding-left': this.style.paddingLeft + 'px'
                }
            }
        },
        mounted() {
        },
        methods: {
            toggleSetting() {
                this.settingVisible = !this.settingVisible
            },
            make2() {
                this.settingVisible = true
                this.make()
            },
            make() {
                this.previewVisible = true
                setTimeout(() => {
                    html2canvas(document.querySelector('#capture')).then(canvas => {
                        let img = canvas.toDataURL('image/png')
                        this.result = img
                    })
                }, 0)
            },
            download() {
                this.resultVisible = true
                this.make()
            },
            feedback() {
                html2canvas(document.querySelector('#page')).then(canvas => {
                    let img = canvas.toDataURL('image/png')
                    this.pageCapture = img
                    this.feedbackVisible = true
                })
            },
            feedbackSubmit() {
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/var";
    .my-float-button {
        position: fixed;
        right: 16px;
        bottom: 24px;
    }
    .page-capture {
        max-width: 600px;
        border: 1px solid #eee;
    }
    .capture-label {
        margin-bottom: 16px;
    }
    .my-section-title {
        font-size: 20px;
        margin-bottom: 16px;
    }
    .my-virtual-page {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000000;
        background-color: #fff;
        .page-content {
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: auto;
        }
        .preview-box-container {
            padding: 16px;
            @include clearfix;
            .left {
                float: left;
                margin-right: 24px;
            }
            .right {
                float: left;
                .btn {
                    margin-right: 8px;
                }
            }
        }
    }
    .tip {
        color: #999;
        margin-top: 16px;
    }
    .rich-editor {
        padding: 16px;
    }
    .tools {
        margin-top: 16px;
    }
    .setting-box {
        width: 100%;
        max-width: 400px;
        z-index: 1000000;
        .body {
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 16px;
            overflow: auto;
        }
    }

</style>