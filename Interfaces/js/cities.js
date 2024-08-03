function registrar() {
    const Cities = document.getElementById("Cities").value;
    const dataCities = {
      Cities:Cities,
    };
    let usuario = JSON.parse(localStorage.getItem("usuario")) || [];
  
    usuario.push(dataCities);
  
    localStorage.setItem("usuario", JSON.stringify(usuario));
  
    alert("datos registrados correctamente");
  }