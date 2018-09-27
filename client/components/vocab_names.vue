<template>
    <div class="mt-0">
        <v-layout row>
            <v-card>
                <v-list>
                    <h3> {{ table }}</h3>
                    <v-divider></v-divider>

                    <v-list-tile avatar v-for="name in nameList":id="name" @click="changeTable(name)">
                        <v-list-tile-content> {{name}} </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-card>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: "vocab-names",
        data: function () {
            return {
                table: "Vocab Names",
                nameList: [
                    "Countries",
                    "Buildings",
                    "Transfer Colleges"
                ]
            }
        },
        methods: {
            changeTable: function(tableName) {
                alert(tableName);
                 let tablename = tableName;
            }
        }
    }
</script>

<style scoped>

    h3 {
        color: darkblue;
        padding-left: 1.5em;
        padding-top: .5em;
        padding-bottom: 1em;
    }

    .mt-0 {
        padding-right: 100px;
        padding-left: 50px;
    }





</style>