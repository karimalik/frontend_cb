import { put } from "redux-saga/effects";
import { loadingData } from "../../store/Application/ApplicationActions";

const defaultResponseFormatter = (response) => response.data;

function* baseHandleRequest(
  requestActions,
  promise,
  actionParams = { triggerModalLoader: false },
  responseFormatter = defaultResponseFormatter
) {
  const { triggerModalLoader, ...otherActionParams } = actionParams;
  if (triggerModalLoader) {
    yield put(loadingData(true));
  }
  try {
    const response = yield promise;
    yield put(
      requestActions.success(responseFormatter(response), otherActionParams)
    );

    return response;
  } catch (e) {
    yield put(requestActions.failure(e, otherActionParams));

    throw e;
  } finally {
    if (triggerModalLoader) {
      yield put(loadingData(false));
    }
  }
}
export function* handleRequest(
  requestActions,
  promise,
  actionParams = { triggerModalLoader: false }
) {
  yield baseHandleRequest(
    requestActions,
    promise,
    actionParams,
    defaultResponseFormatter
  );
}
