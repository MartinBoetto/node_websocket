const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controllers');

class Server {

    constructor(){
        console.log(process.env.PORT);
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        //DEFICION DE RUTAS 
        //this.usuariosPath= '/api/usuarios';
        

        //Middleware
        this.middleware();

        //rutas de mi app
        this.routes();

        //Sockets
        this.sockets();

            
    }

    
    middleware(){
        
        this.app.use( cors());
        //Directorio publico
        this.app.use( express.static('public'));
       

        
    }


    routes(){
        //armo la ruta para api/usuarios q apute al user.js
        //this.app.use(this.authPath, require('../routes/auth.js'));
              
    }

    sockets(){
        this.io.on('connection', socketController);
    }

    listen(){
        this.server.listen(this.port, ()=>{
            console.log('Aplicacion corriendo en puerto:' + this.port);
        });
    }

};

module.exports=Server;