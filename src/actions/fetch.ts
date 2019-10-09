import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "./types";
import CocktailService from "../provider/services/CocktailService";

export const fetchStart = () => {
  type: FETCH_START;
};

export const fetchSuccess = data => {
  type: FETCH_SUCCESS;
  data;
};

export const fetchError = e => {
  type: FETCH_ERROR;
  e;
};

export function fetch() {
  return async (dispatch, getState) => {
    try {
      const fetchIsLoading = getState().fetchReducer.fetchIsLoading;
      if (!fetchIsLoading) {
        dispatch(fetchStart());
        let cocktails: any = await CocktailService.getCocktails();
        let infoCocktails: any = await CocktailService.getAllCocktailWithInfo(
          cocktails.drinks
        );
        let allCocktails = await Cocktail.prepareToSave(infoCocktails);
        dispatch(fetchSuccess(allCocktails));
      }
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
}
