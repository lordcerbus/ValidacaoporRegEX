const html = {
    get(element){
        return document.querySelector(element)
    }
} 

const regex = { 
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/,
    name: /[a-zA-Z\u00C0-\u00FF ]+/i,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    number:/^[0-9]{8}$/
}

const eventosFormulario = {
    name(){
            let name = html.get('#name').value
            if(!regex.name.test(name)){
                html.get('#pname').innerHTML ='Entrada inválida, minimo 5 caracteres e apenas letras Maiusculas e Minusculas'
                html.get('#pname').style.color = 'red'
                html.get('#name').style.border = '0.1rem solid red'
            }else{
                html.get('#pname').innerHTML =''
                html.get('#name').style.border = '0.1rem solid black'
            }       
},
    email(){ 
        let email = html.get('#email').value
        if(!regex.email.test(email)){
            html.get('#pemail').innerHTML ='Formato de email inválido'
            html.get('#pemail').style.color = 'red'
            html.get('#email').style.border = '0.1rem solid red'
        } else{
            html.get('#pemail').innerHTML =''
            html.get('#email').style.border = '0.1rem solid black'
        }    
},
    password(){
        let password = html.get('#password').value
    if(!regex.password.test(password)){
        html.get('#ppassword').innerHTML ='Formato de senha inválido'
        html.get('#ppassword').style.color = 'red'
        html.get('#password').style.border = '0.1rem solid red'
    } else{
        html.get('#ppassword').innerHTML =''
        html.get('#password').style.border = '0.1rem solid black'
    }
},
    number(){
        let number = html.get('#number').value
    if(!regex.number.test(number)){
        html.get('#pnumber').innerHTML ='Formato de telefone inválido'
        html.get('#pnumber').style.color = 'red'
        html.get('#number').style.border = '0.1rem solid red'
    } else{
        html.get('#pnumber').innerHTML =''
        html.get('#number').style.border = '0.1rem solid black'
    }
},
    mostrar(){
        if(html.get('#mostrar').checked){
        html.get('#password').type = 'text'
    }else{
        html.get('#password').type = 'password'
}
    },
    Eventlisteners(){
        html.get('#name').addEventListener('input',this.name)
        html.get('#email').addEventListener('input',this.email)
        html.get('#password').addEventListener('input',this.password)
        html.get('#number').addEventListener('input',this.number)
        html.get('#mostrar').addEventListener('click',this.mostrar)
    }
}

function update(){  

eventosFormulario.Eventlisteners()

}

update()