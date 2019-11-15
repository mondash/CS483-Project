import express from 'express';

import users from '../controllers/user.controller';

const router = express.Router();

// TODO remove or make protected route
router.route('/').get(users.getAllUsers);

router
    .route('/login')
    .all(users.findUserByEmailPassword)
    .all(users.createToken)
    .post(users.login);

router
    .route('/register')
    .all(users.createUser)
    .all(users.createToken)
    .post(users.login);

router
    .route('/info')
    .all(users.authenticate)
    .all(users.findUserById)
    .get(users.getUser)
    .patch(users.updateUser);

export default router;
