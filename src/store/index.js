import Vue from 'vue';
import Vuex from 'vuex';
import sequencer from './modules/sequencer';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        sequencer
    },
    strict: debug
});
