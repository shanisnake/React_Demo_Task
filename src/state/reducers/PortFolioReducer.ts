import { ActionType } from "../action-types";
import { fundsInitialState } from "../../type/FundsReducer";

export const INITIAL_STATE: fundsInitialState = {
  mutualFund: null,
  exchangeTradedFund: null,
};

export default (
  state: fundsInitialState = INITIAL_STATE,
  action: any
): fundsInitialState => {
  switch (action.type) {
    //LOADING EVENTS START HERE
    case ActionType.MUTUALFUND:
      return { ...state, mutualFund: action.payload };
    case ActionType.EXCHANGETRADEDFUND:
      return { ...state, exchangeTradedFund: action.payload };
    default:
      return state;
  }
};
