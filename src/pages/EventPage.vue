<template>
    <div>
    <h1>События</h1>
    <my-input
    v-model="searchQuery"
    placeholder="Поиск..."
    />
    <div class="app__btns">
        <my-button 
        @click="showDialog">
            Создать событие
        </my-button>
        <my-select
        v-model="selectedSort"
        :options="sortOptions"
        />
    </div>
    <my-dialog v-model:show="dialogVisible">
        <event-form
        @create="createEvent"
        />
    </my-dialog>
    <div v-for="myEvent in events" :key="myEvent.id">
        <h1>Название {{ myEvent.name }}</h1>
    </div>
    <event-list 
        :events="sortedAndSearchedEvents"
        @remove="removeEvent"
        v-if="!isEventsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div class="page__wrapper">
        <div 
        v-for="pageNumber in totalPages" 
        :key="pageNumber"
        class="page"
        :class="{
            'current-page': page === pageNumber
        }"
        @click="changePage(pageNumber)"
        >
            {{ pageNumber }}
        </div>
    </div>
    </div>
</template>

<script>
import EventForm from "@/components/EventForm";
import EventList from "@/components/EventList";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import MyDialog from '@/components/UI/MyDialog'
    
    export default {

        components: {
            EventForm,
            EventList,
            MyDialog,
            MySelect,
            MyInput,
            MyButton
        },

        data() {
            return {
                events: [],
                dialogVisible: false,
                isEventsLoading: false,
                selectedSort: '',
                searchQuery: '',
                page: 1,
                limit: 10,
                totalPages: 0,
                sortOptions: [
                    {value: 'name', name: 'По названию'},
                    {value: 'description', name: 'По содержимому'},
                ],
            }
        },
        mounted() {
            fetch('http://localhost:3000/events')
                .then(res => res.json())
                .then(data => this.events = data)
                .catch(err => console.log(err.message))
        },
        methods: {
            createEvent(myEvent) {
                this.events.push(myEvent);
                this.dialogVisible = false;
            },
            removeEvent(myEvent) {
                this.events = this.events.filter(e => e.id !== myEvent.id);
            },
            showDialog() {
                this.dialogVisible = true;
            },
            changePage(pageNumber) {
                this.page = pageNumber
            },
        },
        computed: {
            sortedEvents() {
                return [...this.events].sort((myEvent1, myEvent2) => myEvent1[this.selectedSort]?.localeCompare(myEvent2[this.selectedSort]))
            },
            sortedAndSearchedEvents() {
                return this.sortedEvents.filter(myEvent => myEvent.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
            }
        },
    }
</script>

<style>

    .app__btns {
        margin: 15px 0;
        display: flex;
        justify-content: space-between;
    }

    .page__wrapper {
        display: flex;
        margin-top: 15px;
    }

    .page {
        border: 2px solid purple;
        padding: 10px;
        margin-right: 5px;
    }

    .current-page {
        border: 4px solid purple;
        font-weight: bold;
    }
</style>