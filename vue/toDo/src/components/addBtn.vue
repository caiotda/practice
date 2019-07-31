<template>
    <div 
        id = "addBtn"
        @click = "parentAdd">
        <slot>+</slot>
    </div>
</template>

<script>
export default {
    methods: {
        parentAdd() {
            this.$emit('addMyItem');
        }
    }
}
</script>

<style>
    #addBtn {
        /* box-shadow: 0.3em 0.25em; */
        font-family: 'Courier New', Courier, monospace;        
        transition: all ease 0.3s;
        color: black;
        background-color: rgb(85, 216, 85);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0em 5em;
        border-radius: 2em;
        width: 5em;
        height: 2.5em;
        margin-top : 2em
    }

    #addBtn:hover {
        /* height: 2.5em;
        width: 7em; */
        /* box-shadow: 0px 0px;; */
        background-color: forestgreen;
    }
</style>
