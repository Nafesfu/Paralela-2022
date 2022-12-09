import { Net } from "../Net/Net.js";

export async function Vote(pollToken, selection){
    let db = null;
    let data = null;
    let rO = new Net.Operacion(0, 'Operación Exitosa.');
    try{
        db = new Net.DB();
        if(!db.abrirConexion()) throw new Error('Error al abrir DB');
        let dataToken = Net.Authorization.authTokenJWT(pollToken);
        data = await _Vote(db, dataToken.idVotacion, selection);

    }catch(ex){
        Net.Log.crearArchivoLog(JSON.stringify(ex), 'Vote');
        if(ex instanceof Net.Exception) rO = new Net.Operacion(ex.codError, ex.message);
        else rO = new Net.Operacion(-1, 'Error interno.');
    }finally{
        if (db) db.cerrarConexion();
    }
    return { rO, data };
}

export async function _Vote(db, idVotacion, selection){
    return await db.ejecutarQuery('insert into votos (id, seleccion) values (?, ?)', [idVotacion, selection]);
}

export async function Results(pollToken){
    let db = null;
    let data = null;
    let rO = new Net.Operacion(0, 'Operación Exitosa.');
    try{
        db = new Net.DB();
        if(!db.abrirConexion()) throw new Error('Error al abrir DB');
        
        data = await _Results(db);

    }catch(ex){
        Net.Log.crearArchivoLog(JSON.stringify(ex), 'Results');
        if(ex instanceof Net.Exception) rO = new Net.Operacion(ex.codError, ex.message);
        else rO = new Net.Operacion(-1, 'Error interno.');
    }finally{
        if (db) db.cerrarConexion();
    }
    return { rO, data };
}

export async function _Results(db){

}

export async function Polls(){
    let db = null;
    let data = null;
    let rO = new Net.Operacion(0, 'Operación Exitosa.');
    try{
        db = new Net.DB();
        if(!db.abrirConexion()) throw new Error('Error al abrir DB');
        
        data = await _Polls(db);

    }catch(ex){
        Net.Log.crearArchivoLog(JSON.stringify(ex), 'Polls');
        if(ex instanceof Net.Exception) rO = new Net.Operacion(ex.codError, ex.message);
        else rO = new Net.Operacion(-1, 'Error interno.');
    }finally{
        if (db) db.cerrarConexion();
    }
    return { rO, data };
}

export async function _Polls(db){

}
