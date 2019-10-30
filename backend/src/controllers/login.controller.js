import jwt from 'jsonwebtoken';

const login = (req, res) => {
    const { email, password } = req.body; // TODO password hash
    const user = {
        email,
        password
    }; // TODO get user
    const accessToken = jwt.sign(user, process.env.Access_TOKEN_SECRET);
    res.json(accessToken);
};

const logout = (req, res) => {};

const register = (req, res) => {};

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401);

    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403);
        req.user = user;
        return next();
    });
};

export default {
    login,
    logout,
    register,
    authenticate
};
