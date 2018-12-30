import dataAccessor from '../../../utils/dataAccessor';

export default {

    async createSequencer ({ commit }, { sequencerType, pipeLineType, sequenceArgs }) {
        commit('setCreateSequencerLoadingState', 'LOADING');
        console.log(sequenceArgs);
        const sequencerData = await dataAccessor.createGenerator({
            sequencerType, pipeLineType, sequenceArgs
        });
        commit('setCreateSequencerData', sequencerData.data);
        commit('setCreateSequencerLoadingState', 'LOADING_SUCCESSFUL');
    },

    async getNextSequence ({ commit, state }) {
        commit('setNextSequenceLoadingState', 'LOADING');
        const nextSequenceData = await dataAccessor.getNextSequence(state.currentSequencer.uuid);
        commit('setNextSequenceData', nextSequenceData.data);
        commit('setNextSequenceLoadingState', 'LOADING_SUCCESSFUL');
    }
};
