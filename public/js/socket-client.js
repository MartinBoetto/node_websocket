//Referencias del html
const lblOnline = document.querySelector('#lblOnline');
const lblOffline =document.querySelector('#lblOffline');
const txtMensaje =document.querySelector('#txtMensaje');
const btnEnviar =document.querySelector('#btnEnviar');


const socket= io();

// on es para escuchar un evento q viene desde el server
socket.on('connect', ()=>{
    console.log('Conectado');
    lblOffline.style.display='none';
    lblOnline.style.display='';
})

socket.on('disconnect', ()=>{
    console.log('Desconectado del servidor');
    lblOffline.style.display='';
    lblOnline.style.display='none';
})

socket.on('enviar-mensaje', (payload)=>{
    console.log('Mensaje recibido desde:',payload);
    
})



btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value;
    const payload ={
        mensaje,
        id:'dsfsdewrw34343ere3',
        date:new Date().getTime()
    }
    console.log(mensaje);
    //emit envia el mensaje al servidor, puedo agregar un 3 parametro q es una funciona de callback
    //para recibir la respuesta del server sobre el procesamienteo del mensaje q envio
    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('Recibo respuesta del Server:', id);
    });
})