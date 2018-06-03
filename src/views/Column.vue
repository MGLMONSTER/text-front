<template>
    <my-page title="文字竖排">
        <section class="input-box">
            <div class="tip">请在下框输入文字:</div>
            <textarea id="wz" class="form-control" v-model="text" rows="4"></textarea>
            <div class="form-inline">
                <div class="form-group">
                    <ui-text-field  v-model.number="width" type="number" label="宽度" />
                </div>
                <div class="form-group">
                    <ui-text-field  v-model.number="height" type="number" label="高度" />
                </div>
                <div class="form-group">
                    <ui-select-field v-model="type" label="样式" :maxHeight="300">
                        <ui-menu-item :value="0" title="粗实线+细实"/>
                        <ui-menu-item :value="1" title="双实线+细实"/>
                        <ui-menu-item :value="2" title="细实线+细虚"/>
                        <ui-menu-item :value="3" title="蝌蚪往回游"/>
                        <ui-menu-item :value="4" title="一切向上看"/>
                        <ui-menu-item :value="5" title="清风竹节型"/>
                        <ui-menu-item :value="6" title="密码错乱型"/>
                        <ui-menu-item :value="7" title="红星闪闪型"/>
                        <ui-menu-item :value="8" title="霓虹灯闪烁"/>
                        <ui-menu-item :value="9" title="我心依旧型"/>
                        <ui-menu-item :value="10" title="大圈套小圈"/>
                        <ui-menu-item :value="11" title="鱼儿水中游"/>
                        <ui-menu-item :value="12" title="阿米佗佛型"/>
                        <ui-menu-item :value="13" title="清爽空白型"/>
                    </ui-select-field>
                </div>
            </div>
            <div class="btns">
                <ui-raised-button class="btn" primary label="开始计算" @click="handle"/>
                <ui-raised-button class="btn" label="重新输入" @click="clear"/>
            </div>
            <textarea id="t" class="form-control" v-model="result" rows="8"></textarea>
        </section>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                width: 20,
                height: 20,
                type: 1,
                text: `春江潮水连海平，海上明月共潮生。
滟滟随波千万里，何处春江无月明。
江流宛转绕芳甸，月照花林皆似霰。
空里流霜不觉飞，汀上白沙看不见。
江天一色无纤尘，皎皎空中孤月轮。
江畔何人初见月，江月何年初照人？
人生代代无穷已，江月年年望相似。
不知江月待何人，但见长江送流水。
白云一片去悠悠，青枫浦上不胜愁。
谁家今夜扁舟子，何处相思明月楼？
可怜楼上月徘徊，应照离人妆镜台。
玉户帘中卷不去，捣衣砧上拂还来。
此时相望不相闻，愿逐月华流照君。
鸿雁长飞光不度，鱼龙潜跃水成文。
昨夜闲潭梦落花，可怜春半不还家。
江水流春去欲尽，江潭落月复西斜。
斜月沉沉藏海雾，碣石潇湘无限路。
不知乘月几人归，落月摇情满江树。`,
                result: '',
            }
        },
        mounted() {
        },
        methods: {
            handle: function () {
                this.result = convert(this.width, this.height, this.type);
            },
            clear: function () {
                this.text = '';
                this.compute();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input-box {
        width: 100%;
        max-width: 800px;
    }
    .btns {
        .btn {
            margin-right: 16px;
            margin-bottom: 16px;
        }
    }
    textarea {
        width: 100%;
    }
</style>