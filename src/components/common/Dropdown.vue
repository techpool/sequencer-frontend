<template>
    <div class="dropdown">
        <label>{{ label }}</label>
        <select @change="onChange">
            <option
                v-for="(eachOption, index) in options"
                :key="index"
                :selected="eachOption.value === preSelected"
                :value="eachOption.value"
            >
                {{ eachOption.text }}
            </option>
        </select>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'Dropdown',
    props: {
        options: {
            type: Array,
            required: true
        },
        onChange: {
            type: Function,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        preSelected: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
.dropdown {
    width: 50%;
    margin: auto;
    text-align: left;
    font-size: 1.4em;
}

.dropdown label {
    width: 50%;
    display: inline-block;
}

.dropdown select {
    width: 50%;
    display: inline-block;
    font-size: 16px;
}
</style>
