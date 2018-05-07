import types from '../constants/';

let todoId = 0;

const nextId = () => {
    todoId += 1;
    return todoId;
};

const actions = {
    submitTodo(text) {
        return {
            type: types.SUBMIT_TODO,
            id: nextId(),
            text,
        };
    },
    deleteTodo(id) {
        return {
            type: types.DELETE_TODO,
            id,
        };
    },
    toggleTodo(id) {
        return {
            type: types.TOGGLE_TODO,
            id,
        };
    },
    editTodo(id, text) {
        return {
            type: types.EDIT_TODO,
            id,
            text,
        };
    },
};

export default actions;