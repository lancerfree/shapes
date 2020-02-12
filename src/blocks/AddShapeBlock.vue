<template>
    <div class="add-shape-block">
        <form>
            <label for="add-shape-block__shape">Select shape:</label>
            <select id="add-shape-block__shape" v-model="type">
                <option v-for="(shape_value, shape_name) in shapes" v-bind:value="shape_name">
                    {{ shape_value }}
                </option>
            </select><br>
            <label for="add-shape-block__color">Select color:</label>
            <select id="add-shape-block__color" v-model="color">
                <option v-for="(value_color, name_color) in colors" v-bind:value="name_color">
                    {{ value_color }}
                </option>
            </select><br>
            <button class="btn btn-success" type="submit" v-on:click.prevent="addNewShape">Add new shape</button>
            <button class="btn btn-success" type="submit" v-on:click.prevent="clearShapes">Clear</button>
        </form>
    </div>
</template>


<script>
    import {mapGetters, mapActions} from "vuex"

    export default {

        data() {
            return {
                'type': 'triangle',
                'color': 'green',
                'colors': {
                    'red': 'Red',
                    'green': 'Green',
                    'blue': 'Blue',
                    'yellow': 'Yellow',
                },
                'shapes': {
                    'triangle': 'Triangle',
                    'circle': 'Circle',
                    'rectangle': 'Rectangle',
                }
            }
        },
        methods: {
            ...mapGetters(['getShapesNextID']),
            ...mapActions(['addShape', 'clearShapes']),
            addNewShape(event) {
                this.addShape({'id': this.getShapesNextID(), 'type': this.type, 'color': this.color});

            }

        }

    }
</script>

<style lang="scss">
    .add-shape-block {
        height: 150px;
        padding: 20px;
        margin: 10px;
        float: left;
        border: 2px solid #333;
        border-radius: 3px;
        display: inline-block;

        label {
            font-weight: 700;
        }
    }
</style>