import { types } from "../types/types";

const initialState = {
  logged: false,
};

interface Action {
  type: string;
  payload: object;
}

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
      };
    case types.logout:
      return {
        ...state,
        logged: false,
      };
    default:
      return state;
  }
};
