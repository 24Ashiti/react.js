import { BUY_DOSA } from "./DosaConstant";

const initialState = {
    numOfdosa : 10,
}
 
const DosaReducer = (state = initialState , action ) => {
    switch (action.type) {
        case BUY_DOSA:
            return{
                ...state, 
                numOfdosa:state.numOfdosa - 1 
            }
        default: return state;
    }
}
export default DosaReducer