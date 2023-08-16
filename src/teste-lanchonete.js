const chai = require('chai');
const expect = chai.expect;
import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

describe('Testes para o caixa da lanchonete', function () {
  const caixa = new CaixaDaLanchonete();

  it('Calcula o valor total da compra corretamente', function () {
    const itensDoCarrinho = [
      { codigo: 'cafe' },
      { codigo: 'chantily', extra: 'cafe' },
      { codigo: 'combo1' }
    ];

    const metodoDePagamento = 'dinheiro';

    const valorTotal = caixa.calcularValorDaCompra(metodoDePagamento, itensDoCarrinho);
    expect(valorTotal).to.equal('12.18');
  });

  it('Retorna mensagem de forma de pagamento inválida', function () {
    const itensDoCarrinho = [
      { codigo: 'cafe' },
      { codigo: 'suco' }
    ];

    const metodoDePagamento = 'paypal';

    const resultado = caixa.calcularValorDaCompra(metodoDePagamento, itensDoCarrinho);
    expect(resultado).to.equal('Forma de pagamento inválida!');
  });

  it('Retorna mensagem de item inválido', function () {
    const itensDoCarrinho = [
      { codigo: 'cafe' },
      { codigo: 'item_invalido' }
    ];

    const metodoDePagamento = 'debito';

    const resultado = caixa.calcularValorDaCompra(metodoDePagamento, itensDoCarrinho);
    expect(resultado).to.equal('Item inválido!');
  });

});