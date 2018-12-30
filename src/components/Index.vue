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

        <select v-model="selectedPipeline">
            <option :value="'NONE'">
                None
            </option>
            <option :value="'ACCUMULATOR'">
                Accumulator
            </option>
            <option :value="'IS_EVEN'">
                Is Even
            </option>
        </select>

        <div class="">
            <button type="button" name="button" v-if="canHaveNArgument" @click="addArgument">Add Argument</button>

            <div class="" :key="index" v-for="(eachSequenceArg, index) in sequenceArgs">
                <label>{{ (placeholderConfig[selectedSeries] && placeholderConfig[selectedSeries][index]) ? placeholderConfig[selectedSeries][index] : `Argument ${index + 1}` }}</label>
                <input type="number" v-model="sequenceArgs[index]" >
            </div>
        </div>

        <button @click="create">
            Create Generator
        </button>

        <div class="" v-if="currentSequencer.type">
            {{ currentSequencer.type }}
            <button @click="getNextSequence">
                Next!
            </button>
        </div>

        <div class="">
            <div
                v-for="(eachSequenceData, index) in nextSequence"
                :key="index"
            >
                {{ eachSequenceData }}
            </div>
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
            selectedSeries: 'FIBONACCI',
            selectedPipeline: 'ACCUMULATOR',
            sequenceArgs: [],
            argumentConfig: {
                PARTIAL_SUM: Infinity,
                RANGE: 2
            },
            placeholderConfig: {
                RANGE: [
                    'Start',
                    'Step'
                ]
            },
            canHaveNArgument: false
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
    watch: {
        selectedSeries (newSelection) {
            const numOfArgument = this.argumentConfig[newSelection];

            if (numOfArgument === Infinity) {
                this.canHaveNArgument = true;
                this.sequenceArgs = Array(1);
            } else if (numOfArgument > 0) {
                this.sequenceArgs = Array(numOfArgument);
            } else {
                this.sequenceArgs = Array(0);
            }
        }
    },
    methods: {
        ...mapActions('sequencer', [
            'createSequencer',
            'getNextSequence'
        ]),
        addArgument () {
            this.sequenceArgs.push(undefined);
        },
        create () {
            console.log(this.sequenceArgs);
            this.createSequencer({
                sequencerType: this.selectedSeries,
                pipeLineType: this.selectedPipeline,
                sequenceArgs: this.sequenceArgs
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
