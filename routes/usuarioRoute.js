import express from 'express';
<<<<<<< HEAD
import { formularioLogin, formularioRegistro } from '../controllers/usuarioControllers.js'; 


=======
import {formularioLogin, formularioRegistro} from '../controllers/userController.js'
>>>>>>> 8e982e57f9b6d5e5e4bca6860d89cd821e7940a7
const router = express.Router();

//Routing

router.get('/login', formularioLogin);
router.get('/registro', formularioRegistro);
<<<<<<< HEAD

=======
>>>>>>> 8e982e57f9b6d5e5e4bca6860d89cd821e7940a7


export default router;