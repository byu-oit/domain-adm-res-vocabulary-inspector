<template>
    <div>
        <h1> {{ title }} </h1>
        <v-layout>
            <vocab-names></vocab-names>
            <div>
                <h3> {{ getName + ':'}} </h3>
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
        }
    }

</script>

<style scoped>

    h1 {
        color: #002856;
        padding-bottom: 50px;
    }

    h3 {
        color: #002856;
        padding-bottom: 15px;
        padding-top: 15px;
    }

</style>