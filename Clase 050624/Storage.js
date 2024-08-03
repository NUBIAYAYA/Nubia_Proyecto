console.log('Storage')
const user= localStorage.getItem('Usuario')

document.getElementById('titulo').innerHTML= 'Bienvenido ${user}'