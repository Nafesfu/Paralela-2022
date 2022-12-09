export default class EstrucSalida{
    data = null;
    estadoSalida = null;
    mensaje = null;

    constructor(data = [], estadoSalida = false, mensaje = ''){
        this.data = data;
        this.estadoSalida = estadoSalida;
        this.mensaje = mensaje;
    }
}