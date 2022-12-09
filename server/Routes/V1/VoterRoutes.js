import express from 'express';
import * as Voter from '../../Integracion/Voter.js';
import { Net } from '../../Net/Net.js';

const router = express.Router();

export default () => {

    router.post('/vote', Net.Authorization.authToken, Voter.Vote);
    router.get('/:pollToken/results', Net.Authorization.authToken, Voter.Results);
    router.get('/polls', Net.Authorization.authToken, Voter.Polls);

    return router;
}