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
        v-model="myEvent.description"
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
        accept="image/jpeg"
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
                description: '',
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
                description: '',
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