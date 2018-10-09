<template>
    <v-data-table
            v-show="getShowDesc"
            :headers="headers"
            :items="getVocabContents"
            class="elevation-5"
            hide-actions
    >
        <template slot="headerCell" slot-scope="props">
            <span slot="activator">
                {{ props.header.text }}
            </span>
        </template>
        <template slot="items" slot-scope="props">
            <tr>
            <td class="text-xs-center" :class="{ 'odd': props.index % 2 !== 0 }">{{ props.item.value }}</td>
            <td class="text-xs-center" :class="{ 'odd': props.index % 2 !== 0 }">{{ props.item.description }}</td>
            <td class="text-xs-center" :class="{ 'odd': props.index % 2 !== 0 }">{{ props.item.long_description}}</td>
            </tr>
        </template>
        <template slot="pageText" slot-scope="props">
            Items {{ props.pageStart }} - {{ props.pageStop }} of {{ props.itemsLength }}
        </template>
    </v-data-table>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "controlled-vocabs",
        data: function() {
            return {
                headers: [
                    {text: 'Value', sortable: false, align: 'center', value: 'value'},
                    {text: 'Short Description', sortable: false, align: 'center', value: 'description'},
                    {text: 'Long Description', sortable: false, align: 'center', value: 'long_description'}
                ]
            }
        },
        computed: {
            ...mapGetters ([
                'getVocabContents',
                'getShowDesc'
            ])
        }
    }
</script>

<style scoped>

    td {
        color: floralwhite;
        background: rgba(77,96,133,0.99);
        height: 200px;
    }

    span {
        color: #002856;
        font-size: medium;
        font-weight: bold;
    }


    .odd {
        background: white;
        color: #002856;
    }

    tr {
        height: 10px;
    }

</style>