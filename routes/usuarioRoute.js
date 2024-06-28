import express from 'express';
import {formularioLogin} from '../controllers/userController.js'
const router = express.Router();

//Routing

router.get('/login', formularioLogin);


export default router;