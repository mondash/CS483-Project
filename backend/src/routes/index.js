import express from 'express';

import userRoutes from './user.routes';

const router = express.Router();

router.use((req, res, next) => {
    console.log('My Router Middleware');
    next();
});

router.use('/users', userRoutes);

export default router;
