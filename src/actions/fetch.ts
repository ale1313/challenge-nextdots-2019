import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "./types";
import DrinkService from "../provider/services/DrinkService";

export const fetchStart = (data: string) => {
  return {
    type: FETCH_START,
    data
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

export function fetch(data: string) {
  return async (dispatch: Function, getState: any) => {
    try {
      const fetchIsLoading = getState().fetchReducer.fetchIsLoading;
      if (!fetchIsLoading) {
        dispatch(fetchStart(data));
        const text = getState().fetchReducer.inputText;
        let drinks: any = await DrinkService.getDrinks(text);
        dispatch(fetchSuccess(drinks));
      }
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
}
