import { createStore } from "vuex";
import axios from 'axios';
import _ from 'lodash';

export default createStore({
    state: {
        isAuth: true,
        all: []
    },
    getters: {
        getEvent: state => id => {
            return state.all[id]
        },

        getEvents: state => {
            return state.all
        }
    },
    
    mutations: {
        SET_EVENTS (state, events) {
            state.all = events;
        }
    },
    
    actions: {
        getEvents (context) {
            fetch('http://localhost:3000/events')
                .then(res => res.json())
                .then(response => {
                    console.log(response);
                    context.commit('SET_EVENTS', response)
                });
        }
    },

});