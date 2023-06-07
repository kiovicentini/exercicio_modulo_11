/// <reference types="cypress" />

describe ('Página de produtos', ()=>{

    const { faker } = require('@faker-js/faker');

    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Selecionar e comprar produto da lista', () => {
        let numeroFaker = faker.number.int({max:10,min:2})


        cy.get('[class="product-block grid"]')
          .contains('Atlas Fitness Tank')
          .click()
        cy.get('.button-variable-item-XL').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text')
          .clear()
          .type(numeroFaker)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', numeroFaker)
        cy.get('.woocommerce-message')
          .should('contain', numeroFaker, ' × “Atlas Fitness Tank” foram adicionados no seu carrinho.')
    });

    

})