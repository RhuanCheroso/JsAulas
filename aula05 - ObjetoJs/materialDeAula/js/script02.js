class Produto {
    constructor (valorId, valorNome, valorMarca, valorPreco, valorQtEstoque, valorqtVendida){
        this.id = valorId
        this.nome = valorNome
        this.Marca = valorMarca
        this.preco = valorPreco
        this.qtEstoque = valorQtEstoque
        this.qtVendida = valorQtEstoque
    }


    id
    nome
    marca
    preco
    qtEstoque
    qtVendida
    venda(quantidade){
        this.qtEstoque = this.qtEstoque - quantidade
        this.qtVendida = this.qtVendida + quantidade
        return "Foram vendidos" +quantidade+ " do produto" +this.nome 
    }
}

var produto1 = new Produto(1, "Chocolate" , "Nestle" ,10,200,0)
var produto2 = new Produto(2, "Refri" , "CocaCola", 4,180,0 )