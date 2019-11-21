const initialState = {
    info: {
        name: null,
        email: null,
        startDate: null
    },
    isAuthenticated: false,
    accessToken: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_INIT':
            return {
                ...state,
                loading: true
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                accessToken: action.accessToken,
                isAuthenticated: true
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'REGISTER_INIT':
            return {
                ...state,
                loading: true
            };
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                accessToken: action.accessToken
            };
        case 'REGISTER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'LOGOUT':
            return {
                ...state,
                info: {
                    name: '',
                    email: ''
                },
                accessToken: null,
                isAuthenticated: false
            };
        case 'GET_INFO_INIT':
            return {
                ...state,
                loading: true
            };
        case 'GET_INFO_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                info: {
                    ...action.info
                }
            };
        case 'GET_INFO_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};
