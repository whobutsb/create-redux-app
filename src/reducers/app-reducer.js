import * as types from '../actions/action-types';

const initialState = {
    name: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case types.NEW_ACTION:
            return {
                ...state, 
                name: action.name
            };
        default:
            return state;
    }
};
