

class endTwoEnd {

    visitUrl(){
        cy.visit("minha-conta")
        cy.fixture("perfil").then(login => {
            cy.login(login.usuario, login.senha)
        })
    }

    buscarProduto(nomeProduto) {
        cy.get('[name=s]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }
    
    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get(`.button-variable-item-${tamanho}`).click()
        cy.get('.button-variable-item-'+cor).click()
        cy.get('.input-text').clear()
        cy.get('.input-text').type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }
    
    order(nomeRua, cidade, cep, telefone) {
        
        cy.get('#billing_city').clear()
        cy.get('#billing_city').type(nomeRua)
        cy.get('#billing_city').clear()
        cy.get('#billing_city').type(cidade)
        cy.get('#billing_postcode').clear()
        cy.get('#billing_postcode').type(cep)
        cy.get('#billing_phone').clear()
        cy.get('#billing_phone').type(telefone)

        cy.wait(2000)
        cy.get('#terms').check()

        cy.get('#place_order').click()
    }

}

export default new endTwoEnd()