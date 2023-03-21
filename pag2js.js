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





// funcao listar usuarios
const listar = document.querySelector('#listaruser')
listar.addEventListener('click', listaruser)

// funcao limpar usuarios
const limpar = document.querySelector('#limparuser')
limpar.addEventListener('click', limparuser)

// funcao aparecer os usuarios que podem ser deletados
const deletar = document.querySelector('#deleteuser')
deletar.addEventListener('click', deleteuser)

// funcao adicionar usuario 
const criauser = document.querySelector('#criaruser')
criauser.addEventListener('click', criarusuario1)

// funcao atualizar dados  
const atualizardados = document.querySelector('#atualdados')
atualizardados.addEventListener('click', atualdados)

// funcao testar usuarios
const testaruser = document.querySelector('#testeuser')
testaruser.addEventListener('click', testeuser)

// funcao de logout
const sair = document.querySelector('#logout')
sair.addEventListener('click', logout)



let nomepag2 = localStorage.getItem("usuariologado")


if (nomepag2 != undefined) {

    let h2nome = document.querySelector('h2#nome')
    h2nome.innerHTML += `${nomepag2}`
    window.addEventListener('beforeunload', function (e) {
        localStorage.removeItem('usuariologado')
    })
}


function listaruser() {

    let res = document.querySelector('div.res1')


    res.innerHTML = `<h1 class="size-titulo">Listar usuários</h1><br>`
    for (let i = 0; i < usuarios.length; i++)

        res.innerHTML += `E-mail: ${usuarios[i].nome} -- (Senha: ${usuarios[i].senha})<br><br>`


}


function limparuser() {

    let res = document.querySelector(`div.res1`)
    res.innerHTML = ``

}


function deleteuser() {

    let res1 = document.querySelector('div.res1')
    res1.innerHTML = ""

    res1.innerHTML += `<h1 class="size-titulo">Deletar usuário</h1><br>`
    for (let index = 0; index < usuarios.length; index++) {

        res1.innerHTML += `<div class=res2>
        <input type="checkbox" id="${index}" class="inputdeletar" value="${usuarios[index].nome}">
        <label for="usuarios${index}"> - ${usuarios[index].nome} <br><br></label>
        </div>`

    }
    res1.innerHTML += `<input type="button" value="Deletar" class="btn" id=botaodeletar>`

    //botao: funcao deletar um ou varios usuarios
    const botaodeletar = document.querySelector('#botaodeletar')
    botaodeletar.addEventListener('click', deletar2)
}


function deletar2() {
    let userdeletado = [""]
    for (let index = 0; index < usuarios.length; index++) {
        let checkbox = document.getElementById(`${index}`)

        if (checkbox.checked == true) {
            userdeletado[index] = 1
        }
        else {
            userdeletado[index] = 0
        }

    }

    for (let index = userdeletado.length - 1; index >= 0; index--) {
        if (userdeletado[index] == 1) {
            usuarios.splice(index, 1)
        }
    }
    listaruser()
}


function criarusuario1() {
    let res1 = document.querySelector('div.res1')
    res1.innerHTML = ""
    res1.innerHTML = `<div>
                        <h1 class="size-titulo">Criar usuário</h1><br>
                        <div class="textfield">
                        <label for="usuario">Usuário</label>
                        <input type="text" name="usuario" id="inputuser" placeholder="Usuário">
                      </div>
                      <div class="textfield">
                        <label for="senha">Senha</label>
                        <input type="password" name="senha" id="inputsenha" placeholder="Senha">
                      </div>
                      <div class="textfield">
                        <label for="senha">Confirmar senha</label>
                        <input type="password" name="senha" id="confirmasenha" placeholder="Confirmar senha">
                      </div>
                    <input type="button" class="btn" value="Adicionar" id="criadoruser"> 
                    </div>`




    //testando e gerenciando se o botão adicionar foi clicado
    const inputcriar2 = document.querySelector('#criadoruser')
    inputcriar2.addEventListener("click", criaruser2)
}


function criaruser2() {
    let res1 = ""
    let newuser = {
        nome: document.querySelector('input#inputuser').value,
        senha: document.querySelector('input#inputsenha').value

    }

    let senhaconfir = document.querySelector('input#confirmasenha').value

    let repetir = 0
    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].nome == newuser.nome) {
            repetir = 1
        }
    }
    if (repetir == 0) {
        if (senhaconfir != newuser.senha) {
            alert(`Senhas diferentes, digite novamente!`)
        }
        else {

            usuarios.push(newuser) // push: adiciona valores na ultima posição do vetor
            res1.innerHTML = ""
            res1.innerHTML += `Adicionar usuário<br><br>`
            listaruser()
        }
    }
    else {
        //(confirmasenha == senha.value)
        alert(`Usuário já existe no cadastro, digite outro nome`)
        criarusuario1()
    }
}


function atualdados() {
    let res1 = document.querySelector('div.res1')
    res1.innerHTML = ""
    res1.innerHTML = `<div>
                        <h1 class="size-titulo">Atualizar usuário</h1><br>
                    <div class="textfield">
                        <label for="usuario">Usuário atual</label>
                        <input type="text" name="usuario" id="atualuser" placeholder="Usuário atual">
                    </div>
                        <div class="textfield">
                        <label for="senha">Senha atual</label>
                        <input type="password" name="senha" id="atualsenha" placeholder="Senha atual">
                    </div>
                    <div class="textfield">
                        <label for="usuario">Novo usuário</label>
                        <input type="text" name="novo usuário" id="novousuario" placeholder="Novo usuário">
                    </div>
                        <div class="textfield">
                        <label for="senha">Nova senha</label>
                        <input type="password" name="senha" id="novasenha" placeholder="Nova senha">
                    </div>
                    </div>
                        <div class="textfield">
                        <label for="senha">Confirmar nova senha</label>
                        <input type="password" name="senha" id="confnovasenha" placeholder="Confirmar nova senha">
                    </div>
                    <input type="button" class="btn" value="Atualizar" id="atualizardados2">
                    </div> `


    //testando e gerenciando se o botão atualizar quando for clicado
    const atualidados2 = document.querySelector('#atualizardados2')
    atualidados2.addEventListener("click", atualizardados2)
}


function atualizardados2() {

    let useratual = {
        nome: document.querySelector('input#atualuser').value,
        senha: document.querySelector('input#atualsenha').value

    }
    let useratualizado = {

        nome: document.querySelector('input#novousuario').value,
        senha: document.querySelector('input#novasenha').value

    }

    let confatsenha = document.querySelector('#confnovasenha').value



    let indice = 0
    let errorusernc = 1
    let errorpassuser = 1
    let repetida = 0
    let errorpassconf = 1

    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].nome == useratual.nome) {
            errorusernc = 0

            if (usuarios[index].senha == useratual.senha) {
                errorpassuser = 0

                if (useratualizado.senha == confatsenha) {
                    errorpassconf = 0
                    indice = index

                }
            }
        }

    }


    if (errorusernc == 0 && errorpassuser == 0 && errorpassconf == 0) {

        for (let index = 0; index < usuarios.length; index++) {

            if ((useratualizado.nome != useratual.nome) && (useratualizado.nome == usuarios[index].nome)) {
                repetida = 1
                index = usuarios.length
                

            }
        }
    }



    if (repetida == 0 && errorusernc == 0 && errorpassuser == 0 && errorpassconf == 0) {


        let res1 = document.querySelector('div.res1')
        res1.innerHTML = ""

        usuarios[indice].nome = useratualizado.nome
        usuarios[indice].senha = useratualizado.senha
        alert("Usuário atualizado com sucesso!")
        listaruser()




    } else {
        if (repetida == 1) {
            alert("Usuario ja existe no cadastrado, tente novamente!")

        }
        if (errorusernc == 1) {
            alert("Usuario não existe no cadastrado, tente novamente!")

        }
        else if (errorpassuser == 1) {
            alert("Senha não existe no cadastro, tente novamente!")

        }
        else if (errorpassconf == 1) {
            alert(`Senhas diferentes, digite novamente!`)

        }
    }




}


function testeuser() {
    let res1 = document.querySelector('div.res1')
    res1.innerHTML = ""
    res1.innerHTML = `<div>
                        <h1 class="size-titulo">Testar usuário</h1><br>
                        <div class="textfield">
                        <label for="usuario">Usuário</label>
                        <input type="text" name="usuario" id="userteste" placeholder="Usuário">
                    </div>
                    <div class="textfield">
                        <label for="senha">Senha</label>
                        <input type="password" name="senha" id="testesenha" placeholder="Senha">
                    </div>
                    <input type="button" class="btn" value="Testar usuário" id="testeuser2">
                    </div> `


    //testando e gerenciando se o botão testar quando for clicado
    const testaruser2 = document.querySelector('#testeuser2')
    testaruser2.addEventListener("click", testeuser2)
}


function testeuser2() {
    let email = document.querySelector('#userteste').value
    let password = document.querySelector('#testesenha').value
    let controle = 0

    for (let index = 0; index < usuarios.length; index++) {

        if (usuarios[index].nome == email && usuarios[index].senha == password) {

            alert("O usuário e a senha estão corretas!")
            controle = 1
            index = usuarios.length
            limparuser()

        }


    }

    if (controle == 0) {

        alert("O usuário ou a senha estão INCORRETOS! Tente novamente.")
    }
}


function logout() {
    window.location.href = "./index.html"
    localStorage.removeItem("usuariologado")
}