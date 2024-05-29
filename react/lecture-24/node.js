const redux = require('redux');
const createStore = redux.createStore;

/* Constant */

const BUY_ICECREAM = 'BUY_ICECREAM';
const BUY_CAKE = 'BUY_CAKE';
const BUY_COOKIE = 'BUY_COOKIE';

function buy_icecream(){
    return {
        type: BUY_ICECREAM,
        info: 'First redux action'
    }
}
function buycake(){
    return {
        type: BUY_CAKE,
        info: 'buying cake'
    }
}
function buyCookie(){
    return {
        type: BUY_COOKIE,
        info: 'buying cookie'
    }
}
const initialState = {
    no_of_icecreams: 20,
    no_of_cakes: 10,
    no_of_cookies: 15
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
               ...state,
                no_of_icecreams: state.no_of_icecreams - 1
            }
            case BUY_CAKE:
                return {
                   ...state,
                    no_of_cakes: state.no_of_cakes - 1
                }
                case BUY_COOKIE:
                    return {
                       ...state,
                        no_of_cookies: state.no_of_cookies - 1
                    }
        default:
            return state;
    }
}

const store = createStore(reducer);

console.log('Initial state', store.getState());

store.subscribe(() =>console.log('Updated state', store.getState()));

store.dispatch(buy_icecream());
store.dispatch(buyCookie());
store.dispatch(buycake());
