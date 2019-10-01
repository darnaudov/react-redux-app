import {
    ADD_TODO,
    UPDATE_TODO,
    REMOVE_TODO
} from '../types/todoTypes';

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
