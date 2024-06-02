const email = document.getElementById('initemail');
const password = document.getElementById('initpass');


const handleSubmit = (event) => {
    event.preventDefault()
    const arrayusers = JSON.parse(localStorage.getItem('users'));
    const founduser = arrayusers.find(user => user.email === email.value);

    if(founduser.password === password.value){
        alert ('Ingresaste con exito');
        localStorage.setItem('authUser', JSON.stringify(founduser))
        window.location.href='http://127.0.0.1:5500/pages/home.html'
    } else{
        alert('las credenciasles ingresadas no son validas')
    }
}