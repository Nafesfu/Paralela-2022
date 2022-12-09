import EstrucSalida from "./EstrucSalida.js";
import * as Auth from "../BL/Auth.js";
import { Net } from "../Net/Net.js";

export async function Request(req, res){
    let successUrl = req.body.successUrl;
    let failedUrl = req.body.failedUrl;

    let resp = [];
    let estadoSalida = false;
    let mensaje = 'Operación Exitosa.';
    
    try{
        let {data, rO} = await Auth.Request(successUrl, failedUrl);
        resp = data[0];
        if(rO.codOperacion == 0) estadoSalida = true;
    }catch (ex){
        Net.Log.crearArchivoLog(JSON.stringify(ex), 'Auth.Request');
        mensaje = 'Error Interno.';
    }
    let salida = new EstrucSalida(resp, estadoSalida, mensaje);
    res.json(salida);
}

export async function JWT(req, res){
    let token = req.params.token;

    let resp = [];
    let estadoSalida = false;
    let mensaje = 'Operación Exitosa.';
    
    try{
        let {data, rO} = await Auth.JWT(token);
        resp = data[0];
        if(rO.codOperacion == 0) estadoSalida = true;
    }catch (ex){
        Net.Log.crearArchivoLog(JSON.stringify(ex), 'Auth.JWT');
        mensaje = 'Error Interno.';
    }
    let salida = new EstrucSalida(resp, estadoSalida, mensaje);
    res.json(salida);
}