import express from 'express';
import CallbackRoutes from './CallbackRoutes.js';
import AuthRoutes from './AuthRoutes.js';
import VoterRoutes from './VoterRoutes.js';

const router = express.Router();

export default () => {
    router.use('/auth', AuthRoutes());
    router.use('/callback', CallbackRoutes());
    router.use('/voter', VoterRoutes());

    return router;
}