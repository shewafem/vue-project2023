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
    display: block;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-shadow: 5px 5px 0px #000000;
    border-radius: 10px;
    padding: 20px 20px;
    font-size: 24px;
    font-weight: 500;
    line-height: 20px;
    min-width: 120px;
}

.button:hover {
    background: #8844f6;
    color: white;
    transition: 0.5s ease-in-out;
}

.button:active {
    transform: translate(5px, 5px);
    box-shadow: none;
}
</style>