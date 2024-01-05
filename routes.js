const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const addressController = require('./controllers/addressController');


route.get('/', homeController.index);

route.get('/users', userController.exibirUsers);

route.get('/users/:id', userController.userInfo);
route.get('/users/apagar/:id', userController.apagarUser);
route.get('/users/editarUser/:id', userController.atualizarDados);


route.post('/users/signup', userController.cadastrar);
route.post('/users/update/:id', userController.update);

route.get('/address/remove/:id', addressController.remover);
route.post('/address/create', addressController.cadastrar);

module.exports = route;