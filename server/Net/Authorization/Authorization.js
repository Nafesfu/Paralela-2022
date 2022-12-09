import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import Exception from '../Exception/Exception.js';

dotenv.config();
export default class Authorization {
    static authToken(req, res, next) {
        const token = req.headers.authorization;
        if (!token)
            return res.status(401).send("Usuario no autorizado")
        jwt.verify(token, process.env.JWT_SEED, (err, decoded) => {
            if (err)
                return res.status(401).send(err)
    
            req.id_user = decoded.id_user
            next()
        })
    }
    static authApiKey(req, res, next) {
        const apiToken = req.headers['X-API-TOKEN'];
        const apiKey = req.headers['X-API-KEY'];
        if (!apiToken || !apiKey)
            return res.status(401).send("Api Token/Key no válidos");

        next();
    }

    static signTokenJWT(idVotacion, nombreVotacion){
        return jwt.sign({
            idVotacion,
            nombreVotacion
        }, process.env.JWT_SEED,
        {
            expiresIn: `${process.env.JWT_EXPIRE}m`
        });
    }
    
    static authTokenJWT(token) {
        let idVotacion = null;
        jwt.verify(token, process.env.JWT_SEED, (err, decoded) => {
            if (err)
                throw new Exception(1, 'Token de Votación no Válido')
    
            idVotacion = decoded.idVotacion;
        })
        return { idVotacion };
    }
}

