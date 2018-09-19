<template>
    <div>
        <h1> {{ title }} </h1>
        <div class="container">
            <h2> Vocab Names </h2>
            <h2> {Name:} </h2>
        </div>
        <h1> {{table}}</h1>
    </div>
</template>

<script>
    export default {
        name: "index",
        data: function() {
           return {
               title: "Controlled Vocabularies"
           }
        }
    }

</script>

<style scoped>
    .container > * {
        display: inline-block;
        color: #ff44e7;
        margin-left: 200px;
        margin-right: 100px;
    }
    h1 {
        color: darkblue;
    }

</style>