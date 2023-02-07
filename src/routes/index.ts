import express from 'express';
const router  = express.Router();


import empresasRouter from './empresas/empresas';
import UsuariossRouter from './Usuarios/usuarios';
// REST API
// Internet -> HTTP --> REST API -> DB
// SOAP XML wsdl 
// {} -> JSON
// [] -> JSON
// { llave : vslor }
// valor: texto, numerico,booleano, array [valores], obejto {llave : valor} 
// REST stateless, resource unique representation 
// CRUD Create, Read, Update, Delete
//     POST, GET, PUT, DELETE -> HTTP
router.get('/', (_req, res) => {
  res.json({msg:'Hello World!'});
 }); 
 
router.get('/version', (_req, res)=>{ 
  const version: string="1.0.0";
  const jsonResp = {"name":"FODA Be", "Version" : version}; 

//string, number, foda, boolean, types, interfaces, classes, enumerators
res.json (jsonResp);
});

router.use ('/empresas', empresasRouter)
router.use ('/Usuarios', UsuariossRouter)

//router.get  router.post  router.purt  router.delete  router.use
export default router;

