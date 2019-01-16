<template>
    <ui-page id="page" :title="title" :page="page" :backable="backable" ref="page">
        <div slot="drawer">
            <div class="header">
                <img class="logo" src="/static/img/text.svg">
            </div>
            <ui-list @itemClick="toggle()">
                <ui-list-item title="首页" to="/">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <ui-list-item title="关于" href="https://project.yunser.com/products/b2727a20616811e89cbc311ca74b260f" target="_blank">
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
.header {
    padding: 40px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.logo {
    display: block;
    width: 80px;
    margin: 0 auto;
}
.ui-position-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>
