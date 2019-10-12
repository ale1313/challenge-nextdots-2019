import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions/types";

interface initialState {
  data: object;
  fetchIsLoading: boolean;
  fetchError: string;
  inputText: string;
}

const initialState = {
  data: null,
  fetchIsLoading: false,
  fetchError: null,
  inputText: null
};

const fetchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_START:
      return Object.assign({}, state, {
        fetchIsLoading: true,
        inputText: action.data
      });
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        fetchIsLoading: false,
        data: action.data
      });
    case FETCH_ERROR:
      return Object.assign({}, state, {
        fetchIsLoading: false,
        fetchError: action.e
      });
    default:
      return state;
  }
};

export default fetchReducer;
