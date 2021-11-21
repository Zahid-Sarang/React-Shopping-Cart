export const reducer = (state,action) => {
    if(action.type === "REMOVE_ITEM"){
        return {
            ...state,
            item: state.item.filter((curElem) => {
                return curElem.id !== action.payload;
            }),
        }
    }
    if(action.type === "ClEAR_CART"){
        return {...state,item: []};
    }

    if (action.type === "INCREMENT") {
        let updatedCart = state.item.map((curElem) => {
            if(curElem.id === action.payload){
                return {...curElem, quantity: curElem.quantity +1};
            }
           return curElem; 
        });
         return {...state, item: updatedCart};
    }
    if (action.type === "DECREMENT"){
        let decrementCart = state.item.map((curElem) => {
            if(curElem.id === action.payload){
                return {...curElem, quantity: curElem.quantity -1};
            }
           return curElem; 
        }).filter((curElem) => curElem.quantity !== 0);
         return {...state, item: decrementCart};
    }
    if(action.type === "GET_TOTAL"){
        let {totalItem} = state.item.reduce((accum,curval) => {
            let {quantity} =curval;
            accum.totalItem += quantity;
            return accum;
        },
        {
         totalItem : 0,
        }
        );
        return {...state,totalItem};
    }
    return state;
};