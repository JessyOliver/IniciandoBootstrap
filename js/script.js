/*criando variaveis */

let nome = window.document.getElementById('nome')
let cidade = document.querySelector('#cidade')
let estado = document.querySelector('#estado')
let cep = document.querySelector('#cep')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let map = document.querySelector('#map')

//validar  campos
let nomeOk
let cidadeOk
let estadoOk
let cepOk
let emailOk
let assuntoOk

//função nome

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {

        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
        nomeOk = false

    } else {

        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true


    }

}



function validaCidade() {
    let txtCidade = document.querySelector('#txtCidade')
    if (cidade.value.length < 3) {

        txtCidade.innerHTML = 'Cidade inválido'
        txtCidade.style.color = 'red'
        cidadeOk = false

    } else {

        txtCidade.innerHTML = 'Cidade Válido'
        txtCidade.style.color = 'green'
        cidadeOk = true


    }

}

function validaEstado() {
    let txtEstado = document.querySelector('#txtEstado')
    if (estado.value.length < 3) {

        txtEstado.innerHTML = 'Estado inválido'
        txtEstado.style.color = 'red'
        estadoOk = false

    } else {

        txtEstado.innerHTML = 'Estado Válido'
        txtEstado.style.color = 'green'
        estadoOk = true


    }

}

function validaCep() {
    let txtCep = document.querySelector('#txtCep')
    if (cep.value.length < 8) {

        txtCep.innerHTML = 'Cep inválido'
        txtCep.style.color = 'red'
        cepOk = false

    } else {

        txtCep.innerHTML = 'Cep Válido'
        txtCep.style.color = 'green'
        cepOk = true


    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {

        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    } else {

        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true

    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {

        txtAssunto.innerHTML = 'Texto com mais de 100 caracteres, diminua o caracter'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = false

    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }

}

function enviar() {

    if (nomeOk == true && cidadeOk == true && estadoOk == true && cepOk == true && emailOk == true && assuntoOk == true) {

        alert('Formulario enviado com sucesso!')

    } else {
        alert('Preencha o formulário corretamente antes de enviar...')
    }

}

function mapZoom() {

    map.style.width = '600px'
    map.style.height = '500px'
}

function mapNormal() {
    map.style.width = '400px'
    map.style.height = '300px'


}