<template>
    <form class="form" @submit.prevent>
        <legend>Создание поста</legend>
        <my-input
        v-model="myEvent.name"
        type="text" 
        placeholder="Название"
        />
        <my-input 
        v-model="myEvent.description"
        type="text" 
        placeholder="Описание"
        />
        <my-button 
        class="button" 
        @click="createEvent">Создать</my-button>
    </form>
</template>

<script>

export default {
    data() {
        return {
            myEvent: {
                name: '',
                description: '',
            }
        }
    },
    methods: {
        createEvent() {
            this.$emit('create', this.myEvent);
            this.myEvent = {
                name: '',
                description: '',
            };
        },
    },
}
</script>

<style scoped>

.form {
    display: flex;
    flex-direction: column;
}

.button {
    align-self: flex-end;
    margin-top: 20px;
}
</style>