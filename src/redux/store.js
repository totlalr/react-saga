import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

import createSagaMiddleware from "redux-saga";
import mySaga from "./saga";

const sagaMiddelWare = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddelWare));

export default store;

//then run the saga

sagaMiddelWare(mySaga);
