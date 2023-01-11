<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button',
    }
</script>

<style scoped>
.button {
    padding: 10px 50px;
    border-radius: 5px;
    background-color: purple;
    color: white;
}
</style>