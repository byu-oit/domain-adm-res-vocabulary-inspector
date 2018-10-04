<template>
    <div class="mt-0">
        <v-layout row>
            <v-card>
                <v-list>
                    <h3> {{ table }}</h3>
                    <v-divider></v-divider>

                    <v-list-tile avatar v-for="(name, index) in getNameList ":id="name" @click="onClick(index, name)">
                        <v-list-tile-content class="nameList"> {{name}} </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-layout>
    </div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'

    export default {
        name: "vocab-names",
        data: function () {
            return {
                table: "Vocab Names",
            }
        },
        methods: {
            ...mapMutations(['CHANGE_NAME']),
            ...mapActions(['fetchDescs']),
            changeTableName: function(num) {
                this.CHANGE_NAME(num)
            },
            changeVocab: function(name) {
                this.fetchDescs(name)
            },
            onClick: function(num, name) {
                this.changeTableName(num)
                this.changeVocab(name)
            }
        },
        computed: {
            ...mapGetters ([
                'getNameList'
            ])
        }
    }
</script>

<style scoped>

    h3 {
        color: #002856;
        padding-left: 4.5em;
        padding-bottom: 2em;
        height: 10px;
    }

    .mt-0 {
        padding-right: 100px;
        padding-left: 50px;
    }

    .nameList {
        color: #002856;
    }

</style>