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
    };
    return state;
};