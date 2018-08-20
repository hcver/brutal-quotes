<template>
  <div id="app">
    <quote-list></quote-list>
    <quote-form></quote-form>
  </div>
</template>

<script>
    import QuoteForm from './components/QuoteForm.vue';
    import QuoteList from './components/QuoteList.vue';

    export default {
        data() {
            return {
            }
        },
        components: {
            QuoteForm,
            QuoteList
        },
        created: function() {
            this.$store.dispatch('getFirebaseDatabase');
        }
    }
</script>


