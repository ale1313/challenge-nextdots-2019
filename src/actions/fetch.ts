import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  RESULTS_SHOWING
} from "./types";
import DrinkService from "../provider/services/DrinkService";

export const fetchStart = () => {
  return {
    type: FETCH_START
  };
};

export const fetchSuccess = (data: object) => {
  return {
    type: FETCH_SUCCESS,
    data
  };
};

export const fetchError = (e: string) => {
  return {
    type: FETCH_ERROR,
    e
  };
};

export const resultsShowing = () => {
  return {
    type: RESULTS_SHOWING
  };
};

export function fetch() {
  return async (dispatch: Function, getState: any) => {
    try {
      const fetchIsLoading = getState().fetchReducer.fetchIsLoading;
      const text = getState().fetchReducer.inputText;
      if (!fetchIsLoading) {
        dispatch(fetchStart());
        let drinks: any = await DrinkService.getDrinks(text);
        dispatch(fetchSuccess(drinks));
      }
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
}
