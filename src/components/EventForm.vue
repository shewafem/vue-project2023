<template>
    <form class="form" @submit.prevent>
        <legend>Создание поста</legend>
        <my-input
        v-model="myEvent.name"
        type="text" 
        placeholder="Название"
        required
        />
        <my-input 
        v-model="myEvent.shortDesc"
        type="text" 
        placeholder="Описание"
        required
        />
        <my-input 
        v-model="myEvent.category"
        type="text" 
        placeholder="Категория"
        required
        />
        <my-input 
        v-model="myEvent.date"
        type="text" 
        placeholder="Дата"
        required
        />
        <my-input 
        v-model="myEvent.img"
        type="file" 
        placeholder="Изображение"
        required
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
                shortDesc: '',
                category: '',
                date: '',
                img: '',
            }
        }
    },
    methods: {
        createEvent() {
            this.$emit('create', this.myEvent);
            this.myEvent = {
                name: '',
                shortDesc: '',
                category: '',
                date: '',
                img: '',
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