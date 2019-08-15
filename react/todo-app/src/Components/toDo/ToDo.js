import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import InputText from '../InputText/InputText';
import Style from './ToDo.module.css';


const ToDo = (props) => {

    const removeTaskHandler = (index) => {
        console.log('To sendo chamado!');
        let newList = [...props.list];
        console.log(newList[0]);
        newList[index].done = !newList[index].done;
        props.updateList(newList);
    }

    const addTaskHandler = (e) => {
        e.preventDefault(); // prevents form from refreshing the page
        const text = e.target.parentNode.firstChild.value;

        if (text.length > 0) {
            const newList = [...props.list];
            newList.push({value: text, done: false});
            props.updateList(newList);
        }
    }

    let toDo = props.list.map( (task, index) => 
        <ToDoItem 
            item={task.value}
            clicked={removeTaskHandler}
            key={index}
            index={index}
            done={task.done}
        />
    )
    return (
        <div className={Style.listContainer}>
            <ul className={Style.list}>
                {toDo}
            </ul>
            <InputText 
                clicked={addTaskHandler}
            />
        <button onClick={props.cleanDoneTasks}>Limpar tarefas</button>
        </div>
    )
}

export default ToDo;