window.onload = () => {
    mostrarSaludo()
}

function getValuesByHour(hora) {
    if (hora >= 6 && hora < 12) {
      return { texto: "Buenos Días", complemento: "Es hora de un desayuno rico y nutritivo", imagen: "img/breakfast.png" };
    }
  
    if (hora >= 12 && hora < 18) {
      return { texto: "Buenas Tardes", complemento: "Es hora de un buen almuerzo para mantener las energías", imagen: "img/lunch.png" };
    }
  
    if (hora >= 18 && hora < 24 || hora >= 0 && hora < 6) {
      return { texto: "Buenas Noches", complemento: "Por fin es hora de descansar, mañana será un nuevo día", imagen: "img/bed.png" };
    }
  
    return { texto: "", complemento: "", imagen: "" };
  }
  
  function mostrarSaludo() {
    const fecha = new Date();
    const hora = fecha.getHours();
    const { texto, complemento, imagen } = getValuesByHour(hora);
  
    document.images["tiempo"].src = imagen;
    document.getElementById('txtsaludo').innerHTML = texto;
    document.getElementById('txtcomplemento').innerHTML = complemento;
  }