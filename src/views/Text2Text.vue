<template>
    <my-page title="字组字" :page="page">
        <section class="input-box">
            <canvas id="html5_08_1" class="canvas" width="180" height="180" style=" background-color: black">
                你的浏览器不支持 Canvas 标签，请使用 Chrome 浏览器 或者 FireFox 浏览器
            </canvas>
            <div class="tools">
                <ui-text-field v-model="text" label="文本" />
                <br>
                <ui-text-field v-model="unit" label="单元字" />
                <br>
                <ui-text-field v-model.number="fontSize" type="number" label="字号" />
                <br>
                字体：
                <select id="fontName" v-model="fontFamily">
                    <option>宋体</option>
                    <option>楷体_GB2312</option>
                    <option>隶书</option>
                    <option>黑体</option>
                    <option>微软雅黑</option>
                    <option>Kristen ITC</option>
                    <option>Harrington</option>
                </select>
                <br>
                <input type="checkbox" v-model="italic">斜体
                <br>
                <input class="btn btn-primary" type="button" value="生成" @click="handle">
            </div>

            <div>
                <textarea id="txtResult" class="form-control" v-model="result" wrap="off" rows="20" cols="120"></textarea>
            </div>

        </section>
    </my-page>
</template>

<script>
    /* eslint-disable */
    function trim(text) {
        var newArr = [];
        var arr = text.split('\n');
        arr.forEach(function (line) {
            console.log(line.length)
            line = line.replace(/(\s*$)/g, '');
            console.log(line)
            if (line.length) {
                newArr.push(line);
            }
        });
        return newArr.join('\n');
    }

    export default {
        data () {
            return {
                text: '云设工具',
                unit: '云设',
                result: '',
                fontSize: 16,
                fontFamily: '宋体',
                italic: false,
                page: {
                    menu: [
                        // {
                        //     type: 'icon',
                        //     icon: 'help',
                        //     to: '/split/help'
                        // }
                    ]
                }
            }
        },
        mounted() {
            this.handle()
        },
        methods: {
            handle() {
                var canvas = document.getElementById('html5_08_1');
                var ctx = canvas.getContext('2d');

                ctx.clearRect(0, 0, 180, 180);
                ctx.font = (this.italic ? 'italic ' : ' ') + this.fontSize + 'px "' + this.fontFamily + '" ';
                ctx.fillStyle = '#fff';
                ctx.fillText(this.text, 0, this.fontSize + 10);

                var str = '';

                var c = ctx.getImageData(0, 0, 180, 180);
                //chrome浏览器报错，ie浏览器报安全错误信息，原因往下看
                var idx = 0;
                for (var i = 0; i < c.height; ++i) {
                    for (var j = 0; j < c.width; ++j) {
                        var x = i * 4 * c.width + 4 * j,  //imagedata读取的像素数据存储在data属性里，是从上到下，从左到右的，每个像素需要占用4位数据，分别是r,g,b,alpha透明通道
                            r = c.data[x],
                            g = c.data[x + 1],
                            b = c.data[x + 2];
                        if (r < 255) {
                            str = str + '　';
                        } else {
                            str = str + this.unit.charAt(idx % this.unit.length);
                        }
                        idx++;
                    }
                    str = str + '\n';
                }

                str = trim(str);
                this.result = str;
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

}
.input-box .tip {
    margin-bottom: 16px;
    color: #999;
}
.input-box .canvas {
    display: none;
}
.input-box .tools {
    margin-bottom: 16px;
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