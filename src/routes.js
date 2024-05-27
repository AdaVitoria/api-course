const {Router} = require('express');

const routes = new Router();

routes.get('/health', (req, res) => res.send({
    message: 'connected with sucess in port 3000!', 
}));

module.exports = routes;