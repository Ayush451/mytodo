import React from 'react';
import Todo from './Todo';
const TodoList = ({todos,setTodos,filteredTodos})=>{



    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) =>(
                    <Todo 
                    text={todo.text} 
                    key={todo.id}
                    todos={todos}
                    todo={todo}
                    setTodos={setTodos}
                    filteredTodos={filteredTodos}/>
                ))}
            </ul>
        </div>
    )
}
export default TodoList;