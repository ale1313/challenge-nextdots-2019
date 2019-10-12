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
  let { type, data, e } = action;
  switch (type) {
    case FETCH_START:
      return Object.assign({}, state, {
        fetchIsLoading: true,
        inputText: data
      });
    case FETCH_SUCCESS:
      return Object.assign({}, state, {
        fetchIsLoading: false,
        data
      });
    case FETCH_ERROR:
      return Object.assign({}, state, {
        fetchIsLoading: false,
        fetchError: e
      });
    default:
      return state;
  }
};

export default fetchReducer;
