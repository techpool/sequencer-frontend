export default {
    setCreateSequencerLoadingState (state, loadingState) {
        state.createdSequencer.loadingState = loadingState;
    },

    setCreateSequencerData (state, data) {
        state.createdSequencer.data = data;
        state.sequencers.data.push(data);
        state.currentSequencer = data;
        state.nextSequence.data = [];
    },

    setNextSequenceLoadingState (state, loadingState) {
        state.nextSequence.loadingState = loadingState;
    },

    setNextSequenceData (state, data) {
        state.nextSequence.data.push(data);
    }
};
