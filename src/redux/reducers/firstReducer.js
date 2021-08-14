const initialState = {
    name: "",
    email: "",
    avatar: "../resourses/img/user.svg"
};
const userInfo=(state = initialState, action)=>{
    if(action.type==="SET_NAME"){
        return{
            ...state,
            name: action.payload,
        };
    }
    if(action.type==="SET_EMAIL"){
        return{
            ...state,
            email: action.payload,
        };
    }
    if(action.type==="SET_AVATAR"){
        return{
            ...state,
            avatar: action.payload,
        };
    }
    return state;
    
};
export default userInfo;