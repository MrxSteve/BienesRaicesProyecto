import express from 'express';
import usuarioRoute from './routes/usuarioRoute.js';

// Crear la app
const app = express();


//Habilitar pug
app.set('view engine', 'pug');
app.set('views', './views'); //indica donde se encuentran las vistas

//Carpeta publica (archivos estaticos)
app.use(express.static('public')); //indica donde se encuentran los archivos estaticos


//Routing
app.use('/auth', usuarioRoute);


//Definir un puerto y arrancar proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});