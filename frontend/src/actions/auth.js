const authenticate = token => ({
    type: 'AUTHENTICATE',
    accessToken: token
});

const unauthenticate = () => ({
    type: 'UNAUTHENTICATE'
});

export { authenticate, unauthenticate };
