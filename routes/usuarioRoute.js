import express from 'express';
import {formularioLogin, formularioRegistro, formularioOlvidePassword} from '../controllers/userController.js'
const router = express.Router();

//Routing

router.get('/login', formularioLogin);
router.get('/registro', formularioRegistro);
router.get('/olvide-password', formularioOlvidePassword);


export default router;