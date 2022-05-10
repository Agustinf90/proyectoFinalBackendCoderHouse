import mongoose from "mongoose";
import * as model from './models/estudiantes.js';

const est = [
    { nombre: 'Pedrox', apellido: 'Meix', edad: 212, dni: '31155897', curso: '1A', nota: 7 },
    { nombre: 'Anax', apellido: 'Gonzalezx', edad: 322, dni: '27651876', curso: '1A', nota: 8 },
    // { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
    // { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
    // { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
    // { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
    // { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
    // { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
    // { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
    // { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
];


( async () => {
    
    const CS = 'mongodb://localhost:27017/alumnos';
    try {
        await mongoose.connect(CS);
        console.log("DB CONNECTED!");
        
        let response = await model.alumnos.insertMany(est)
        console.log(response);

        // let response = await model.alumnos.create({est})


        // response = await model.alumnos.find({}).sort({nombre: 1}).skip(1).limit(1)
        

        // response = await model.alumnos.updateOne({nombre: "Pedrox22"}, {$set:{apellido:"gomez", curso: "3B"}})


        


        // response = await model.alumnos.deleteOne({nombre: "Pedrox22"})
        

        response = await model.alumnos.find({})
        console.log(response)
        // response = await model.estudiantes.find({}).select(["nombre","apellido","-_id"])
        // console.log(response)

        // response = await model.estudiantes.find({}).select(["nombre","apellido","-_id"]).sort({apellido: -1})
        // console.log(response)


    } catch (e) {
        console.log("error: ", e);
    }
})();