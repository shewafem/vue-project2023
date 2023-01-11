<template>
    <div class="navbar">
        <div @click="$router.push('/')">Главная</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/events')">События</my-button>
            <my-button @click="$router.push('/about')">О нас</my-button>
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton';

    export default {
        components: {
            MyButton,
        }
    }
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: pink;
    box-shadow: 2px 2px 4px black;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.navbar__btns {
    margin-left: auto;
    display: flex;
    gap: 20px;
}
</style>