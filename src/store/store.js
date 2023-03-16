import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            test: 0
        }
    },
})

export {store}