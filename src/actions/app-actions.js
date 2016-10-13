import * as types from './action-types';

export function newAction(){
    return dispatch => {
        dispatch({
            type: types.NEW_ACTION,
            status: true
        });
    };
}
