import { all, fork, put, call, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';

// function logInAPI (data) {
//   return axios.post('/api/login', data);
// }

function* logIn(action) {
  try {
    // call 동기 blocking await 와 같은 느낌?
    // axios.post().then(~) 느낌
    // fork 비동기 non-blocking 함수 호출 실행 후 그다음 줄로 넘어가 실행됨.
    // axios.post(~) 느낌
    // const result = yield call(logInAPI, action.data);
    // put 은 dispatch 라 생각
    yield delay(1000);
    yield put({
      type : 'LOG_IN_SUCCESS',
      data : action.data
    });
  } catch(err) {
    yield put({
      type : 'LOG_IN_FAILURE',
      data : err.reponse.data
    });
  }
}

// function logOutAPI () {
//   return axios.post('/api/logOut');
// }

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type : 'LOG_OUT_SUCCESS',
    });
  } catch(err) {
    yield put({
      type : 'LOG_OUT_FAILURE',
      data : err.reponse.data
    });
  }
}

function* watchLogIn() {
  yield takeLatest('LOG_IN_REQUEST' ,logIn);
}
// takeLatest 중복 응답을 취소
// throttle 2초 동안 post 요청 한번만 보내도록 설정
function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}


export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
  ]);
}