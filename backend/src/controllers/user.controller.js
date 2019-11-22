import jwt from 'jsonwebtoken';

import User from '../models/user.model';

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getUser = (req, res) => {
    return res.status(200).json({ info: req.user });
};

const createUser = async (req, res, next) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const newUser = await user.save();
        req.user = newUser;
        return next();
    } catch (error) {
        return res.status(400).json({ error });
    }
};

const deleteUser = async (req, res) => {
    try {
        await req.user.remove();
        return res.status(200).json({ message: 'Successfully deleted user' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    if (req.body.name) {
        req.user.name = req.body.name;
    }
    if (req.body.email) {
        req.user.email = req.body.email;
    }
    if (req.body.password) {
        req.user.password = req.body.password;
    }
    try {
        const updatedUser = await req.user.save();
        return res.status(200).json({ info: updatedUser });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const findUserById = async (req, res, next) => {
    let user;
    try {
        user = await User.findById(req.payload.id);
        if (!user) {
            return res.status(404).json({ message: 'Cannot find user with specified id' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    req.user = user;
    return next();
};

const findUserByEmailPassword = async (req, res, next) => {
    let user;
    try {
        // TODO compare password with hash
        user = await User.findOne({ email: req.body.email, password: req.body.password });
        if (!user) {
            return res
                .status(404)
                .json({ message: 'Cannot find user with specified email and password' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    req.user = user;
    return next();
};

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'No token provided' });

    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) return res.status(403).json({ message: err.message });
        req.payload = payload;
        return next();
    });
};

const createToken = (req, res, next) => {
    // eslint-disable-next-line no-underscore-dangle
    const token = jwt.sign({ id: req.user._id }, process.env.ACCESS_TOKEN_SECRET);

    req.token = token;
    return next();
};

const login = (req, res) => {
    return res.status(200).json({ message: 'Login successful', token: req.token });
};

export default {
    getAllUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    findUserById,
    findUserByEmailPassword,
    authenticate,
    createToken,
    login
};
