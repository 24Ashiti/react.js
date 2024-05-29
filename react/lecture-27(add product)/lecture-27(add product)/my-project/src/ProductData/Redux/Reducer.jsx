import { ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART } from "./Constant";


const Reducer = (data=[],action) =>{
    switch(action.type){
        case ADD_TO_CART:
            console.warn('add to cart called',action);
            return[action.data, ...data]
            
            case REMOVE_TO_CART:
                console.warn('remove to cart called',action);
                // data.length = data.length -1
                data.length = data.length ? data.length -1 : []
                return[...data]

                case EMPTY_CART:
                    console.warn("empty cart",action);
                    return data=[]
                    default:return data
            }
            
        }

        export default Reducer