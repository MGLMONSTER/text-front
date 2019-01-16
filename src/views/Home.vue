<template>
    <my-page title="文本" :page="page">
        <app-list :data="groups" />
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                groups: [
                    {
                        name: '文档编辑',
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
                                name: 'Markdown',
                                desc: '',
                                icon: '/static/img/markdown.svg',
                                to: 'xxx',
                                href: 'https://markdown.yunser.com',
                                target: '_blank'
                            },
                            {
                                name: '繁体字工具',
                                desc: '',
                                icon: '/static/img/simple_chinese.svg',
                                to: '/chinese'
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
                                name: '文本对比',
                                desc: '',
                                icon: '/static/img/text_diff.svg',
                                to: 'xxx',
                                href: 'https://textdiff.yunser.com/editor',
                                target: '_blank'
                            }
                        ]
                    },
                    {
                        name: '字符处理',
                        apps: [
                            {
                                name: '文本处理',
                                desc: '',
                                icon: '/static/img/text_edit.svg',
                                to: '/tool'
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
                                icon: '/static/img/chinese_to_number.svg',
                                to: '/chinese_to_number'
                            },
                            {
                                name: '文本翻转',
                                desc: '',
                                icon: '/static/img/text_reverse.svg',
                                to: '/reverse'
                            },
                            {
                                name: '拆字',
                                desc: '',
                                icon: '/static/img/text_split.svg',
                                to: '/split'
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
                                name: '英文词频统计',
                                desc: '',
                                icon: '/static/img/text.svg',
                                to: '/word_counter'
                            }
                        ]
                    },
                    {
                        name: '其他',
                        apps: [
                            {
                                name: '颜文字',
                                desc: '',
                                icon: '/static/img/textemoji.svg',
                                to: 'xxx',
                                href: 'https://unicode.yunser.com/emoticons/',
                                target: '_blank'
                            },
                            {
                                name: '特殊符号',
                                desc: '',
                                icon: '/static/img/unicode_symbol.svg',
                                to: 'xxx',
                                href: 'https://unicode.yunser.com/common/',
                                target: '_blank'
                            },
                            {
                                name: '线条文字',
                                desc: '',
                                icon: '/static/img/text.svg',
                                to: '/line_text'
                            },
                            {
                                name: '蚂蚁文生成器',
                                desc: '',
                                icon: '/static/img/text_ant.svg',
                                to: '/ant'
                            },
                            {
                                name: '火星文',
                                desc: '',
                                icon: '/static/img/text.svg',
                                to: '/leetspeak'
                            },
                            {
                                name: '字组字',
                                desc: '',
                                icon: '/static/img/text.svg',
                                to: '/text_to_text'
                            },
                            {
                                name: '图片转字符画',
                                desc: '',
                                icon: '/static/img/text.svg',
                                to: 'xxx',
                                href: 'https://image2text.yunser.com/',
                                target: '_blank'
                            }
                        ]
                    }
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            href: 'https://search.yunser.com?utm_source=text',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=text',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
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
