<template>
    <button @click="onClick">
        {{ text }}
    </button>
</template>

<script type="text/javascript">
export default {
    name: 'Dropdown',
    props: {
        text: {
            type: String,
            required: true
        },
        onClick: {
            type: Function,
            required: true
        }
    }
};
</script>

<style>
button {
    font-size: 1.4em;
    background: none;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 10px;
}

</style>
