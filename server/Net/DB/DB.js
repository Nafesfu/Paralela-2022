import * as dotenv from 'dotenv';
import * as mysql from 'mysql';
import Log from '../Log/Log.js';
dotenv.config();

export default class DB{
    
    DBUSER = null;
    DBPASS = null;
    DBHOST = null;
    DBPORT = null;
    DBCATALOG = null;

    connection = null;

    constructor(){
        this.DBUSER = process.env.DBUSER || 'root';
        this.DBPASS = process.env.DBPASS || '';
        this.DBHOST = process.env.DBHOST || 'localhost';
        this.DBPORT = process.env.DBPORT || '3306';
        this.DBCATALOG = process.env.DBCATALOG || '';
    }

    abrirConexion(){
        let resultado = true;
        try{
            this.connection = mysql.createConnection({
                host: this.DBHOST,
                port: this.DBPORT,
                user: this.DBUSER,
                password: this.DBPASS,
                database: this.DBCATALOG,
                multipleStatements: true
            })

            this.connection.connect(function (err){
                if(err) {
                    console.log(`Error conexión base de datos: ${err}`);
                    throw err;
                }
            })
        }catch(ex){
            Log.crearArchivoLog(ex, 'DB.abrirConexion');
            resultado = false;
        }
        return resultado;
    }
    
    cerrarConexion(){
        this.connection.end();
    }

    async ejecutarQuery(query, values){
        let response = await new Promise((resolve, reject) =>{
            this.connection.query(
                query,
                values,
                (err, results) => {
                    if(err) {
                        Log.crearArchivoLog(JSON.stringify(err), 'ejecutarProcedure')
                        reject(err);
                    };

                    let resp = [];
                    let param = [];
                    console.log(results);
                    return resolve([], [])
                });
        })
        return [response[0], response[1]];
    }
}