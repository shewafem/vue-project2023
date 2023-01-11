<template>
<div class="container" v-if="events.length > 0">
    <h3>Список событий</h3>
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
<h2 v-else style="color: red">Список пуст</h2>
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
