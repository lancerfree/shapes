<template>
    <div class="rectangle">
    </div>
</template>


<script>

    export default {

        data() {
            return {}
        }


    }
</script>

<style lang="scss">
    .rectangle {
        width: 90px;
        height: 90px;
        background: blue;
        margin: 5px;
        display: inline-block;

        &.shape-red {
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