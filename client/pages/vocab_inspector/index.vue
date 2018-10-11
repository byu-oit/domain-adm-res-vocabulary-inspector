<template>
    <div>
        <v-tabs
                fixed-tabs
                class="tabPad"
                slider-color="black"
        >
            <v-tab
                    v-for="n in getNavigationLinks"
                    :key="n"
                    @click="changeAPI(n)"
            >
                {{ n }}
            </v-tab>
        </v-tabs>

        <v-layout>
            <no-ssr>
                <vocab-names></vocab-names>
            </no-ssr>
            <div>
                <h2> {{ getName + ':'}} </h2>
                <controlled-vocabs> </controlled-vocabs>
            </div>
        </v-layout>
    </div>
</template>

<script>

    import {mapGetters, mapActions, mapMutations} from 'vuex'

    import vocabNames from "../../components/vocab_names"
    import controlledVocabs from "../../components/controlled_vocabs"

    export default {
        components: {
            vocabNames,
            controlledVocabs
        },
        name: "index",
        computed: {
            ...mapGetters ([
                'getName',
                'getNavigationLinks'
            ])
        },
        methods: {
            ...mapActions([
                'fetchAdmVocabs',
                'fetchComVocabs'
            ]),
            ...mapMutations([
                'CHANGE_TAB',
                "RESET_PAGE"
            ]),
            changeAPI: function(string, store) {
                this.CHANGE_TAB(string)
                this.RESET_PAGE()
                if (string === "Admissions") {
                    this.fetchAdmVocabs()
                }
                else {
                    this.fetchComVocabs()
                }
            }
        },
        beforeMount() {
            this.fetchAdmVocabs()
        }
    }

</script>

<style scoped>

    h2 {
        color: #002856;
        padding-bottom: 15px;
    }

    .tabPad {
        margin-bottom: 50px;
    }

</style>