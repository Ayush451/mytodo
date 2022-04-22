import React from 'react';

const Todo =({text,todos,setTodos,todo}) =>{
    //Events
    const deleteHandler =() =>{
        setTodos(todos.filter((el)=> el.id !== todo.id)) //fiter function to check if the id equal to el.id if not it deletes it
    }



    const completeHander =() =>{
        setTodos(todos.map(item => {
            if (item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))

    }
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed" : " "}`}>{text}</li>
            <button onClick ={completeHander}className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick ={deleteHandler}className='trash-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    );
}

export default Todo;