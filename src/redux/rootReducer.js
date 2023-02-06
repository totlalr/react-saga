import { combineReducers } from "redux";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  userstate: userReducer,
});

export default rootReducer;
