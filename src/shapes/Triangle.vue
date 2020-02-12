<template>
    <div class="triangle">
    </div>
</template>


<script>

    export default {
        data () {
            return {

            }
        }
    }
</script>

<style lang="scss">
    .triangle {
        width: 0;
        height: 0;
        border-left: 45px solid transparent;
        border-right: 45px solid transparent;
        border-bottom: 90px solid red;
     margin:5px ;
        display: inline-block;
        &.shape-yellow{
            border-bottom-color: red;
        }
        &.shape-blue{
            border-bottom-color:  blue;
        }
        &.shape-green{
            border-bottom-color:  green;
        }
        &.shape-yellow{
            border-bottom-color:  yellow;
        }
    }
</style>