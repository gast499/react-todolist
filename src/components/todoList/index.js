import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

const TodoList = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
    let input;
    const divStyle = {display: "none"};
    function edit() {
        if(document.getElementById("edit-toggle").innerHTML == '<i class="fa fa-toggle-off"></i>'){
            document.getElementById("form-div").style = "display: inline";
            document.getElementById("edit-toggle").innerHTML = '<i class="fa fa-toggle-on"></i>';
        }
        else {
            document.getElementById("form-div").style = "display: none";
            document.getElementById("edit-toggle").innerHTML = '<i class="fa fa-toggle-off"></i>';

        }
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    const todoItems = todos.map(todo => {
        return (
        <li className="todo-item" onClick={() => toggleTodo(todo.id)} key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
            <span className="todo-text">{todo.text}</span>
            <span onClick={stopPropagation}><span id="edit-toggle" onClick={()=>edit()}><i className="fa fa-toggle-off"></i></span></span>
            <div id="form-div" style={divStyle}>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        editTodo(todo.id, input.value);
                        input.value = '';
                    }}>
                    <input ref={(element) => {
                        input = element;
                    }} onClick={stopPropagation}/>
                    <button type="Submit" onClick={stopPropagation}><i className="fa fa-check"></i></button>
                </form>
            </div>
            <span className="todo-delete" onClick={() => deleteTodo(todo.id)}><i className="fa fa-trash"></i></span>
        </li>
        )});

    return (
        <ul className="todo-list">
            <FlipMove duration={250} easing="ease-out">
                {todoItems}
            </FlipMove>
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        },
    )).isRequired,
    deleteTodo: PropTypes.func.isRequired,

};
export default TodoList;