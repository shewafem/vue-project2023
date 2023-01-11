<template>
<select class="select" :value="modelValue" @change="changeOption">
    <option value="">Выберите из списка</option>
    <option 
    v-for="option in options" 
    :key="option.value"
    :value="option.value"
    value=""
    >
        {{ option.name }}
    </option>
</select>
</template>

<script>
    export default {
        name: 'my-select',
        props: {
            modelValue: {
                type: String,
            },
            options: {
                type: Array,
                default: () => [],
            }
        },
        methods: {
            changeOption(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style scoped>
.select {
    width: auto;
    font-family: inherit;
    font-size: 24px;
    border-radius: 10px;
    border: 2px solid #000000;
    box-shadow: 5px 5px 0px #000000;
    text-align: center;
    padding: 10px 0;
    font-weight: 500;
    padding: 0 10px;
}

select option {
    font-family: inherit;
    border: 1px solid black;
    border-radius: 5px;
}
</style>