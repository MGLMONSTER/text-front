<template>
    <my-page title="文本工具">
        <div class="tool-list">
            <div class="mu-paper list-item mu-paper-round mu-paper-1" 
                v-for="app in apps">
                <router-link class="link" :to="app.to">
                    <img :src="app.icon" class="img">
                    <div class="info">
                        <h3 class="text">{{ app.name }}</h3>
                        <div class="desc">{{ app.desc }}</div>
                    </div>
                    <i class="icon icon-heart"></i>
                </router-link>
            </div>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                apps: [
                    {
                        name: '文本编辑器',
                        desc: '',
                        icon: '/static/img/text_edit.svg',
                        to: '/editor'
                    },
                    {
                        name: '富文本编辑器',
                        desc: '',
                        icon: '/static/img/text_edit.svg',
                        to: '/rich'
                    },
                    {
                        name: '繁体字工具',
                        desc: '',
                        icon: '/static/img/simple_chinese.svg',
                        to: '/chinese'
                    },
                    {
                        name: '文本处理',
                        desc: '',
                        icon: '/static/img/text_edit.svg',
                        to: '/tool'
                    },
                    {
                        name: '大小写转换',
                        desc: '',
                        icon: '/static/img/letter_convert.svg',
                        to: '/letter'
                    },
                    {
                        name: '全角半角转换',
                        desc: '',
                        icon: '/static/img/full_half.svg',
                        to: '/fullAndHalf'
                    },
                    {
                        name: '拆字',
                        desc: '',
                        icon: '/static/img/text_split.svg',
                        to: '/split'
                    },
                    {
                        name: '文字竖排',
                        desc: '',
                        icon: '/static/img/text_col.svg',
                        to: '/text/column'
                    },
                    {
                        name: '文章加空格',
                        desc: '',
                        icon: '/static/img/text_edit.svg',
                        to: '/blank'
                    },
                    {
                        name: '密码强度检测',
                        desc: '',
                        icon: '/static/img/build.svg',
                        to: '/password_check'
                    },
                    {
                        name: '中文数字转数字',
                        desc: '',
                        icon: '/static/img/build.svg',
                        to: '/chinese_to_number'
                    },
                    {
                        name: '线条文字',
                        desc: '',
                        icon: '/static/img/build.svg',
                        to: '/line_text'
                    },
                    {
                        name: '文本翻转',
                        desc: '',
                        icon: '/static/img/build.svg',
                        to: '/reverse'
                    },
                    {
                        name: '蚂蚁文产生器',
                        desc: '',
                        icon: '/static/img/build.svg',
                        to: '/ant'
                    }
                ]
            }
        },
        computed: {
        },
        mounted() {
        },
        methods: {
            init() {
            },
            fileChange(e) {
            },
            sizeStr: function (size) {
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../scss/var';

.tool-list {
    max-width: 840px;
    margin: 0 auto;
    @include clearfix;
    .list-item {
        position: relative;
        float: left;
        width: 260px;
        height: 96px;
        padding: 8px;
        margin: 2px 16px 16px 2px;
        background-color: #fff;
        //border: 1px solid #ccc;
        &:hover {
            background-color: #f9f9f9;
            // box-shadow: 0 3px 10px rgba(0,0,0,.156863), 0 3px 10px rgba(0,0,0,.227451);
            //border-color: #09c;
            .icon {
                display: block;
            }
        }
        &.active {
            border: 1px solid #f00;
        }
    }
    a {
        display: block;
        height: 100%;
        color: #666;
        cursor: pointer;
    }
    .img {
        float: left;
        width: 72px;
        height: 72px;
        margin-right: 16px;
        background-color: #fff;
        border: 1px solid #e9e9e9;
        border-radius: 8px;
    }
    .info {
        float: left;
    }
    .text {
        font-size: 18px;
        color: #000;
    }
    .header {
        overflow: hidden;
    }
    .desc {
        max-width: 150px;
        margin-top: 8px;
    }
    .icon-heart {
        display: none;
        position: absolute;
        top: 8px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
    .icon-close {
        display: none;
        position: absolute;
        top: 32px;
        right: 8px;
        &:hover {
            color: #f00;
        }
    }
}
@media all and (max-width: 400px){
    .tool-list {
        .list-item {
            width: 100%;
            margin-right: 0;
        }
    }
}
</style>
