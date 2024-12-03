/// <reference types="cypress" />

import endTwoEnd from "../support/page_objects/pedido"
import {generatedate} from '../support/utils.js'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      endTwoEnd.visitUrl()
  });
describe('Teste de ponta a ponta - finalizar compra com sucesso', () => {

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
      const { nomeRua, cidade, cep, telefone } = generatedate()

      cy.fixture("produtos").then(dados => {
          endTwoEnd.buscarProduto(dados[2].nomeProduto)
          endTwoEnd.addProdutoCarrinho(dados[2].tamanho, dados[2].cor, dados[2].quantidade)
      })

      cy.VisualizarCarrinho()
      cy.FinalizarCompra()
      endTwoEnd.order(nomeRua, cidade, cep, telefone)

      cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
      
    });


    })
})