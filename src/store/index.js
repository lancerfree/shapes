import Vue from 'vue'
import Vuex from 'vuex'
import ShapesStore from './modules/shapes'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({

    state:{},
    getters:{},
    actions:{},
    mutations:{},
    modules: {
        ShapesStore
    },
})