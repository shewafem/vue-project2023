<template>
    <my-navbar></my-navbar>
    <div class="app">
        <router-view></router-view>
    </div>
    <my-footer></my-footer>
</template>

<script>
import MyNavbar from './components/UI/MyNavbar.vue';
import MyFooter from './components/UI/MyFooter.vue';
import MyHeader from './components/UI/MyHeader.vue';

export default {
    components: {
        MyNavbar,
        MyHeader,
        MyFooter,
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    margin-top: 10px;
    padding: 20px;
    display: flex;
    gap: 10px;
    flex-direction: column;
}
</style>