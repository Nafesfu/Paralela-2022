import express from 'express';
import * as Auth from '../../Integracion/Auth.js';
import { Net } from '../../Net/Net.js';
const router = express.Router();

export default () => {

    router.post('/request', Net.Authorization.authApiKey, Auth.Request);
    router.get('/:token/jwt', Net.Authorization.authApiKey, Auth.JWT);

    return router;
}