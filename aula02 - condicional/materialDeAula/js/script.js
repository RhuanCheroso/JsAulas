// OPERADORES LOGICOS
// > MAIOR QUE 
// < MENOR QUE
// == IGUAL (=ATRIBUI, == COMPARA VALOR, === COMPARA VALOR E TIPO)
// >= MAIOR OU IGUAL QUE
//<= MENOR OU IGUAL QUE
// != DIFERENTE

// ALTERNÁRIOS
// && E (EXIGE DUAS CONDIÇÕES VERDADEIRAS)
// || OU (EDIGE APENAS UMA VERDADEIRA)
// ! NÃO

// SE (CONDIÇÃO) ENTAO
// FAZ ALGO
// SENAO
// FAZ OUTRA COISA
// FIMSE

if(true){
    console.log("Sou verdadeiro :) ");
}else{
    console.log("SOu falso");
}

// MAIOR DE IDADE 
var idade = Number(prompt("Qual é a sua idade?"));

if(idade >= 18){
    alert("Seja bem vindo ao website!");
}else{
    alert("Você não tem autorização neste website!");
    location.href = "https://www.google.com.br/?hl=pt-BR";
}