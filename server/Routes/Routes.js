import express from 'express';
import V1Routes from './V1/V1Routes.js'

const router = express.Router();

export default () => {
    router.use('/v1', V1Routes());

    return router;
}