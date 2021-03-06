import React from 'react';


function Form({inputText,setInputText,todos,setTodos,setStatus,filteredTodos}) {
    const inputTextHandler = (event)=>{
        setInputText(event.target.value);
    }
    const submitTodoHandler = (event)=>{
        event.preventDefault();
        setTodos([...todos, {text : inputText, completed : false, id : Date.now() } ]);
        setInputText('');
    }

    const statusHandler = (event) =>{
        setStatus(event.target.value)
    }

    return (
        <div>
            <form>
                <input value={inputText} onChange={inputTextHandler}  type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>           
        </div>
    )
}

export default Form;
