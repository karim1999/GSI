const initialState = {
    loggedIn: false,
    user: {},
    token: ""
};

export const currentUser = (state = initialState, action) => {
    switch(action.type){
        case "SET_USER":
            return { ...state, user: action.user, loggedIn: true, token: action.token}
        default:
            return state;
    }
};

export const setUser = (user, token) => ({
    type: 'SET_USER',
    user,
    token
})