<template>
    <div class="app">
        <my-header></my-header>
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>
import MyFooter from './components/UI/MyFooter.vue';
import MyHeader from './components/UI/MyHeader.vue';

export default {
    components: {
        MyHeader,
        MyFooter,
    },
    mounted() {
        this.$store.dispatch('getEvents');
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    gap: 10px;
    flex-direction: column;
}
</style>