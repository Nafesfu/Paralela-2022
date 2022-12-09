import express from 'express';
import * as CallBack from '../../Integracion/Callback.js'

const router = express.Router();

export default () => {

    router.get('/verify', CallBack.Verify);

    return router;
}