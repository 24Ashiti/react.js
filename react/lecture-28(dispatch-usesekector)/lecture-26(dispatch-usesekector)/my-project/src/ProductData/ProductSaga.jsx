import {put ,takeEvery} from 'redux-saga/effects'
import { PRODUCT_ADD } from './ProductConstant'
import { PRODUCT_SET } from './ProductConstant';

function* getProduct () {
    let productList = yield fetch("http://localhost:3000/Product");
    data =  yield productList.json();
    console.warn(data);
    yield put ({type :PRODUCT_SET, data})
    console.warn("ProductData Called ", data);
}

function* productSaga (){
    yield takeEvery(PRODUCT_ADD, getProduct)
}

export default productSaga