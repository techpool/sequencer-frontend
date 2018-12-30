<template>
    <div>
        <label>{{ labelText }}</label>
        <input type="number" @input="onChange">
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'Dropdown',
    props: {
        labelText: {
            type: String,
            required: true
        },
        onChange: {
            type: Function,
            required: true
        }
    }
}
</script>

<style media="screen" lang="scss">

</style>
