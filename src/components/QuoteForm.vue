<template>
    <div class="quote-form-wrapper">
        <div class="quote-form-border"></div>
        <div class="quote-form-background"></div>
        <input type="text" placeholder="name" v-model="author" class="author-input">
        <textarea name="quote" id="" cols="30" rows="10" placeholder="quote" v-model="quote" class="quote-input"></textarea>
        <button class="submit-quote" v-on:click="addQuote">Add quote</button>

        <div :class="{error: error}" class="quote-form-error-msg">
            Only losers try to submit an empty form :-)
        </div>
        <div :class="{succes: succes}" class="quote-form-succes-msg">
            Your quote is succesfully uploaded! Brutal!!!!
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
            addQuote() {
                if(this.quote == '' || this.author == '' ){
                    this.$store.commit('eventFormError', true);
                    setTimeout(() => {
                        this.$store.commit('eventFormError', false);
                    }, 2000);
                }else{
                    this.$store.dispatch('addQuote', {
                        Quote: this.quote,
                        Author: this.author
                    });
                    this.$store.commit('eventFormSucces', true);
                    setTimeout(() => {
                        this.$store.commit('eventFormSucces', false);
                    }, 5000);
                }
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