<template>
    <div id="todoList">
        <h1>Lista de tarefas</h1>
            
        <todoItem v-for="item in list" :key="item"
                v-bind:id="item.id"
                v-bind:text="item.text"
                @reduceId = "lessId"/>
        <div id="addTask">
                <input type = "text"
                id="inputTask" 
                v-model = "currentTodo" 
                @keyup.enter="addItem"
                @focus="changeInputSize"
                >
                <addBtn @addMyItem = "addItem">Add</addBtn>
        </div>
    </div>
</template>

<script>

import todoItem from './todoItem'
import addBtn from './addBtn'
export default {
    components:{
        todoItem,
        addBtn
    },
    data() {
        return {
            list: [
                {
                    id: 1,
                    text: 'Limpar a casa',
                },
                {
                    id: 2,
                    text: 'Estudar Vue!'

                }
            ],
            maxId : 2,
        }
    },
    methods: {
        addItem() {
            const newMax = ++this.maxId;
            this.list.push({id: newMax, text: this.currentTodo})
            this.currentTodo = ""
        },
        lessId(id) {
            this.list = this.list.filter(el => el.id != id);
            if (id == this.maxId){
                this.maxId--;
            }

            if (this.list.length == 0)
                this.maxId = 0;
        },
        changeInputSize(event) {
            console.log(event)
        }
    }
}
</script>

<style>


    #todoList {
        border-radius: 40px;
        background-color: rgb(239, 244, 240);
        display: flex;
        flex-direction:column;
        justify-content: flex-start;
        align-items: center;

        width: 50%;
        padding: 1em;
        overflow-y: auto;
    }

    #inputTask {
        width: 50%;
        display:flex;
        flex-direction: row;
        justify-content: center;
    }

    #addTask{
        width: 100%;
        height: 7em;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        
    }

    input {
        border: 1px solid  rgb(90, 174, 230);
    }
</style>
