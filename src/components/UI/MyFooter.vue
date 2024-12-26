<template>
    <footer class="footer">
        <div class="footer__container _container">
            <a href="#"><img class="footer__logo" src="img/icons/logo.svg" alt="logo"></a>
            <div class="footer__menu menu">
                <div class="menu__wrapper">
                    <h3 class="menu__heading">Страницы</h3>
                    <ul class="menu__list">
                        <li class="menu__item"><a href="#" class="menu__link">О нас</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">Категории</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">Блог</a></li>
                        <li class="menu__item"><a href="#" class="menu__link">Демо</a></li>
                    </ul>
                </div>
                <div class="menu__wrapper">
                    <h3 class="menu__heading">Услуги</h3>
                    <ul class="menu__list">
                        <li class="menu__item"><a href="#" class="menu__link">Купить билеты</a></li>
                    </ul>
                </div>
                <div class="menu__wrapper">
                    <h3 class="menu__heading">Контакты</h3>
                    <ul class="menu__list">
                        <li class="menu__item"><a href="tel:+79503858079" class="menu__link"><img class="menu__icon" src="img/icons/phone.svg" alt="phone">(505) 503-4455</a></li>
                        <li class="menu__item"><a href="mailto:tamirsundureev@gmail.com" class="menu__link"><img class="menu__icon" src="img/icons/mail.svg" alt="email">ticketee@gmail.com</a></li>
                        <li class="menu__item"><a href="#" class="menu__link"><img class="menu__icon" src="img/icons/pin.svg" alt="location">Москва</a></li>
                    </ul>
                </div>
                <div class="menu__wrapper">
                    <h3 class="menu__heading">Социалки</h3>
                    <ul class="menu__list icons-wrapper">
                        <li class="menu__item"><a href="#" class="menu__link"><img src="img/icons/facebook.svg" alt="facebook"></a></li>
                        <li class="menu__item"><a href="#" class="menu__link"><img src="img/icons/twitter.svg" alt="twitter"></a></li>
                        <li class="menu__item"><a href="#" class="menu__link"><img src="img/icons/linked.svg" alt="linkedin"></a></li>
                        <li class="menu__item"><a href="#" class="menu__link"><img src="img/icons/instagram.svg" alt="instagram"></a></li>
                    </ul>
                </div>
                <img class="paper-plane" width="217px" src="img/paper-plane.png" alt="paper-plane">
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
footer {
    z-index: -10;
    margin-top: 100px;
    height: 309px;
    padding-top: 31px;
    position: relative;
}

.footer__container {
    display: flex;
    padding-top: 17px;
}

.footer__logo {
    margin-left: 40px;
}

.footer__menu {
    display: flex;
    margin-left: 150px;
    padding-top: 20px;
}

.menu__wrapper {
    margin-right: 80px;
}

.menu__heading {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 30px;
}


.menu__link {
    font-size: 14px;
    line-height: 36px;
    color: #0E0F1D;
}

.menu__link:hover {
    text-shadow: 2px 2px 2px #8844f6;
}

.icons-wrapper {
    display: flex;
    gap: 20px;
}

.menu__icon {
    padding-top: 8px;
    margin-right: 10px;
}

.menu__item:last-child .menu__icon {
    margin-right: 14px;
    padding-left: 3px;
}
</style>