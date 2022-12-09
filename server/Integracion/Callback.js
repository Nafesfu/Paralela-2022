import EstrucSalida from "./EstrucSalida.js";
import * as CallBack from "../BL/Callback.js";
import { Net } from "../Net/Net.js";

export async function Verify(req, res){
    let code = req.query.code;
    let state = req.query.state;
    let error = req.query.error;

    let resp = [];
    let estadoSalida = false;
    let mensaje = 'Operación Exitosa.';
    
    try{
        let {data, rO} = await CallBack.Verify(code, state, error);
        resp = data[0];
        if(rO.codOperacion == 0) estadoSalida = true;
    }catch (ex){
        Net.Log.crearArchivoLog(JSON.stringify(ex), 'Callback.Verify');
        mensaje = 'Error Interno.';
    }
    let salida = new EstrucSalida(resp, estadoSalida, mensaje);
    res.json(salida);
}