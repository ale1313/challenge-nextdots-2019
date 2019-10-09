import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions/types";

interface initialState {
  data: object;
  fetchIsLoading: boolean;
  fetchError: string;
}

const initialState = {
  data: null,
  fetchIsLoading: false,
  fetchError: null
};

const fetchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_START:
      return Object.assign({}, state, {
        fetchIsLoading: true
      });
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        fetchIsLoading: false,
        data: action.data
      });
    case FETCH_ERROR:
      return Object.assign({}, state, {
        fetchIsLoading: false,
        fetchError: action.error
      });
    default:
      return state;
  }
};

export default fetchReducer;
