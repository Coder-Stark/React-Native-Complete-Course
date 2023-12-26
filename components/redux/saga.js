import {takeEvery, put} from 'redux-saga/effects';
import { USER_LIST, SET_USER_DATA } from './constants';
function* userList(){
    const url = 'https://dummyjson.com/users';
    let data = yield fetch(url);
    data = yield data.json();
    // console.warn('Data in Saga',data);
    yield put({type: SET_USER_DATA, data: data});
}

function* SagaData(){
    yield takeEvery(USER_LIST, userList);
}

export default SagaData;