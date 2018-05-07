import types from "../constants";

const todos = (state = [], action) => {
    switch (action.type) {
        case types.SUBMIT_TODO:
            return [
                ...state,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false
                    },
                ];
        case types.DELETE_TODO:
            return state.filter(todo => (
                        todo.id !== action.id
                    ));
        case types.TOGGLE_TODO:
            return state.map(todo =>
                (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo
            );
         case types.EDIT_TODO:
             return state.map(todo =>
                 (todo.id === action.id) ? {...todo, text: action.text} : todo
             );
        default:
            return state;
    }
}
export default todos;