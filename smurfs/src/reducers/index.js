import { FETCH_SMURF, SUCCESS_SMURF} from '../actions';

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

export const sumrfReducer = (state = initialState, action) => {
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
        smurfs: action.payload
      };
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
