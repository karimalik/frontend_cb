import { all, takeLatest, put } from "redux-saga/effects";
import { push } from "react-router-redux";
import {
  APPLICATION_IS_READY,
  LOGOUT,
  AFTER_LOGIN,
} from "./ApplicationActions";

function handleClientInitiated() {
  console.info("app ready");
}

function* handleAfterLogin({ payload }) {
  if (payload.values.username && payload.values.password)
    yield put(push("dashboard"));
}

function* handleLogout() {
  yield put(push("login"));
}

export default function* () {
  yield all([
    takeLatest(APPLICATION_IS_READY, handleClientInitiated),
    takeLatest(LOGOUT, handleLogout),
    takeLatest(AFTER_LOGIN, handleAfterLogin),
  ]);
}
