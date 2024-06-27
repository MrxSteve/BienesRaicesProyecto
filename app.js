import express from 'express';
import router from './routes/usuarioRoute.js';

// Crear la app
const app = express();

//Routing
app.use('/', router);

//Definir un puerto y arrancar proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

//Prueba Isma
console.log('Isma 2');