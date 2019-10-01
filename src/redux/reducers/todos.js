import {
    ADD_TODO,
    UPDATE_TODO,
    REMOVE_TODO
} from '../types/todoTypes';

const initialState = {
    name: 'todo'
};

function Todos(state = initialState, action) {
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

export default Todos;
