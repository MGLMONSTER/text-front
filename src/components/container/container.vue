<template>
    <div class="my-container" :style="{'max-width': maxWidth + 'px'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            maxWidth: {
                type: Number,
                default: 1000
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .my-container {
        margin: 0 auto;
    }
</style>
