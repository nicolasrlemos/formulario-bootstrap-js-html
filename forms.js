const form = document.getElementById('formulario')
form.addEventListener("submit", function (event) {
  event.preventDefault()
  adicionarTextArea()
})

function Conta(nome, cpf, idade, telefone, dataNascimento, email, senha) {
  this.nome = nome
  this.cpf = cpf
  this.idade = idade
  this.telefone = telefone
  this.dataNascimento = dataNascimento
  this.email = email
  this.senha = senha
}

let btnApagar = document.getElementById('botaoApagar')
btnApagar.onclick = apagar

function apagar() {
  const input = document.querySelectorAll('input')
  input.forEach(input => {
    input.value = ''
  })
  var pai = document.getElementById('corpo')
  var filho = document.getElementById('textoArea')

  pai.removeChild(filho)
}

var password = document.getElementById("senha"),
  confirm_password = document.getElementById("confirmaSenha");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("As senhas não conferem!");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function adicionarTextArea() {
  var nome = document.getElementById("nome")
  var cpf = document.getElementById("cpf")
  var idade = document.getElementById("idade")
  var telefone = document.getElementById("telefone")
  var dataNascimento = document.getElementById("dataNascimento")
  var email = document.getElementById("email")
  var senha = document.getElementById("senha")

  const conta = new Conta(nome.value, cpf.value, idade.value, telefone.value, dataNascimento.value, email.value, senha.value)


  var corpo = document.getElementById('centrao')
  var textArea = document.createElement("textarea")
  const objJson = JSON.stringify(conta)
  textArea.setAttribute('readonly', 'true')
  textArea.setAttribute('cols', '30')
  textArea.setAttribute('rows', '10')
  textArea.setAttribute('id', 'textoArea')
  textArea.classList.add('texto-area')
  textArea.innerHTML = objJson
  corpo.appendChild(textArea)
}