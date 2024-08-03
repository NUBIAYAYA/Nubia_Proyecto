function registrar() {
    const Sports = document.getElementById("Sports").value;
    const dataSports = {
      Sports:Sports,
    };
    let usuario = JSON.parse(localStorage.getItem("usuario")) || [];
  
    usuario.push(dataSports);
  
    localStorage.setItem("usuario", JSON.stringify(usuario));
  
    alert("datos registrados correctamente");
  }