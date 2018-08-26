<template>
  <div id="app">
    <quote-list></quote-list>
    <quote-form></quote-form>
    <quote-liker></quote-liker>
  </div>
</template>

<script>
    import QuoteForm from './components/QuoteForm.vue';
    import QuoteList from './components/QuoteList.vue';
    import QuoteLiker from './components/QuoteLiker.vue';

    export default {
        data() {
            return {
                width: 0,
                height: 0,
                top: 0,
                left: 0
            }
        },
        components: {
            QuoteForm,
            QuoteList,
            QuoteLiker,
        },
        created() {
            this.$store.dispatch('getFirebaseDatabase');
        }
    }
</script>


