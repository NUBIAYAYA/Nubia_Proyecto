function registrar() {
    const cargo = document.getElementById("cargo").value;
    const dataCargo = {
      cargo: cargo,
    };
    let usuario = JSON.parse(localStorage.getItem("usuario")) || [];
  
    usuario.push(dataCargo);
  
    localStorage.setItem("usuario", JSON.stringify(usuario));
  
    alert("datos registrados correctamente");
  }

 