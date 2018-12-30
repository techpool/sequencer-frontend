<template>
    <div class="hello">
        <h1>Sequencer</h1>
        <!-- <Dropdown /> -->

        <select v-model="selectedSeries">
            <option value="FIBONACCI">
                Fibonacci Series
            </option>
            <option value="FACTORIAL">
                Factorial
            </option>
            <option value="PARTIAL_SUM">
                Partial Sum
            </option>
            <option value="PRIME">
                Prime
            </option>
            <option value="RANGE">
                Range
            </option>
        </select>

        <button @click="create">
            Create Generator
        </button>

        <div class="">
            {{ currentSequencer.type }}
            <button @click="getNextSequence">
                Next!
            </button>
        </div>

        <div class="">
            <li
                v-for="(eachSequenceData, index) in nextSequence"
                :key="index"
            >
                {{ eachSequenceData }}
            </li>
        </div>
    </div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex';

export default {
    name: 'Sequencer',
    data () {
        return {
            selectedSeries: 'FIBONACCI'
        };
    },
    computed: {
        ...mapGetters('sequencer', [
            'sequencerCreatingState',
            'sequencerCreated',
            'currentSequencer',
            'nextSequence',
            'nextSequenceLoadingState'
        ])
    },
    methods: {
        ...mapActions('sequencer', [
            'createSequencer',
            'getNextSequence'
        ]),
        create () {
            this.createSequencer({
                sequencerType: this.selectedSeries,
                pipeLineType: this.pipeLineType,
                sequencerArgs: this.sequencerArgs
            });
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
