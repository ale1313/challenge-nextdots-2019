import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  RESULTS_SHOWING
} from "../actions/types";

interface initialState {
  data: object;
  fetchIsLoading: boolean;
  fetchError: string;
  showResults: boolean;
  inputText: string;
}

const initialState = {
  data: null,
  fetchIsLoading: false,
  fetchError: null,
  showResults: false,
  inputText: ""
};

const fetchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_START:
      return Object.assign({}, state, {
        fetchIsLoading: true
      });
    case FETCH_SUCCESS:
      console.log(action.data);
      return Object.assign({}, state, {
        fetchIsLoading: false,
        data: action.data
      });
    case FETCH_ERROR:
      return Object.assign({}, state, {
        fetchIsLoading: false,
        fetchError: action.error
      });
    case RESULTS_SHOWING:
      return Object.assign({}, state, {
        showResults: true
      });
    default:
      return state;
  }
};

export default fetchReducer;
