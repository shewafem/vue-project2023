<template>
    <div class="event">
        <img :src=" 'img/events/' + myEvent.img" alt="event-image" class="event__photo">
        <div class="event__info">
            <a href="#" class="event__link"><h3 class="event__heading">{{myEvent.name}}</h3></a>
            <a href="#" class="event__category">{{myEvent.category}}</a>
            <p class="event__description">{{myEvent.shortDescription}}</p>
            <my-button 
            class="event__button"
            @click="$router.push(`/events/${myEvent.id}`)"
            >
            Купить билет 🏷️</my-button>
            <!--<my-button 
            class="event__button"
            @click="$emit('remove', myEvent)"
            >
            Удалить</my-button>-->
        </div>
    </div>
</template>

<script>

export default {
    props: {
        myEvent: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped>
    .event__button {
        margin-left: auto;
    }


    .event {
        width: 100%;
        display: flex;
        min-height: 100px;
        background: #FFFFFF;
        border: 2px solid #000000;
        box-shadow: 5px 5px 0px #000000;
        border-radius: 10px;
    }
    
    .event:not(:last-child) {
        margin-bottom: 60px;
    }
    
    .event__photo {
        max-width: 200px;
        border-radius: 10px 0px 0px 10px;
        object-fit: cover;
        object-position: center;
    }
    
    .event__info {
        padding: 25px 30px;
    }
    
    .event__heading {
        font-weight: 600;
        font-size: 24px;
        line-height: 26px;
        margin-bottom: 16px;
    }
    
    .event__description {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 16px;
        text-align: justify;
    }
    
    .event__category {
        font-weight: 500;
        font-size: 20px;
        line-height: 32px;
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
</style>