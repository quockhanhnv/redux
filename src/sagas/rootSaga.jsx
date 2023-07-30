import { all, fork } from "redux-saga/effects";
import newsSaga from "./news/sagas";

export default function* rootSaga() {
  yield all([fork(newsSaga)]);
}
