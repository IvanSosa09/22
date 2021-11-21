const socket = io();

let form = document.querySelector("#form").addEventListener("submit",send);

function send(e) {
    let obj = {
        id:document.querySelector("#email").value,
        nombre: document.querySelector("#nombre").value,
        apellido: document.querySelector("#apellido").value,
        edad: document.querySelector("#edad").value,
        alias: document.querySelector("#alias").value,
        avatar: document.querySelector("#avatar").value,
        mensaje: document.querySelector("#mensaje").value
    }
    socket.emit('nuevodato',obj)
    
}


socket.on('mensaje',(data)=>{
    render(data)
    console.log(data)
})

function render(data){
    let html = data.map(info => {
        return `
            <p><img src="${info.avatar}"><strong> ${info.nombre}</strong> : ${info.mensaje}</p>
        `
    }).join(" ")
    document.querySelector("#chat").innerHTML = html
}

