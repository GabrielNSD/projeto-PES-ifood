import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import marketReducer from "./reducers/market";

const rootReducer = combineReducers({
  market: marketReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
