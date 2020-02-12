<template>
    <div class="count-shape-block">
        <span>Count:{{getShapesCount}}</span>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"

    export default {

        data() {
            return {}
        },
        computed: {
            ...mapGetters(['getShapesCount']),
        },
    }
</script>

<style lang="scss">
    .count-shape-block {
        padding: 20px;
        float: left;
        border: 2px solid #333;
        border-radius: 3px;
        display: inline-block;
        font-size: 64px;
        height: 150px;
        min-width: 300px;
        text-align: center;
        margin: 10px;
    }
</style>