<template>
    <div class="result-shape-block clearfix">
        <component :is="shape.type+'-simple'" v-for="shape in getShapes" :class="'shape-'+shape.color"></component>
    </div>
</template>


<script>
    import {mapGetters} from "vuex"
    import Circle from "../shapes/Circle";
    import Triangle from "../shapes/Triangle";
    import Rectangle from "../shapes/Rectangle";


    export default {

        data() {
            return {
                'color_name_css': 'shape-red'
            }
        },
        computed: {
            ...mapGetters(['getShapes']),
        },
        components: {
            'circle-simple': Circle,
            'triangle-simple': Triangle,
            'rectangle-simple': Rectangle,
        },
    }
</script>

<style lang="scss">
    .result-shape-block {
        padding: 10px;
    }
</style>