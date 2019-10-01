export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

const initialState = {};

export default function Todos(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            break;
        case UPDATE_TODO:
            break;
        case REMOVE_TODO:
            break;
        
        default:
            return state;
    }
}

export function addTodo() {
    return {
        type: ADD_TODO
    }
}

export function updateTodo() {
    return {
        type: UPDATE_TODO
    }
}

export function removeTodo() {
    return {
        type: REMOVE_TODO
    }
}
