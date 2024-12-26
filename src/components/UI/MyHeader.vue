<template>
    <header class="header">
        <!--<div @click="$router.push('/')">Главная</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/events')">События</my-button>
            <my-button @click="$router.push('/about')">О нас</my-button>
        </div>-->
        <div class="header__container _container">
            <router-link to="/events"><img class="header__logo" src="img/icons/logo.svg" alt="logo"></router-link>
            <nav class="header__nav nav">
                <ul class="nav__list">
                    <li class="nav__item"><a href="tel:+79503858079" class="nav__link"><img width="25px" class="menu__icon" src="img/icons/phone.svg" alt="phone">(505) 503-4455</a></li>
                    <li class="nav__item"><router-link class="nav__link" to="/events">События</router-link></li>
                    <li class="nav__item"><router-link class="nav__link" to="/about">О нас</router-link></li>
                    <li v-if="$store.state.isAuth" class="nav__item"><a href="#" class="nav__link">Тамир</a></li>
                    <li v-else class="nav__item"><a href="#" class="nav__link">Войти</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    import MyButton from '@/components/UI/MyButton';
    import MyInput from '@/components/UI/MyInput';

export default {
    components: {
        MyButton,
        MyInput,
    }
}
</script>

<style scoped>

header {
    /*background-color: #ff83cf;#FFC9C9; #FFC9E0*/
    height: auto;
    padding-top: 20px;
}

.header__container {
    display: flex;
}

.header__nav {
    margin-left: auto;
    display: flex;
    align-items: center;
}

.header__logo {
    margin-right: 35px;
}

.nav__list {
    display: flex;
    flex-wrap: wrap;
}

.nav__item:not(:last-child) {
    margin-right: 85px;
}

.nav__link {
    font-weight: 500;
    font-size: 32px;
    line-height: 41px;
}

.nav__link:hover {
    text-shadow: 3px 2px 1px #8844f6;
}

.nav__item:last-child a {
    font-weight: 900;
}
</style>