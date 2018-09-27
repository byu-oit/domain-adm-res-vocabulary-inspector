<template>
    <v-data-table
            :headers="headers"
            :items="vocabContents"
            class="elevation-1"
            hide-actions
    >
        <template slot="items" slot-scope="props">
            <td class="text-xs-center">{{ props.item.id }}</td>
            <td class="text-xs-center">{{ props.item.shortDesc }}</td>
            <td class="text-xs-center">{{ props.item.longDesc}}</td>
        </template>
        <template slot="pageText" slot-scope="props">
            Items {{ props.pageStart }} - {{ props.pageStop }} of {{ props.itemsLength }}
        </template>
    </v-data-table>
</template>

<script>
    export default {
        name: "controlled-vocabs",
        data: function() {
            return {
                headers: [
                    {text: 'ID', sortable: false, align: 'center', value: 'id'},
                    {text: 'Short Description', sortable: false, align: 'center', value: 'shortDesc'},
                    {text: 'Long Description', sortable: false, align: 'center', value: 'longDesc'}
                ],
                vocabContents: [
                    {
                        id: "ITB",
                        shortDesc: "IT Building",
                        longDesc: "Information Technology Building"
                    },
                    {
                        id: "HFAC",
                        shortDesc: "Arts Building",
                        longDesc: "Harrison Fine Arts Center"
                    },
                    {
                       id: "TMCB",
                       shortDesc: "Talmage",
                       longDesc: "Talmage Building"
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>