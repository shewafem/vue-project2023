<template>
    <section class="page__event-details">
        <img :src=" 'img/'+ myEvent.img" alt="" class="event-details__photo">
        <div class="event-details__info">
            <h2 class="event-details__title">{{myEvent.name}}</h2>
            <a href="{{event.category.get_absolute_url}}" class="event-details__category">{{myEvent.category}}</a>
            <p class="event-details__description">{{myEvent.description}}</p>
            <div class="event-details__container">
                <p class="event-details__date details"><span class="accent">Дата:</span> {{myEvent.date}}</p>
            </div>
            <p class="event-details__price">Цена: {{myEvent.price}} руб.</p>
            <a href="{{event.get_absolute_url}}" class="event-details__button button">Купить билет 🏷️</a>
                <form class="event-details__form" method="POST">
                    <input class="event-details__input" min="1" value=1 type="number" name="quantity">
                    <button class="event-details__button button" type="submit"> Купить билет 🏷️</button>
                </form>
        </div>
    </section>
</template>

<script>
    export default {
        computed: {
            myEvent () {
                const route = this.$route.params.id;
                console.log(this.$store.getters.getEvent(route));
                return this.$store.getters.getEvent(route)
            }
        },
        mounted() {
            const route = this.$route.params.id;
            console.log(this.$store.getters.getEvent(route));
        }
    }
</script>

<style scoped>

.page__event-details {
    display: flex;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-shadow: 5px 5px 0px #000000;
    border-radius: 10px;
    margin-top: 60px;
    position: relative;
}

.event-details__photo {
    border-right: 2px solid #000000;
    border-radius: 10px 0px 0px 10px;
    width: 558px;
    height: auto;
    margin-right: 60px;
    object-fit: cover;
    object-position: center;
}

.event-details__info {
    padding: 40px 56px 116px 0;
}

.event-details__title {
    font-weight: 600;
    font-size: 40px;
    line-height: 52px;
    margin-bottom: 30px;
}

.event-details__category {
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    background: #fff187; /*#ffd587*/
    border: 2px solid #000000;
    border-radius: 10px;
    display: block;
    padding: 7px 25px;
    margin-bottom: 20px;
    color: rgb(0, 0, 0);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 10px;
    text-shadow: 2px 2px #f64479;
}

.event-details__description {
    text-align: justify;
    font-size: 24px;
    line-height: 31px;
    margin-bottom: 50px;
}

.event-details__form {
    margin-left: auto;
    max-width: 100px;
}


.event-details__input {
    width: 100%;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-shadow: 5px 5px 0px #000000;
    border-radius: 10px;
    padding-left: 20px;
    margin-left: auto;
    line-height: 50px;
    font-size: 32px;
    position: relative;
    bottom: 65px;
}
.accent {
    font-weight: 700;
}

.details {
    font-size: 32px;
    line-height: 41px;
}

.details:not(:last-child) {
    margin-bottom: 20px;
}

.event-details__price {
    font-weight: 700;
    font-size: 64px;
    line-height: 83px;
    text-align: justify;
    text-shadow: 5px 5px 1px #8844F6;
    margin-top: 40px;
}

.event-details__button {
    display: inline-block;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-shadow: 5px 5px 0px #000000;
    border-radius: 10px;
    padding: 52px 101px;
    font-weight: 500;
    font-size: 40px;
    line-height: 52px;
    position: absolute;
    right: 70px;
    bottom: -90px;
}

</style>