import axios from "axios";

import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { fetchUsersRequest } from "./users/userActions";

const getDataFromAPI = async () => {
  var result = await axios.get("https://fakestoreapi.com/products");
  return result;
};

function* fetchUsers(action) {
  try {
    debugger;
    const finalData = yield call(getDataFromAPI);
    yield put({ type: "FETCH_USER-SUCCESS", payload: finalData.data });
  } catch (error) {
    yield put({ type: "FETCH_USER-FAILER", payload: error.message });
  }
}

function* mySaga() {
  yield takeEvery("FETCH_USER-REQUEST", fetchUsers);
}

export default mySaga;
