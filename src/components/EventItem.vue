<template>
<div class="event">
    <div class="event">
        <img src="@/assets/{{ myEvent.url }}" alt="Событие" class="event__photo">
        <div class="event__info">
            <a href="#" class="event__link"><h3 class="event__heading">{{myEvent.name}}</h3></a>
            <a href="#" class="event__category">{{myEvent.category}}</a>
            <p class="event__description">{{myEvent.shortDescription}}</p>
        </div>
    </div>
    <div class="event__btns">
        <my-button 
        class="button"
        @click="$router.push(`/events/${myEvent.id}`)"
        >
        Открыть</my-button>
        <my-button 
        class="button"
        @click="$emit('remove', myEvent)"
        >
        Удалить</my-button>
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
    }
}
</script>

<style scoped>
    .event__btns {
        margin-top: 20px;
        align-self: flex-end;
        display: flex;
    }

    .event {
        border: 2px solid black;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>