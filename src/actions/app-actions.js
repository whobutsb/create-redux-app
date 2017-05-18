import * as types from './action-types';

export function newAction(){
    return {
        type: types.NEW_ACTION, 
        name: 'Create Redux App'
    }
}
