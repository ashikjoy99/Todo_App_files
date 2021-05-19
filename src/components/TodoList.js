import React from 'react';
import Todo from './Todo';

function TodoList({todos,setTodos,filteredTodos}) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                {filteredTodos.map((todo)=>{
                    return(
                        <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text}/>
                    )
                })}
                </ul>
            </div>          
        </div>
    )
}

export default TodoList;
