//var Cliente1Nome = "Leonardo"
//var Cliente1Cpf = 99999
//var Cliente1Endereco = "Taguatinga bloco E"
//var Cliente1Tel = "619999-9999"
//var Cliente1Conta = "001"
//var Cliente1saldo ="0"

//var Cliente1 = ["Cliente1Nome = Leonardo", "cliente1saldo = 0"]
//var cliente1 = ["cliente2Nome = Alice" , "cliente2saldo = 0"]

class Cliente{
    nome
    cpf
    endereco
    telefone
    conta
    saldo
    // AÇÃO = FUNÇÃO
    verificaSaldo(){
        return "O saldo da conta é de R$ " +this.saldo
    }
    sacar(valor){
        if(this.saldo >= valor)
        //this.atributo = seleciona um atributo do
        this.saldo = saldo - valor
        return "Você sacou : R$" = valor+" "+this.verificaSaldo()       
    } else {
        return "Operação não autorizada! Você está quebrado :("

    }


    depositar(valor){
        if(valor <= 0 ){
        return "Operação mão autorizada! Minimo valor de deposito R$ 0.01"
        }else{
        this.saldo = this.saldo + valor
        return "Depósito efetuado! R$" +valor
        }
    }
}

var cliente1 = new Cliente()
var cliente2 = new Cliente()
cliente1.nome = "Leonardo"
cliente1.cpf = 9999999
cliente1.endereco = "Taguatinga  bloco E rua 30"
cliente1.telefone = 619999-9999
cliente1.conta ="001"
cliente1.saldo = 0
console.log(cliente1)