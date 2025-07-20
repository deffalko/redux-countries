import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./counrties-actions";

const initialState = {
  status: "idle",
  erroe: null,
  list: [],
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        statuis: "loading",
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        statuis: "rejected",
        error: payload,
      };
    case SET_COUNTRIES:
      return {
        ...state,
        status: "received",
        list: payload,
      };
    default:
      return state;
  }
};
