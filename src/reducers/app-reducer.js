import * as types from '../actions/action-types';
const initialState = {
  status: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case types.NEW_ACTION:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};
