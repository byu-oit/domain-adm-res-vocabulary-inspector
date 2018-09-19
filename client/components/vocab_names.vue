<template>
    <div>
        <h1> {{table}}</h1>
        <ul>
            <li v-for="name in nameList":id="name">
                {{ name }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "vocab_names",
        data: function () {
            return {
                table: "table",
                nameList: [
                    "Countries",
                    "Buildings",
                    "Transfer Colleges"
                ]
            }
        }
    }
</script>

<style scoped>

</style>