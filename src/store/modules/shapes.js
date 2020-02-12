const state = {
    items: [
        {id: 1, type: 'circle', color: 'yellow'},
        {id: 2, type: 'triangle', color: 'green'},
        {id: 3, type: 'triangle', color: 'red'},
    ],
}

// getters
const getters = {
    getShapes: (state, getters) => {
        return state.items;
    },
    getShapesCount: (state, getters) => {
        return state.items.length;
    },
    getShapesNextID: (state, getters) => {
        if (!state.items.length) {
            return 1;
        } else {
            let id = state.items[state.items.length - 1]['id'];
            return id + 1;
        }
    },


}

// actions
const actions = {
    addShape({commit, state}, shape) {
        commit('pushShape', shape)
    },
    clearShapes({commit, state}) {
        commit('clearAll')
    }

}

// mutations
const mutations = {
    pushShape(state, shapeObj) {
        state.items.push(shapeObj);
    },
    clearAll(state) {
        state.items = [];
    }


}

export default {
    state,
    getters,
    actions,
    mutations
}