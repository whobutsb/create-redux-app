import * as types from './action-types';
import 'whatwg-fetch';

export function newAction(){
  return dispatch => { 
      return dispatch({
        type: types.NEW_ACTION,
        status: true
      });
  };
}

// Sample AJAX POST with Fetch
// fetch('http://test.com', {
//   method: 'POST',
//   credentials: 'same-origin',
//   headers: new Headers({
//     'Content-Type': 'application/json',
//     // 'X-CSRF-Token': APP.csrf_token
//   }),
//   mode: 'no-cors',
//   body: JSON.stringify({ q: 'reactjs' })
// })
// .then(function(res){
//   return res.json();
// }).then(function(json){
//   console.log(json);
// }).catch(function(err){
//   console.log(err);
// });
