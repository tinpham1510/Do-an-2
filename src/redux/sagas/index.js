import { takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../Components/api';
function* fetchPostSaga(action){
    const posts = yield call(api.fetchPosts);
    console.log('[Posts]', posts);
}
function* mySaga(){
 yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga)


}

export default mySaga;