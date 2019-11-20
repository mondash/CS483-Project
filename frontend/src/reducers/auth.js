const initialState = {
    isAuthenticated: false,
    accessToken: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'AUTHENTICATE':
            return Object.assign({}, state, {
                isAuthenticated: true,
                accessToken: action.accessToken
            });
        case 'UNAUTHENTICATE':
            return Object.assign({}, state, {
                isAuthenticated: false,
                accessToken: null
            });
        default:
            return state;
    }
};
