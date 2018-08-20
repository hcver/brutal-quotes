<template>
    <div class="quote-list-wrapper">
        <div v-for="quote in quotes" class="quote-wrapper">
                <p class="quote">{{quote.Quote}}</p>
                <p class="author">{{quote.Author}}</p>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                quotes: this.$store.state._quotes,
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
        }
    }
</script>