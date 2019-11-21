import fetch from 'Src/Fetch';

// TODO export types?

const loginInit = () => ({
    type: 'LOGIN_INIT'
});

const loginSuccess = accessToken => ({
    type: 'LOGIN_SUCCESS',
    accessToken
});

const loginFailure = error => ({
    type: 'LOGIN_FAILURE',
    error
});

const login = payload => {
    return async dispatch => {
        dispatch(loginInit);

        try {
            const response = await fetch('POST', '/users/login', payload);

            if (!response.ok) {
                throw new Error('Could not connect to server');
            }

            if (response.status === 500) {
                throw new Error('Internal server error');
            }

            if (response.status === 404) {
                throw new Error('Invalid username or password');
            }

            dispatch(loginSuccess(response.token));
        } catch (error) {
            dispatch(loginFailure(error.message));
        }
    };
};

const registerInit = () => ({
    type: 'REGISTER_INIT'
});

const registerSuccess = accessToken => ({
    type: 'REGISTER_SUCCESS',
    accessToken
});

const registerFailure = error => ({
    type: 'REGISTER_FAILURE',
    error
});

const register = payload => {
    return async dispatch => {
        dispatch(registerInit);

        try {
            const response = await fetch('POST', '/users/register', payload);

            if (!response.ok) {
                throw new Error('Could not connect to server');
            }

            if (response.status === 500) {
                throw new Error('Internal server error');
            }

            if (response.status === 400) {
                throw new Error('Could not create user');
            }

            dispatch(registerSuccess(response.token));
        } catch (error) {
            dispatch(registerFailure(error.message));
        }
    };
};

const logout = () => ({
    type: 'LOGOUT'
});

const getInfoInit = () => ({
    type: 'GET_INFO_INIT'
});

const getInfoSuccess = info => ({
    type: 'GET_INFO_SUCCESS',
    info
});

const getInfoFailure = error => ({
    type: 'GET_INFO_FAILURE',
    error
});

const getInfo = () => {
    return async (dispatch, getState) => {
        dispatch(getInfoInit);

        try {
            const accessToken = getState().user.accessToken;

            const response = await fetch('GET', '/users/info', null, {
                Authorization: accessToken
            });

            if (!response.ok) {
                throw new Error('Could not connect to server');
            }

            if (response.status === 500) {
                throw new Error('Internal server error');
            }

            if (response.status === 400) {
                throw new Error('Could not get user info');
            }

            dispatch(getInfoSuccess(response.info));
        } catch (error) {
            dispatch(getInfoFailure(error.message));
        }
    };
};

export { login, register, logout, getInfo };
