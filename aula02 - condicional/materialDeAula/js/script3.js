const usuario = "ADM";
const senha = 1234;

var usuarioDigitado = prompt("Insira o usuario");
var senhaDigitada = prompt("Insira a senha");

if(usuarioDigitado == senha && usuarioDigitado == usuario){
    alert(`Seja bem vindo(a), ${usuario}`)
}else{
    alert("Usuario ou/e senha incorreto!Tente novamente")
    location.reload()
}

// if(usuarioDigitado != usuario || senhaDigitada != senha){
//    alert("deu erro!")
//}
