<template>
    <div>
        <h1> {{ title }} </h1>
        <v-layout>
            <vocab-names></vocab-names>
            <div>
                <h3> {{ tableName + ':'}} </h3>
                <controlled-vocabs></controlled-vocabs>
            </div>
        </v-layout>
    </div>
</template>

<script>
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
               title: "Controlled Vocabularies",
               listName: "Vocab Names",
               tableName: "NAME" //get from api
           }
        },
    }

</script>

<style scoped>

    h1 {
        color: darkblue;
        padding-bottom: 50px;
    }

    h3 {
        color: darkblue;
        padding-bottom: 15px;
        padding-top: 15px;
    }

</style>