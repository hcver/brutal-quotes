import Vue from 'vue'
import Vuex from 'vuex'
import firebase from './firebase'

Vue.use(Vuex);
Vue.use(firebase);

export default new Vuex.Store({
    state: {
        _quotes: [],
        quoteSend: false,
        eventFormError: false,
        eventFormSucces: false
    },
    getters: {
        isQuote(state) {
            return state._quotes;
        }
    },
    mutations: {
        addQuote(state, payload) {
            state._quotes = payload;
        },
        isQuoteSend(state, payload){
            state.quoteSend = payload;
        },
        eventFormError (state, payload) {
            state.eventFormError = payload;
        },
        eventFormSucces (state, payload) {
            state.eventFormSucces = payload;
        }
    },
    actions: {
        addQuote(context, payload) {
            firebase.database.ref('Quotes').push(payload,function(error){
                if(error){
                    context.commit('isQuoteSend', false);
                }else{
                    context.commit('isQuoteSend', true);
                }
            });
        },
      getFirebaseDatabase(context){
            firebase.database.ref('Quotes').on('value', function(snapshot){
               context.commit('addQuote', snapshot.val());
            });
        }
    }
})
