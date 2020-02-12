<template>
    <div id="app">
        <div class="form-section clearfix">
            <add-shape-block></add-shape-block>
            <div class="form-section__logo">
                <img :src="require('./assets/vuex.jpg')" />
            </div>
            <count-shape-block></count-shape-block>
        </div>
        <div class="result-section">
        <result-shape-block></result-shape-block>
        </div>

    </div>
</template>


<script>

    import AddShapeBlock from "./blocks/AddShapeBlock";
    import 'bootstrap/dist/css/bootstrap.min.css';
    import CountShapeBlock from "./blocks/CountShapeBlock";
    import {mapGetters,mapMutations} from "vuex"
    import ResultShapeBlock from "./blocks/ResultShapeBlock";

    export default {
        name: 'app',
        components: {

            'add-shape-block': AddShapeBlock,
            'count-shape-block': CountShapeBlock,
            'result-shape-block': ResultShapeBlock,
        },
        computed:{
            ...mapGetters(['getShapes']),
       },
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: #2c3e50;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }
    .result-section{
        padding-top:40px;
    }
    .form-section>*{
        margin-left:10px;
    }
    .form-section__logo {
        img{
            height:150px;
            margin:0 5px;
            border-radius: 2px;
        }
        height:150px;
        display: inline-block;
        float: left;
        margin:10px;
    }

</style>
