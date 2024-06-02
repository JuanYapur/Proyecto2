class User {
    constructor (name, lastname, email, username,password,rpassword){
        this.name=name,
        this.lastname=lastname,
        this.email=email,
        this.username=username,
        this.password=password,
        this.rpassword=rpassword
    }
}

const btnsubmit = document.getElementById('submitbtn')
const validationLabelName = document.getElementById('validationLabelName')

const user = new User();

const regexName = /^[A-Za-z\s]{3,41}$/;
const regexUsername = /^[A-Za-z\s]{2,50}$/;
const regexEmail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/;
const regexPass = /^(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;

const validationfields = () => {
    const isnamevalid = regexName.test(user.name);
    const islastnamevalid= regexName.test(user.lastname);
    const isemailvalid= regexEmail.test(user.email);
    const isusernamevalid= regexUsername.test(user.username);
    const ispasswordvalid= regexPass.test(user.password);
    const isrpasswordvalid= regexPass.test(user.rpassword);
    const totalvalidation = isnamevalid && islastnamevalid && isemailvalid && isusernamevalid && ispasswordvalid && isrpasswordvalid

    return totalvalidation
}

const handleChange = (event) => {
    switch (event.target.id){
        case 'name':
            if (!regexName.test(event.target.value)){
            validationLabelName.className = 'text-danger d-inline';
            user.name = '';
            event.target.style.border = '2px solid red';    
            }
            else {
            validationLabelName.className ='d-none';
            event.target.style.border = '2px solid green';   
            user.name = event.target.value.toLowerCase(); 
            }
            break;
            case 'lastname':
            if (!regexName.test(event.target.value)) {
            alert("El nombre debe contener entre 3 y 41 caracteres");
            event.target.style.border = '2px solid red'
            user.lastname = '';
            }
            else {
            event.target.style.border = '2px solid green'
            user.lastname = event.target.value.toLowerCase();
            }
            break;
        case 'email':
            if (!regexEmail.test(event.target.value)) {
            alert("Debes ingresar un email valido")
            event.target.style.border = '2px solid red'
            user.email = ''
            } else {
            event.target.style.border = '2px solid green'
            user.email = event.target.value.toLowerCase()
            }
            break;
        case 'username':
            if (!regexUsername.test(event.target.value)) {
            alert("El nombre de usuario no es valido")
            event.target.style.border = '2px solid red'
            user.username = ''
            } else {
            event.target.style.border = '2px solid green'
            user.username = event.target.value.toLowerCase()
            }
            break;
        case 'password':
            if (!regexPass.test(event.target.value)) {
            alert("La contraseña debe tener un minimo de 8 caracteres, una mayuscula, una minuscula y un caracter especial")
            event.target.style.border = '2px solid red'
            user.password = ''
            } else {
            event.target.style.border = '2px solid green'
            user.password = event.target.value
            }
            break;           
        case 'rpassword':
            if (user.password !== event.target.value) {
            alert("Las contraseñas deben coincidir")
            event.target.style.border = '2px solid red'
            user.rpassword = ''
            } else {
            event.target.style.border = '2px solid green'
            user.rpassword = event.target.value
            }
            break;  
    }  
    const validation = validationfields();
    
    if (validation){
        btnsubmit.removeAttribute('disabled')
    } else {
        btnsubmit.setAttribute('disabled','true')    
    }  
}

const handleSubmit = (event) => {
    event.preventDefault();
    alert("Se registro exitosamente")
    const saveUsers = JSON.parse(localStorage.getItem('users'));
    if (saveUsers) {
      saveUsers.push(user);
      const jsonUsers = JSON.stringify(saveUsers)
      localStorage.setItem('users', jsonUsers)
      window.location.href = 'http://127.0.0.1:5500/pages/iniciosesion.html' //me redirecciona con una funcion del BOM directamente al login 
    } else {
      let users = [];
      users.push(user);
      const jsonUsers = JSON.stringify(users)
      localStorage.setItem('users', jsonUsers)
      window.location.href = 'http://127.0.0.1:5500/pages/iniciosesion.html' //me redirecciona con una funcion del BOM directamente al login 
    }    

}