import { FETCH_SMURF, SUCCESS_SMURF, FAILED_SMURF } from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false, 
  error: null
}
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF:
      return{
        ...state,
        error:'',
        fetchingSmurfs: true
      };
    case SUCCESS_SMURF:
      return{
        ...state,
        fetchingSmurfs: false,
        addingSmurf: true,
        smurfs: action.payload
      };
      case FAILED_SMURF:
        return {
          fetchingSmurfs: false,
          error: 'Smurfs not fetched!'
        }
    default:
      return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
