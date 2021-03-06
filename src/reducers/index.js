// Redux: Reducer Function
const reducer = (state, action) => {

    // Action Types
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                isLogin: true,
                user: action.user,
            }
        default:
            return state;
    }
};

export default reducer;
