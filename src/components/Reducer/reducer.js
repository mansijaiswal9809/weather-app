const reducer = (state,action) => {
if(action.type==='get_city'){
    return state=action.payload;
}else return state="";

}

export default reducer
