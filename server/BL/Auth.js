import { Net } from "../Net/Net.js";

export async function Request(successUrl, failedUrl){
    let data = null;
    let rO = new Net.Operacion(0, 'Operación Exitosa.');
    try{

    }catch(ex){
        Net.Log.crearArchivoLog(JSON.stringify(ex), 'Request');
        if(ex instanceof Net.Exception) rO = new Net.Operacion(ex.codError, ex.message);
        else rO = new Net.Operacion(-1, 'Error interno.');
    }
    return { rO, data };
}

export async function JWT(token){
    let data = null;
    let rO = new Net.Operacion(0, 'Operación Exitosa.');
    try{

    }catch(ex){
        Net.Log.crearArchivoLog(JSON.stringify(ex), 'JWT');
        if(ex instanceof Net.Exception) rO = new Net.Operacion(ex.codError, ex.message);
        else rO = new Net.Operacion(-1, 'Error interno.');
    }
    return { rO, data };
}