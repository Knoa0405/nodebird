import { all, fork, call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

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

function* watchAddPost() {
  yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
  ]);
}
