import {
  GET_DRINKS_START,
  GET_DRINKS_SUCCESS,
  GET_DRINKS_ERROR
} from "../actions/types";

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

const drinksReducer = (state = initialState, action: any) => {
  let { type, data, err } = action;
  switch (type) {
    case GET_DRINKS_START:
      return {
        ...state,
        fetchIsLoading: true,
        inputText: data
      };
    case GET_DRINKS_SUCCESS:
      return {
        ...state,
        fetchIsLoading: false,
        data
      };
    case GET_DRINKS_ERROR:
      return {
        ...state,
        fetchIsLoading: false,
        fetchError: err
      };
    default:
      return state;
  }
};

export default drinksReducer;
