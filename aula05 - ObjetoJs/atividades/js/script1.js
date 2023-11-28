class Carro{
    constructor(valMarca, valModelo, valAno, valCor, valVelocidadeMax){
        this.marca = valMarca
        this.modelo = valModelo
        this.ano = valAno
        this.cor = valCor
        this.velocidadeMax = valVelocidadeMax
        this.velocidadeAtual = 0
    }
    acelerar(velAcelerada){
        if(velAcelerada <= 0){
            console.log("Operação não permitida! Acelere acima de 0 ")
        }else if(velAcelerada > velocidadeMax){
            console.log("Operação não permitida! Velocidade máxima atingida")
        }else{
            velocidadAtual +=  velAcelerada
            return `Velocidade atual é de : ${this.velocidadeAtual}`
        }

    }
}

var uno = new Carro("Fiat", "Uno mille", 1998, "branco", 190)

// HTML
var btnCarro = document.getElementById("btnCarro")
var resultado = document.getElementById("resultado")

btnCarro.addEventListener('click', criarCarro )

function criarCarro(){
    let marcaInput = document.querySelector("#marca").value
    let modeloInput = document.querySelector("#modelo").value
    let anoInput = document.querySelector("#ano").value
    let corInput = document.querySelector("#cor").value
    let velocidadeMaxInput = document.querySelector("#velocidadeMax").value

    var carro = new Carro(marcaInput, modeloInput, anoInput, corInput, velocidadeMaxInput)
    console.log(carro)
   
    resultado.innerHTML = `<div class="carroResultado">
    <h3>${carro.modelo} </h3>
    <p> ${carro.marca} </p>
    <span style="color : ${carro.cor};">COR ESCOLHIDA</span>
    
    </div>`
}