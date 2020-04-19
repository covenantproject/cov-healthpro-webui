import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        getCounter (state) {
            return state.count;
        }
    },
    mutations: {
        incrementCounter () {
            this.$store.dispatch("incrementAction", 1)
        }
    },
    actions: {
        fetchExample: function() {
            return this.axios.get("apiUrl").then((response) => {
                console.log(response.data);
            });
        }
    }
});

export default store;

