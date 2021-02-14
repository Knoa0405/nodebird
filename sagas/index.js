import { all, fork, call, takeLatest, put } from 'redux-saga';
import axios from 'axios';

function logInAPI (data) {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    // call 동기 blocking await 와 같은 느낌?
    // axios.post().then(~) 느낌
    // fork 비동기 non-blocking 함수 호출 실행 후 그다음 줄로 넘어가 실행됨.
    // axios.post(~) 느낌
    const result = yield call(logInAPI, action.data);
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

function logOutAPI () {
  return axios.post('/api/logOut');
}

function* logOut() {
  try {
    const result = yield call(logOutAPI);
    yield put({
      type : 'LOG_OUT_SUCCESS',
      data : result.data
    });
  } catch(err) {
    yield put({
      type : 'LOG_OUT_FAILURE',
      data : err.reponse.data
    });
  }
}

function addPostAPI () {
  return axios.post('/api/post');
}

function* addPost() {
  try {
    const result = yield call(addPostAPI);
    yield put({
      type : 'ADD_POST_SUCCESS',
      data : result.data
    });
  } catch(err) {
    yield put({
      type : 'ADD_POST_FAILURE',
      data : err.reponse.data
    });
  }
}
// 다양한 이펙트가 있기 때문에 원리를 알아두면 좋다.
// 이벤트 리스너 같은 느낌?
function* watchLogin() {
  yield takeLatest('LOG_IN_REQUEST' ,logIn);
}
// takeLatest 중복 응답을 취소
// throttle 2초 동안 post 요청 한번만 보내도록 설정
function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
  yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchAddPost),
  ]);
}
