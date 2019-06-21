import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCH_SMURF = 'FETCH_SMURF';
export const SUCCESS_SMURF = 'SUCCESS_SMURF';

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
  return dispatch = {
    dispatch({ type: FETCH_SMURF });
      axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
          dispatch({ type: SUCCESS_SMURF, payload: res.data.results });
        })
        .catch(err => console.log("Error Type", err))
}
}