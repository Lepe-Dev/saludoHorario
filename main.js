window.onload = () => {
    mostrarSaludo()
}

function mostrarSaludo() {
    var fecha = new Date();
    var hora = fecha.getHours();
    if(hora >= 6 && hora < 12){
        var texto = "Buenos Días";
        var complemento = "Es hora de un desayuno rico y nutritivo"
        var imagen = "img/breakfast.png";
    }
    if (hora >= 12 && hora < 18) {
        var texto = "Buenas Tardes";
        var complemento = "Es hora de un buen almuerzo para mantener las energías"
        var imagen = "img/lunch.png";
    }
    if (hora >= 18 && hora < 24 || hora >= 0 && hora < 6) {
        var texto = "Buenas Noches";
        var complemento = "Por fin es hora de descansar, mañana será un nuevo día"
        var imagen = "img/bed.png";
        
    }
    document.images["tiempo"].src = imagen;
    document.getElementById('txtsaludo').innerHTML = texto;
    document.getElementById('txtcomplemento').innerHTML = complemento;
}