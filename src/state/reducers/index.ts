import { combineReducers } from "redux";
import FundsReducer from "./PortFolioReducer";

const reducers = combineReducers({
  portFolio: FundsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
