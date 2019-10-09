import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from "./types";

import { request } from "../reducers/fetchReducer";

export const fetchStart = () => {
  type: FETCH_START;
};

export const fetch = () => {
  return async (dispatch, getState) => {
    const fetchIsLoading = getState().fetchReducer.fetchIsLoading;
    if (!fetchIsLoading) {
      const response = await request;
      console.log(response);
      dispatch(fetchStart());
    }
  };
};
