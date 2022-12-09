import EstrucSalida from "./EstrucSalida.js";
import * as Voter from "../BL/Voter.js";
import { Net } from "../Net/Net.js";

export async function Vote(req, res){
    let pollToken = req.body.pollToken;
    let selection = req.body.selection;
    let resp = [];
    let estadoSalida = false;
    let mensaje = 'Operación Exitosa.';
    
    try{
        let {data, rO} = await Voter.Vote(pollToken, selection);
        resp = data[0];
        if(rO.codOperacion == 0) estadoSalida = true;
    }catch (ex){
        Net.Log.crearArchivoLog(JSON.stringify(ex), 'Voter.Vote');
        mensaje = 'Error Interno.';
    }
    let salida = new EstrucSalida(resp, estadoSalida, mensaje);
    res.json(salida);
}

export async function Results(req, res){
    let pollToken = req.params.pollToken;
    let resp = [];
    let estadoSalida = false;
    let mensaje = 'Operación Exitosa.';
    
    try{
        let {data, rO} = await Voter.Results(pollToken);
        resp = data[0];
        if(rO.codOperacion == 0) estadoSalida = true;
    }catch (ex){
        Net.Log.crearArchivoLog(JSON.stringify(ex), 'Voter.Results');
        mensaje = 'Error Interno.';
    }
    let salida = new EstrucSalida(resp, estadoSalida, mensaje);
    res.json(salida);
}

export async function Polls(req, res){
    let resp = [];
    let estadoSalida = false;
    let mensaje = 'Operación Exitosa.';
    
    try{
        let {data, rO} = await Voter.Polls();
        resp = data[0];
        if(rO.codOperacion == 0) estadoSalida = true;
    }catch (ex){
        Net.Log.crearArchivoLog(JSON.stringify(ex), 'Voter.Polls');
        mensaje = 'Error Interno.';
    }
    let salida = new EstrucSalida(resp, estadoSalida, mensaje);
    res.json(salida);
}