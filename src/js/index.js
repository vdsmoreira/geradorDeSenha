//iniciando com 16 para rodar o for sem a variavel ser considerada null
let passwordLength = 16

const inputElement = document.querySelector("#password")

function generatePassword () {

  //logica para gerar a senha
  const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"

  let password = " "
  
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1)
  }

  //inputando a senha na caixa de texto 
  inputElement.value = password
  console.log(password)
  
}

//criando o evento de variacao da senha pelo range
const passwordLengthElement = document.querySelector("#password-length")
passwordLengthElement.addEventListener("input", function() {
  passwordLength = passwordLengthElement.value  
  generatePassword ()
})

//criando o evento de copiar a senha pelo botao e icone

function copy() {
  navigator.clipboard.writeText(inputElement.value)
}

document.querySelector("#copy").addEventListener("click", copy)
document.querySelector("#copy-icon").addEventListener("click", copy)

generatePassword()

