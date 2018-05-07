import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/addTodo/';
import actions from './actions/';
import TodoList from './components/todoList';

export const App = ({ submitTodo, todos, deleteTodo, toggleTodo, editTodo }) => (
    <div>
        <h1>Tameem's Todo List</h1>
        <AddTodo submitTodo={submitTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
    </div>
);

App.propTypes = {
    submitTodo: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        },
    )).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,

};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
    submitTodo: (text) => {
        if (text) {
            dispatch(actions.submitTodo(text));
        }
    },
    deleteTodo: (id) => {
        dispatch(actions.deleteTodo(id));
    },
    toggleTodo: (id) => {
        dispatch(actions.toggleTodo(id));
    },
    editTodo: (id, text) => {
        if(text){
            dispatch(actions.editTodo(id, text));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);