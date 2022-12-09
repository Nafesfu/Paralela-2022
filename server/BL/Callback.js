import { Net } from "../Net/Net.js";

export async function Verify(code, state, error){
    let data = null;
    let rO = new Net.Operacion(0, 'Operación Exitosa.');
    try{

    }catch(ex){
        Net.Log.crearArchivoLog(JSON.stringify(ex), 'Verify');
        if(ex instanceof Net.Exception) rO = new Net.Operacion(ex.codError, ex.message);
        else rO = new Net.Operacion(-1, 'Error interno.');
    }
    return { rO, data };
}