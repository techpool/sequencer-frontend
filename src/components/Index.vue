<template>
    <div class="hello">
        <h1>Sequencer</h1>
        <Dropdown
            :options="[
                { value: 'FIBONACCI', text: 'Fibonacci Series' },
                { value: 'FACTORIAL', text: 'Factorial Series' },
                { value: 'PARTIAL_SUM', text: 'Partial Sum Series' },
                { value: 'PRIME', text: 'Prime Series' },
                { value: 'RANGE', text: 'Range Series' },
            ]"
            :preSelected="selectedSeries"
            :onChange="onSeriesChange"
            :label="'Sequencer Type'"
        />

        <Dropdown
            :options="[
                { value: 'NONE', text: 'None' },
                { value: 'ACCUMULATOR', text: 'Accumulator' },
                { value: 'IS_EVEN', text: 'Is Even' }
            ]"
            :preSelected="selectedPipeline"
            :onChange="onPipelineChange"
            :label="'Pipeline Type'"
        />

        <div class="">
            <button type="button" name="button" v-if="canHaveNArgument" @click="addArgument">Add Argument</button>

            <Input
                :key="index" v-for="(eachSequenceArg, index) in sequenceArgs"
                :onChange="onArgumentChange.bind(this, index)"
                :labelText="(placeholderConfig[selectedSeries] && placeholderConfig[selectedSeries][index]) ? placeholderConfig[selectedSeries][index] : `Argument ${index + 1}`"
            />
        </div>

        <Button :onClick="create" :text="'Create Generator'" />

        <hr />

        <div class="" v-if="currentSequencer.uuid" >
            <h2>Current Sequence - {{ currentSequencer.type }}</h2>
            <div>ID: {{ currentSequencer.uuid }}</div>
            <Button :onClick="getNextSequence" :text="'Next!'" />
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
import Dropdown from './common/Dropdown';
import Input from './common/Input';
import Button from './common/Button';
import {
    mapActions,
    mapGetters
} from 'vuex';

export default {
    name: 'Sequencer',
    data () {
        return {
            selectedSeries: 'FIBONACCI',
            selectedPipeline: 'NONE',
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
        onSeriesChange(e) {
            this.selectedSeries = e.target.value;
        },
        onPipelineChange(e) {
            this.selectedPipeline = e.target.value;
        },
        onArgumentChange(index, e) {
            this.sequenceArgs[index] = e.target.value;
        },
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
    },
    components: {
        Dropdown,
        Input,
        Button
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
