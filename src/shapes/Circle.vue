<template>
    <div class="circle" v-bind:class="color_name_css">
    </div>
</template>


<script>

    export default {
        data() {
            return {
                'color_name_css': 'shape-red'
            }
        }
    }
</script>

<style lang="scss">
    .circle {
        width: 90px;
        height: 90px;
        margin: 5px;
        border-radius: 50%;
        display: inline-block;
        background: red;

        &.shape-yellow {
            background: red;
        }

        &.shape-blue {
            background: blue;
        }

        &.shape-green {
            background: green;
        }

        &.shape-yellow {
            background: yellow;
        }
    }

</style>