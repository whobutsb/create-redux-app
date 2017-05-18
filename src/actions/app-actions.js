import * as types from './action-types';

export function newAction(){
  return (dispatch, getState) => {
    dispatch({
        type: types.NEW_ACTION, 
        name: 'Create Redux App'
    });
  };
}
