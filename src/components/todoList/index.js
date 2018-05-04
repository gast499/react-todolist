import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

const TodoList = ({ todos, deleteTodo }) => {
    const todoItems = todos.map(todo => (
        <li className="todo-item" onClick={() => deleteTodo(todo.id)} key={todo.id}>
            <span className="todo-text" >{todo.text}</span>
        </li>
    ));

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
        },
    )).isRequired,
    deleteTodo: PropTypes.func.isRequired,
};
export default TodoList;