import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_SMURF = 'FETCH_SMURF';
export const SUCCESS_SMURF = 'SUCCESS_SMURF';
export const FAILED_SMURF = 'FAILED_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';
export const ADD_SMURF = 'ADD_SMURF';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export function getSmurf() {
  return dispatch => {
    dispatch({ type: FETCH_SMURF });
      axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
          dispatch({ type: SUCCESS_SMURF, payload: res.data });
        })
        .catch(err => dispatch({ type: FAILED_SMURF, payload: err}))
  };
};

export function deleteSmurf(id) {
  return dispatch => {
    dispatch({ type: DELETE_SMURF });
      axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
          dispatch({ type: SUCCESS_SMURF, payload: res.data });
        })
        .catch(err => dispatch({ type: FAILED_SMURF, payload: err}))
  };
};

export function addSmurf(smurf) {
  return dispatch => {
    dispatch({ type: ADD_SMURF });
      axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        dispatch({  type: SUCCESS_SMURF, payload: res.data})
      console.log('New Smurf', smurf)
  })
      .catch(err => dispatch({ type: FAILED_SMURF, payload: err}))
}
}