import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "../actions/types";

interface initialState {
  fetchIsLoading: boolean;
  fetchError: any;
}

const initialState = {
  fetchIsLoading: false,
  fetchError: null
};

export const request = async () => {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka"
  );
  const json = await response.json();
  return json;
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return Object.assign({}, state, {
        fetchIsLoading: true
      });
    default:
      return state;
  }
};

export default fetchReducer;
