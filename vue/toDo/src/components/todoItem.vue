<template>
    <div id="todoItem">
        <div id = "text">
            {{id}} : {{text}}
        </div>
        <div id = "remove" @click="remove(); isClicked(e)">-</div>
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        text : String
    },//vai ser um objeto
    data() {
        return {
            show : true
        }
    },
    methods: {
        remove() {
            // const myTodo = todo;
            this.$emit('reduceId', this.id);
        }
    }
}

</script>

<style>

    #text {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    #todoItem {
        border-radius: 40px;
        font-family: 'Courier New', Courier, monospace;
        background-color: white;
        padding: 1em;
        font-size: 1.5em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin : 1.5em;
        width: 70%;
        min-height: 5vh;
    }

    #remove {
        transition: all ease 0.2s;
        background-color: red;
        color: white;
        /* font-size: 1.5em; */
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.5em;
        width:1.5em;
        border-radius: 50%;
    }

    #remove:hover {

        background-color: rgb(252, 88, 88);
        /* color: rgb(126, 113, 113); */
    }
</style>
