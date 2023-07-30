import { call, put } from "redux-saga/effects";
import requestGetNews from "./requests";
import { setLoading, setNews } from "./newsSlice";

export default function* handleGetNews(action) {
  const { payload, type } = action;
  try {
    yield put(setLoading(true));
    const response = yield call(requestGetNews, payload); // call api <=> requestGetNews(payload) // than số thứ 2 là param của hàm requestGetNews
    const { hits } = response.data;

    yield put(setNews(hits)); // lưu vào store
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
