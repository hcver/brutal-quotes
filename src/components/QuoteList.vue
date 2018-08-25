<template>
    <div class="quote-list-wrapper">
        <div v-for="(quote, index) in quotes"  v-if="index === $store.state.activeQuote" class="quote-wrapper">
                <p class="quote">{{quote.Quote}}</p>
                <p class="author">{{quote.Author}}</p>
        </div>
        <button class="new-quote" @click="getRandomNumber($store.state._quotes.length - 1)"><i class="fas fa-sync"></i>Show new brutal quote</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                quotes: this.$store.state._quotes,
                activeQuote: 0
            }
        },
        methods: {
          getRandomNumber(max){
              this.$store.commit('getRandomNumber', Math.floor(Math.random() * Math.floor(max)))
          }
        },
        computed: {
            getQuotes() {
                return this.quotes = this.$store.getters.isQuote
            }
        },
        watch:{
            getQuotes() {
                return this.$store.state._quotes
            }
        },
        created(){
            this.$store.commit('getRandomNumber', Math.floor(Math.random() * 18))
        }
    }
</script>