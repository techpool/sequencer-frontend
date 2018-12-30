export default {
    sequencerCreatingState: (state) => state.createdSequencer.loadingState,
    sequencerCreated: (state) => state.createdSequencer.data,
    currentSequencer: (state) => state.currentSequencer,
    nextSequence: (state) => state.nextSequence.data,
    nextSequenceLoadingState: (state) => state.nextSequence.loadingState
};
