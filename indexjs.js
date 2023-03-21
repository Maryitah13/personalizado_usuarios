const loginuser = document.querySelector('#singin')
loginuser.addEventListener('click', Login)



function Login() {

    let usuarios = [
        {
            nome: "lian@gmail.com",
            senha: "12345"
        },
        {
            nome: "olive@gmail.com",
            senha: "12345"
        },
        {
            nome: "adam@gmail.com",
            senha: "12345"
        },
        {
            nome: "elly@gmail.com",
            senha: "12345"
        },
        {
            nome: "ally@gmail.com",
            senha: "12345"
        },
        {
            nome: "welyda@gmail.com",
            senha: "12345"
        },
        {
            nome: "larissa@gmail.com",
            senha: "12345"
        },
        {
            nome: "analaura@gmail.com",
            senha: "12345"
        },
        {
            nome: "maiza@gmail.com",
            senha: "12345"
        },
        {
            nome: "maria@gmail.com",
            senha: "12345"
        },
        {
            nome: "lucas@gmail.com",
            senha: "12345"
        },
        {
            nome: "peter@gmail.com",
            senha: "12345"
        },
        {
            nome: "felix@gmail.com",
            senha: "12345"
        },
        {
            nome: "herry@gmail.com",
            senha: "12345"
        },
        {
            nome: "admin",
            senha: "admin"
        }
    ]


    let user = (document.querySelector('input#user').value)
    let senhas = (document.querySelector('input#senha').value)
    let controle = 0



    for (let index = 0; index < usuarios.length; index++) {

        if (usuarios[index].nome == user && usuarios[index].senha == senhas) {

            window.location.href = "./pag2.html"
            controle = 1

            localStorage.setItem("usuariologado", usuarios[index].nome)
            index = usuarios.length

        }


    }

    if (controle == 0) {

        alert("Usuário ou senha incorretos! Tente novemente.")
    }
}


