import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { mutualFund, exchangeTradedFund } from "../../services/MockData";

export const mutualFundAcction = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ActionType.MUTUALFUND,
        payload: mutualFund,
      });
    } catch (e: any) {
      console.log("error");
    }
  };
};
export const exchangeFundAcction = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: ActionType.EXCHANGETRADEDFUND,
        payload: exchangeTradedFund,
      });
    } catch (e: any) {
      console.log("error");
    }
  };
};
