import {
  GET_DRINKS_START,
  GET_DRINKS_SUCCESS,
  GET_DRINKS_ERROR
} from "./types";
import DrinkService from "../provider/services/DrinkService";

export const getDrinksStart = (data: string) => {
  return {
    type: GET_DRINKS_START,
    data
  };
};

export const getDrinksSuccess = (data: object) => {
  return {
    type: GET_DRINKS_SUCCESS,
    data
  };
};

export const getDrinksError = (err: string) => {
  return {
    type: GET_DRINKS_ERROR,
    err
  };
};

export function getDrinks(data: string, fetchIsLoading: boolean) {
  return async (dispatch: Function, getState: any) => {
    try {
      if (!fetchIsLoading) {
        dispatch(getDrinksStart(data));
        let text: string = getState().drinksReducer.inputText;
        let drinks: any = await DrinkService.getDrinks(text);
        dispatch(getDrinksSuccess(drinks));
      }
    } catch (err) {
      dispatch(getDrinksError(err));
    }
  };
}
