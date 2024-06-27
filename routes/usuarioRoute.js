import express from 'express';

const router = express.Router();

//Routing

router.route('/')
    .get((req, res) =>{
        res.send('Hello World');
    })
    .post((req, res) => {
        res.json({msg: 'Respuesta de Tipo Post'});
    })


router.get('/home', (req, res) => {
    res.send('INICIO');
})

router.get('/nosotros', (req, res) => {
    res.json({msg: 'Pestaña nosotros'});
})



export default router;