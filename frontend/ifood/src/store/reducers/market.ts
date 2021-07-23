import { CHOOSE_MARKET } from "../actions/market";

const initialState = {};

const marketReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CHOOSE_MARKET:
      return action.data;
    default:
      return state;
  }
};

export default marketReducer;
