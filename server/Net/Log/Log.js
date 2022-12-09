import { createIfNotExist, padTo2Digits, __dirname } from "../Utils/Utils.js";
import path from 'path';
import fs from 'node:fs';

const __pathLog = path.join(__dirname, '../../../archivos/log');

export default class Log{

    constructor(){
        this.mensaje = '';
    }

    agregarLog(mensaje){
        if(this.mensaje != '') this.mensaje += '\n';
        this.mensaje += mensaje;
    }

    static crearArchivoLog(mensaje, funcion){
        try{
            
            let date = new Date();
            const fileName = `LOG_${date.getFullYear()}${padTo2Digits(date.getMonth() + 1)}${padTo2Digits(date.getDate())}.txt`;
            const filePath = `${__pathLog}/${fileName}`;
            
            createIfNotExist(filePath);

            const structMsg = `${padTo2Digits(date.getDate())}-${padTo2Digits(date.getMonth() + 1)}-${date.getFullYear()} ${padTo2Digits(date.getHours())}:${padTo2Digits(date.getMinutes())}:${padTo2Digits(date.getSeconds())}\t${funcion}\t${mensaje}\n`
            fs.appendFileSync(filePath, structMsg);
        }catch(err){
            console.log('Error al registrar LOG...');
        }
    }
}