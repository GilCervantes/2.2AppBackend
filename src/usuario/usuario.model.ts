import * as mongoose from 'mongoose';

//Se encarga de crear la base de datos
export const UserSchema = new mongoose.Schema({

    //Definimos la coleccion de la base de datos.
    nombre:{type:String, required:true},
    apellido:{type:String, required:true},
    matricula:{type:Number, required:true}

});

//Sen encarga de mostrar los datos
export interface Usuario extends mongoose.Document{
    id: string;
    nombre: string;
    apellido: string;
    matricula: number;
}