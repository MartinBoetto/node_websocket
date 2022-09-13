
const socketController= (socket)=> {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', ()=>{
        console.log('Cliente desconectado', socket.id);
    });

    //callback es la funcion q esta eperando el cliente para procesar la info q le envio
    socket.on('enviar-mensaje', (payload, callback)=>{
        console.log('Mensaje recibido:',payload )
        socket.broadcast.emit('enviar-mensaje', payload);
        const id = 12355333;
        callback({
                    id,
                    fecha: new Date().getTime()
                });
    });

}

module.exports={
    socketController
}