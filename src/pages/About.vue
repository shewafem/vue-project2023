<template>
    <div class="page__container _container">
        <section class="page__about welcome">
            <div class="welcome__info">
                <h1 class="welcome__heading">О нас</h1>
                <p class="welcome__text"><span class="accent">Ticketee!</span> — маленькая компания, которая продаёт билеты на самые интересные события в Москве!
                <p class="welcome__text">Мы полностью независимы. Это означает, что мы должны отвечать только перед нашими клиентами. Это позволяет нашим сотрудникам и компании расти, не ставя под угрозу наши ценности и не теряя нашей души.</p>
                </p>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.page__about {
    position: relative;
    margin-top: 150px;
    margin-bottom: 100px;
}

.welcome__info {
    width: 710px;
    height: auto;
    padding: 37px 88.5px;
    background: #FFFFFF;
    border: 2px solid #0E0F1D;
    box-shadow: 10px 10px 0px #0E0F1D;
    border-radius: 10px;
}

.welcome__heading {
    font-weight: 600;
    font-size: 40px;
    line-height: 62px;
    text-align: center;
    margin-bottom: 25px;
}

.welcome__text {
    font-family: 'TT Firs Neue';
    font-size: 20px;
    line-height: 26px;
    text-align: justify;
    margin-bottom: 15px;
}

.welcome__image {
    position: absolute;
    width: 500px;
    height: 500x;
    left: 800px;
    top: -78px;
}
</style>