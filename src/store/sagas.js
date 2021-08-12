import { all } from "redux-saga/effects";
import application from "./Application/ApplicationSagas";

export default function* () {
  yield all([application()]);
}
