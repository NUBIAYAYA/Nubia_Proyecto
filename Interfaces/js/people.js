function registrar() {
    const DocumentType = document.getElementById("DocumentType").value;
    const DocumentNumber = document.getElementById("DocumentNumber").value;
    const Name = document.getElementById("Name").value;
    const Surnames = document.getElementById("Surnames").value;
    const Email = document.getElementById("Email").value;
    const Phone = document.getElementById("Phone").value;
    const Birthdate= document.getElementById("Birthdate").value;
    const dataUsuario = {
        DocumentType :DocumentType,
        DocumentNumber : DocumentNumber,
        Name : Name,
        Surnames : Surnames,
        Email : Email,
        Phone: Phone,
        Birthdate : Birthdate,
 };
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    usuarios.push(dataUsuario);
  
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
    alert("datos registrados correctamente");
  }