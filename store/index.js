import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            // <<----------------------- overlay ----------------------

            isLoadingSpinner: false,
            isToastMessage: false,

            // <<----------------------- general ----------------------->>

            selectedMovie: null
        };
    },
    mutations: {
        // <<----------------------- overlay ----------------------->>

        setIsLoadingSpinner(state, payload) {
            state.isLoadingSpinner = payload;
        },
        setIsToastMessage(state, payload) {
            state.isToastMessage = payload;
        },

        // <<----------------------- general ----------------------->>

        setSelectedMovie(state, payload) {
            state.selectedMovie = payload;
        }
    }
});

export default store;
