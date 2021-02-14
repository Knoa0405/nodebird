import { all, fork, call, take, put } from 'redux-saga';
import axios from 'axios';

function logInAPI () {
  return axios.post('/api/login');
}

function* logIn() {
  try {
    // call 동기 blocking await 와 같은 느낌?
    // axios.post().then(~) 느낌
    // fork 비동기 non-blocking 함수 호출 실행 후 그다음 줄로 넘어가 실행됨.
    // axios.post(~) 느낌
    const result = yield call(logInAPI);
    // put 은 dispatch 라 생각
    yield put({
      type : 'LOG_IN_SUCCESS',
      data : result.data
    });
  } catch(err) {
    yield put({
      type : 'LOG_IN_FAILURE',
      data : err.reponse.data
    });
  }
}
// 이벤트 리스너 같은 느낌?
function* watchLogin() {
  yield take('LOG_IN_REQUEST' ,logIn);
}

function* watchLogOut() {
  yield take('LOG_OUT_REQUEST');
}

function* watchAddPost() {
  yield take('ADD_POST_REQUEST');
}

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchAddPost),
  ]);
}