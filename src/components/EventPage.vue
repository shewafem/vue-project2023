<template>
    <div>
    <div class="app__btns">
        <my-button 
        @click="showDialog">
            Создать событие
        </my-button>
        <my-input class="searchInput"
        v-model="searchQuery"
        placeholder="Поиск..."
        />
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
            totalPages: 0,
            sortOptions: [
                {value: 'name', name: 'По названию'},
                {value: 'description', name: 'По содержимому'},
                {value: 'category', name: 'По категории'}
            ],
        }
    },
    mounted() {
        this.events = this.$store.getters.getEvents;
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
        },

    },
}
</script>

<style>
    .searchInput {
        width: 100%;
        padding: 20px;
        margin: 0 20px;
        border: 2px black solid;
        border-radius: 15px;
        font-size: 24px;
    }


    .app__btns {
        margin: 50px 0;
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