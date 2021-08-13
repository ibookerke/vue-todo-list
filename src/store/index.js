import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        rows: [],
    },
    mutations: {
        addRow(state, row) {
            state.rows.push(row);
        }
    },
    getters: {
        getRows(state) {
            return state.rows;
        }
    },
    plugins: [createPersistedState()],
});
