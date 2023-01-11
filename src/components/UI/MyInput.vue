<template>
<input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>

<style scoped>

.input {
    width: 100%;
    padding: 20px;
    margin-top: 20px;
    border: 2px black solid;
    border-radius: 15px;
}

</style>