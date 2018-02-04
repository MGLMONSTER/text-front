<template>
    <ui-page id="page" :title="title" :page="page" :backable="backable" ref="page">
        <div slot="drawer">
            <ui-appbar title=""></ui-appbar>
            <ui-list @itemClick="toggle()">
                <ui-list-item title="首页" to="/">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="富文本编辑器" to="/rich">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="繁体字工具" to="/chinese">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="大小写转换" to="/letter">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="全角半角转换" to="/fullAndHalf">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="拆字" to="/split">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="关于" href="http://about.yunser.com/" target="_blank">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
            </ui-list>
        </div>
        <slot></slot>
    </ui-page>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: 'default'
            },
            page: {
                type: Object,
                default: function () {
                    return {
//                        menu: [
//                            {
//                                type: 'text',
//                                text: '更多工具',
//                                href: 'http://tool.yunser.com/',
//                                target: '_blank'
//                            }
//                        ]
                    }
                }
            },
            backable: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            moreTool() {
                alert(1)
            },
            toggle() {
                console.log(this.$refs.page)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ui-page {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    .page-body {
        min-height: 500px;
    }
    .container-main {
        padding-top: 16px;
    }
    .page-content {
        position: absolute;
        top: 0;
        left: 256px;
        right: 0;
        bottom: 0;
    }
    .page-container {
        padding: 16px;
    }
    .admin-container {
        padding: 16px;
    }
</style>
