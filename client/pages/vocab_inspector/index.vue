<template>
    <div>
        <h1> {{ title }} </h1>
        <v-layout>
            <no-ssr>
                <vocab-names></vocab-names>
            </no-ssr>
            <div>
                <h2> {{ getName + ':'}} </h2>
                <controlled-vocabs></controlled-vocabs>
            </div>
        </v-layout>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'

    import vocabNames from "../../components/vocab_names"
    import controlledVocabs from "../../components/controlled_vocabs"
    export default {
        components: {
            vocabNames,
            controlledVocabs
        },
        name: "index",
        data: function() {
           return {
               title: "Controlled Vocabularies"
           }
        },
        computed: {
            ...mapGetters ([
                'getName'
            ])
        },
        async fetch ({ store }) {
            console.log('vocab_inspector page::fetch')
            store.dispatch('fetchVocabs')
        }
    }

</script>

<style scoped>

    h1 {
        color: #002856;
        padding-bottom: 50px;
    }

    h2 {
        color: #002856;
        padding-bottom: 15px;
    }

</style>