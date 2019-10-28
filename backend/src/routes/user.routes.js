import express from 'express';

import * as users from '../controllers/user.controller';

const router = express.Router();

router
    .route('/')
    .get(users.getAllUsers)
    .post(users.createUser);

router
    .route('/:id')
    .all(users.findUser)
    .get(users.getUser)
    .patch(users.updateUser)
    .delete(users.deleteUser);

export default router;
