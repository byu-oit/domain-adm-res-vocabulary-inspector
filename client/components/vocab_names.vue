<template>
    <div class="mt-0">
        <v-layout row>
            <v-card>
                <v-list>
                    <h3> {{ table }}</h3>
                    <v-divider></v-divider>

                    <v-list-tile avatar v-for="(name, index) in getNameList":id="name" @click="changeTableName(index)">
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
            ...mapActions(['changeName']),
            changeTableName: function(name) {
                this.CHANGE_NAME(name)
            }
        },
        computed: {
            ...mapGetters ([
                'getNameList'
            ])
        },
    }
</script>

<style scoped>

    h3 {
        color: #002856;
        padding-left: 4.5em;
        padding-top: .5em;
        padding-bottom: 1em;
    }

    .mt-0 {
        padding-right: 100px;
        padding-left: 50px;
    }

    .nameList {
        color: #002856;
    }

</style>