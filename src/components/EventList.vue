<template>
<h3 class="events-heading" v-if="events.length > 0">Список событий</h3>
<h2 v-else class="events-heading--warning" style="color: red">Список событий пуст</h2>
<div class="events-wrapper" v-if="events.length > 0">
    <transition-group name="event-list">
        <event-item
        class="event"
        v-for="myEvent in events"
        :myEvent="myEvent"
        :key="myEvent.id"
        @remove="$emit('remove', myEvent)"
        />
    </transition-group>
</div>
</template>

<script>
import EventItem from "@/components/EventItem";
export default {
components: {
    EventItem,
},
props: {
    events: {
        type: Array,
        required: true,
    },
},
};
</script>

<style scoped>

.events-wrapper {
    display: flex;
    flex-wrap: wrap;
}
.events-heading {
    font-weight: 700;
    font-size: 64px;
    line-height: 83px;
    text-align: center;
    text-shadow: 5px 5px 1px #8844F6;
    margin-bottom: 10px;
    margin-top: 50px;
}

.events-heading--warning {
    font-weight: 700;
    font-size: 64px;
    line-height: 83px;
    text-align: center;
    text-shadow: 5px 5px 1px #8844F6;
    margin-bottom: 10px;
    margin-top: 50px;
    color:rgba(255, 0, 0, 0.58);
}
.event {
    margin-top: 10px;
}
.event-list-enter-active,
.event-list-leave-active {
    transition: all 0.3s ease;
}
.event-list-enter-from,
.event-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.event-list-move {
    transition: transform 1s;
    }
</style>
