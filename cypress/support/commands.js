

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('VisualizarCarrinho', () => {
    cy.get('.woocommerce-message > .button').click()
})

Cypress.Commands.add('FinalizarCompra', () => {
    cy.get('.checkout-button').click()
})