<template>
    <div class="quote-liker-wrapper">
        <p>{{this.getActiveQuote.Likes}} brutalist<span v-if="this.getActiveQuote.Likes ===0 || this.getActiveQuote.Likes > 1">s</span> liked this quote</p>
        <button @click="likeQuote" class="like-button" :class="{active: this.quoteLikerActive}"><i class="far fa-thumbs-up"></i>like<span v-if="!this.quoteLikerActive">d!</span></button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quotesLiked: [],
                quoteLikerActive: true
            }
        },
        methods: {
            likeQuote(){
                if(!this.quotesLiked.includes(this.$store.state.activeQuote)){
                    var likeAmount = this.getActiveQuote.Likes + 1;
                    this.$store.dispatch('likeQuote', {
                        Likes: likeAmount
                    });
                    this.quotesLiked.push(this.$store.state.activeQuote);
                }else{

                }
            }
        },
        computed: {
            getActiveQuote(){
                return this.$store.getters.isQuote[this.$store.state.activeQuote];
            }
        },
        updated(){
            if(!this.quotesLiked.includes(this.$store.state.activeQuote)){
                this.quoteLikerActive = true;
            }else {
                this.quoteLikerActive = false;
            }
        }
    }
</script>