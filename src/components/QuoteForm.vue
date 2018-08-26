<template>
    <div class="quote-form-wrapper">
        <textarea name="quote" id="" cols="30" rows="10" placeholder="quote" v-model="quote" class="quote-input"></textarea>
        <input type="text" placeholder="name" v-model="author" class="author-input">
        <button class="submit-quote" v-on:click="addQuote">Add quote</button>

        <div :class="{error: error}" class="quote-form-error-msg">
            Only losers try to submit an empty form :-) Haha LOSER!!! :D
        </div>
        <div :class="{succes: succes}" class="quote-form-succes-msg">
            Your quote is succesfully added! Brutal!!!!
            Press not here, but <a @click="showLatestQuote" class="show-latest-quote">here</a> to view your quote...
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                quote: '',
                author: '',
            }
        },
        methods: {
            /**
             * If user commits quote form --
             * first check if input name and quote is filled in
             *
             * No?
             * Commit mutation for state 'eventFormError' from false to true
             * Display error message
             * set timeout function to change state 'eventFormError' to false again after 3s
             *
             * Yes?
             * Dispatch addQuote action from store which pushes the payload (quote, author)
             * to firebase and will return the new firebase snapshot
             * Commit mutation for state 'eventFormSucces' from false to true
             * Display succes message
             * set timeout function to change state 'eventFormSucces' to false again after 6s
             */
            addQuote() {
                if(this.quote == '' || this.author == '' ){
                    this.$store.commit('eventFormError', true);
                    setTimeout(() => {
                        this.$store.commit('eventFormError', false);
                    }, 3000);
                }else{
                    this.$store.dispatch('addQuote', {
                        Quote: this.quote,
                        ID: this.$store.state._quotes.length,
                        Author: this.author,
                        Likes: 0
                    });
                    this.$store.commit('eventFormSucces', true);
                    setTimeout(() => {
                        this.$store.commit('eventFormSucces', false);
                    }, 6000);
                }
            },
            showLatestQuote(){
                this.$store.commit('showLatestQuote', (this.$store.state._quotes.length - 1));
            }
        },
        computed: {
            isQuoteSend(){
                return this.$store.state.quoteSend
            },
            error() {
                return this.$store.state.eventFormError;
            },
            succes(){
                return this.$store.state.eventFormSucces;
            }
        },
        watch: {
            isQuoteSend: function(newValue, oldValue) {
                if(newValue){
                    this.quote = '';
                    this.author = '';
                    this.$store.commit('isQuoteSend', false);
                }
            }
        }
    }
</script>