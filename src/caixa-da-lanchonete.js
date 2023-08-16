class CaixaDaLanchonete {
    constructor() {
      this.cardapio = {
        cafe: { descricao: "Café", valor: 3.00 },
        chantily: { descricao: "Chantily (extra do Café)", valor: 1.50 },
        suco: { descricao: "Suco Natural", valor: 6.20 },
        sanduiche: { descricao: "Sanduíche", valor: 6.50 },
        queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.00 },
        salgado: { descricao: "Salgado", valor: 7.25 },
        combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.50 },
        combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.50 }
      };
  
      this.formasDePagamentoValidas = ["dinheiro", "debito", "credito"];
    }
  
    calcularValorDaCompra(metodoDePagamento, itens) {
      if (!this.formasDePagamentoValidas.includes(metodoDePagamento)) {
        return "Forma de pagamento inválida!";
      }
  
      if (itens.length === 0) {
        return "Não há itens no carrinho de compra!";
      }
  
      let valorTotal = 0;
  
      for (const item of itens) {
        if (!this.cardapio[item.codigo]) {
          return "Item inválido!";
        }
  
        valorTotal += this.cardapio[item.codigo].valor;
  
        if (item.extra && !this.cardapio[item.extra]) {
          return "Item extra não pode ser pedido sem o principal";
        }
        if (item.extra) {
          valorTotal += this.cardapio[item.extra].valor;
        }
      }
  
      if (metodoDePagamento === "dinheiro") {
        valorTotal *= 0.95;
      } else if (metodoDePagamento === "credito") {
        valorTotal *= 1.03;
      }
  
      return valorTotal.toFixed(2);
    }

}
  
  export { CaixaDaLanchonete };