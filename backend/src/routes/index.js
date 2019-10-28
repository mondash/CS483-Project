import express from 'express';

import * as users from '../controllers/user.controller';

const router = express.Router();

router.use((req, res, next) => {
    console.log("My Router Middleware");
    next();
});

router.route('/users')
    .get(users.getAllUsers)
    .post(users.createUser);

router.route('/users/:id')
    .all(users.findUser)
    .get(users.getUser)
    .patch(users.updateUser)
    .delete(users.deleteUser);

export default router;
