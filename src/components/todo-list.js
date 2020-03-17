import React from 'react';
import TodoListItem from './todo-list-item';


const TodoList = (props) => {

    const arrItem = props.todoArr.map((e) => {
            return (
                <li key={e.id} className="list-group-item">
                    <TodoListItem changeData={props.changeTodoList}
                                  item={e} 
                                  changeDone={()=>props.changeDone(e.id)}/>
                </li>
            )
        })
    
    return(
        <div className="mr-5 mt-5 todo-list">
            <ul>
                {arrItem}
            </ul>
        </div>
    )
}

export default TodoList;